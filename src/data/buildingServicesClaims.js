// Building Services Claims structure extracted from building-services-claims.js
export const buildingServicesClaims = {
    
    // SVP PARENT FOLDER
    SVP: {
        folder_type: 'parent',
        title: 'SVP (Soil Vent Pipe) Systems',
        description: 'Comprehensive SVP system failures across all blocks with systematic defects and non-compliance issues',
        total_claim_value: 1670000,
        success_probability: 75,
        evidence_strength: 92,
        
        all_documents: [
            'ljj_briefing_main',
            'kt_block_c_report',
            'svp_technical_drawings',
            'adjudication_decision',
            'ljj_progress_reports',
            'rfi_email_chains',
            'quantum_analysis',
            'caytons_legal_analysis',
            'cci_expert_report',
            'building_control_approval',
            'svp_installation_photos',
            'block_a_svp_survey',
            'block_b_svp_survey',
            'block_c_investigation_report',
            'svp_testing_certificates',
            'building_regs_part_h_compliance',
            'ljj_svp_specifications',
            'ul_svp_remedial_works',
            'svp_defects_schedule',
            'witness_statements_svp'
        ],
        
        sub_claims: {
            svp_technical_failures: {
                claim_reference: 'HOC-SVP-001',
                title: 'SVP Technical Installation Failures',
                description: '28 systematic installation failures identified by K&T investigation including leaking boss connections, missing gasket seals, and sub-standard workmanship',
                quantum_breakdown: {
                    remediation_costs: 890000,
                    investigation_costs: 280000,
                    delay_costs: 320000,
                    professional_fees: 180000,
                    total_claim_value: 1670000
                },
                success_probability: 75,
                evidence_strength: 92
            }
        }
    },

    // BMS PARENT FOLDER
    BMS: {
        folder_type: 'parent',
        title: 'BMS (Building Management Systems)',
        description: 'Systematic BMS integration failures, commissioning defects, and control system non-compliance spanning August 2023 to April 2024',
        total_claim_value: 950000,
        success_probability: 75,
        evidence_strength: 88,
        
        all_documents: [
            'adjudication_decision',
            'ljj_progress_reports',
            'rfi_email_chains',
            'quantum_analysis',
            'caytons_legal_analysis',
            'ncr_bms_noncompliance_04_10_23',
            'kt_bms_completion_report_19_04_24',
            'ul_me_manager_communications',
            'lst_bms_integration_failure_emails',
            'quinn_ross_bms_inspection_report',
            'bms_technical_specifications',
            'cpgs_integration_documentation',
            'bms_motor_linkage_reports',
            'bms_controls_configuration_files',
            'lst_reverse_engineering_attempts',
            'bms_commissioning_test_results',
            'ul_bms_remedial_works',
            'bms_performance_monitoring_reports',
            'building_control_bms_approval',
            'bms_system_architecture_drawings'
        ],
        
        sub_claims: {
            bms_integration_failures: {
                claim_reference: 'HOC-BMS-001',
                title: 'BMS Integration and Commissioning Failures',
                description: 'LST missed BMS integration with CPGS systems, requiring reverse engineering attempts. Multiple NCR reports and failed commissioning attempts with documented non-compliance.',
                quantum_breakdown: {
                    remediation_costs: 520000,
                    investigation_costs: 180000,
                    delay_costs: 150000,
                    professional_fees: 100000,
                    total_claim_value: 950000
                },
                success_probability: 75,
                evidence_strength: 88
            }
        }
    }
};

export default buildingServicesClaims;
