// LJJ Deductions Breakdown Data - Imported from CSV
// Based on "LJJ Deductions Breakdown 15.08.25.csv"

export const ljjClaimsData = {
  // Heads of Claim from LJJ data
  heads_of_claim: {
    soil_vent_pipes: {
      id: 'HOC-001',
      folder_ref: '1',
      title: 'Soil Vent Pipes',
      description: 'SVP system installation and performance failures',
      claim_value: 1670000, // Will need actual values
      success_probability: 75,
      evidence_strength: 92,
      status: 'active',

      timeline: [
        {
          date: '2021-03-23',
          event: 'SVP Benchmark for Inspection',
          description: 'Initial benchmarking requirements established',
          category: 'contractual',
          impact: 'low',
        },
        {
          date: '2021-08-02',
          event: 'First LJJ Damage Reports',
          description: 'LJJ begins reporting SVP damage - defensive position',
          category: 'critical',
          impact: 'high_negative',
        },
        {
          date: '2024-01-07',
          event: 'K&T Block C Investigation',
          description: '28 technical issues identified',
          category: 'evidence',
          impact: 'high_positive',
        },
      ],

      sub_claims: {
        svp_defects: {
          id: 'SVP-001',
          title: 'Soil Vent Pipes',
          description: 'General SVP system defects and failures',
          claim_value: 1670000,
          status: 'strong',
          evidence_items: [
            'K&T Block C Report',
            'Installation photographs',
            'Technical drawings',
            'Building Control correspondence',
          ],
          defects: [
            'Leaking boss connections',
            'Missing gasket seals',
            'Unglued fittings',
            'Poor workmanship',
            'Exclusion zone violations',
            'Odour escape',
            'Water damage',
          ],
        },
      },
    },

    building_management_system: {
      id: 'HOC-002',
      folder_ref: '2',
      title: 'Building Management System',
      description: 'BMS integration and commissioning failures',
      claim_value: 950000,
      success_probability: 72,
      evidence_strength: 85,
      status: 'active',

      timeline: [
        {
          date: '2023-08-12',
          event: 'LST Missed BMS Integration',
          description: 'LST missed BMS integration with CPGS systems',
          category: 'critical',
          impact: 'high_positive',
        },
        {
          date: '2023-10-04',
          event: 'NCR BMS Non-compliance',
          description: 'Formal non-compliance report issued',
          category: 'formal',
          impact: 'high_positive',
        },
      ],

      sub_claims: {
        bms_defects: {
          id: 'BMS-001',
          title: 'BMS',
          description: 'Building Management System integration and control failures',
          claim_value: 950000,
          status: 'strong',
          evidence_items: [
            'Integration test results',
            'NCR reports',
            'System architecture documents',
            'LST correspondence',
          ],
          defects: [
            'CPGS integration failure',
            'Control system incompatibility',
            'Software configuration errors',
            'Commissioning failures',
          ],
        },
      },
    },

    mechanical_building_services: {
      id: 'HOC-003',
      folder_ref: '3',
      title: 'Mechanical Building Services',
      description: 'Comprehensive mechanical services failures across multiple systems',
      claim_value: 850000,
      success_probability: 68,
      evidence_strength: 78,
      status: 'active',

      timeline: [
        {
          date: '2022-05-15',
          event: 'Chlorination System Issues',
          description: 'Chlorination system defects identified',
          category: 'technical',
          impact: 'medium_positive',
        },
        {
          date: '2022-08-20',
          event: 'HIU Performance Problems',
          description: 'Heat Interface Unit performance failures',
          category: 'technical',
          impact: 'medium_positive',
        },
      ],

      sub_claims: {
        chlorination: {
          id: 'MBS-001',
          title: 'Chlorination',
          description: 'Water chlorination system defects and non-compliance',
          claim_value: 170000,
          status: 'medium',
          evidence_items: [
            'Water test results',
            'Chlorination reports',
            'Compliance documentation',
          ],
          defects: [
            'System performance failures',
            'Non-compliance with standards',
            'Poor installation',
          ],
        },
        duplex_9: {
          id: 'MBS-002',
          title: 'Duplex 9',
          description: 'Duplex pump system failures',
          claim_value: 150000,
          status: 'medium',
          evidence_items: ['Pump test results', 'Performance reports'],
          defects: ['Pump failures', 'Control system issues', 'Installation defects'],
        },
        hiu: {
          id: 'MBS-003',
          title: 'HIU',
          description: 'Heat Interface Unit performance and installation issues',
          claim_value: 200000,
          status: 'strong',
          evidence_items: [
            'HIU test certificates',
            'Performance monitoring',
            'Installation photos',
          ],
          defects: ['Performance failures', 'Installation defects', 'Control issues'],
        },
        mvhr: {
          id: 'MBS-004',
          title: 'MVHR',
          description: 'Mechanical Ventilation with Heat Recovery system defects',
          claim_value: 180000,
          status: 'medium',
          evidence_items: ['Ventilation test results', 'Heat recovery performance data'],
          defects: ['Ventilation failures', 'Heat recovery issues', 'Installation problems'],
        },
        ufh: {
          id: 'MBS-005',
          title: 'UFH',
          description: 'Underfloor Heating system failures',
          claim_value: 150000,
          status: 'medium',
          evidence_items: [
            'UFH commissioning reports',
            'Temperature monitoring',
            'System drawings',
          ],
          defects: ['Heating failures', 'Temperature control issues', 'Installation defects'],
        },
      },
    },

    electrical: {
      id: 'HOC-004',
      folder_ref: '4',
      title: 'Electrical',
      description: 'Electrical systems installation and performance failures',
      claim_value: 420000,
      success_probability: 70,
      evidence_strength: 75,
      status: 'active',

      timeline: [
        {
          date: '2022-06-10',
          event: 'Lightning Protection Issues',
          description: 'Lightning protection system defects identified',
          category: 'safety',
          impact: 'high_positive',
        },
        {
          date: '2022-09-15',
          event: 'Access Control Failures',
          description: 'Security access control system failures',
          category: 'technical',
          impact: 'medium_positive',
        },
      ],

      sub_claims: {
        lightning_protection: {
          id: 'ELE-001',
          title: 'Lightning Protection',
          description: 'Lightning protection system installation and testing failures',
          claim_value: 180000,
          status: 'strong',
          evidence_items: [
            'Lightning protection test results',
            'Installation certificates',
            'Safety documentation',
          ],
          defects: ['Installation defects', 'Test failures', 'Non-compliance with standards'],
        },
        security_access_control: {
          id: 'ELE-002',
          title: 'Security Access Control',
          description: 'Security access control system failures and defects',
          claim_value: 140000,
          status: 'medium',
          evidence_items: ['Access control test results', 'System commissioning reports'],
          defects: ['System failures', 'Integration issues', 'Performance problems'],
        },
        trace_heating: {
          id: 'ELE-003',
          title: 'Trace Heating',
          description: 'Trace heating system installation and performance issues',
          claim_value: 100000,
          status: 'medium',
          evidence_items: [
            'Trace heating test results',
            'Temperature monitoring',
            'Installation records',
          ],
          defects: ['Heating failures', 'Control issues', 'Installation defects'],
        },
      },
    },

    life_safety_systems: {
      id: 'HOC-005',
      folder_ref: '5',
      title: 'Life Safety Systems',
      description: 'Critical life safety systems failures and non-compliance',
      claim_value: 380000,
      success_probability: 80,
      evidence_strength: 88,
      status: 'active',

      timeline: [
        {
          date: '2022-04-20',
          event: 'Fire Alarm System Issues',
          description: 'Fire alarm system defects and non-compliance identified',
          category: 'safety',
          impact: 'high_positive',
        },
        {
          date: '2022-07-25',
          event: 'Generator Performance Problems',
          description: 'Emergency generator performance failures',
          category: 'critical',
          impact: 'high_positive',
        },
      ],

      sub_claims: {
        fire_alarm_system: {
          id: 'LSS-001',
          title: 'Fire Alarm System',
          description: 'Fire alarm system installation and performance defects',
          claim_value: 160000,
          status: 'strong',
          evidence_items: [
            'Fire alarm test certificates',
            'Commissioning reports',
            'Compliance documentation',
          ],
          defects: ['System failures', 'Non-compliance', 'Installation defects'],
        },
        generator: {
          id: 'LSS-002',
          title: 'Generator',
          description: 'Emergency generator performance and testing failures',
          claim_value: 120000,
          status: 'strong',
          evidence_items: [
            'Generator test results',
            'Performance monitoring',
            'Maintenance records',
          ],
          defects: ['Performance failures', 'Testing issues', 'Maintenance problems'],
        },
        smoke_ventilation: {
          id: 'LSS-003',
          title: 'Smoke Ventilation',
          description: 'Smoke ventilation system defects and performance issues',
          claim_value: 100000,
          status: 'medium',
          evidence_items: ['Smoke ventilation test results', 'Performance monitoring'],
          defects: ['Ventilation failures', 'Control issues', 'Installation problems'],
        },
      },
    },

    design: {
      id: 'HOC-006A',
      folder_ref: '6',
      title: 'Design',
      description: 'Design-related failures and professional liability issues',
      claim_value: 250000,
      success_probability: 60,
      evidence_strength: 70,
      status: 'active',

      timeline: [
        {
          date: '2021-12-01',
          event: 'Design Defects Identified',
          description: 'Multiple design defects across various systems',
          category: 'design',
          impact: 'medium_positive',
        },
      ],

      sub_claims: {
        design_pro_rata_1: {
          id: 'DES-001',
          title: 'Design Pro-Rata 1',
          description: 'Design liability allocation - Category 1',
          claim_value: 50000,
          status: 'medium',
          evidence_items: ['Design drawings', 'Specification documents'],
          defects: ['Design errors', 'Specification failures'],
        },
        design_pro_rata_2: {
          id: 'DES-002',
          title: 'Design Pro-Rata 2',
          description: 'Design liability allocation - Category 2',
          claim_value: 50000,
          status: 'medium',
          evidence_items: ['Design calculations', 'Technical specifications'],
          defects: ['Calculation errors', 'Technical failures'],
        },
        design_pro_rata_3: {
          id: 'DES-003',
          title: 'Design Pro-Rata 3',
          description: 'Design liability allocation - Category 3',
          claim_value: 50000,
          status: 'medium',
          evidence_items: ['Design coordination documents'],
          defects: ['Coordination failures', 'Interface issues'],
        },
        design_pro_rata_4: {
          id: 'DES-004',
          title: 'Design Pro-Rata 4',
          description: 'Design liability allocation - Category 4',
          claim_value: 50000,
          status: 'medium',
          evidence_items: ['System integration documents'],
          defects: ['Integration failures', 'System conflicts'],
        },
        design_pro_rata_5: {
          id: 'DES-005',
          title: 'Design Pro-Rata 5',
          description: 'Design liability allocation - Category 5',
          claim_value: 50000,
          status: 'medium',
          evidence_items: ['Performance specifications'],
          defects: ['Performance failures', 'Specification issues'],
        },
      },
    },

    overheads_profit: {
      id: 'HOC-006B',
      folder_ref: '6',
      title: 'OH&P',
      description: 'Overheads and Profit allocation across claims',
      claim_value: 200000,
      success_probability: 65,
      evidence_strength: 60,
      status: 'active',

      timeline: [
        {
          date: '2024-06-01',
          event: 'OH&P Allocation Review',
          description: 'Review of overheads and profit allocation methodology',
          category: 'commercial',
          impact: 'medium_positive',
        },
      ],

      sub_claims: {
        pro_rata_1: {
          id: 'OHP-001',
          title: 'Pro-rata 1',
          description: 'Overheads and profit allocation - Category 1',
          claim_value: 40000,
          status: 'medium',
          evidence_items: ['Cost allocation documents', 'Financial records'],
          defects: ['Allocation methodology issues'],
        },
        pro_rata_2: {
          id: 'OHP-002',
          title: 'Pro-rata 2',
          description: 'Overheads and profit allocation - Category 2',
          claim_value: 40000,
          status: 'medium',
          evidence_items: ['Commercial documentation'],
          defects: ['Commercial calculation errors'],
        },
        pro_rata_3: {
          id: 'OHP-003',
          title: 'Pro-rata 3',
          description: 'Overheads and profit allocation - Category 3',
          claim_value: 40000,
          status: 'medium',
          evidence_items: ['Project cost records'],
          defects: ['Cost allocation issues'],
        },
        pro_rata_4: {
          id: 'OHP-004',
          title: 'Pro-rata 4',
          description: 'Overheads and profit allocation - Category 4',
          claim_value: 40000,
          status: 'medium',
          evidence_items: ['Financial analysis'],
          defects: ['Financial methodology issues'],
        },
        pro_rata_5: {
          id: 'OHP-005',
          title: 'Pro-rata 5',
          description: 'Overheads and profit allocation - Category 5',
          claim_value: 40000,
          status: 'medium',
          evidence_items: ['Profit allocation records'],
          defects: ['Profit calculation issues'],
        },
      },
    },

    snagging_kilmurray: {
      id: 'HOC-007',
      folder_ref: '7',
      title: 'Snagging - Kilmurray',
      description: 'Snagging and defects rectification by Kilmurray',
      claim_value: 150000,
      success_probability: 75,
      evidence_strength: 80,
      status: 'active',

      timeline: [
        {
          date: '2023-05-15',
          event: 'Kilmurray Snagging Report',
          description: 'Comprehensive snagging report produced by Kilmurray',
          category: 'evidence',
          impact: 'high_positive',
        },
      ],

      sub_claims: {
        snagging: {
          id: 'SNK-001',
          title: 'Snagging',
          description: 'General snagging items and defects rectification',
          claim_value: 150000,
          status: 'strong',
          evidence_items: ['Kilmurray snagging report', 'Defects schedules', 'Rectification costs'],
          defects: [
            'Outstanding snagging items',
            'Defects requiring rectification',
            'Quality issues',
          ],
        },
      },
    },

    me_monitoring: {
      id: 'HOC-008',
      folder_ref: '8',
      title: 'M&E Monitoring',
      description: 'M&E systems monitoring and Quinn Ross involvement',
      claim_value: 120000,
      success_probability: 70,
      evidence_strength: 75,
      status: 'active',

      timeline: [
        {
          date: '2022-03-10',
          event: 'Quinn Ross Monitoring Commenced',
          description: 'Quinn Ross begins M&E systems monitoring',
          category: 'monitoring',
          impact: 'medium_positive',
        },
      ],

      sub_claims: {
        quinn_ross: {
          id: 'MEM-001',
          title: 'Quinn Ross',
          description: 'Quinn Ross M&E monitoring and reporting activities',
          claim_value: 120000,
          status: 'medium',
          evidence_items: ['Quinn Ross reports', 'Monitoring data', 'System performance records'],
          defects: ['Monitoring findings', 'Performance issues', 'System defects identified'],
        },
      },
    },
  },
};

export default ljjClaimsData;
