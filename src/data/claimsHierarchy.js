// Hierarchical Claims Structure
// Updated with real LJJ data from "LJJ Deductions Breakdown 15.08.25.csv"

import { ljjClaimsData } from './ljjClaimsData.js';

export const claimsHierarchy = {
    master: {
        case_id: 'WEL-2024-001',
        case_name: 'United Living (South) Limited v LJJ Limited - LJJ Deductions',
        total_claim_value: 4990000, // Calculated from LJJ data: SVP(1.67M) + BMS(0.95M) + MBS(0.85M) + ELE(0.42M) + LSS(0.38M) + Design(0.25M) + OH&P(0.2M) + Snagging(0.15M) + M&E(0.12M)
        estimated_recovery: { min: 2495000, max: 3742500, percentage: '50-75%' },
        contract_value: 4990000,
        status: 'active',
        overall_strength: 75 // Average across all heads
    },
    
    heads_of_claim: {
        // Real LJJ data imported from CSV
        ...ljjClaimsData.heads_of_claim,
        
        // Legacy example structure (now commented out):
        /*
        svp_systems: {
            id: 'hoc-001',
            title: 'SVP (Soil Vent Pipe) Systems',
            description: 'Comprehensive SVP system failures across all blocks',
            claim_value: 1670000,
            success_probability: 75,
            evidence_strength: 92,
            status: 'active',
            
            // Individual timeline for this head of claim
            timeline: [
                {
                    date: '2021-03-23',
                    event: 'SVP Benchmark for Inspection',
                    description: 'Initial benchmarking requirements established',
                    category: 'contractual',
                    impact: 'low'
                },
                {
                    date: '2021-08-02',
                    event: 'First LJJ Damage Reports',
                    description: 'LJJ begins reporting SVP damage - defensive position',
                    category: 'critical',
                    impact: 'high_negative'
                },
                {
                    date: '2024-01-07',
                    event: 'K&T Block C Investigation',
                    description: '28 technical issues identified',
                    category: 'evidence',
                    impact: 'high_positive'
                }
            ],
            
            // Sub-claims/defects within this head
            sub_claims: {
                technical_failures: {
                    id: 'svp-001',
                    title: 'Technical Installation Failures',
                    description: '28 systematic installation failures identified by K&T investigation',
                    claim_value: 890000,
                    status: 'strong',
                    evidence_items: [
                        'K&T Block C Report',
                        'Installation photographs',
                        'Technical drawings'
                    ],
                    defects: [
                        'Leaking boss connections',
                        'Missing gasket seals',
                        'Unglued fittings',
                        'Poor workmanship'
                    ]
                },
                testing_commissioning: {
                    id: 'svp-002',
                    title: 'Testing & Commissioning Failures',
                    description: 'Failed witnessing and incomplete test certificates',
                    claim_value: 320000,
                    status: 'medium',
                    evidence_items: [
                        'Incomplete test certificates',
                        'Witness request emails',
                        'Testing schedule correspondence'
                    ],
                    defects: [
                        'Failed witnessing attempts',
                        'Incomplete documentation',
                        'Non-compliance with procedures'
                    ]
                },
                compliance_issues: {
                    id: 'svp-003',
                    title: 'Building Regulations Compliance',
                    description: 'Non-compliance with Part H regulations and Building Control requirements',
                    claim_value: 460000,
                    status: 'strong',
                    evidence_items: [
                        'Building Control correspondence',
                        'Part H compliance documentation',
                        'NCR reports'
                    ],
                    defects: [
                        'Part H non-compliance',
                        'Building Control failures',
                        'Regulatory breaches'
                    ]
                }
            }
        },
        
        bms_systems: {
            id: 'hoc-002',
            title: 'BMS (Building Management Systems)',
            description: 'Systematic BMS integration and commissioning failures',
            claim_value: 730000,
            success_probability: 72,
            evidence_strength: 85,
            status: 'active',
            
            timeline: [
                {
                    date: '2023-08-12',
                    event: 'LST Missed BMS Integration',
                    description: 'LST missed BMS integration with CPGS systems',
                    category: 'critical',
                    impact: 'high_positive'
                },
                {
                    date: '2023-10-04',
                    event: 'NCR BMS Non-compliance',
                    description: 'Formal non-compliance report issued',
                    category: 'formal',
                    impact: 'high_positive'
                },
                {
                    date: '2024-04-19',
                    event: 'K&T BMS Completion Report',
                    description: 'Final technical assessment completed',
                    category: 'evidence',
                    impact: 'high_positive'
                }
            ],
            
            sub_claims: {
                integration_failures: {
                    id: 'bms-001',
                    title: 'System Integration Failures',
                    description: 'Failed integration between BMS and CPGS systems',
                    claim_value: 400000,
                    status: 'strong',
                    evidence_items: [
                        'Integration test results',
                        'System architecture documents',
                        'LST correspondence'
                    ],
                    defects: [
                        'CPGS integration failure',
                        'Control system incompatibility',
                        'Software configuration errors'
                    ]
                },
                commissioning_defects: {
                    id: 'bms-002',
                    title: 'Commissioning Defects',
                    description: 'Multiple commissioning failures and NCR reports',
                    claim_value: 330000,
                    status: 'medium',
                    evidence_items: [
                        'Commissioning reports',
                        'NCR documentation',
                        'Test certificates'
                    ],
                    defects: [
                        'Failed commissioning tests',
                        'Incomplete documentation',
                        'Performance failures'
                    ]
                }
            }
        }
        */
    },
    
    // Cross-cutting concerns
    shared_timeline: [
        // Master timeline events that affect multiple heads of claim
        {
            date: '2023-11-10',
            event: 'Contract Termination Notice',
            description: 'UL terminates remaining works from LJJ contract',
            category: 'termination',
            affected_claims: ['svp_systems', 'bms_systems'],
            impact: 'high_positive'
        },
        {
            date: '2024-02-16',
            event: 'Building Control Final Approval',
            description: 'BC sign-off following remediation works',
            category: 'resolution',
            affected_claims: ['svp_systems', 'bms_systems'],
            impact: 'high_positive'
        }
    ],
    
    // Summary calculations
    summary: {
        total_heads_of_claim: 0, // Will be calculated
        total_sub_claims: 0,     // Will be calculated
        total_claim_value: 0,    // Will be calculated
        average_strength: 0,     // Will be calculated
        strongest_claim: null,   // Will be determined
        weakest_claim: null      // Will be determined
    }
};

// Utility functions for the hierarchy
export const ClaimsHierarchyUtils = {
    
    // Calculate summary statistics
    calculateSummary() {
        const heads = Object.values(claimsHierarchy.heads_of_claim);
        const summary = claimsHierarchy.summary;
        
        summary.total_heads_of_claim = heads.length;
        summary.total_sub_claims = heads.reduce((total, head) => 
            total + Object.keys(head.sub_claims || {}).length, 0);
        summary.total_claim_value = heads.reduce((total, head) => 
            total + (head.claim_value || 0), 0);
        summary.average_strength = heads.reduce((total, head) => 
            total + (head.evidence_strength || 0), 0) / heads.length;
        
        // Find strongest and weakest claims
        const sortedByStrength = heads.sort((a, b) => 
            (b.evidence_strength || 0) - (a.evidence_strength || 0));
        summary.strongest_claim = sortedByStrength[0]?.id || null;
        summary.weakest_claim = sortedByStrength[sortedByStrength.length - 1]?.id || null;
        
        return summary;
    },
    
    // Get head of claim by ID
    getHeadOfClaim(headId) {
        return claimsHierarchy.heads_of_claim[headId] || null;
    },
    
    // Get sub-claim by head ID and sub-claim ID
    getSubClaim(headId, subClaimId) {
        const head = this.getHeadOfClaim(headId);
        return head?.sub_claims?.[subClaimId] || null;
    },
    
    // Get timeline for specific head of claim
    getHeadTimeline(headId) {
        const head = this.getHeadOfClaim(headId);
        return head?.timeline || [];
    },
    
    // Get all events from shared timeline affecting a specific head
    getSharedTimelineForHead(headId) {
        return claimsHierarchy.shared_timeline.filter(event => 
            event.affected_claims?.includes(headId)) || [];
    },
    
    // Get combined timeline for a head (own + shared events)
    getCombinedTimeline(headId) {
        const headTimeline = this.getHeadTimeline(headId);
        const sharedEvents = this.getSharedTimelineForHead(headId);
        
        return [...headTimeline, ...sharedEvents]
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    
    // Add new head of claim from Excel data
    addHeadOfClaim(headData) {
        claimsHierarchy.heads_of_claim[headData.id] = headData;
        this.calculateSummary();
    },
    
    // Update existing head of claim
    updateHeadOfClaim(headId, updates) {
        if (claimsHierarchy.heads_of_claim[headId]) {
            Object.assign(claimsHierarchy.heads_of_claim[headId], updates);
            this.calculateSummary();
        }
    }
};

export default claimsHierarchy;
