// Comprehensive Evidence Registry for LJJ SVP Claim Management
// Maps all evidence files from OneDrive to heads of claim and defects

export const comprehensiveEvidenceRegistry = {
  basePath: 'C:/Users/William/Downloads/OneDrive_1_14-08-2025/LJJ - MEP Information Pack for DACB',

  headsOfClaim: {
    'Soil Vent Pipes': {
      id: 'svp',
      description: 'Soil Vent Pipes - Drainage Pipe Insulation',
      totalClaim: '£344,597.50',
      defects: [
        'Damaged roof cowls',
        'Defective drainage works',
        'Failed stack testing',
        'Remediation works required',
      ],
      evidenceFolders: {
        'Design Documents': {
          path: "WR New/1. SVP's/1. Design",
          subfolders: {
            'Construction As-Built': 'Construction-As Built Issue',
            'Previous Revisions': 'Previous Revisions',
            'K&T Reports': 'K&T',
          },
        },
        NCRs: {
          path: "WR New/1. SVP's/2. NCR's",
          files: [
            'LJJ Notice 8 SVP Pipe.pdf',
            'LJJ Notice 9 SVP Pipe.pdf',
            'ULG-NCR-000031.pdf',
            'ULG-NCR-000046 SVP.pdf',
          ],
        },
        Notices: {
          path: "WR New/1. SVP's/3. Notices",
        },
        Correspondence: {
          path: "WR New/1. SVP's/4. Correspondence",
        },
        Reports: {
          path: "WR New/1. SVP's/6. Reports",
          files: [
            'EJ924 Welbourne Site Observation Tracker 2024_01_25.pdf',
            'SVP Report (26_1_24).pdf',
          ],
        },
        Briefing: {
          path: "WR New/1. SVP's",
          files: ['a. LJJ SVP Validation Briefing 11.08.25.pdf'],
        },
      },
    },

    'Building Management System': {
      id: 'bms',
      description: 'BMS Integration and Control Systems',
      totalClaim: '£67,450.00',
      defects: ['HIU safety valve non-compliance', 'MVHR switching issues', 'Interface failures'],
      evidenceFolders: {
        Design: {
          path: 'WR New/2. Building Management System/1. Design',
        },
        NCRs: {
          path: "WR New/2. Building Management System/2. NCR's",
          files: ['20240410122010738.pdf', 'ULG-NCR-000067 BMS.pdf'],
        },
        Correspondence: {
          path: 'WR New/2. Building Management System/4. Correspondence',
        },
        'Photo Evidence': {
          path: 'WR New/2. Building Management System/6.  Photo and Video Evidence',
        },
      },
    },

    'Mechanical Building Services': {
      id: 'mechanical',
      description: 'HVAC, Heating, and Mechanical Systems',
      totalClaim: '£98,330.00',
      defects: [
        'HIU safety valve discharge non-compliance',
        'MVHR missing switches',
        'Insulation defects',
        'Generator load issues',
      ],
      evidenceFolders: {
        Chlorination: {
          path: 'WR New/3. Mechanical Building Services/Chlorination',
        },
        'Duplex 9': {
          path: 'WR New/3. Mechanical Building Services/Duplex 9',
        },
        MVHR: {
          path: 'WR New/3. Mechanical Building Services/MVHR',
        },
        Mechanical: {
          path: 'WR New/3. Mechanical Building Services/Mechanical',
        },
        UFH: {
          path: 'WR New/3. Mechanical Building Services/UFH',
        },
      },
    },

    Electrical: {
      id: 'electrical',
      description: 'Electrical Installation and Systems',
      totalClaim: '£357,600.00',
      defects: [
        'Level 11 faults',
        'Lighting remediation',
        'NIC certification issues',
        'Distribution board defects',
        'Access control defects',
        'External lighting issues',
      ],
      evidenceFolders: {
        Electrical: {
          path: 'WR New/4. Electrical/Electrical',
        },
        'Lightning Protection': {
          path: 'WR New/4. Electrical/Lightning Protection',
        },
        'Security Access Control': {
          path: 'WR New/4. Electrical/Security Access Control',
        },
        'TV and Satellite': {
          path: 'WR New/4. Electrical/TV and Satellite',
        },
        'Trace Heating': {
          path: 'WR New/4. Electrical/Trace Heating',
        },
      },
    },

    'Life Safety Systems': {
      id: 'life-safety',
      description: 'Fire Alarm, Sprinklers, and Emergency Systems',
      totalClaim: '£181,300.00',
      defects: [
        'BCW system wiring issues',
        'Fire alarm investigation',
        'Sprinkler interface failures',
        'Priority valve wiring',
        'Smoke detector positioning',
      ],
      evidenceFolders: {
        'Fire Alarm System': {
          path: 'WR New/5. Life Safety Systems/Fire Alarm System',
        },
        Generator: {
          path: 'WR New/5. Life Safety Systems/Generator',
        },
        'Smoke Ventilation': {
          path: 'WR New/5. Life Safety Systems/Smoke Ventilation',
        },
      },
    },
  },

  // Additional evidence categories
  additionalEvidence: {
    'Design Documentation': {
      path: 'WR New/6. Design',
      description: 'Overall design documentation',
    },
    'OH&P': {
      path: 'WR New/7. OH&P',
      description: 'Overheads and Profit calculations',
    },
    Snagging: {
      path: 'WR New/8. Snagging - Kilmurrays',
      description: 'Snagging reports from Kilmurrays',
    },
    'M&E Monitoring': {
      path: 'WR New/9. M&E Monitoring/Quinn Ross',
      description: 'Quinn Ross monitoring reports',
    },
  },

  // NCR Registry
  ncrs: {
    'Part 1': {
      path: "LJJ NCRs' Part 1",
      files: [
        'LJJ NCR 1.pdf',
        'LJJ NCR 2.pdf',
        'LJJ NCR 3.pdf',
        'LJJ NCR 4.pdf',
        'LJJ NCR 5.pdf',
        'LJJ NCR 6.pdf',
        'LJJ NCR 7.pdf',
        'LJJ NCR 8.pdf',
        'LJJ NCR 9.pdf',
        'LJJ NCR 10.pdf',
        'LJJ NCR 11.pdf',
        'LJJ NCR 12.pdf',
        'LJJ NCR 13.pdf',
        'LJJ NCR 14.pdf',
        'LJJ NCR 15.pdf',
        'LJJ NCR 16.pdf',
        'LJJ NCR 17.pdf',
        'LJJ NCR 18.pdf',
        'LJJ NCR 19.pdf',
        'LJJ NCR 20.pdf',
        'LJJ NCR 21.pdf',
        'LJJ NCR 22.pdf',
        'LJJ NCR 23.pdf',
      ],
    },
    'Part 2': {
      path: "LJJ NCRs' Part 2",
      files: [
        'ULG-NCR-000019.pdf',
        'ULG-NCR-000026.pdf',
        'ULG-NCR-000028.pdf',
        'ULG-NCR-000029.pdf',
        'ULG-NCR-000030.pdf',
        'ULG-NCR-000031.pdf',
        'ULG-NCR-000032.pdf',
        'ULG-NCR-000033.pdf',
        'ULG-NCR-000034.pdf',
        'ULG-NCR-000035.pdf',
        'ULG-NCR-000036.pdf',
        'ULG-NCR-000037.pdf',
        'ULG-NCR-000038.pdf',
        'ULG-NCR-000039.pdf',
        'ULG-NCR-000040.pdf',
        'ULG-NCR-000042.pdf',
        'ULG-NCR-000043.pdf',
        'ULG-NCR-000044.pdf',
        'ULG-NCR-000045.pdf',
        'ULG-NCR-000046.pdf',
        'ULG-NCR-000047.pdf',
        'ULG-NCR-000048.pdf',
        'ULG-NCR-000049.pdf',
        'ULG-NCR-000050.pdf',
        'ULG-NCR-000051.pdf',
        'ULG-NCR-000052.pdf',
        'ULG-NCR-000053.pdf',
        'ULG-NCR-000054.pdf',
        'ULG-NCR-000055.pdf',
        'ULG-NCR-000056.pdf',
        'ULG-NCR-000057.pdf',
        'ULG-NCR-000058.pdf',
        'ULG-NCR-000061.pdf',
        'ULG-NCR-000064.pdf',
      ],
    },
  },

  // Notices Registry
  notices: {
    path: 'LJJ Notices',
    files: [
      'LJJ Mechanaincal  Electrical Limited   - 002 - Failure to Progress Diligently - (16022023).docx',
      'LJJ Mechanaincal  Electrical Limited   - 003 - Delay notice 9th March 23.docx',
      'LJJ Mechanaincal  Electrical Limited   - 004 - Failure to Progress Diligently - .docx',
    ],
    numbered: {
      'Notice 6': ['LJJ Notice 6 Sprinkler Commissioning.pdf'],
      'Notice 7': ['JB-4262-011 - Response to UL210623WELLJJ007.pdf'],
      'Notice 8': ['LJJ Notice 8 SVP Pipe.pdf'],
      'Notice 9': ['LJJ Notice 9 SVP Pipe.pdf'],
      'Notice 10': ['LJJ Notice 10 Fire Alarm.pdf'],
      'Notice 11': ['LJJ Notice 11 Fire Alarm.pdf'],
      'Notice 12': ['LJJ Notice 12 Fire Alarm.pdf'],
      'Notice 13': ['LJJ Omittance of Works Notice 13.pdf'],
      'Notice 14': ['LJJ  Failure to Progress Diligently Notice 14.pdf'],
    },
  },

  // Key Correspondence
  keyCorrespondence: {
    'Paul Walker': {
      path: 'LJJ Key Correspondence/Paul Walker',
      description: 'UL Project Director correspondence',
    },
    'Tony Loftman': {
      path: 'LJJ Key Correspondence/Tony Loftman',
      description: 'UL M&E Manager correspondence',
    },
    'Paul Vine': {
      path: 'LJJ Key Correspondence/Paul Vine',
      description: 'Technical correspondence',
    },
    'Kieran Flaherty': {
      path: 'LJJ Key Correspondence/Kieran Flaherty',
      description: 'Contract correspondence',
    },
  },

  // Supporting Documents
  supportingDocuments: {
    Insurance: {
      path: '5',
      files: [
        '2020-2021 Cover Verification.pdf',
        '2021-2022 Cover Verification.pdf',
        'Cover Verification 2022-2023.pdf',
        'LJJ 2023 TWIMC.pdf',
        'LJJ 2024-2025 Insurances TWIMC.pdf',
      ],
    },
    Trackers: {
      files: [
        'K&T Full testing tracker.xlsx',
        'M&E Cert tracker 21.02.24.ods',
        'Welbourne - LJJ Key Correspondence Summary 30.08.24.xlsx',
        'Welbourne - LJJ - Sharepoint Folder Information.xlsx',
      ],
    },
    'Photo Evidence': {
      path: '9',
      files: [
        'Block B SVP Testing No2.zip',
        'Block B SVP Testing.zip',
        'Block C Defects.zip',
        'Damaged Items Block A, B and C.zip',
        'Duplexes SVP Testing.zip',
      ],
    },
  },

  // Quinn Ross Reports
  quinnRossReports: {
    path: '3/Quinn Ross - Reports & General Correspondence (UL M&E Monitoring Consultant)',
    files: [
      'P1939-MEP SITE INSPECTION 04 13.08.21.pdf',
      'P1939-MEP SITE INSPECTION 06 30.09.21.pdf',
      'P1939-MEP SITE INSPECTION 11 11.03.22.pdf',
      'P1939-MEP SITE INSPECTION 17 11.01.24.pdf',
    ],
  },
};

// Helper function to get full file path
export function getFullPath(relativePath) {
  return `${comprehensiveEvidenceRegistry.basePath}/${relativePath}`;
}

// Helper function to check if file is viewable
export function isFileViewable(filename) {
  const viewableExtensions = [
    '.pdf',
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.txt',
    '.csv',
    '.xlsx',
    '.xls',
    '.doc',
    '.docx',
  ];
  return viewableExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}

// Helper function to get file type
export function getFileType(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const typeMap = {
    pdf: 'pdf',
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    gif: 'image',
    doc: 'document',
    docx: 'document',
    xls: 'spreadsheet',
    xlsx: 'spreadsheet',
    csv: 'spreadsheet',
    msg: 'email',
    eml: 'email',
    zip: 'archive',
    mp4: 'video',
    txt: 'text',
  };
  return typeMap[ext] || 'file';
}

// Get all evidence for a specific head of claim
export function getEvidenceByHeadOfClaim(headId) {
  const heads = comprehensiveEvidenceRegistry.headsOfClaim;
  for (const [name, data] of Object.entries(heads)) {
    if (data.id === headId) {
      return {
        name,
        ...data,
      };
    }
  }
  return null;
}

// Search evidence by keyword
export function searchEvidence(keyword) {
  const results = [];
  const searchTerm = keyword.toLowerCase();

  // Search in heads of claim
  for (const [headName, headData] of Object.entries(comprehensiveEvidenceRegistry.headsOfClaim)) {
    if (
      headName.toLowerCase().includes(searchTerm) ||
      headData.description.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        type: 'head-of-claim',
        name: headName,
        data: headData,
      });
    }

    // Search in defects
    headData.defects.forEach(defect => {
      if (defect.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'defect',
          headOfClaim: headName,
          defect: defect,
          data: headData,
        });
      }
    });
  }

  return results;
}
