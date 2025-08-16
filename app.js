// LJJ SVP Claim Management System JavaScript

// Case data structure
const caseData = {
    timeline: [
        { date: '23.03.21', title: 'SVP Benchmark for inspection', description: 'Initial benchmarking email sent', category: 'planning' },
        { date: '02.08.21', title: 'LJJ reports damaged SVPs', description: 'LJJ started reporting damaged SVP systems', category: 'issue' },
        { date: '04.11.21', title: 'Collaboration concerns', description: 'LJJ not working collaboratively - email documented', category: 'issue' },
        { date: '22.02.22', title: 'More SVP damage reported', description: 'LJJ reporting additional damage to SVP systems', category: 'issue' },
        { date: '10.03.22', title: 'Quinn Ross witness request', description: 'Quinn Ross asking to witness SVP testing', category: 'testing' },
        { date: '25.10.22', title: 'ESD Site Observation', description: 'Client tracker notes incomplete test certificates', category: 'compliance' },
        { date: '31.08.23', title: 'UL notifies LJJ of leaks', description: 'Official notification with investigative works confirmation', category: 'formal' },
        { date: '11.10.23', title: 'SVP test rescheduled', description: 'Witnessing rescheduled - failed to happen', category: 'testing' },
        { date: '07.11.23', title: 'LJJ confirms SVP issues', description: 'John Angel confirms witnessing will not proceed', category: 'failure' },
        { date: '09.11.23', title: 'UL formal notice', description: 'Notice giving deadline of 10.11.23 for completion', category: 'formal' },
        { date: '10.11.23', title: 'Contract omission notice', description: 'UL omits remaining SVP works from LJJ contract', category: 'termination' },
        { date: '13.11.23', title: 'UL instructs stand-down', description: 'LJJ told to cease all SVP investigation work', category: 'termination' },
        { date: '07.01.24', title: 'K&T Block C Investigation', description: '28 issues identified in comprehensive report', category: 'evidence' },
        { date: '26.01.24', title: 'CCI Expert witness report', description: 'Independent expert assessment of SVP defects', category: 'evidence' },
        { date: '08.02.24', title: 'NCR46 issued to LJJ', description: 'Formal non-conformance report for SVP stack defects', category: 'formal' },
        { date: '16.02.24', title: 'Building Control sign-off', description: 'BC approval following UL/K&T remediation works', category: 'resolution' }
    ],
    
    documents: [
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

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const documentsGrid = document.getElementById('evidence-grid');
const categoryFilter = document.getElementById('category-filter');
const documentSearch = document.getElementById('evidence-search');
const timeline = document.getElementById('case-timeline');
const globalSearch = document.getElementById('header-search');
const currentSectionSpan = document.getElementById('current-section');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Starting app initialization...');
    try {
        initNavigation();
        console.log('Navigation initialized');
        renderTimeline();
        console.log('Timeline rendered');
        renderDocuments();
        console.log('Documents rendered');
        initSearch();
        console.log('Search initialized');
        initEvidenceMap();
        console.log('Evidence map initialized');
        initCharts();
        console.log('Charts initialized');
        initSidebar();
        console.log('Sidebar initialized');
        console.log('App initialization complete!');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Navigation functionality
function initNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Update breadcrumb
            if (currentSectionSpan) {
                currentSectionSpan.textContent = this.querySelector('span').textContent;
            }
        });
    });
}

// Render timeline
function renderTimeline() {
    const timelineHTML = caseData.timeline.map((item, index) => {
        const categoryClass = getCategoryClass(item.category);
        return `
            <div class="timeline-item">
                <div class="timeline-content ${categoryClass}">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-description">${item.description}</div>
                </div>
            </div>
        `;
    }).join('');
    
    timeline.innerHTML = timelineHTML;
}

// Render documents
function renderDocuments(filterCategory = 'all', searchTerm = '') {
    const filteredDocs = caseData.documents.filter(doc => {
        const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
        const matchesSearch = searchTerm === '' || 
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.preview.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    const documentsHTML = filteredDocs.map(doc => {
        const categoryClass = getCategoryClass(doc.category);
        const linkedDocsText = doc.linkedDocs ? doc.linkedDocs.length : 0;
        
        return `
            <div class="document-card ${categoryClass}" data-doc-id="${doc.id}">
                <div class="document-category">${doc.category}</div>
                <div class="document-title">${doc.title}</div>
                <div class="document-preview">${doc.preview}</div>
                <div class="document-meta">
                    <span class="doc-type">${doc.type.toUpperCase()}</span>
                    <span class="linked-docs">${linkedDocsText} linked documents</span>
                </div>
                <div class="key-points">
                    ${doc.keyPoints.map(point => `<span class="key-point">${point}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    documentsGrid.innerHTML = documentsHTML || '<p>No documents found matching your criteria.</p>';
    
    // Add click handlers for document cards
    document.querySelectorAll('.document-card').forEach(card => {
        card.addEventListener('click', function() {
            const docId = this.dataset.docId;
            showDocumentDetails(docId);
        });
    });
}

// Initialize search functionality
function initSearch() {
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            renderDocuments(this.value, documentSearch ? documentSearch.value : '');
        });
    }
    
    if (documentSearch) {
        documentSearch.addEventListener('input', function() {
            renderDocuments(categoryFilter ? categoryFilter.value : 'all', this.value);
        });
    }
    
    if (globalSearch) {
        globalSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performGlobalSearch();
            }
        });
    }
}

// Global search functionality
function performGlobalSearch() {
    const searchTerm = globalSearch.value.toLowerCase().trim();
    if (!searchTerm) return;
    
    const results = [];
    
    // Search in documents
    caseData.documents.forEach(doc => {
        if (doc.title.toLowerCase().includes(searchTerm) ||
            doc.preview.toLowerCase().includes(searchTerm) ||
            doc.keyPoints.some(point => point.toLowerCase().includes(searchTerm))) {
            results.push({
                type: 'document',
                title: doc.title,
                category: doc.category,
                preview: doc.preview,
                id: doc.id
            });
        }
    });
    
    // Search in timeline
    caseData.timeline.forEach(item => {
        if (item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.date.includes(searchTerm)) {
            results.push({
                type: 'timeline',
                title: item.title,
                category: item.category,
                preview: `${item.date}: ${item.description}`,
                date: item.date
            });
        }
    });
    
    // Search in evidence
    Object.keys(caseData.evidence).forEach(evidenceType => {
        caseData.evidence[evidenceType].forEach(item => {
            if (item.toLowerCase().includes(searchTerm)) {
                results.push({
                    type: 'evidence',
                    title: item,
                    category: evidenceType,
                    preview: `Found in ${evidenceType} evidence`
                });
            }
        });
    });
    
    displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    console.log(`Found ${results.length} results for "${searchTerm}"`);
    // For now, just log results - can be enhanced later
}

// Initialize evidence map
function initEvidenceMap() {
    const evidenceMap = document.getElementById('evidence-map');
    if (!evidenceMap) return;
    
    const mapHTML = `
        <div class="evidence-nodes">
            <div class="evidence-section">
                <h4>Key Documents</h4>
                <div class="evidence-links">
                    <div class="evidence-node primary" data-type="document" data-id="ljj-briefing">
                        LJJ Briefing
                    </div>
                    <div class="evidence-node primary" data-type="document" data-id="kt-block-c">
                        K&T Block C Report
                    </div>
                    <div class="evidence-node secondary" data-type="document" data-id="svp-positions">
                        SVP Drawings
                    </div>
                </div>
            </div>
            
            <div class="evidence-section">
                <h4>Timeline Events</h4>
                <div class="evidence-links">
                    <div class="evidence-node timeline" data-date="07.01.24">
                        K&T Investigation
                    </div>
                    <div class="evidence-node timeline" data-date="10.11.23">
                        Contract Termination
                    </div>
                    <div class="evidence-node timeline" data-date="16.02.24">
                        Building Control Sign-off
                    </div>
                </div>
            </div>
            
            <div class="evidence-section">
                <h4>Issues Identified</h4>
                <div class="evidence-links">
                    ${caseData.evidence.issues.slice(0, 5).map(issue => `
                        <div class="evidence-node issue">
                            ${issue}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    evidenceMap.innerHTML = mapHTML;
}

// Utility functions
function getCategoryClass(category) {
    const classMap = {
        'bms': 'category-bms',
        'mechanical': 'category-mechanical',
        'electrical': 'category-electrical',
        'life-safety': 'category-life-safety',
        'planning': 'timeline-planning',
        'issue': 'timeline-issue',
        'testing': 'timeline-testing',
        'compliance': 'timeline-compliance',
        'formal': 'timeline-formal',
        'failure': 'timeline-failure',
        'termination': 'timeline-termination',
        'evidence': 'timeline-evidence',
        'resolution': 'timeline-resolution'
    };
    return classMap[category] || '';
}

function highlightSearchTerm(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function showDocumentDetails(docId) {
    const doc = caseData.documents.find(d => d.id === docId);
    if (!doc) return;
    
    // Create modal or detailed view
    alert(`Document: ${doc.title}\n\nPath: ${doc.path}\n\nPreview: ${doc.preview}\n\nKey Points:\n${doc.keyPoints.join('\n')}`);
}

// Initialize charts
function initCharts() {
    try {
        // Evidence distribution chart
        const evidenceCtx = document.getElementById('evidence-chart');
        if (evidenceCtx && typeof Chart !== 'undefined') {
            const ctx = evidenceCtx.getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Blocks', 'Issues', 'Personnel', 'Locations'],
                    datasets: [{
                        data: [
                            caseData.evidence.blocks.length,
                            caseData.evidence.issues.length,
                            caseData.evidence.personnel.length,
                            caseData.evidence.locations.length
                        ],
                        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
            console.log('Evidence chart created');
        } else if (evidenceCtx) {
            console.log('Chart.js not loaded yet, skipping chart initialization');
        }
        
        // Cost analysis chart
        const costCtx = document.getElementById('cost-chart');
        if (costCtx) {
            console.log('Cost chart placeholder ready');
        }
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// Initialize sidebar functionality
function initSidebar() {
    try {
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
            });
            console.log('Sidebar toggle initialized');
        } else {
            console.log('Sidebar toggle or sidebar not found');
        }
    } catch (error) {
        console.error('Error initializing sidebar:', error);
    }
}

// Add CSS for additional styling
const additionalCSS = `
.search-results-list {
    margin-top: 1rem;
}

.search-result-item {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    border-left: 4px solid #3498db;
    cursor: pointer;
    transition: all 0.3s ease;
}

.search-result-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.result-type {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
}

.result-title {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.result-preview {
    color: #555;
    font-size: 0.9rem;
}

mark {
    background-color: #fff3cd;
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
}

.evidence-nodes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    height: 100%;
}

.evidence-section h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.evidence-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.evidence-node {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.evidence-node.primary {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
}

.evidence-node.secondary {
    background: linear-gradient(135deg, #95a5a6, #7f8c8d);
    color: white;
}

.evidence-node.timeline {
    background: linear-gradient(135deg, #e67e22, #d35400);
    color: white;
}

.evidence-node.issue {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
}

.evidence-node:hover {
    transform: scale(1.05);
}

.document-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 0.5rem 0;
    font-size: 0.8rem;
    color: #666;
}

.key-points {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.key-point {
    background: #f8f9fa;
    color: #495057;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
    border: 1px solid #dee2e6;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);