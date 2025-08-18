// Hierarchical Claims Structure
// Based on LJJ Deductions Breakdown 15.08.25.csv

export const claimsHierarchy = {
    master: {
        case_id: 'WEL-2024-001',
        case_name: 'United Living (South) Limited v LJJ Limited - LJJ Deductions',
        total_claim_value: 2400000,
        estimated_recovery: { min: 1200000, max: 1800000, percentage: '50-75%' },
        contract_value: 2400000,
        status: 'active',
        overall_strength: 75 // Will be calculated based on evidence
    },
    
    // Master project timeline - affects multiple heads
    masterTimeline: [
        {
            id: 'mt1',
            date: '2023-01-15',
            title: 'Project Initiation',
            description: 'Initial project scope and requirements defined',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5', 'hoc6', 'hoc7', 'hoc8']
        },
        {
            id: 'mt2',
            date: '2023-03-01',
            title: 'Design Changes Approved',
            description: 'Major design modifications approved affecting multiple systems',
            affectedHeads: ['hoc2', 'hoc3', 'hoc4', 'hoc6']
        },
        {
            id: 'mt3',
            date: '2023-06-15',
            title: 'Supply Chain Disruption',
            description: 'Critical materials shortage affecting project timeline',
            affectedHeads: ['hoc1', 'hoc3', 'hoc4', 'hoc5']
        },
        {
            id: 'mt4',
            date: '2023-09-01',
            title: 'Regulatory Compliance Review',
            description: 'Full compliance audit and adjustments',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5', 'hoc7']
        },
        {
            id: 'mt5',
            date: '2023-12-15',
            title: 'Project Completion Target',
            description: 'Original completion date - extensions required',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5', 'hoc6', 'hoc7', 'hoc8']
        }
    ],
    
    headsOfClaim: [
        {
            id: 'hoc1',
            name: 'Soil Vent Pipes',
            folderRef: '1',
            totalClaim: 45000,
            evidenceStrength: 82,
            successProbability: 75,
            status: 'active',
            subClaims: [
                {
                    id: 'sc1-1',
                    name: 'Soil Vent Pipes',
                    defectNumber: 1,
                    claimAmount: 45000,
                    evidenceStrength: 82,
                    successProbability: 75,
                    status: 'pending',
                    evidence: [
                        { id: 'e1-1-1', title: 'Soil Vent Pipes Installation Records', type: 'document' },
                        { id: 'e1-1-2', title: 'System Test Reports', type: 'test-report' }
                    ]
                }
            ]
        },
        {
            id: 'hoc2',
            name: 'Building Management System',
            folderRef: '2',
            totalClaim: 67000,
            evidenceStrength: 88,
            successProbability: 82,
            status: 'active',
            subClaims: [
                {
                    id: 'sc2-1',
                    name: 'BMS',
                    defectNumber: 1,
                    claimAmount: 67000,
                    evidenceStrength: 88,
                    successProbability: 82,
                    status: 'pending',
                    evidence: [
                        { id: 'e2-1-1', title: 'BMS Commissioning Report', type: 'report' },
                        { id: 'e2-1-2', title: 'Integration Test Results', type: 'test-report' }
                    ]
                }
            ]
        },
        {
            id: 'hoc3',
            name: 'Mechanical Building Services',
            folderRef: '3',
            totalClaim: 38000,
            evidenceStrength: 78,
            successProbability: 72,
            status: 'active',
            subClaims: [
                {
                    id: 'sc3-1',
                    name: 'Chlorination',
                    defectNumber: 1,
                    claimAmount: 38000,
                    evidenceStrength: 78,
                    successProbability: 72,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-1-1', title: 'Chlorination System Design', type: 'drawing' },
                        { id: 'e3-1-2', title: 'Water Quality Test Results', type: 'test-report' }
                    ]
                },
                {
                    id: 'sc3-2',
                    name: 'Duplex 9',
                    defectNumber: 2,
                    claimAmount: 45000,
                    evidenceStrength: 82,
                    successProbability: 75,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-2-1', title: 'Duplex 9 Installation Records', type: 'document' },
                        { id: 'e3-2-2', title: 'System Test Reports', type: 'test-report' }
                    ]
                },
                {
                    id: 'sc3-3',
                    name: 'HIU',
                    defectNumber: 3,
                    claimAmount: 38000,
                    evidenceStrength: 78,
                    successProbability: 72,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-3-1', title: 'HIU Performance Data', type: 'report' },
                        { id: 'e3-3-2', title: 'Installation Certificates', type: 'certificate' }
                    ]
                },
                {
                    id: 'sc3-4',
                    name: 'MVHR',
                    defectNumber: 4,
                    claimAmount: 42000,
                    evidenceStrength: 80,
                    successProbability: 73,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-4-1', title: 'MVHR Commissioning Report', type: 'report' },
                        { id: 'e3-4-2', title: 'Ventilation Test Results', type: 'test-report' }
                    ]
                },
                {
                    id: 'sc3-5',
                    name: 'UFH',
                    defectNumber: 5,
                    claimAmount: 28000,
                    evidenceStrength: 77,
                    successProbability: 70,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-5-1', title: 'UFH Layout Drawings', type: 'drawing' },
                        { id: 'e3-5-2', title: 'Thermal Performance Data', type: 'data' }
                    ]
                }
            ]
        },
        {
            id: 'hoc4',
            name: 'Electrical',
            folderRef: '4',
            totalClaim: 142000,
            evidenceStrength: 85,
            successProbability: 78,
            status: 'active',
            subClaims: [
                {
                    id: 'sc4-1',
                    name: 'Lightning Protection',
                    defectNumber: 1,
                    claimAmount: 48000,
                    evidenceStrength: 87,
                    successProbability: 80,
                    status: 'pending',
                    evidence: [
                        { id: 'e4-1-1', title: 'Lightning Protection System Design', type: 'drawing' },
                        { id: 'e4-1-2', title: 'Installation Certificates', type: 'certificate' }
                    ]
                }
            ]
        },
        {
            id: 'hoc5',
            name: 'Life Safety Systems',
            folderRef: '5',
            totalClaim: 29000,
            evidenceStrength: 88,
            successProbability: 82,
            status: 'active',
            subClaims: [
                {
                    id: 'sc5-1',
                    name: 'Fire Alarm System',
                    defectNumber: 1,
                    claimAmount: 29000,
                    evidenceStrength: 88,
                    successProbability: 82,
                    status: 'pending',
                    evidence: [
                        { id: 'e5-1-1', title: 'Fire Alarm System Design', type: 'drawing' },
                        { id: 'e5-1-2', title: 'Commissioning Report', type: 'report' }
                    ]
                }
            ]
        },
        {
            id: 'hoc6',
            name: 'Design & OH&P',
            folderRef: '6',
            totalClaim: 18000,
            evidenceStrength: 68,
            successProbability: 65,
            status: 'active',
            subClaims: [
                {
                    id: 'sc6-1',
                    name: 'Design Pro-Rata',
                    defectNumber: 1,
                    claimAmount: 10000,
                    evidenceStrength: 68,
                    successProbability: 65,
                    status: 'pending',
                    evidence: [
                        { id: 'e6-1-1', title: 'Design Drawings', type: 'drawing' },
                        { id: 'e6-1-2', title: 'Design Calculations', type: 'data' }
                    ]
                },
                {
                    id: 'sc6-2',
                    name: 'OH&P Pro-Rata',
                    defectNumber: 2,
                    claimAmount: 8000,
                    evidenceStrength: 68,
                    successProbability: 65,
                    status: 'pending',
                    evidence: [
                        { id: 'e6-2-1', title: 'Contract Overhead', type: 'document' },
                        { id: 'e6-2-2', title: 'Lost Profit Calculation', type: 'data' }
                    ]
                }
            ]
        },
        {
            id: 'hoc7',
            name: 'Snagging - Kilmurray',
            folderRef: '7',
            totalClaim: 120000,
            evidenceStrength: 95,
            successProbability: 90,
            status: 'active',
            subClaims: [
                {
                    id: 'sc7-1',
                    name: 'Snagging',
                    defectNumber: 1,
                    claimAmount: 120000,
                    evidenceStrength: 95,
                    successProbability: 90,
                    status: 'pending',
                    evidence: [
                        { id: 'e7-1-1', title: 'Kilmurray Snagging Report', type: 'report' },
                        { id: 'e7-1-2', title: 'Photographic Evidence', type: 'photo' },
                        { id: 'e7-1-3', title: 'Outstanding Defects List', type: 'document' }
                    ]
                }
            ]
        },
        {
            id: 'hoc8',
            name: 'M&E Monitoring',
            folderRef: '8',
            totalClaim: 100000,
            evidenceStrength: 75,
            successProbability: 70,
            status: 'active',
            subClaims: [
                {
                    id: 'sc8-1',
                    name: 'Quinn Ross',
                    defectNumber: 1,
                    claimAmount: 100000,
                    evidenceStrength: 75,
                    successProbability: 70,
                    status: 'pending',
                    evidence: [
                        { id: 'e8-1-1', title: 'Quinn Ross M&E Monitoring Reports', type: 'report' },
                        { id: 'e8-1-2', title: 'Witnessing Request Documentation', type: 'document' }
                    ]
                }
            ]
        }
    ]
};

// Calculate summary statistics
function calculateSummary() {
    const heads = claimsHierarchy.headsOfClaim;
    let totalValue = 0;
    let totalStrength = 0;
    let totalSubClaims = 0;
    
    heads.forEach(head => {
        totalValue += head.totalClaim;
        totalStrength += head.successProbability;
        if (head.subClaims) {
            totalSubClaims += head.subClaims.length;
        }
    });
    
    claimsHierarchy.summary = {
        total_heads_of_claim: heads.length,
        total_sub_claims: totalSubClaims,
        total_claim_value: totalValue,
        average_strength: Math.round(totalStrength / heads.length),
        strongest_claim: heads.reduce((a, b) => a.successProbability > b.successProbability ? a : b).id,
        weakest_claim: heads.reduce((a, b) => a.successProbability < b.successProbability ? a : b).id
    };
}

calculateSummary();

// Utility functions for the hierarchy
export const ClaimsHierarchyUtils = {
    
    // Calculate summary statistics
    calculateSummary() {
        const heads = claimsHierarchy.headsOfClaim;
        const summary = claimsHierarchy.summary || {};
        
        summary.total_heads_of_claim = heads.length;
        summary.total_sub_claims = heads.reduce((total, head) => 
            total + (head.subClaims?.length || 0), 0);
        summary.total_claim_value = heads.reduce((total, head) => 
            total + (head.totalClaim || 0), 0);
        summary.average_strength = heads.reduce((total, head) => 
            total + (head.evidenceStrength || 0), 0) / heads.length;
        
        // Find strongest and weakest claims
        const sortedByStrength = [...heads].sort((a, b) => 
            (b.evidenceStrength || 0) - (a.evidenceStrength || 0));
        summary.strongest_claim = sortedByStrength[0]?.id || null;
        summary.weakest_claim = sortedByStrength[sortedByStrength.length - 1]?.id || null;
        
        claimsHierarchy.summary = summary;
        return summary;
    },
    
    // Get head of claim by ID
    getHeadOfClaim(headId) {
        return claimsHierarchy.headsOfClaim.find(head => head.id === headId) || null;
    },
    
    // Get sub-claim by head ID and sub-claim ID
    getSubClaim(headId, subClaimId) {
        const head = this.getHeadOfClaim(headId);
        return head?.subClaims?.find(sub => sub.id === subClaimId) || null;
    },
    
    // Get timeline for specific head of claim
    getHeadTimeline(headId) {
        // Returns events from master timeline that affect this head
        return claimsHierarchy.masterTimeline.filter(event => 
            event.affectedHeads?.includes(headId)) || [];
    },
    
    // Get all events from master timeline affecting a specific head
    getMasterTimelineForHead(headId) {
        return claimsHierarchy.masterTimeline.filter(event => 
            event.affectedHeads?.includes(headId)) || [];
    },
    
    // Get combined timeline for a head (master events affecting this head)
    getCombinedTimeline(headId) {
        return this.getMasterTimelineForHead(headId)
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    
    // Add new head of claim from Excel data
    addHeadOfClaim(headData) {
        claimsHierarchy.headsOfClaim.push(headData);
        this.calculateSummary();
    },
    
    // Update existing head of claim
    updateHeadOfClaim(headId, updates) {
        const headIndex = claimsHierarchy.headsOfClaim.findIndex(head => head.id === headId);
        if (headIndex !== -1) {
            Object.assign(claimsHierarchy.headsOfClaim[headIndex], updates);
            this.calculateSummary();
        }
    }
};

export default claimsHierarchy;
