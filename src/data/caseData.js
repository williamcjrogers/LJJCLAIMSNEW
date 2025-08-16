// Case data extracted from building-services-claims.js
export const caseData = {
    case_id: 'WEL-2024-001',
    case_name: 'United Living (South) Limited v LJJ Limited - SVP Installation Failures',
    contract_value: 2400000,
    claim_value: 2400000,
    estimated_recovery: { min: 1200000, max: 1800000, percentage: '50-75%' },
    
    timeline: [
        {
            date: '2021-03-23',
            event: 'SVP Benchmark for Inspection',
            description: 'Initial benchmarking email sent establishing inspection requirements',
            category: 'contractual',
            supporting_docs: ['benchmark_email_2021.eml'],
            significance: 'Establishes contractual obligations for inspection and testing',
            impact_on_claim: 'low'
        },
        {
            date: '2021-08-02', 
            event: 'First LJJ Damage Reports',
            description: 'LJJ begins reporting damaged SVP systems - early defensive position',
            category: 'critical',
            supporting_docs: ['ljj_damage_report_aug2021.pdf', 'site_photos_aug2021.zip'],
            significance: 'LJJ creates defensive timeline by reporting damage early',
            impact_on_claim: 'high_negative'
        },
        {
            date: '2021-11-04',
            event: 'Collaboration Breakdown',
            description: 'LJJ not working collaboratively - documented communication failures',
            category: 'contractual',
            supporting_docs: ['collaboration_email_chain.eml', 'project_meeting_minutes_nov2021.pdf'],
            significance: 'Evidence of LJJ failing to meet collaborative obligations',
            impact_on_claim: 'medium_positive'
        },
        {
            date: '2022-02-22',
            event: 'Additional SVP Damage Reports',
            description: 'LJJ reports further SVP system damage across multiple blocks',
            category: 'critical',
            supporting_docs: ['ljj_damage_report_feb2022.pdf', 'block_survey_feb2022.pdf'],
            significance: 'Pattern of ongoing damage reporting by LJJ',
            impact_on_claim: 'medium_negative'
        },
        {
            date: '2022-03-10',
            event: 'Quinn Ross Witnessing Request',
            description: 'Quinn Ross requests to witness SVP testing - compliance attempt',
            category: 'procedural',
            supporting_docs: ['quinn_ross_witness_request.eml', 'testing_schedule_mar2022.pdf'],
            significance: 'Shows attempt to follow proper testing procedures',
            impact_on_claim: 'low_positive'
        },
        {
            date: '2022-10-25',
            event: 'ESD Site Observation - Test Certificate Issues',
            description: 'Client tracker notes incomplete test certificates discovered',
            category: 'compliance',
            supporting_docs: ['esd_site_report_oct2022.pdf', 'incomplete_certificates_list.xlsx'],
            significance: 'Evidence of LJJ failing to provide complete documentation',
            impact_on_claim: 'medium_positive'
        },
        {
            date: '2023-08-31',
            event: 'UL Formal Notification of Leaks',
            description: 'Official notification with investigative works confirmation',
            category: 'formal',
            supporting_docs: ['ul_leak_notification_aug2023.pdf', 'investigation_works_spec.pdf'],
            significance: 'Formal start of claim process with documented evidence',
            impact_on_claim: 'high_positive'
        },
        {
            date: '2023-11-10',
            event: 'Contract Omission Notice',
            description: 'UL omits remaining SVP works from LJJ contract',
            category: 'termination',
            supporting_docs: ['contract_omission_notice.pdf', 'ljj_response_nov2023.eml'],
            significance: 'Formal termination due to performance failures',
            impact_on_claim: 'high_positive'
        },
        {
            date: '2024-01-07',
            event: 'K&T Block C Investigation',
            description: '28 issues identified in comprehensive technical report',
            category: 'evidence',
            supporting_docs: ['kt_block_c_report.pdf', 'technical_photos.zip'],
            significance: 'Key technical evidence supporting claim',
            impact_on_claim: 'high_positive'
        },
        {
            date: '2024-02-16',
            event: 'Building Control Sign-off',
            description: 'BC approval following UL/K&T remediation works',
            category: 'resolution',
            supporting_docs: ['building_control_approval.pdf', 'remediation_completion.pdf'],
            significance: 'Validates technical failures and successful remediation',
            impact_on_claim: 'high_positive'
        }
    ],
    
    evidence: {
        blocks: ['Block A', 'Block B', 'Block C'],
        issues: [
            'Leaking boss connections',
            'Missing gasket seals',
            'Unglued fittings',
            'Poor workmanship',
            'Exclusion zone violations',
            'Odour escape',
            'Water damage'
        ],
        personnel: ['John Ford', 'John Angel', 'Kris Lyons', 'Will Harvey', 'Quinn Ross'],
        locations: ['Plot 4.05', 'Plot 6.03', 'Plot 5.05', 'Plot 3.05', 'Plot 4.04']
    }
};
