// Documents data extracted from app.js
export const documentsData = [
    {
        id: 'ljj-briefing',
        title: 'LJJ SVP Validation Briefing 11.08.25',
        category: 'bms',
        type: 'pdf',
        path: 'LJJ SVP Validation Briefing 11.08.25.pdf',
        preview: 'Comprehensive briefing document outlining timeline, evidence review, and key considerations for the SVP claim validation.',
        keyPoints: ['Timeline of events', 'Strengths and weaknesses', 'Missing evidence gaps'],
        linkedDocs: ['kt-block-c', 'svp-positions']
    },
    {
        id: 'kt-block-c',
        title: 'United Living Block C SVP Report',
        category: 'mechanical',
        type: 'pdf',
        path: 'Mechanical Building Services/United Living Block C SVP report.pdf',
        preview: '28 issues identified by K&T investigation including leaking connections, missing seals, and poor workmanship.',
        keyPoints: ['28 technical failures', 'Photo evidence', 'Cross-block issues'],
        linkedDocs: ['ljj-briefing', 'svp-positions']
    },
    {
        id: 'svp-positions',
        title: '2283-00-SK-0145 Revised Level 08 SVP Positions',
        category: 'mechanical',
        type: 'pdf',
        path: 'Mechanical Building Services/2283-00-SK-0145 Revised Level 08 SVP positions.pdf',
        preview: 'Technical drawing showing SVP stack positions and structural layout for Level 08.',
        keyPoints: ['SVP routing layout', 'Structural correlations', 'Grid references'],
        linkedDocs: ['kt-block-c']
    },
    {
        id: 'adjudication-decision',
        title: 'Adjudicator\'s Decision Email',
        category: 'bms',
        type: 'eml',
        path: 'BMS/FW In the matter of an adjudication between LJJ Limited (Referring Party) - and - United Living (South) Limited (Responding Party) - Adjudicator\'s Decision.eml',
        preview: 'Official adjudication decision correspondence between parties.',
        keyPoints: ['Legal decision', 'Formal ruling', 'Binding outcome']
    },
    {
        id: 'ljj-progress',
        title: 'LJJ Progress Report 9',
        category: 'bms',
        type: 'pdf',
        path: 'BMS/LJJ Progress Report 9.pdf',
        preview: 'LJJ\'s internal progress reporting document.',
        keyPoints: ['LJJ perspective', 'Progress claims', 'Internal reporting']
    },
    {
        id: 'rfi-emails',
        title: 'UL v LJJ RFIs Email Chain',
        category: 'bms',
        type: 'eml',
        path: 'BMS/Re_ UL v LJJ RFIs [DACB-ACTIVE1.FID3194599].eml',
        preview: 'Request for Information exchanges between United Living and LJJ.',
        keyPoints: ['Information requests', 'Technical queries', 'Response patterns']
    },
    {
        id: 'quantum-email',
        title: 'Welbourne - LJJ Quantum Email',
        category: 'bms',
        type: 'eml',
        path: 'BMS/Welbourne - LJJ Quantum.eml',
        preview: 'Quantum-related correspondence for the LJJ claim.',
        keyPoints: ['Cost implications', 'Quantum analysis', 'Financial impact']
    },
    {
        id: 'caytons-letter',
        title: 'Letter from Caytons - LJJ Adjudication',
        category: 'bms',
        type: 'eml',
        path: 'BMS/Letter from Caytons - LJJ Adjudication [DACB-ACTIVE1.FID3194599].eml',
        preview: 'Legal correspondence from Caytons regarding the LJJ adjudication.',
        keyPoints: ['Legal representation', 'Formal correspondence', 'Adjudication process']
    }
];

export default documentsData;
