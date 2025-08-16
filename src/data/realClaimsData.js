// Real Claims Data from CSV
// Based on LJJ Deductions Breakdown

export const realClaimsHierarchy = {
    projectInfo: {
        project_name: 'Welbourne Project',
        client: 'United Living (South) Limited',
        contractor: 'LJJ Limited',
        case_id: 'WEL-2024-001',
        case_name: 'United Living (South) Limited v LJJ Limited - LJJ Deductions',
        total_claim_value: 3172477.22,
        status: 'active',
        overall_strength: 78
    },
    
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
            title: 'Installation Phase Begins',
            description: 'Major systems installation commenced',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5']
        },
        {
            id: 'mt3',
            date: '2023-06-15',
            title: 'Defects Identified',
            description: 'Multiple system defects identified during inspection',
            affectedHeads: ['hoc1', 'hoc3', 'hoc4', 'hoc5']
        },
        {
            id: 'mt4',
            date: '2023-09-01',
            title: 'Remediation Works Required',
            description: 'Full remediation scope defined',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5', 'hoc6', 'hoc7', 'hoc8']
        },
        {
            id: 'mt5',
            date: '2024-01-15',
            title: 'Claims Submission',
            description: 'Formal claims submitted for all defects',
            affectedHeads: ['hoc1', 'hoc2', 'hoc3', 'hoc4', 'hoc5', 'hoc6', 'hoc7', 'hoc8']
        }
    ],
    
    headsOfClaim: [
        {
            id: 'hoc1',
            name: 'Soil Vent Pipes',
            folderRef: '1',
            totalClaim: 514520.57,
            evidenceStrength: 85,
            successProbability: 78,
            status: 'active',
            subClaims: [
                {
                    id: 'sc1-1',
                    name: 'SVP Drainage Pipe Insulation',
                    defectNumber: 1,
                    claimAmount: 344900.00,
                    evidenceStrength: 87,
                    successProbability: 80,
                    status: 'pending',
                    evidence: [
                        { id: 'e1-1-1', title: 'Drainage CCTV Investigation Reports', type: 'test-report' },
                        { id: 'e1-1-2', title: 'Drainage Testing Results - All Blocks', type: 'test-report' },
                        { id: 'e1-1-3', title: 'SVP System Installation Records', type: 'document' }
                    ],
                    items: [
                        { description: 'Replacing SVP damaged roof cowls', amount: 2200 },
                        { description: 'Drainage CCTV investigation works', amount: 42000 },
                        { description: 'Drainage testing Block A', amount: 87000 },
                        { description: 'Drainage testing Block B', amount: 88000 },
                        { description: 'Drainage testing Block C', amount: 87000 },
                        { description: 'SVP remediation works', amount: 32700 }
                    ]
                },
                {
                    id: 'sc1-2',
                    name: 'OH&P and Prelims',
                    defectNumber: 2,
                    claimAmount: 169870.57,
                    evidenceStrength: 82,
                    successProbability: 75,
                    status: 'pending',
                    evidence: [
                        { id: 'e1-2-1', title: 'Overhead & Profit Calculations', type: 'document' },
                        { id: 'e1-2-2', title: 'Preliminary Cost Breakdown', type: 'document' }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc1-t1',
                    date: '2023-02-01',
                    title: 'SVP Installation Started',
                    description: 'Soil vent pipe system installation commenced'
                },
                {
                    id: 'hoc1-t2',
                    date: '2023-06-15',
                    title: 'Drainage Defects Identified',
                    description: 'CCTV investigation revealed multiple defects'
                },
                {
                    id: 'hoc1-t3',
                    date: '2023-09-01',
                    title: 'Testing Programme Initiated',
                    description: 'Comprehensive drainage testing across all blocks'
                }
            ]
        },
        {
            id: 'hoc2',
            name: 'Building Management System',
            folderRef: '2',
            totalClaim: 65933.67,
            evidenceStrength: 88,
            successProbability: 82,
            status: 'active',
            subClaims: [
                {
                    id: 'sc2-1',
                    name: 'BMS Installation & Commissioning',
                    defectNumber: 1,
                    claimAmount: 65933.67,
                    evidenceStrength: 88,
                    successProbability: 82,
                    status: 'pending',
                    evidence: [
                        { id: 'e2-1-1', title: 'BMS Installation Records', type: 'document' },
                        { id: 'e2-1-2', title: 'BMS Commissioning Reports', type: 'report' },
                        { id: 'e2-1-3', title: 'System Integration Test Results', type: 'test-report' }
                    ],
                    items: [
                        { description: 'BMS install & commissioning', amount: 52793.67 },
                        { description: 'Additional wiring to BMS', amount: 11840 },
                        { description: 'BMS attendance and modifications', amount: 1500 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc2-t1',
                    date: '2023-03-01',
                    title: 'BMS Installation Commenced',
                    description: 'Building Management System installation started'
                },
                {
                    id: 'hoc2-t2',
                    date: '2023-08-15',
                    title: 'Integration Issues Identified',
                    description: 'Problems with system integration discovered'
                }
            ]
        },
        {
            id: 'hoc3',
            name: 'Mechanical Building Services',
            folderRef: '3',
            totalClaim: 687629.47,
            evidenceStrength: 82,
            successProbability: 75,
            status: 'active',
            subClaims: [
                {
                    id: 'sc3-1',
                    name: 'HIU Systems',
                    defectNumber: 1,
                    claimAmount: 85000,
                    evidenceStrength: 83,
                    successProbability: 76,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-1-1', title: 'HIU Installation Records', type: 'document' },
                        { id: 'e3-1-2', title: 'HIU Performance Data', type: 'test-report' }
                    ]
                },
                {
                    id: 'sc3-2',
                    name: 'MVHR Systems',
                    defectNumber: 2,
                    claimAmount: 158751.43,
                    evidenceStrength: 84,
                    successProbability: 77,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-2-1', title: 'MVHR Commissioning Reports', type: 'report' },
                        { id: 'e3-2-2', title: 'Ventilation Test Results', type: 'test-report' }
                    ],
                    items: [
                        { description: 'MVHR switching arrangements', amount: 48400 },
                        { description: 'MVHR commissioning and remediation', amount: 65200.20 },
                        { description: 'MVHR summer bypass installation', amount: 23791.23 },
                        { description: 'Replacement of 6 MVHR units', amount: 18961.80 }
                    ]
                },
                {
                    id: 'sc3-3',
                    name: 'UFH Systems',
                    defectNumber: 3,
                    claimAmount: 56228.46,
                    evidenceStrength: 80,
                    successProbability: 73,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-3-1', title: 'UFH Layout Drawings', type: 'drawing' },
                        { id: 'e3-3-2', title: 'UFH Test Reports', type: 'test-report' }
                    ],
                    items: [
                        { description: 'UFH control rewiring', amount: 14590.46 },
                        { description: 'Plot UFH testing', amount: 24650 },
                        { description: 'Leaking UFH investigation and repair', amount: 8788 }
                    ]
                },
                {
                    id: 'sc3-4',
                    name: 'Water Systems',
                    defectNumber: 4,
                    claimAmount: 125000,
                    evidenceStrength: 81,
                    successProbability: 74,
                    status: 'pending',
                    evidence: [
                        { id: 'e3-4-1', title: 'Water System Test Results', type: 'test-report' },
                        { id: 'e3-4-2', title: 'Chlorination Certificates', type: 'certificate' }
                    ],
                    items: [
                        { description: 'H&C water crossed repairs', amount: 57664.49 },
                        { description: 'Repiping of water softeners', amount: 15350 },
                        { description: 'Secondary flow/return crossed', amount: 28392 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc3-t1',
                    date: '2023-02-15',
                    title: 'MBS Installation Started',
                    description: 'Mechanical building services installation commenced'
                },
                {
                    id: 'hoc3-t2',
                    date: '2023-07-01',
                    title: 'System Integration Issues',
                    description: 'Multiple integration problems identified'
                }
            ]
        },
        {
            id: 'hoc4',
            name: 'Electrical',
            folderRef: '4',
            totalClaim: 468844.34,
            evidenceStrength: 86,
            successProbability: 79,
            status: 'active',
            subClaims: [
                {
                    id: 'sc4-1',
                    name: 'Lightning Protection',
                    defectNumber: 1,
                    claimAmount: 35192,
                    evidenceStrength: 87,
                    successProbability: 80,
                    status: 'pending',
                    evidence: [
                        { id: 'e4-1-1', title: 'Lightning Protection Design', type: 'drawing' },
                        { id: 'e4-1-2', title: 'Test Certificates', type: 'certificate' }
                    ],
                    items: [
                        { description: 'Lightning protection remedial works', amount: 32150 },
                        { description: 'Lightning protection test', amount: 3042 }
                    ]
                },
                {
                    id: 'sc4-2',
                    name: 'Security & Access Control',
                    defectNumber: 2,
                    claimAmount: 52762.61,
                    evidenceStrength: 84,
                    successProbability: 77,
                    status: 'pending',
                    evidence: [
                        { id: 'e4-2-1', title: 'Access Control Specifications', type: 'specification' },
                        { id: 'e4-2-2', title: 'CCTV Commissioning Reports', type: 'report' }
                    ],
                    items: [
                        { description: 'Security/Access Control remediation', amount: 33500 },
                        { description: 'CCTV Commissioning', amount: 6572.61 },
                        { description: 'Additional access control doors', amount: 5790 }
                    ]
                },
                {
                    id: 'sc4-3',
                    name: 'Trace Heating',
                    defectNumber: 3,
                    claimAmount: 55008.16,
                    evidenceStrength: 82,
                    successProbability: 75,
                    status: 'pending',
                    evidence: [
                        { id: 'e4-3-1', title: 'Trace Heating Design', type: 'design' },
                        { id: 'e4-3-2', title: 'Installation Certificates', type: 'certificate' }
                    ],
                    items: [
                        { description: 'Trace heating to sprinkler system', amount: 37008.16 },
                        { description: 'Trace heating to basement', amount: 18000 }
                    ]
                },
                {
                    id: 'sc4-4',
                    name: 'General Electrical Works',
                    defectNumber: 4,
                    claimAmount: 325881.57,
                    evidenceStrength: 85,
                    successProbability: 78,
                    status: 'pending',
                    evidence: [
                        { id: 'e4-4-1', title: 'Electrical NIC Certificates', type: 'certificate' },
                        { id: 'e4-4-2', title: 'Electrical Test Reports', type: 'test-report' }
                    ],
                    items: [
                        { description: 'Landlord electrical testing & certification', amount: 32650 },
                        { description: 'Plot Electrical NIC Certs', amount: 23100 },
                        { description: 'Lighting remediation works', amount: 18500 },
                        { description: 'Video entry and intercom remediation', amount: 18800 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc4-t1',
                    date: '2023-02-01',
                    title: 'Electrical Installation Started',
                    description: 'Electrical systems installation commenced'
                },
                {
                    id: 'hoc4-t2',
                    date: '2023-08-01',
                    title: 'Compliance Issues Identified',
                    description: 'Multiple electrical compliance issues found'
                }
            ]
        },
        {
            id: 'hoc5',
            name: 'Life Safety Systems',
            folderRef: '5',
            totalClaim: 241836.73,
            evidenceStrength: 90,
            successProbability: 85,
            status: 'active',
            subClaims: [
                {
                    id: 'sc5-1',
                    name: 'Fire Alarm System',
                    defectNumber: 1,
                    claimAmount: 115269.04,
                    evidenceStrength: 92,
                    successProbability: 87,
                    status: 'pending',
                    evidence: [
                        { id: 'e5-1-1', title: 'Fire Alarm System Design', type: 'drawing' },
                        { id: 'e5-1-2', title: 'Fire Alarm Test Certificates', type: 'certificate' }
                    ],
                    items: [
                        { description: 'Fire alarm investigation and remediation', amount: 42670 },
                        { description: 'Moving smoke detectors for compliance', amount: 72599.04 }
                    ]
                },
                {
                    id: 'sc5-2',
                    name: 'Sprinkler Systems',
                    defectNumber: 2,
                    claimAmount: 91000,
                    evidenceStrength: 88,
                    successProbability: 83,
                    status: 'pending',
                    evidence: [
                        { id: 'e5-2-1', title: 'Sprinkler System Specifications', type: 'specification' },
                        { id: 'e5-2-2', title: 'Sprinkler Test Reports', type: 'test-report' }
                    ],
                    items: [
                        { description: 'Sprinkler remedials to basement', amount: 25012 },
                        { description: 'Sprinkler remedials to duplex', amount: 4563 },
                        { description: 'Sprinkler system interface', amount: 11200 },
                        { description: 'Boosted cold water/priority valves', amount: 38658 }
                    ]
                },
                {
                    id: 'sc5-3',
                    name: 'Emergency Systems',
                    defectNumber: 3,
                    claimAmount: 35567.69,
                    evidenceStrength: 89,
                    successProbability: 84,
                    status: 'pending',
                    evidence: [
                        { id: 'e5-3-1', title: 'Emergency System Design', type: 'design' },
                        { id: 'e5-3-2', title: 'AOV Test Certificates', type: 'certificate' }
                    ],
                    items: [
                        { description: 'Replacement of faulty PRVs', amount: 11323 },
                        { description: 'Emergency shut off valves', amount: 5475.60 },
                        { description: 'AOV fault investigation', amount: 1125 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc5-t1',
                    date: '2023-03-01',
                    title: 'Life Safety Installation',
                    description: 'Life safety systems installation started'
                },
                {
                    id: 'hoc5-t2',
                    date: '2023-09-15',
                    title: 'Compliance Audit Failed',
                    description: 'Major non-compliance issues identified'
                }
            ]
        },
        {
            id: 'hoc6',
            name: 'Sprinkler Pipework',
            folderRef: '6',
            totalClaim: 426590.88,
            evidenceStrength: 78,
            successProbability: 72,
            status: 'active',
            subClaims: [
                {
                    id: 'sc6-1',
                    name: 'Sprinkler System Replacement',
                    defectNumber: 1,
                    claimAmount: 380342.20,
                    evidenceStrength: 79,
                    successProbability: 73,
                    status: 'pending',
                    evidence: [
                        { id: 'e6-1-1', title: 'Sprinkler Design Drawings', type: 'drawing' },
                        { id: 'e6-1-2', title: 'Installation Records', type: 'document' }
                    ],
                    items: [
                        { description: 'Steel pipework installation', amount: 111730 },
                        { description: 'Existing sprinkler system upgrade', amount: 135000 },
                        { description: 'Trace heat and insulate', amount: 23466.20 }
                    ]
                },
                {
                    id: 'sc6-2',
                    name: 'Sprinkler Ancillaries',
                    defectNumber: 2,
                    claimAmount: 46248.68,
                    evidenceStrength: 77,
                    successProbability: 70,
                    status: 'pending',
                    evidence: [
                        { id: 'e6-2-1', title: 'Workmanship Warranty', type: 'document' },
                        { id: 'e6-2-2', title: 'Prelims Documentation', type: 'document' }
                    ],
                    items: [
                        { description: 'Prelims and OHP', amount: 36748.68 },
                        { description: 'Workmanship Warranty', amount: 9500 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc6-t1',
                    date: '2023-04-01',
                    title: 'Sprinkler Installation',
                    description: 'Sprinkler pipework installation commenced'
                },
                {
                    id: 'hoc6-t2',
                    date: '2023-10-01',
                    title: 'System Replacement Required',
                    description: 'Complete system replacement needed'
                }
            ]
        },
        {
            id: 'hoc7',
            name: 'Lagging',
            folderRef: '7',
            totalClaim: 719331.25,
            evidenceStrength: 75,
            successProbability: 70,
            status: 'active',
            subClaims: [
                {
                    id: 'sc7-1',
                    name: 'Lagging Replacement',
                    defectNumber: 1,
                    claimAmount: 628237,
                    evidenceStrength: 76,
                    successProbability: 71,
                    status: 'pending',
                    evidence: [
                        { id: 'e7-1-1', title: 'Lagging Inspection Reports', type: 'report' },
                        { id: 'e7-1-2', title: 'Replacement Specifications', type: 'specification' }
                    ],
                    items: [
                        { description: 'Remove and replace lagging', amount: 105162 },
                        { description: 'Lagging material', amount: 135560 },
                        { description: 'Replace baffles', amount: 77532 },
                        { description: 'Extensive cleaning of pipework', amount: 22000 }
                    ]
                },
                {
                    id: 'sc7-2',
                    name: 'Lagging Ancillaries',
                    defectNumber: 2,
                    claimAmount: 91094.25,
                    evidenceStrength: 73,
                    successProbability: 68,
                    status: 'pending',
                    evidence: [
                        { id: 'e7-2-1', title: 'Prelims and OHP Calculations', type: 'document' },
                        { id: 'e7-2-2', title: 'Warranty Documentation', type: 'document' }
                    ],
                    items: [
                        { description: 'Prelims and OHP', amount: 76094.25 },
                        { description: 'Workmanship Warranty', amount: 15000 }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc7-t1',
                    date: '2023-05-01',
                    title: 'Lagging Works Started',
                    description: 'Initial lagging installation commenced'
                },
                {
                    id: 'hoc7-t2',
                    date: '2023-11-01',
                    title: 'Complete Replacement Required',
                    description: 'Full lagging replacement needed'
                }
            ]
        },
        {
            id: 'hoc8',
            name: 'Design',
            folderRef: '8',
            totalClaim: 110000,
            evidenceStrength: 70,
            successProbability: 65,
            status: 'active',
            subClaims: [
                {
                    id: 'sc8-1',
                    name: 'K&T ReDesign Costs',
                    defectNumber: 1,
                    claimAmount: 110000,
                    evidenceStrength: 70,
                    successProbability: 65,
                    status: 'pending',
                    evidence: [
                        { id: 'e8-1-1', title: 'Design Change Documentation', type: 'document' },
                        { id: 'e8-1-2', title: 'Design Fee Invoices', type: 'invoice' }
                    ]
                }
            ],
            timeline: [
                {
                    id: 'hoc8-t1',
                    date: '2023-06-01',
                    title: 'Design Issues Identified',
                    description: 'Multiple design deficiencies found'
                },
                {
                    id: 'hoc8-t2',
                    date: '2023-12-01',
                    title: 'Redesign Required',
                    description: 'Complete redesign commissioned'
                }
            ]
        }
    ]
};

// Utility functions
export const RealClaimsUtils = {
    getTotalClaimValue() {
        return realClaimsHierarchy.headsOfClaim.reduce((sum, head) => sum + head.totalClaim, 0);
    },
    
    getHeadOfClaimById(id) {
        return realClaimsHierarchy.headsOfClaim.find(h => h.id === id);
    },
    
    getSubClaimById(headId, subId) {
        const head = this.getHeadOfClaimById(headId);
        return head ? head.subClaims.find(s => s.id === subId) : null;
    },
    
    calculateOverallStrength() {
        const heads = realClaimsHierarchy.headsOfClaim;
        const weightedSum = heads.reduce((sum, head) => {
            return sum + (head.evidenceStrength * head.totalClaim);
        }, 0);
        const totalClaim = this.getTotalClaimValue();
        return Math.round(weightedSum / totalClaim);
    },
    
    calculateOverallSuccess() {
        const heads = realClaimsHierarchy.headsOfClaim;
        const weightedSum = heads.reduce((sum, head) => {
            return sum + (head.successProbability * head.totalClaim);
        }, 0);
        const totalClaim = this.getTotalClaimValue();
        return Math.round(weightedSum / totalClaim);
    }
};
