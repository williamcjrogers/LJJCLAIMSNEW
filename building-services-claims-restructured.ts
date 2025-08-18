// Comprehensive Building Services Claims Structure - Parent/Sub-Claim Hierarchy
import type { BuildingServicesClaims } from './src/types/claims.js';

const buildingServicesClaims: BuildingServicesClaims = {
  // SVP PARENT FOLDER
  SVP: {
    folder_type: 'parent',
    title: 'SVP (Soil Vent Pipe) Systems',
    description:
      'Comprehensive SVP system failures across all blocks with systematic defects and non-compliance issues',
    total_claim_value: 1670000,
    success_probability: 75,
    evidence_strength: 92,

    // ALL DOCUMENTS FOR SVP FOLDER
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
      'witness_statements_svp',
    ],

    sub_claims: {
      svp_technical_failures: {
        claim_reference: 'HOC-SVP-001',
        title: 'SVP Technical Installation Failures',
        description:
          '28 systematic installation failures identified by K&T investigation including leaking boss connections, missing gasket seals, and sub-standard workmanship',
        quantum_breakdown: {
          remediation_costs: 890000,
          investigation_costs: 280000,
          delay_costs: 320000,
          professional_fees: 180000,
          total_claim_value: 1670000,
        },
        success_probability: 75,
        evidence_strength: 92,
      },
    },
  },

  // BMS PARENT FOLDER
  BMS: {
    folder_type: 'parent',
    title: 'BMS (Building Management Systems)',
    description:
      'Systematic BMS integration failures, commissioning defects, and control system non-compliance spanning August 2023 to April 2024',
    total_claim_value: 950000,
    success_probability: 75,
    evidence_strength: 88,

    // ALL DOCUMENTS FOR BMS FOLDER
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
      'bms_system_architecture_drawings',
    ],

    sub_claims: {
      bms_integration_failures: {
        claim_reference: 'HOC-BMS-001',
        title: 'BMS Integration and Commissioning Failures',
        description:
          'LST missed BMS integration with CPGS systems, requiring reverse engineering attempts. Multiple NCR reports and failed commissioning attempts with documented non-compliance.',
        detailed_timeline: [
          {
            date: '12/08/23',
            event: 'LST Missed BMS Integration',
            description:
              'LST missed BMS integration with CPGS systems, requiring reverse engineering attempts with UL M&E Manager assistance',
          },
          {
            date: '25/09/23',
            event: 'Quinn Ross BMS Commissioning Inquiry',
            description:
              'Paul Vino (Quinn Ross) questioning if BMS engineers went through commissioning, encountered "a few dodgy issues"',
          },
          {
            date: '04/10/23',
            event: 'NCR - BMS Non-Compliance',
            description: 'Non-Conformance Report sent describing BMS system non-compliance issues',
          },
          {
            date: '11/04/24',
            event: 'UL M&E Manager to K&T - Motors Not Linked',
            description:
              'UL M&E Manager DB contacted K&T regarding no action on BMS motors not being linked up',
          },
          {
            date: '19/04/24',
            event: 'K&T BMS Completion Report',
            description: 'K&T Report confirming BMS completion with outstanding integration issues',
          },
        ],
        quantum_breakdown: {
          reverse_engineering_costs: 180000,
          delayed_commissioning: 95000,
          additional_integration_work: 220000,
          ncr_remediation_costs: 150000,
          extended_professional_fees: 120000,
          system_performance_losses: 185000,
          total_claim_value: 950000,
        },
        success_probability: 75,
        evidence_strength: 88,
      },
    },
  },

  // MECHANICAL BUILDING SERVICES PARENT FOLDER
  'Mechanical Building Services': {
    folder_type: 'parent',
    title: 'Mechanical Building Services',
    description:
      'Comprehensive mechanical system failures across 6 major subsystems affecting building performance, energy efficiency, and occupant comfort',
    total_claim_value: 4805000,
    success_probability: 69,
    evidence_strength: 80,

    // ALL DOCUMENTS FOR MECHANICAL BUILDING SERVICES FOLDER
    all_documents: [
      'mechanical_services_specifications',
      'commissioning_reports_mechanical',
      'energy_efficiency_assessments',
      'mechanical_system_drawings',
      'installation_method_statements',
      'testing_commissioning_certificates',
      'mechanical_defects_schedule',
      'service_dcws_pressure_reports',
      'chlorination_system_documentation',
      'duplex_pump_installation_records',
      'hiu_performance_test_results',
      'mvhr_ductwork_surveys',
      'ufh_installation_photos',
      'mechanical_remedial_works_schedule',
      'building_control_mechanical_approvals',
      'manufacturer_warranties_mechanical',
      'maintenance_access_assessments',
      'thermal_performance_calculations',
      'mechanical_system_balancing_reports',
      'occupant_comfort_surveys',
    ],

    sub_claims: {
      chlorination_systems: {
        claim_reference: 'HOC-MBS-CHL-001',
        title: 'Chlorination Systems & Service/DCWS',
        subfolder: 'Chlorination',
        description:
          'Water chlorination system defects and Service/DCWS low pressure issues documented since August 2021, spanning over 2 years of performance problems',
        key_timeline_issues: [
          {
            date: '13/12/23',
            event: 'Service/DCWS Low Pressure Documentation',
            description:
              'Low pressure issues picked up in various reports dating back to 12-08-21, indicating systemic performance problems',
          },
        ],
        quantum_breakdown: {
          system_remediation: 220000,
          pressure_system_repairs: 150000,
          compliance_costs: 95000,
          testing_expenses: 65000,
          performance_losses: 85000,
          total_claim_value: 615000,
        },
        success_probability: 78,
        evidence_strength: 85,
      },

      duplex_pump_systems: {
        claim_reference: 'HOC-MBS-DPX-001',
        title: 'Duplex Pump Systems',
        subfolder: 'Duplex 9',
        description:
          'Pump system failures including inadequate capacity, installation defects, and control system malfunctions affecting building water pressure and distribution',
        quantum_breakdown: {
          pump_replacement: 280000,
          system_redesign: 120000,
          installation_remediation: 95000,
          total_claim_value: 495000,
        },
        success_probability: 70,
        evidence_strength: 78,
      },

      hiu_systems: {
        claim_reference: 'HOC-MBS-HIU-001',
        title: 'HIU (Heat Interface Units)',
        subfolder: 'HIU',
        description:
          'Heat interface unit defects affecting individual apartment heating and hot water delivery with temperature control and efficiency issues',
        quantum_breakdown: {
          unit_replacements: 450000,
          commissioning_costs: 180000,
          efficiency_losses: 120000,
          total_claim_value: 750000,
        },
        success_probability: 68,
        evidence_strength: 80,
      },

      mechanical_general: {
        claim_reference: 'HOC-MBS-GEN-001',
        title: 'General Mechanical Systems',
        subfolder: 'Mechanical',
        description:
          'General mechanical building services defects including pipework, insulation, supports, and ancillary equipment installation failures',
        quantum_breakdown: {
          remedial_works: 380000,
          re_commissioning: 95000,
          efficiency_improvements: 150000,
          total_claim_value: 625000,
        },
        success_probability: 62,
        evidence_strength: 72,
      },

      mvhr_systems: {
        claim_reference: 'HOC-MBS-MVHR-001',
        title: 'MVHR (Mechanical Ventilation Heat Recovery)',
        subfolder: 'MVHR',
        description:
          'Mechanical ventilation heat recovery system defects affecting air quality, energy efficiency, and occupant comfort with commissioning and performance issues',
        quantum_breakdown: {
          system_remediation: 520000,
          ductwork_corrections: 280000,
          re_commissioning: 120000,
          total_claim_value: 920000,
        },
        success_probability: 72,
        evidence_strength: 85,
      },

      ufh_systems: {
        claim_reference: 'HOC-MBS-UFH-001',
        title: 'UFH (Underfloor Heating)',
        subfolder: 'UFH',
        description:
          'Underfloor heating system installation defects, control failures, and temperature distribution inadequacies affecting occupant comfort and energy efficiency',
        quantum_breakdown: {
          system_replacement: 680000,
          floor_reinstatement: 420000,
          controls_upgrade: 180000,
          total_claim_value: 1280000,
        },
        success_probability: 69,
        evidence_strength: 82,
      },
    },
  },

  // ELECTRICAL PARENT FOLDER
  Electrical: {
    folder_type: 'parent',
    title: 'Electrical Systems',
    description:
      'Comprehensive electrical system failures across 4 major subsystems including power distribution, lightning protection, security systems, and trace heating',
    total_claim_value: 2450000,
    success_probability: 69,
    evidence_strength: 81,

    // ALL DOCUMENTS FOR ELECTRICAL FOLDER
    all_documents: [
      'electrical_installation_certificates',
      'electrical_testing_reports',
      'power_distribution_drawings',
      'electrical_specifications',
      'lightning_protection_calculations',
      'bs_en_62305_compliance_reports',
      'security_system_programming_docs',
      'cctv_coverage_assessments',
      'access_control_database_logs',
      'trace_heating_installation_records',
      'electrical_remedial_works_schedule',
      'building_control_electrical_approvals',
      'electrical_defects_schedule',
      'manufacturer_warranties_electrical',
      'electrical_commissioning_reports',
      'earthing_bonding_test_certificates',
      'electrical_safety_assessments',
      'energy_efficiency_electrical',
      'electrical_maintenance_manuals',
      'electrical_as_built_drawings',
    ],

    sub_claims: {
      electrical_general: {
        claim_reference: 'HOC-ELE-GEN-001',
        title: 'General Electrical Systems',
        subfolder: 'Electrical',
        description:
          'General electrical installation defects including power distribution, lighting systems, and compliance with electrical regulations',
        quantum_breakdown: {
          remedial_installation: 450000,
          compliance_upgrades: 280000,
          testing_costs: 95000,
          total_claim_value: 825000,
        },
        success_probability: 66,
        evidence_strength: 78,
      },

      lightning_protection: {
        claim_reference: 'HOC-ELE-LP-001',
        title: 'Lightning Protection Systems',
        subfolder: 'Lightning Protection',
        description:
          'Lightning protection system installation defects and compliance failures with BS EN 62305 affecting building and occupant safety',
        quantum_breakdown: {
          system_redesign: 180000,
          installation_remediation: 220000,
          testing_certification: 80000,
          total_claim_value: 480000,
        },
        success_probability: 74,
        evidence_strength: 88,
      },

      security_access_control: {
        claim_reference: 'HOC-ELE-SAC-001',
        title: 'Security & Access Control Systems',
        subfolder: 'Security Access Control',
        description:
          'Security and access control system defects affecting building security, access management, and integration with building management systems',
        quantum_breakdown: {
          system_upgrade: 320000,
          hardware_replacement: 180000,
          programming_costs: 95000,
          total_claim_value: 595000,
        },
        success_probability: 63,
        evidence_strength: 75,
      },

      trace_heating: {
        claim_reference: 'HOC-ELE-TH-001',
        title: 'Trace Heating Systems',
        subfolder: 'Trace Heating',
        description:
          'Electric trace heating system defects including cable installation, control systems, and freeze protection inadequacies',
        quantum_breakdown: {
          cable_replacement: 280000,
          control_system_upgrade: 150000,
          insulation_remediation: 120000,
          total_claim_value: 550000,
        },
        success_probability: 71,
        evidence_strength: 83,
      },
    },
  },

  // LIFE SAFETY SYSTEMS PARENT FOLDER
  'Life Safety Systems': {
    folder_type: 'parent',
    title: 'Life Safety Systems',
    description:
      'Critical life safety system failures across fire alarm, emergency generator, and smoke ventilation systems affecting building safety compliance',
    total_claim_value: 2570000,
    success_probability: 78,
    evidence_strength: 90,

    // ALL DOCUMENTS FOR LIFE SAFETY SYSTEMS FOLDER
    all_documents: [
      'fire_alarm_system_drawings',
      'bs_5839_compliance_certificates',
      'fire_alarm_commissioning_reports',
      'generator_installation_records',
      'generator_load_testing_reports',
      'fuel_system_compliance_docs',
      'smoke_ventilation_calculations',
      'fire_safety_strategy_documents',
      'means_of_escape_assessments',
      'life_safety_remedial_works',
      'building_control_life_safety_approvals',
      'fire_risk_assessments',
      'emergency_lighting_certificates',
      'life_safety_defects_schedule',
      'manufacturer_warranties_life_safety',
      'maintenance_contracts_life_safety',
      'regulatory_compliance_reports',
      'fire_alarm_cause_effect_programming',
      'emergency_procedures_documentation',
      'life_safety_training_records',
    ],

    sub_claims: {
      fire_alarm_systems: {
        claim_reference: 'HOC-LSS-FA-001',
        title: 'Fire Alarm Systems',
        subfolder: 'Fire Alarm System',
        description:
          'Fire alarm system installation and commissioning defects affecting life safety compliance with BS 5839 standards and building regulation requirements',
        quantum_breakdown: {
          system_reconfiguration: 380000,
          device_replacement: 220000,
          recommissioning: 150000,
          total_claim_value: 750000,
        },
        success_probability: 78,
        evidence_strength: 90,
        regulatory_impact: 'High - life safety compliance critical',
      },

      generator_systems: {
        claim_reference: 'HOC-LSS-GEN-001',
        title: 'Emergency Generator Systems',
        subfolder: 'Generator',
        description:
          'Emergency generator installation, commissioning, and performance defects affecting critical life safety and building continuity systems',
        quantum_breakdown: {
          generator_replacement: 450000,
          fuel_system_remediation: 180000,
          controls_upgrade: 120000,
          installation_compliance: 95000,
          total_claim_value: 845000,
        },
        success_probability: 76,
        evidence_strength: 87,
        regulatory_impact: 'High - emergency power provision critical',
      },

      smoke_ventilation: {
        claim_reference: 'HOC-LSS-SV-001',
        title: 'Smoke Ventilation Systems',
        subfolder: 'Smoke Ventilation',
        description:
          'Smoke ventilation system defects affecting fire safety strategy compliance and means of escape protection with inadequate smoke clearance capabilities',
        quantum_breakdown: {
          fan_replacement: 320000,
          ductwork_remediation: 380000,
          control_system_upgrade: 180000,
          testing_compliance: 95000,
          total_claim_value: 975000,
        },
        success_probability: 80,
        evidence_strength: 92,
        regulatory_impact: 'Critical - fire safety and means of escape',
      },
    },
  },
};

// Calculate total values across all parent folders
const parentClaims = [
  buildingServicesClaims.SVP,
  buildingServicesClaims.BMS,
  buildingServicesClaims['Mechanical Building Services'],
  buildingServicesClaims.Electrical,
  buildingServicesClaims['Life Safety Systems'],
];

buildingServicesClaims.TOTALS = {
  total_claim_value: parentClaims.reduce((sum, folder) => sum + folder.total_claim_value, 0),

  total_sub_claims: parentClaims.reduce(
    (sum, folder) => sum + Object.keys(folder.sub_claims).length,
    0
  ),

  weighted_success_probability: Math.round(
    parentClaims.reduce(
      (sum, folder) => sum + folder.success_probability * folder.total_claim_value,
      0
    ) / parentClaims.reduce((sum, folder) => sum + folder.total_claim_value, 0)
  ),
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = buildingServicesClaims;
} else {
  (window as { buildingServicesClaims?: typeof buildingServicesClaims }).buildingServicesClaims =
    buildingServicesClaims;
}

export default buildingServicesClaims;
