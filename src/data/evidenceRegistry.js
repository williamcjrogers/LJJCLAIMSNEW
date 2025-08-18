// Evidence Registry - Maps all evidence files to heads of claim and defects
export const evidenceRegistry = {
  // 1. SVP's Evidence
  hoc_1: {
    headName: "SVP's",
    evidenceCategories: {
      Design: [
        {
          id: 'svp_design_1',
          fileName: '4262-LJJ-SW-XX-TS-M-050 Rev 03.pdf',
          filePath: "1. SVP's/1. Design/Tech Subs/4262-LJJ-SW-XX-TS-M-050 Rev 03.pdf",
          type: 'Technical Submission',
          uploadDate: '2024-03-15',
          size: '2.4MB',
        },
      ],
      NCRs: [
        {
          id: 'svp_ncr_1',
          fileName: 'ULG-NCR-000046 SVP.pdf',
          filePath: "1. SVP's/2. NCR's/ULG-NCR-000046 SVP.pdf",
          type: 'Non-Conformance Report',
          uploadDate: '2024-02-08',
          size: '1.8MB',
        },
        {
          id: 'svp_ncr_2',
          fileName: 'ULG-NCR-000031.pdf',
          filePath: "1. SVP's/2. NCR's/ULG-NCR-000031.pdf",
          type: 'Non-Conformance Report',
          uploadDate: '2024-01-25',
          size: '1.2MB',
        },
        {
          id: 'svp_ncr_3',
          fileName: 'IMG-20240208-WA0001.jpg',
          filePath: "1. SVP's/2. NCR's/IMG-20240208-WA0001.jpg",
          type: 'Site Photo',
          uploadDate: '2024-02-08',
          size: '3.2MB',
        },
        {
          id: 'svp_ncr_4',
          fileName: 'IMG-20240208-WA0000.jpg',
          filePath: "1. SVP's/2. NCR's/IMG-20240208-WA0000.jpg",
          type: 'Site Photo',
          uploadDate: '2024-02-08',
          size: '2.9MB',
        },
      ],
      Notices: [
        {
          id: 'svp_notice_1',
          fileName: 'LJJ Notice 9 SVP Pipe.pdf',
          filePath: "1. SVP's/3. Notices/LJJ Notice 9 SVP Pipe.pdf",
          type: 'Formal Notice',
          uploadDate: '2024-03-22',
          size: '890KB',
        },
        {
          id: 'svp_notice_2',
          fileName: 'LJJ Notice 8 SVP Pipe.pdf',
          filePath: "1. SVP's/3. Notices/LJJ Notice 8 SVP Pipe.pdf",
          type: 'Formal Notice',
          uploadDate: '2024-03-10',
          size: '756KB',
        },
      ],
      Reports: [
        {
          id: 'svp_report_1',
          fileName: 'SVP Report (26_1_24).pdf',
          filePath: "1. SVP's/6. Reports/SVP Report (26_1_24).pdf",
          type: 'Technical Report',
          uploadDate: '2024-01-26',
          size: '4.5MB',
        },
        {
          id: 'svp_report_2',
          fileName: 'United Living Block C SVP report.pdf',
          filePath: "1. SVP's/6. Reports/K&T/United Living Block C SVP report.pdf",
          type: 'Block Report',
          uploadDate: '2024-02-15',
          size: '3.8MB',
        },
        {
          id: 'svp_report_3',
          fileName: 'EJ924 Welbourne Site Observation Tracker 2024_01_25.pdf',
          filePath: "1. SVP's/6. Reports/EJ924 Welbourne Site Observation Tracker 2024_01_25.pdf",
          type: 'Site Observation',
          uploadDate: '2024-01-25',
          size: '2.1MB',
        },
      ],
      Briefing: [
        {
          id: 'svp_brief_1',
          fileName: 'LJJ SVP Validation Briefing 11.08.25.pdf',
          filePath: "1. SVP's/a. LJJ SVP Validation Briefing 11.08.25.pdf",
          type: 'Validation Briefing',
          uploadDate: '2025-08-11',
          size: '178KB',
        },
      ],
    },
  },

  // 2. Building Management System Evidence
  hoc_2: {
    headName: 'Building Management System',
    evidenceCategories: {
      NCRs: [
        {
          id: 'bms_ncr_1',
          fileName: 'ULG-NCR-000067 BMS.pdf',
          filePath: "2. Building Management System/2. NCR's/ULG-NCR-000067 BMS.pdf",
          type: 'Non-Conformance Report',
          uploadDate: '2024-04-05',
          size: '2.3MB',
        },
        {
          id: 'bms_ncr_2',
          fileName: '20240410122010738.pdf',
          filePath: "2. Building Management System/2. NCR's/20240410122010738.pdf",
          type: 'Technical Document',
          uploadDate: '2024-04-10',
          size: '1.5MB',
        },
      ],
      'Site Evidence': [
        {
          id: 'bms_photo_1',
          fileName: 'Screenshot 2024-04-05 110812.png',
          filePath: "2. Building Management System/2. NCR's/Screenshot 2024-04-05 110812.png",
          type: 'System Screenshot',
          uploadDate: '2024-04-05',
          size: '456KB',
        },
        {
          id: 'bms_photo_2',
          fileName: 'Screenshot 2024-04-05 110207.png',
          filePath: "2. Building Management System/2. NCR's/Screenshot 2024-04-05 110207.png",
          type: 'System Screenshot',
          uploadDate: '2024-04-05',
          size: '398KB',
        },
        {
          id: 'bms_photo_3',
          fileName: 'PXL_20240405_111353893.MP.jpg',
          filePath: "2. Building Management System/2. NCR's/PXL_20240405_111353893.MP.jpg",
          type: 'Site Photo',
          uploadDate: '2024-04-05',
          size: '4.2MB',
        },
      ],
    },
  },

  // 3. Mechanical Building Services Evidence
  hoc_3: {
    headName: 'Mechanical Building Services',
    evidenceCategories: {
      Chlorination: [
        {
          id: 'mech_chlor_1',
          fileName: 'ULG-NCR-000049.pdf',
          filePath: '3. Mechanical Building Services/Chlorination/2. NCR/ULG-NCR-000049.pdf',
          type: 'Non-Conformance Report',
          uploadDate: '2024-03-18',
          size: '1.9MB',
        },
      ],
      'Duplex 9': [
        {
          id: 'mech_dup9_1',
          fileName: 'ULG-NCR-000042 Duplex 9.pdf',
          filePath: '3. Mechanical Building Services/Duplex 9/2. NCR/ULG-NCR-000042 Duplex 9.pdf',
          type: 'Non-Conformance Report',
          uploadDate: '2024-02-28',
          size: '2.1MB',
        },
        {
          id: 'mech_dup9_2',
          fileName: '2283-00-DR-5204-C01 Bathroom Type WC02.pdf',
          filePath:
            '3. Mechanical Building Services/Duplex 9/2. NCR/2283-00-DR-5204-C01 Bathroom Type WC02.pdf',
          type: 'Technical Drawing',
          uploadDate: '2024-02-28',
          size: '3.4MB',
        },
      ],
    },
  },

  // 4. Electrical Evidence
  hoc_4: {
    headName: 'Electrical',
    evidenceCategories: {
      'TV and Satellite': [
        {
          id: 'elec_tv_1',
          fileName: 'K&T-AUK-CRT-TV-IRS-00045 (1).pdf',
          filePath:
            '4. Electrical/TV and Satellite/5. Commissioning Certs - Old LJJ, New K&T/K&T/K&T-AUK-CRT-TV-IRS-00045 (1).pdf',
          type: 'Commissioning Certificate',
          uploadDate: '2024-04-22',
          size: '1.3MB',
        },
        {
          id: 'elec_tv_2',
          fileName: 'K&T-AUK-CRT-LNS-000057.pdf',
          filePath:
            '4. Electrical/TV and Satellite/5. Commissioning Certs - Old LJJ, New K&T/K&T/K&T-AUK-CRT-LNS-000057.pdf',
          type: 'Commissioning Certificate',
          uploadDate: '2024-04-22',
          size: '1.1MB',
        },
      ],
    },
  },

  // 5. Life Safety Systems Evidence
  hoc_5: {
    headName: 'Life Safety Systems',
    evidenceCategories: {
      'Smoke Ventilation': [
        {
          id: 'life_smoke_1',
          fileName: '4262-K&T-MWS-XX-XX-CRT-SO0207219-M-295 - Fire Smoke Damper (002).pdf',
          filePath:
            '5. Life Safety Systems/Smoke Ventilation/5. Commissioning Certs - Old LJJ, New K&T/4262-K&T-MWS-XX-XX-CRT-SO0207219-M-295 - Fire Smoke Damper (002).pdf',
          type: 'Commissioning Certificate',
          uploadDate: '2024-05-10',
          size: '2.7MB',
        },
      ],
      Generator: [
        {
          id: 'life_gen_1',
          fileName: 'ULG-NCR-000070 Generator.pdf',
          filePath: "5. Life Safety Systems/Generator/2. NCR's/NCR 70/ULG-NCR-000070 Generator.pdf",
          type: 'Non-Conformance Report',
          uploadDate: '2024-05-15',
          size: '1.8MB',
        },
      ],
    },
  },
};

// Helper function to get all evidence for a specific head of claim
export function getEvidenceByHeadId(headId) {
  return evidenceRegistry[headId] || null;
}

// Helper function to get evidence count for a head of claim
export function getEvidenceCount(headId) {
  const headEvidence = evidenceRegistry[headId];
  if (!headEvidence) return 0;

  let count = 0;
  Object.values(headEvidence.evidenceCategories).forEach(category => {
    count += category.length;
  });
  return count;
}

// Helper function to get total size of evidence for a head of claim
export function getTotalEvidenceSize(headId) {
  const headEvidence = evidenceRegistry[headId];
  if (!headEvidence) return '0MB';

  let totalSize = 0;
  Object.values(headEvidence.evidenceCategories).forEach(category => {
    category.forEach(file => {
      const sizeStr = file.size;
      const value = parseFloat(sizeStr);
      if (sizeStr.includes('MB')) {
        totalSize += value;
      } else if (sizeStr.includes('KB')) {
        totalSize += value / 1024;
      }
    });
  });

  return `${totalSize.toFixed(1)}MB`;
}

// Helper function to get all evidence files as flat array
export function getAllEvidenceFiles() {
  const allFiles = [];
  Object.keys(evidenceRegistry).forEach(headId => {
    const headEvidence = evidenceRegistry[headId];
    Object.values(headEvidence.evidenceCategories).forEach(category => {
      allFiles.push(...category);
    });
  });
  return allFiles;
}

// Helper function to search evidence by filename
export function searchEvidence(searchTerm) {
  const results = [];
  Object.keys(evidenceRegistry).forEach(headId => {
    const headEvidence = evidenceRegistry[headId];
    Object.entries(headEvidence.evidenceCategories).forEach(([categoryName, files]) => {
      files.forEach(file => {
        if (file.fileName.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({
            ...file,
            headId,
            headName: headEvidence.headName,
            category: categoryName,
          });
        }
      });
    });
  });
  return results;
}
