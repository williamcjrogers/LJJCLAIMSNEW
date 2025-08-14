// Building Services Claims Structure Based on Folder Organization

const buildingServicesClaims = {
    // SVP FOLDER
    svp_systems: {
        claim_reference: 'HOC-SVP-001',
        title: 'SVP (Soil Vent Pipe) Systems',
        parent_folder: 'SVP',
        description: 'Systematic failures in SVP installation, testing, and commissioning across all blocks with 28+ documented defects including leaking boss connections, missing gasket seals, and sub-standard workmanship',
        
        related_documents: [
            'ljj_briefing_main',
            'kt_block_c_report', 
            'svp_technical_drawings',
            'adjudication_decision',
            'ljj_progress_reports',
            'rfi_email_chains',
            'quantum_analysis',
            'caytons_legal_analysis'
        ],
        
        technical_issues: [
            '28 specific failures identified in Block C investigation',
            '12 leaking boss connections across multiple stacks',
            '8 missing or inadequate gasket seals',
            '5 unglued fittings creating failure points',
            'Poor workmanship standards throughout installation',
            'Odour escape and water damage evidence',
            'Non-compliance with Building Regulations Part H'
        ],
        
        quantum_breakdown: {
            remediation_costs: 890000,
            investigation_costs: 280000,
            delay_costs: 320000,
            professional_fees: 180000,
            total_claim_value: 1670000
        },
        
        success_probability: 75,
        evidence_strength: 92,
        key_risks: [
            'LJJ early damage reporting creates defensive position',
            'Missing K&T reports for Blocks A&B',
            'Time gap between installation and investigation'
        ]
    },

    // BMS FOLDER  
    bms_systems: {
        claim_reference: 'HOC-BMS-001',
        title: 'BMS (Building Management Systems)',
        parent_folder: 'BMS',
        description: 'Systematic failures in BMS integration, commissioning, and control systems with documented non-compliance issues and failed integration attempts spanning August 2023 to April 2024',
        
        related_documents: [
            'adjudication_decision',
            'ljj_progress_reports',
            'rfi_email_chains',
            'quantum_analysis',
            'caytons_legal_analysis',
            'ncr_bms_noncompliance_04_10_23',
            'kt_bms_completion_report_19_04_24',
            'ul_me_manager_communications'
        ],
        
        detailed_timeline: [
            {
                date: '12/08/23',
                event: 'LST Missed BMS Integration',
                description: 'LST missed BMS integration with CPGS systems, requiring reverse engineering attempts with UL M&E Manager assistance'
            },
            {
                date: '24/07/23', 
                event: 'UL M&E Manager BMS Assistance',
                description: 'UL M&E Manager attempting to assist LST integration into BMS downstream system'
            },
            {
                date: '25/09/23',
                event: 'Quinn Ross BMS Commissioning Inquiry', 
                description: 'Paul Vino (Quinn Ross) questioning if BMS engineers went through commissioning, encountered "a few dodgy issues"'
            },
            {
                date: '04/10/23',
                event: 'NCR - BMS Non-Compliance',
                description: 'Non-Conformance Report sent describing BMS system non-compliance issues'
            },
            {
                date: '11/04/24',
                event: 'UL M&E Manager to K&T - Motors Not Linked',
                description: 'UL M&E Manager DB contacted K&T regarding no action on BMS motors not being linked up'
            },
            {
                date: '12/04/24',
                event: 'K&T Engineer BMS Controls Confirmation', 
                description: 'K&T Engineer confirming BMS controls to be issued by 15/04/24'
            },
            {
                date: '19/04/24',
                event: 'K&T BMS Completion Report',
                description: 'K&T Report confirming BMS completion with outstanding integration issues'
            }
        ],
        
        technical_issues: [
            'LST failed integration with CPGS (Control Point Graphics System)',
            'BMS motors not properly linked up to control systems',
            'Reverse engineering required due to poor initial integration',
            'Commissioning defects identified during Quinn Ross inspection',
            'Non-compliance with BMS system specifications (NCR 04/10/23)',
            'Delayed controls delivery and configuration issues',
            'Integration failures between BMS and building services',
            'Control protocol programming defects requiring extensive remediation',
            'System monitoring and operational inadequacies'
        ],
        
        key_evidence: [
            'NCR dated 04/10/23 documenting specific non-compliance issues',
            'Email chain between UL M&E Manager and K&T (11/04/24-12/04/24)',
            'K&T BMS completion report (19/04/24) with outstanding issues',
            'Quinn Ross commissioning inspection notes (25/09/23)',
            'LST integration failure documentation (12/08/23)',
            'Correspondence showing reverse engineering requirements'
        ],
        
        quantum_breakdown: {
            reverse_engineering_costs: 180000,
            delayed_commissioning: 95000,
            additional_integration_work: 220000,
            ncr_remediation_costs: 150000,
            extended_professional_fees: 120000,
            system_performance_losses: 185000,
            total_claim_value: 950000
        },
        
        success_probability: 75,
        evidence_strength: 88,
        key_risks: [
            'LST may argue they attempted integration in good faith',
            'Timeline shows collaborative efforts with UL M&E Manager',
            'Need to prove failures were LST responsibility vs. system complexity'
        ],
        
        key_strengths: [
            'Documented NCR showing specific non-compliance',
            'Clear timeline of failed integration attempts',
            'Third party validation from Quinn Ross inspection',
            'K&T expert confirmation of outstanding issues',
            'UL M&E Manager communications showing LST failures'
        ]
    },

    // MECHANICAL BUILDING SERVICES FOLDER
    chlorination_systems: {
        claim_reference: 'HOC-MBS-CHL-001',
        title: 'Chlorination Systems & Service/DCWS',
        parent_folder: 'Mechanical Building Services',
        subfolder: 'Chlorination',
        description: 'Defects in water chlorination system installation, commissioning, and ongoing treatment effectiveness with documented low pressure issues in Service/DCWS systems dating back to August 2021',
        
        key_timeline_issues: [
            {
                date: '13/12/23',
                event: 'Service/DCWS Low Pressure Documentation',
                description: 'Low pressure issues picked up in various reports dating back to 12-08-21, indicating systemic performance problems'
            }
        ],
        
        technical_issues: [
            'Service/DCWS low pressure issues documented since August 2021',
            'Inadequate chlorination dosing equipment affecting water treatment',
            'Commissioning failures and testing defects in water systems',
            'Water quality compliance issues with ongoing pressure problems',
            'System monitoring and control inadequacies',
            'Health and safety regulation breaches in water treatment',
            'Performance degradation over 2+ year period (Aug 2021 - Dec 2023)'
        ],
        
        key_evidence: [
            'Service/DCWS low pressure reports spanning Aug 2021 - Dec 2023',
            'Documentation of systemic pressure performance issues',
            'Various technical reports confirming ongoing problems',
            'Water system commissioning and testing records'
        ],
        
        quantum_breakdown: {
            system_remediation: 220000,
            pressure_system_repairs: 150000,
            compliance_costs: 95000,
            testing_expenses: 65000,
            performance_losses: 85000,
            total_claim_value: 615000
        },
        
        success_probability: 78,
        evidence_strength: 85,
        
        key_strengths: [
            'Long-term documented performance issues (2+ years)',
            'Multiple reports confirming systemic problems',
            'Clear timeline showing degradation from Aug 2021'
        ]
    },

    duplex_pump_systems: {
        claim_reference: 'HOC-MBS-DPX-001', 
        title: 'Duplex Pump Systems',
        parent_folder: 'Mechanical Building Services',
        subfolder: 'Duplex 9',
        description: 'Pump system failures including inadequate capacity, installation defects, and control system malfunctions affecting building water pressure and distribution',
        
        technical_issues: [
            'Pump capacity inadequacies vs. design requirements',
            'Installation alignment and mounting defects',
            'Control system programming failures',
            'Pressure regulation inconsistencies',
            'Maintenance access restrictions'
        ],
        
        quantum_breakdown: {
            pump_replacement: 280000,
            system_redesign: 120000,
            installation_remediation: 95000,
            total_claim_value: 495000
        },
        
        success_probability: 70,
        evidence_strength: 78
    },

    hiu_systems: {
        claim_reference: 'HOC-MBS-HIU-001',
        title: 'HIU (Heat Interface Units)',
        parent_folder: 'Mechanical Building Services', 
        subfolder: 'HIU',
        description: 'Heat interface unit defects affecting individual apartment heating and hot water delivery with temperature control and efficiency issues',
        
        technical_issues: [
            'Temperature control inconsistencies',
            'Hot water delivery inadequacies',
            'Heat exchanger efficiency problems',
            'Control valve and sensor defects',
            'Installation and commissioning failures'
        ],
        
        quantum_breakdown: {
            unit_replacements: 450000,
            commissioning_costs: 180000,
            efficiency_losses: 120000,
            total_claim_value: 750000
        },
        
        success_probability: 68,
        evidence_strength: 80
    },

    mechanical_general: {
        claim_reference: 'HOC-MBS-GEN-001',
        title: 'General Mechanical Systems',
        parent_folder: 'Mechanical Building Services',
        subfolder: 'Mechanical',
        description: 'General mechanical building services defects including pipework, insulation, supports, and ancillary equipment installation failures',
        
        technical_issues: [
            'Pipework installation and support defects',
            'Insulation inadequacies and thermal bridging',
            'Valve and fitting installation problems',
            'System balancing and commissioning issues',
            'Access and maintenance provision failures'
        ],
        
        quantum_breakdown: {
            remedial_works: 380000,
            re_commissioning: 95000,
            efficiency_improvements: 150000,
            total_claim_value: 625000
        },
        
        success_probability: 62,
        evidence_strength: 72
    },

    mvhr_systems: {
        claim_reference: 'HOC-MBS-MVHR-001', 
        title: 'MVHR (Mechanical Ventilation Heat Recovery)',
        parent_folder: 'Mechanical Building Services',
        subfolder: 'MVHR',
        description: 'Mechanical ventilation heat recovery system defects affecting air quality, energy efficiency, and occupant comfort with commissioning and performance issues',
        
        technical_issues: [
            'Heat recovery efficiency below design parameters',
            'Ductwork installation and sealing defects',
            'Filter access and maintenance inadequacies',
            'Control system programming failures',
            'Commissioning and balancing defects',
            'Noise and vibration issues'
        ],
        
        quantum_breakdown: {
            system_remediation: 520000,
            ductwork_corrections: 280000,
            re_commissioning: 120000,
            total_claim_value: 920000
        },
        
        success_probability: 72,
        evidence_strength: 85
    },

    ufh_systems: {
        claim_reference: 'HOC-MBS-UFH-001',
        title: 'UFH (Underfloor Heating)', 
        parent_folder: 'Mechanical Building Services',
        subfolder: 'UFH',
        description: 'Underfloor heating system installation defects, control failures, and temperature distribution inadequacies affecting occupant comfort and energy efficiency',
        
        technical_issues: [
            'Pipe laying and spacing inadequacies',
            'Manifold and control system defects', 
            'Temperature distribution inconsistencies',
            'Insulation and thermal performance issues',
            'Integration failures with primary heating systems',
            'Floor finish compatibility problems'
        ],
        
        quantum_breakdown: {
            system_replacement: 680000,
            floor_reinstatement: 420000,
            controls_upgrade: 180000,
            total_claim_value: 1280000
        },
        
        success_probability: 69,
        evidence_strength: 82
    },

    // ELECTRICAL FOLDER
    electrical_general: {
        claim_reference: 'HOC-ELE-GEN-001',
        title: 'General Electrical Systems',
        parent_folder: 'Electrical',
        subfolder: 'Electrical',
        description: 'General electrical installation defects including power distribution, lighting systems, and compliance with electrical regulations',
        
        technical_issues: [
            'Power distribution board inadequacies',
            'Cable routing and protection defects',
            'Earthing and bonding compliance issues',
            'Circuit protection and discrimination problems',
            'Installation workmanship standards',
            'Testing and certification inadequacies'
        ],
        
        quantum_breakdown: {
            remedial_installation: 450000,
            compliance_upgrades: 280000,
            testing_costs: 95000,
            total_claim_value: 825000
        },
        
        success_probability: 66,
        evidence_strength: 78
    },

    lightning_protection: {
        claim_reference: 'HOC-ELE-LP-001',
        title: 'Lightning Protection Systems',
        parent_folder: 'Electrical',
        subfolder: 'Lightning Protection', 
        description: 'Lightning protection system installation defects and compliance failures with BS EN 62305 affecting building and occupant safety',
        
        technical_issues: [
            'Air termination network inadequacies',
            'Down conductor routing and bonding defects',
            'Earth termination system failures',
            'Equipotential bonding inadequacies',
            'System testing and certification issues',
            'Risk assessment calculation errors'
        ],
        
        quantum_breakdown: {
            system_redesign: 180000,
            installation_remediation: 220000,
            testing_certification: 80000,
            total_claim_value: 480000
        },
        
        success_probability: 74,
        evidence_strength: 88
    },

    security_access_control: {
        claim_reference: 'HOC-ELE-SAC-001',
        title: 'Security & Access Control Systems',
        parent_folder: 'Electrical', 
        subfolder: 'Security Access Control',
        description: 'Security and access control system defects affecting building security, access management, and integration with building management systems',
        
        technical_issues: [
            'Access control programming and database issues',
            'Card reader and electronic lock failures',
            'CCTV system coverage and quality inadequacies',
            'Integration failures with BMS and fire systems',
            'Communication network stability problems',
            'User interface and management software defects'
        ],
        
        quantum_breakdown: {
            system_upgrade: 320000,
            hardware_replacement: 180000,
            programming_costs: 95000,
            total_claim_value: 595000
        },
        
        success_probability: 63,
        evidence_strength: 75
    },

    trace_heating: {
        claim_reference: 'HOC-ELE-TH-001',
        title: 'Trace Heating Systems',
        parent_folder: 'Electrical',
        subfolder: 'Trace Heating',
        description: 'Electric trace heating system defects including cable installation, control systems, and freeze protection inadequacies',
        
        technical_issues: [
            'Heating cable installation and routing defects',
            'Temperature sensing and control inadequacies',
            'Insulation and weather protection failures',
            'Power supply and distribution problems',
            'System commissioning and testing defects',
            'Energy efficiency and running cost issues'
        ],
        
        quantum_breakdown: {
            cable_replacement: 280000,
            control_system_upgrade: 150000,
            insulation_remediation: 120000,
            total_claim_value: 550000
        },
        
        success_probability: 71,
        evidence_strength: 83
    },

    // LIFE SAFETY SYSTEMS FOLDER
    fire_alarm_systems: {
        claim_reference: 'HOC-LSS-FA-001',
        title: 'Fire Alarm Systems',
        parent_folder: 'Life Safety Systems',
        subfolder: 'Fire Alarm System',
        description: 'Fire alarm system installation and commissioning defects affecting life safety compliance with BS 5839 standards and building regulation requirements',
        
        technical_issues: [
            'Detection coverage and device positioning inadequacies',
            'Control panel programming and zone configuration defects',
            'Sounder and beacon installation problems',
            'Communication with other fire safety systems',
            'Cause and effect programming failures',
            'Testing, commissioning, and certification issues'
        ],
        
        quantum_breakdown: {
            system_reconfiguration: 380000,
            device_replacement: 220000,
            recommissioning: 150000,
            total_claim_value: 750000
        },
        
        success_probability: 78,
        evidence_strength: 90,
        regulatory_impact: 'High - life safety compliance critical'
    },

    generator_systems: {
        claim_reference: 'HOC-LSS-GEN-001',
        title: 'Emergency Generator Systems',
        parent_folder: 'Life Safety Systems',
        subfolder: 'Generator',
        description: 'Emergency generator installation, commissioning, and performance defects affecting critical life safety and building continuity systems',
        
        technical_issues: [
            'Generator capacity inadequacies vs. load requirements',
            'Fuel system installation and compliance defects',
            'Control and monitoring system failures',
            'Load transfer and synchronization problems',
            'Exhaust and ventilation system inadequacies',
            'Testing and maintenance access restrictions'
        ],
        
        quantum_breakdown: {
            generator_replacement: 450000,
            fuel_system_remediation: 180000,
            controls_upgrade: 120000,
            installation_compliance: 95000,
            total_claim_value: 845000
        },
        
        success_probability: 76,
        evidence_strength: 87,
        regulatory_impact: 'High - emergency power provision critical'
    },

    smoke_ventilation: {
        claim_reference: 'HOC-LSS-SV-001',
        title: 'Smoke Ventilation Systems',
        parent_folder: 'Life Safety Systems',
        subfolder: 'Smoke Ventilation',
        description: 'Smoke ventilation system defects affecting fire safety strategy compliance and means of escape protection with inadequate smoke clearance capabilities',
        
        technical_issues: [
            'Smoke extract fan capacity and positioning inadequacies',
            'Ductwork design and fire resistance defects',
            'Control system integration and cause/effect failures',
            'Natural ventilation opening inadequacies',
            'Pressurization system performance defects',
            'Testing and commissioning compliance issues'
        ],
        
        quantum_breakdown: {
            fan_replacement: 320000,
            ductwork_remediation: 380000,
            control_system_upgrade: 180000,
            testing_compliance: 95000,
            total_claim_value: 975000
        },
        
        success_probability: 80,
        evidence_strength: 92,
        regulatory_impact: 'Critical - fire safety and means of escape'
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = buildingServicesClaims;
} else {
    window.buildingServicesClaims = buildingServicesClaims;
}