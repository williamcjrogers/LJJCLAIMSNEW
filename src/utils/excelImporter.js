// Excel Data Import Utility for Claims Hierarchy
import { claimsHierarchy, ClaimsHierarchyUtils } from '../data/claimsHierarchy.js';

export class ExcelImporter {
    constructor() {
        this.importedData = null;
        this.mappingConfig = {
            // Default column mappings - will be customizable
            headOfClaim: {
                id: 'Head_ID',
                title: 'Head_of_Claim_Title', 
                description: 'Description',
                claim_value: 'Claim_Value',
                success_probability: 'Success_Probability',
                evidence_strength: 'Evidence_Strength',
                status: 'Status'
            },
            subClaim: {
                id: 'Sub_Claim_ID',
                head_id: 'Head_ID',
                title: 'Sub_Claim_Title',
                description: 'Sub_Description',
                claim_value: 'Sub_Claim_Value',
                status: 'Sub_Status',
                defects: 'Defects',
                evidence_items: 'Evidence_Items'
            },
            timeline: {
                head_id: 'Head_ID',
                date: 'Date',
                event: 'Event_Title',
                description: 'Event_Description',
                category: 'Category',
                impact: 'Impact_Level'
            }
        };
    }
    
    // Parse CSV data (Excel exported as CSV)
    parseCSVData(csvText) {
        try {
            const lines = csvText.split('\n').filter(line => line.trim());
            if (lines.length < 2) {
                throw new Error('CSV must have at least a header row and one data row');
            }
            
            const headers = this.parseCSVLine(lines[0]);
            const data = [];
            
            for (let i = 1; i < lines.length; i++) {
                const values = this.parseCSVLine(lines[i]);
                if (values.length === headers.length) {
                    const row = {};
                    headers.forEach((header, index) => {
                        row[header] = values[index];
                    });
                    data.push(row);
                }
            }
            
            return data;
        } catch (error) {
            console.error('Error parsing CSV data:', error);
            throw new Error(`Failed to parse CSV: ${error.message}`);
        }
    }
    
    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current.trim());
        return result;
    }
    
    // Import heads of claim from parsed data
    importHeadsOfClaim(data, mappingOverrides = {}) {
        const mapping = { ...this.mappingConfig.headOfClaim, ...mappingOverrides };
        const importedHeads = {};
        
        try {
            // Group data by head of claim
            const headsData = this.groupByField(data, mapping.id);
            
            Object.entries(headsData).forEach(([headId, rows]) => {
                const firstRow = rows[0]; // Use first row for head data
                
                importedHeads[headId] = {
                    id: this.getValue(firstRow, mapping.id),
                    title: this.getValue(firstRow, mapping.title),
                    description: this.getValue(firstRow, mapping.description),
                    claim_value: this.parseNumber(this.getValue(firstRow, mapping.claim_value)),
                    success_probability: this.parseNumber(this.getValue(firstRow, mapping.success_probability)),
                    evidence_strength: this.parseNumber(this.getValue(firstRow, mapping.evidence_strength)),
                    status: this.getValue(firstRow, mapping.status) || 'active',
                    timeline: [],
                    sub_claims: {}
                };
            });
            
            return importedHeads;
        } catch (error) {
            console.error('Error importing heads of claim:', error);
            throw new Error(`Failed to import heads of claim: ${error.message}`);
        }
    }
    
    // Import sub-claims and link to heads of claim
    importSubClaims(data, headsOfClaim, mappingOverrides = {}) {
        const mapping = { ...this.mappingConfig.subClaim, ...mappingOverrides };
        
        try {
            data.forEach(row => {
                const headId = this.getValue(row, mapping.head_id);
                const subClaimId = this.getValue(row, mapping.id);
                
                if (headId && subClaimId && headsOfClaim[headId]) {
                    headsOfClaim[headId].sub_claims[subClaimId] = {
                        id: subClaimId,
                        title: this.getValue(row, mapping.title),
                        description: this.getValue(row, mapping.description),
                        claim_value: this.parseNumber(this.getValue(row, mapping.claim_value)),
                        status: this.getValue(row, mapping.status) || 'pending',
                        defects: this.parseArray(this.getValue(row, mapping.defects)),
                        evidence_items: this.parseArray(this.getValue(row, mapping.evidence_items))
                    };
                }
            });
            
            return headsOfClaim;
        } catch (error) {
            console.error('Error importing sub-claims:', error);
            throw new Error(`Failed to import sub-claims: ${error.message}`);
        }
    }
    
    // Import timeline events
    importTimeline(data, headsOfClaim, mappingOverrides = {}) {
        const mapping = { ...this.mappingConfig.timeline, ...mappingOverrides };
        
        try {
            data.forEach(row => {
                const headId = this.getValue(row, mapping.head_id);
                
                if (headId && headsOfClaim[headId]) {
                    const timelineEvent = {
                        date: this.parseDate(this.getValue(row, mapping.date)),
                        event: this.getValue(row, mapping.event),
                        description: this.getValue(row, mapping.description),
                        category: this.getValue(row, mapping.category) || 'general',
                        impact: this.getValue(row, mapping.impact) || 'medium'
                    };
                    
                    headsOfClaim[headId].timeline.push(timelineEvent);
                }
            });
            
            // Sort timelines by date
            Object.values(headsOfClaim).forEach(head => {
                head.timeline.sort((a, b) => new Date(a.date) - new Date(b.date));
            });
            
            return headsOfClaim;
        } catch (error) {
            console.error('Error importing timeline:', error);
            throw new Error(`Failed to import timeline: ${error.message}`);
        }
    }
    
    // Complete import process
    async importFromCSV(csvText, options = {}) {
        try {
            const data = this.parseCSVData(csvText);
            
            // Import heads of claim
            let headsOfClaim = this.importHeadsOfClaim(data, options.headMapping);
            
            // Import sub-claims
            headsOfClaim = this.importSubClaims(data, headsOfClaim, options.subClaimMapping);
            
            // Import timeline if present
            if (options.includeTimeline) {
                headsOfClaim = this.importTimeline(data, headsOfClaim, options.timelineMapping);
            }
            
            // Update the main claims hierarchy
            claimsHierarchy.heads_of_claim = { ...claimsHierarchy.heads_of_claim, ...headsOfClaim };
            
            // Recalculate summary
            ClaimsHierarchyUtils.calculateSummary();
            
            this.importedData = headsOfClaim;
            
            return {
                success: true,
                imported: Object.keys(headsOfClaim).length,
                data: headsOfClaim
            };
            
        } catch (error) {
            console.error('Import failed:', error);
            return {
                success: false,
                error: error.message,
                data: null
            };
        }
    }
    
    // Utility methods
    getValue(row, key) {
        return row[key]?.toString().trim() || '';
    }
    
    parseNumber(value) {
        if (!value) return 0;
        // Remove currency symbols and commas
        const cleaned = value.toString().replace(/[£$,\s]/g, '');
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }
    
    parseArray(value) {
        if (!value) return [];
        // Split by semicolon or pipe, clean up
        return value.split(/[;|]/).map(item => item.trim()).filter(item => item);
    }
    
    parseDate(value) {
        if (!value) return new Date().toISOString().split('T')[0];
        try {
            const date = new Date(value);
            return date.toISOString().split('T')[0];
        } catch (error) {
            return new Date().toISOString().split('T')[0];
        }
    }
    
    groupByField(data, field) {
        return data.reduce((groups, row) => {
            const key = this.getValue(row, field);
            if (key) {
                if (!groups[key]) groups[key] = [];
                groups[key].push(row);
            }
            return groups;
        }, {});
    }
    
    // Generate template CSV structure
    generateTemplate() {
        const template = [
            // Headers
            [
                'Head_ID', 'Head_of_Claim_Title', 'Description', 'Claim_Value', 
                'Success_Probability', 'Evidence_Strength', 'Status',
                'Sub_Claim_ID', 'Sub_Claim_Title', 'Sub_Description', 
                'Sub_Claim_Value', 'Sub_Status', 'Defects', 'Evidence_Items',
                'Date', 'Event_Title', 'Event_Description', 'Category', 'Impact_Level'
            ].join(','),
            
            // Example row
            [
                'SVP_001', 'SVP Systems', 'Soil Vent Pipe installation failures', '1670000',
                '75', '92', 'active',
                'SVP_001_1', 'Technical Failures', '28 installation defects identified', '890000',
                'strong', 'Leaking connections; Missing seals; Poor workmanship', 'K&T Report; Photos; Drawings',
                '2024-01-07', 'K&T Investigation', 'Technical investigation completed', 'evidence', 'high_positive'
            ].join(',')
        ].join('\n');
        
        return template;
    }
    
    // Validate imported data
    validateImportedData(headsOfClaim) {
        const errors = [];
        const warnings = [];
        
        Object.entries(headsOfClaim).forEach(([headId, head]) => {
            // Check required fields
            if (!head.title) errors.push(`Head ${headId}: Missing title`);
            if (!head.claim_value || head.claim_value <= 0) {
                warnings.push(`Head ${headId}: No or invalid claim value`);
            }
            
            // Check sub-claims
            Object.entries(head.sub_claims || {}).forEach(([subId, subClaim]) => {
                if (!subClaim.title) errors.push(`Sub-claim ${subId}: Missing title`);
                if (!subClaim.claim_value || subClaim.claim_value <= 0) {
                    warnings.push(`Sub-claim ${subId}: No or invalid claim value`);
                }
            });
        });
        
        return { errors, warnings };
    }
}

export default ExcelImporter;
