// CSV Parser for LJJ Claims Data
export function parseClaimsCSV(csvContent) {
    const lines = csvContent.split('\n');
    const claimsMap = new Map();
    
    // Skip header rows and parse data
    for (let i = 5; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Parse CSV line (handling commas in quotes)
        const columns = parseCSVLine(line);
        if (columns.length < 3) continue;
        
        const description = columns[0]?.replace(/"/g, '').trim();
        const amountStr = columns[1]?.replace(/[",£]/g, '').trim();
        const headOfClaim = columns[2]?.trim();
        const defectSubcategory = columns[3]?.trim();
        
        if (!description || !amountStr || !headOfClaim) continue;
        
        const amount = parseFloat(amountStr) || 0;
        
        // Skip totals and OH&P entries for now
        if (description.toLowerCase().includes('total') || 
            description.toLowerCase().includes('ohp') ||
            description.toLowerCase().includes('oh&p')) {
            continue;
        }
        
        // Group by head of claim
        if (!claimsMap.has(headOfClaim)) {
            claimsMap.set(headOfClaim, {
                name: headOfClaim,
                totalClaim: 0,
                subClaims: [],
                defects: new Map()
            });
        }
        
        const headData = claimsMap.get(headOfClaim);
        headData.totalClaim += amount;
        
        // Group by defect subcategory if exists
        if (defectSubcategory) {
            if (!headData.defects.has(defectSubcategory)) {
                headData.defects.set(defectSubcategory, {
                    name: defectSubcategory,
                    items: [],
                    totalAmount: 0
                });
            }
            
            const defectData = headData.defects.get(defectSubcategory);
            defectData.items.push({
                description,
                amount
            });
            defectData.totalAmount += amount;
        } else {
            // Direct subclaim without defect category
            headData.subClaims.push({
                description,
                amount,
                category: 'General'
            });
        }
    }
    
    return claimsMap;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    if (current) {
        result.push(current);
    }
    
    return result;
}

// Convert parsed data to hierarchical structure
export function convertToHierarchy(claimsMap) {
    const headsOfClaim = [];
    let headId = 1;
    
    // Define the main categories based on CSV data
    const mainCategories = [
        'Soil Vent Pipes',
        'Building Management System',
        'Mechanical Building Services', 
        'Electrical',
        'Life Safety Systems',
        'Security / Access Control',
        'Sprinkler Pipework',
        'Lagging',
        'Design',
        'Pipework Insulation',
        'Trace Heating'
    ];
    
    mainCategories.forEach(category => {
        if (claimsMap.has(category)) {
            const data = claimsMap.get(category);
            const head = {
                id: `hoc${headId}`,
                name: category,
                folderRef: `${headId}`,
                totalClaim: Math.round(data.totalClaim),
                evidenceStrength: calculateEvidenceStrength(category),
                successProbability: calculateSuccessProbability(category),
                status: 'active',
                subClaims: [],
                timeline: generateTimeline(category, headId)
            };
            
            // Convert defects to subclaims
            let subId = 1;
            data.defects.forEach((defectData, defectName) => {
                head.subClaims.push({
                    id: `sc${headId}-${subId}`,
                    name: defectName,
                    defectNumber: subId,
                    claimAmount: Math.round(defectData.totalAmount),
                    evidenceStrength: calculateEvidenceStrength(defectName),
                    successProbability: calculateSuccessProbability(defectName),
                    status: 'pending',
                    evidence: generateEvidence(defectName, headId, subId),
                    items: defectData.items
                });
                subId++;
            });
            
            // Add direct subclaims
            data.subClaims.forEach(claim => {
                head.subClaims.push({
                    id: `sc${headId}-${subId}`,
                    name: claim.description.substring(0, 50) + '...',
                    defectNumber: subId,
                    claimAmount: Math.round(claim.amount),
                    evidenceStrength: 75,
                    successProbability: 70,
                    status: 'pending',
                    evidence: generateEvidence(claim.description, headId, subId)
                });
                subId++;
            });
            
            headsOfClaim.push(head);
            headId++;
        }
    });
    
    return headsOfClaim;
}

function calculateEvidenceStrength(category) {
    // Evidence strength based on category type
    const strengthMap = {
        'Soil Vent Pipes': 85,
        'Building Management System': 88,
        'Mechanical Building Services': 82,
        'Electrical': 86,
        'Life Safety Systems': 90,
        'Security / Access Control': 84,
        'Sprinkler Pipework': 78,
        'Lagging': 75,
        'Design': 70,
        'Pipework Insulation': 80,
        'Trace Heating': 77
    };
    
    for (const [key, value] of Object.entries(strengthMap)) {
        if (category.includes(key)) return value;
    }
    
    return 75; // Default
}

function calculateSuccessProbability(category) {
    // Success probability based on category and evidence
    const probabilityMap = {
        'Life Safety Systems': 85,
        'Building Management System': 82,
        'Electrical': 78,
        'Mechanical Building Services': 75,
        'Soil Vent Pipes': 77,
        'Security / Access Control': 76,
        'Sprinkler Pipework': 70,
        'Lagging': 68,
        'Design': 65,
        'Pipework Insulation': 72,
        'Trace Heating': 69
    };
    
    for (const [key, value] of Object.entries(probabilityMap)) {
        if (category.includes(key)) return value;
    }
    
    return 70; // Default
}

function generateEvidence(name, headId, subId) {
    const evidence = [];
    
    // Generate relevant evidence based on category
    if (name.includes('test') || name.includes('Test')) {
        evidence.push({ 
            id: `e${headId}-${subId}-1`, 
            title: 'Test Reports & Certificates', 
            type: 'test-report' 
        });
    }
    
    if (name.includes('design') || name.includes('Design')) {
        evidence.push({ 
            id: `e${headId}-${subId}-2`, 
            title: 'Design Drawings & Specifications', 
            type: 'drawing' 
        });
    }
    
    if (name.includes('commission') || name.includes('Commission')) {
        evidence.push({ 
            id: `e${headId}-${subId}-3`, 
            title: 'Commissioning Reports', 
            type: 'report' 
        });
    }
    
    // Default evidence
    if (evidence.length === 0) {
        evidence.push(
            { id: `e${headId}-${subId}-1`, title: 'Installation Records', type: 'document' },
            { id: `e${headId}-${subId}-2`, title: 'Defect Reports', type: 'report' }
        );
    }
    
    return evidence;
}

function generateTimeline(category, headId) {
    const timeline = [];
    
    // Generate relevant timeline events based on category
    const baseEvents = [
        {
            id: `hoc${headId}-t1`,
            date: '2023-02-01',
            title: `${category} Installation Started`,
            description: `Initial installation of ${category} systems commenced`
        },
        {
            id: `hoc${headId}-t2`,
            date: '2023-06-15',
            title: 'Defects Identified',
            description: `Issues identified during ${category} inspection`
        },
        {
            id: `hoc${headId}-t3`,
            date: '2023-09-01',
            title: 'Remediation Required',
            description: `Remediation works required for ${category}`
        },
        {
            id: `hoc${headId}-t4`,
            date: '2024-01-15',
            title: 'Claim Submitted',
            description: `Formal claim submitted for ${category} defects`
        }
    ];
    
    return baseEvents;
}
