// Comprehensive LJJ SVP Claim Management System
class ComprehensiveClaimSystem {
    constructor() {
        this.currentUser = {
            role: 'viewer',
            name: 'Public User',
            avatar: '<i class="fas fa-user"></i>',
            permissions: ['read'],
            loginTime: new Date()
        };
        
        // Import building services claims from external file
        if (typeof window !== 'undefined' && window.buildingServicesClaims) {
            this.buildingServicesClaims = window.buildingServicesClaims;
        } else if (typeof buildingServicesClaims !== 'undefined') {
            this.buildingServicesClaims = buildingServicesClaims;
        }
        
        // Comprehensive case data with granular detail
        this.caseData = {
            case_id: 'WEL-2024-001',
            case_name: 'United Living (South) Limited v LJJ Limited - SVP Installation Failures',
            contract_value: 2400000,
            claim_value: 2400000,
            estimated_recovery: { min: 1200000, max: 1800000, percentage: '50-75%' },
            
            // Use the new building services claims structure
            heads_of_claim: this.buildingServicesClaims || {
                svp_systems: {
                    claim_reference: 'HOC-SVP-001',
                    title: 'SVP (Soil Vent Pipe) Systems',
                    parent_folder: 'SVP',
                    description: 'Systematic failures in SVP installation, testing, and commissioning',
                    success_probability: 75,
                    evidence_strength: 92,
                    quantum_breakdown: {
                        total_claim_value: 1670000
                    }
                }
            },
            
            // Detailed timeline with supporting evidence
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
                    description: 'United Living officially notifies LJJ of leaks with investigation confirmation',
                    category: 'formal_notice',
                    supporting_docs: ['ul_formal_notice_aug2023.pdf', 'leak_investigation_report.pdf'],
                    significance: 'Formal notice triggering contractual remedial obligations',
                    impact_on_claim: 'high_positive'
                },
                {
                    date: '2023-10-11',
                    event: 'SVP Testing Rescheduled - Failure to Proceed',
                    description: 'Witnessing rescheduled by LJJ but ultimately failed to happen',
                    category: 'critical_failure',
                    supporting_docs: ['testing_reschedule_emails.eml', 'witness_availability_oct2023.pdf'],
                    significance: 'LJJ failure to complete required testing despite opportunity',
                    impact_on_claim: 'high_positive'
                },
                {
                    date: '2023-11-07',
                    event: 'LJJ Confirms Testing Will Not Proceed',
                    description: 'John Angel confirms witnessing will not proceed - abandonment of works',
                    category: 'critical_failure',
                    supporting_docs: ['john_angel_confirmation_email.eml', 'works_abandonment_notice.pdf'],
                    significance: 'Clear evidence of LJJ abandoning contractual obligations',
                    impact_on_claim: 'very_high_positive'
                },
                {
                    date: '2024-01-15',
                    event: 'K&T Block C Investigation Completed',
                    description: 'Independent expert investigation identifies 28 systematic failures',
                    category: 'evidence',
                    supporting_docs: ['kt_block_c_report.pdf', 'kt_photographic_evidence.zip'],
                    significance: 'Comprehensive technical evidence of installation failures',
                    impact_on_claim: 'very_high_positive'
                },
                {
                    date: '2024-02-28',
                    event: 'Case Resolution and Quantum Analysis',
                    description: 'Comprehensive case analysis completed with quantum assessment',
                    category: 'resolution',
                    supporting_docs: ['final_quantum_analysis.pdf', 'case_strategy_report.pdf'],
                    significance: 'Final case preparation and strategy development',
                    impact_on_claim: 'strategic'
                }
            ],
            
            // Comprehensive document library with detailed metadata
            documents: {
                ljj_briefing_main: {
                    title: 'LJJ SVP Validation Briefing - Main Document',
                    type: 'briefing',
                    date: '2024-08-01',
                    pages: 45,
                    file_location: '/documents/briefings/ljj-svp-validation-briefing.pdf',
                    significance: 'primary',
                    summary: 'Comprehensive briefing document outlining the LJJ SVP claim with detailed analysis of technical failures, contractual breaches, and strategic approach. Contains timeline analysis, quantum assessment, and evidence evaluation.',
                    key_sections: [
                        'Executive Summary and Strategic Overview',
                        'Technical Failure Analysis',
                        'Contractual Timeline and Breach Assessment', 
                        'Evidence Strength Analysis',
                        'Quantum Breakdown and Recovery Prospects',
                        'Risk Assessment and Mitigation Strategies'
                    ],
                    cross_references: [
                        'kt_block_c_report',
                        'adjudication_decision',
                        'quantum_analysis'
                    ],
                    evidence_strength: 90,
                    admissibility: 'high',
                    author: 'Quantum Commercial Solutions',
                    access_level: 'public'
                },
                
                kt_block_c_report: {
                    title: 'K&T Technical Investigation Report - Block C',
                    type: 'expert_report',
                    date: '2024-01-15',
                    pages: 128,
                    file_location: '/documents/technical/kt-block-c-investigation-report.pdf',
                    significance: 'critical',
                    summary: 'Independent expert investigation by K&T identifying 28 systematic SVP installation failures with comprehensive photographic evidence and technical analysis.',
                    key_sections: [
                        'Investigation Methodology and Scope',
                        'Systematic Failure Analysis (28 identified defects)',
                        'Photographic Evidence Documentation',
                        'Technical Standards Assessment',
                        'Root Cause Analysis',
                        'Remedial Works Requirements'
                    ],
                    technical_findings: [
                        '12 instances of leaking boss connections',
                        '8 cases of missing or inadequate gasket seals',
                        '5 unglued pipe fittings creating failure points',
                        'Sub-standard workmanship throughout installation',
                        'Non-compliance with Building Regulations Part H',
                        'Evidence of systematic rather than isolated failures'
                    ],
                    cross_references: [
                        'cci_expert_report',
                        'svp_technical_drawings',
                        'building_control_approval'
                    ],
                    evidence_strength: 95,
                    admissibility: 'very_high',
                    author: 'K&T Technical Services',
                    access_level: 'public'
                },
                
                adjudication_decision: {
                    title: 'Adjudication Decision and Analysis',
                    type: 'legal_decision',
                    date: '2023-12-20',
                    pages: 67,
                    file_location: '/documents/legal/adjudication-decision-analysis.pdf',
                    significance: 'high',
                    summary: 'Legal analysis of adjudication proceedings and decision with implications for ongoing claim strategy and evidence requirements.',
                    key_sections: [
                        'Adjudication Background and Process',
                        'Key Legal Findings',
                        'Technical Evidence Assessment',
                        'Implications for Main Claim',
                        'Strategic Recommendations'
                    ],
                    cross_references: [
                        'ljj_briefing_main',
                        'caytons_legal_analysis',
                        'contract_documents'
                    ],
                    evidence_strength: 85,
                    admissibility: 'high',
                    author: 'Legal Team',
                    access_level: 'public'
                },
                
                ljj_progress_reports: {
                    title: 'LJJ Progress Reports and Communications',
                    type: 'correspondence',
                    date_range: '2021-03-01 to 2023-11-30',
                    pages: 234,
                    file_location: '/documents/correspondence/ljj-progress-reports-compilation.pdf',
                    significance: 'high',
                    summary: 'Compilation of LJJ progress reports, email communications, and formal notices showing pattern of damage reporting and failure to complete works.',
                    key_content: [
                        'Early damage reporting timeline (Aug 2021 onwards)',
                        'Communication breakdown evidence',
                        'Failed testing and witnessing attempts',
                        'Formal notice responses and non-compliance',
                        'Work abandonment confirmation'
                    ],
                    cross_references: [
                        'contract_omission_notice',
                        'ul_formal_notices',
                        'timeline_analysis'
                    ],
                    evidence_strength: 80,
                    admissibility: 'high',
                    author: 'Various - LJJ/UL Communications',
                    access_level: 'public'
                },
                
                rfi_email_chains: {
                    title: 'RFI and Email Chain Analysis',
                    type: 'correspondence',
                    date_range: '2021-01-01 to 2023-12-31',
                    pages: 189,
                    file_location: '/documents/correspondence/rfi-email-chains-analysis.pdf',
                    significance: 'medium',
                    summary: 'Analysis of Request for Information (RFI) processes and email communications showing information gaps and communication failures.',
                    cross_references: [
                        'ljj_progress_reports',
                        'project_documentation'
                    ],
                    evidence_strength: 70,
                    admissibility: 'medium',
                    author: 'Project Team Communications',
                    access_level: 'public'
                },
                
                quantum_analysis: {
                    title: 'Comprehensive Quantum Analysis',
                    type: 'financial_analysis',
                    date: '2024-07-15',
                    pages: 95,
                    file_location: '/documents/financial/comprehensive-quantum-analysis.pdf',
                    significance: 'critical',
                    summary: 'Detailed financial analysis of claim value, remedial costs, consequential losses, and recovery prospects with sensitivity analysis.',
                    key_sections: [
                        'Direct Remedial Costs Analysis',
                        'Investigation and Professional Fees',
                        'Delay and Consequential Loss Assessment',
                        'Recovery Probability Analysis',
                        'Sensitivity and Scenario Modeling'
                    ],
                    cross_references: [
                        'ljj_briefing_main',
                        'kt_block_c_report',
                        'project_cost_analysis'
                    ],
                    evidence_strength: 85,
                    admissibility: 'high',
                    author: 'Quantum Commercial Solutions',
                    access_level: 'public'
                },
                
                caytons_legal_analysis: {
                    title: 'Caytons Legal Strategy Analysis',
                    type: 'legal_analysis',
                    date: '2024-06-30',
                    pages: 78,
                    file_location: '/documents/legal/caytons-legal-strategy-analysis.pdf',
                    significance: 'high',
                    summary: 'Legal strategic analysis covering contractual claims, professional negligence, and litigation risk assessment.',
                    cross_references: [
                        'adjudication_decision',
                        'contract_documents',
                        'expert_witness_statements'
                    ],
                    evidence_strength: 85,
                    admissibility: 'high',
                    author: 'Caytons Law',
                    access_level: 'public'
                },
                
                svp_technical_drawings: {
                    title: 'SVP Technical Drawings and Specifications',
                    type: 'technical_drawings',
                    date: '2020-11-15',
                    pages: 156,
                    file_location: '/documents/technical/svp-technical-drawings-specifications.pdf',
                    significance: 'high',
                    summary: 'Original technical drawings, specifications, and installation requirements for SVP systems showing required standards that were not met.',
                    cross_references: [
                        'kt_block_c_report',
                        'building_control_approval',
                        'installation_standards'
                    ],
                    evidence_strength: 80,
                    admissibility: 'high',
                    author: 'Design Team',
                    access_level: 'public'
                },
                
                cci_expert_report: {
                    title: 'CCI Expert Witness Report',
                    type: 'expert_report',
                    date: '2024-03-10',
                    pages: 89,
                    file_location: '/documents/expert/cci-expert-witness-report.pdf',
                    significance: 'high',
                    summary: 'Independent expert witness report corroborating K&T findings and providing professional opinion on installation failures and industry standards.',
                    cross_references: [
                        'kt_block_c_report',
                        'industry_standards_bs8000',
                        'expert_witness_statements'
                    ],
                    evidence_strength: 85,
                    admissibility: 'very_high',
                    author: 'CCI Expert Services',
                    access_level: 'public'
                },
                
                building_control_approval: {
                    title: 'Building Control Approval Documentation',
                    type: 'regulatory',
                    date: '2024-02-20',
                    pages: 45,
                    file_location: '/documents/regulatory/building-control-approval-documentation.pdf',
                    significance: 'high',
                    summary: 'Building Control approval documentation showing approval was only granted after UL remediation works, validating the existence of defects.',
                    cross_references: [
                        'kt_block_c_report',
                        'remedial_works_documentation',
                        'compliance_certificates'
                    ],
                    evidence_strength: 80,
                    admissibility: 'high',
                    author: 'Building Control Authority',
                    access_level: 'public'
                }
            },
            
            // Overall case assessment
            case_assessment: {
                overall_prospects: 70,
                estimated_recovery: {
                    optimistic: { amount: 2200000, probability: 25, scenario: 'Full technical claim success with missing Block A&B evidence obtained' },
                    likely: { amount: 1500000, probability: 65, scenario: 'Partial settlement focusing on technical failures with timeline challenges limiting full recovery' },
                    conservative: { amount: 900000, probability: 20, scenario: 'Limited recovery if LJJ\'s defensive timeline strategy proves effective' }
                },
                key_strategic_considerations: [
                    'Strong technical evidence from K&T investigation provides solid foundation',
                    'LJJ\'s early damage reporting creates defensive narrative requiring counter-strategy',
                    'Missing Block A&B reports represent significant evidence gap',
                    'Timeline challenges may limit full recovery potential',
                    'Multiple heads of claim provide various recovery routes'
                ],
                critical_success_factors: [
                    'Obtaining missing K&T reports for Blocks A&B',
                    'Effectively countering LJJ\'s defensive timeline narrative',
                    'Strong expert witness coordination and testimony',
                    'Comprehensive quantum justification and documentation'
                ],
                primary_risks: [
                    'LJJ\'s early damage reporting may prove effective defensive strategy',
                    'Time gap between installation and investigation creates causation challenges',
                    'Missing evidence for Blocks A&B limits comprehensive argument',
                    'Professional negligence claims have higher burden of proof'
                ]
            }
        };
        
        this.init();
    }
    
    init() {
        // Show main app directly
        const mainApp = document.getElementById('main-app');
        if (mainApp) {
            mainApp.style.display = 'flex';
        }
        
        // Update user info
        const userName = document.getElementById('user-name');
        const userRole = document.getElementById('user-role');
        const userAvatar = document.getElementById('user-avatar');
        
        if (userName) userName.textContent = this.currentUser.name;
        if (userRole) userRole.textContent = 'Document Viewer';
        if (userAvatar) userAvatar.innerHTML = this.currentUser.avatar;
        
        this.setupNavigation();
        this.hideLogoutButton();
        this.renderClaimNarratives();
        this.renderTimeline();
        this.renderEvidenceLibrary();
        this.renderAnalytics();
    }
    
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active nav
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Show section
                const targetSection = item.dataset.section;
                this.showSection(targetSection);
                
                // Update breadcrumb
                const currentSection = document.getElementById('current-section');
                if (currentSection) {
                    currentSection.textContent = item.querySelector('span').textContent;
                }
            });
        });
    }
    
    showSection(sectionName) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            
            if (sectionName === 'strategy') {
                this.renderClaimNarratives();
            } else if (sectionName === 'timeline') {
                this.renderTimeline();
            } else if (sectionName === 'evidence') {
                this.renderEvidenceLibrary();
            } else if (sectionName === 'analytics') {
                this.renderAnalytics();
            }
        }
    }
    
    hideLogoutButton() {
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.style.display = 'none';
        }
    }
    
    renderClaimNarratives() {
        const container = document.getElementById('claim-narratives');
        if (!container) return;
        
        let html = '';
        
        Object.entries(this.caseData.heads_of_claim).forEach(([key, claim]) => {
            const successClass = claim.success_probability >= 70 ? 'high-success' : 
                               claim.success_probability >= 50 ? 'medium-success' : 'low-success';
            
            html += `
                <div class="narrative-card ${successClass}">
                    <div class="narrative-header">
                        <h4>${claim.title}</h4>
                        <div class="claim-metadata">
                            <span class="claim-ref">${claim.claim_reference}</span>
                            <span class="parent-folder">📁 ${claim.parent_folder}${claim.subfolder ? ' → ' + claim.subfolder : ''}</span>
                        </div>
                        <div class="success-metrics">
                            <span class="success-rate">Success: ${claim.success_probability}%</span>
                            <span class="evidence-strength">Evidence: ${claim.evidence_strength}%</span>
                            <span class="value-estimate">Value: £${(claim.quantum_breakdown.total_claim_value/1000000).toFixed(1)}M</span>
                        </div>
                    </div>
                    
                    <div class="narrative-content">
                        <div class="narrative-text">
                            <h5>Description</h5>
                            <p>${claim.description}</p>
                        </div>
                        
                        ${claim.technical_issues ? `
                        <div class="technical-issues">
                            <h5>Technical Issues</h5>
                            <ul>
                                ${claim.technical_issues.map(issue => `<li>${issue}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        ${claim.key_risks ? `
                        <div class="risk-factors">
                            <h5>Key Risks</h5>
                            <ul>
                                ${claim.key_risks.map(risk => `<li>${risk}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        ${claim.regulatory_impact ? `
                        <div class="regulatory-impact">
                            <h5>Regulatory Impact</h5>
                            <span class="impact-level">${claim.regulatory_impact}</span>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="narrative-actions">
                        <button class="btn-primary" onclick="app.showClaimDetails('${key}')">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                        <button class="btn-secondary" onclick="app.showRelatedDocuments('${key}')">
                            <i class="fas fa-folder-open"></i> Related Documents
                        </button>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    renderTimeline() {
        const container = document.getElementById('case-timeline');
        if (!container) return;
        
        let html = '<div class="timeline-wrapper">';
        
        this.caseData.timeline.forEach((event, index) => {
            const impactClass = event.impact_on_claim.replace('_', '-');
            const categoryIcon = this.getCategoryIcon(event.category);
            
            html += `
                <div class="timeline-event ${event.category} ${impactClass}" data-index="${index}">
                    <div class="timeline-marker">
                        <i class="${categoryIcon}"></i>
                    </div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h4>${event.event}</h4>
                            <span class="timeline-date">${this.formatDate(event.date)}</span>
                        </div>
                        <div class="timeline-description">
                            <p>${event.description}</p>
                        </div>
                        <div class="timeline-metadata">
                            <span class="category-tag">${event.category.replace('_', ' ').toUpperCase()}</span>
                            <span class="impact-tag ${impactClass}">${event.impact_on_claim.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="timeline-docs">
                            <h6>Supporting Documents:</h6>
                            <div class="doc-list">
                                ${event.supporting_docs.map(doc => `
                                    <span class="doc-tag" onclick="app.viewDocument('${doc}')">${doc}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
    
    renderEvidenceLibrary() {
        const container = document.getElementById('evidence-grid');
        if (!container) return;
        
        let html = '';
        
        Object.entries(this.caseData.documents).forEach(([key, doc]) => {
            const strengthClass = doc.evidence_strength >= 85 ? 'strength-high' : 
                                doc.evidence_strength >= 70 ? 'strength-medium' : 'strength-low';
            
            html += `
                <div class="evidence-card ${strengthClass}" data-doc-id="${key}">
                    <div class="evidence-header">
                        <div class="evidence-icon">
                            <i class="${this.getDocumentIcon(doc.type)}"></i>
                        </div>
                        <div class="evidence-info">
                            <h4>${doc.title}</h4>
                            <span class="evidence-type">${doc.type.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="evidence-strength">
                            <span class="strength-score">${doc.evidence_strength}%</span>
                        </div>
                    </div>
                    
                    <div class="evidence-content">
                        <div class="evidence-summary">
                            <p>${doc.summary}</p>
                        </div>
                        
                        <div class="evidence-metadata">
                            <div class="meta-item">
                                <i class="fas fa-calendar"></i>
                                <span>${doc.date || doc.date_range || 'Date not specified'}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-file-alt"></i>
                                <span>${doc.pages} pages</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-user"></i>
                                <span>${doc.author}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-shield-alt"></i>
                                <span>Admissibility: ${doc.admissibility}</span>
                            </div>
                        </div>
                        
                        ${doc.key_sections ? `
                        <div class="key-sections">
                            <h6>Key Sections:</h6>
                            <ul>
                                ${doc.key_sections.map(section => `<li>${section}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                        
                        ${doc.technical_findings ? `
                        <div class="technical-findings">
                            <h6>Technical Findings:</h6>
                            <ul>
                                ${doc.technical_findings.map(finding => `<li>${finding}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div class="evidence-actions">
                        <button class="btn-primary" onclick="app.showComprehensiveDocumentModal('${key}')">
                            <i class="fas fa-eye"></i> View Document
                        </button>
                        <button class="btn-secondary" onclick="app.downloadDocument('${key}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="btn-secondary" onclick="app.analyzeDocument('${key}')">
                            <i class="fas fa-brain"></i> AI Analysis
                        </button>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }
    
    renderAnalytics() {
        // This would be implemented to show analytics charts and data
        console.log('Analytics rendering would be implemented here');
    }
    
    getCategoryIcon(category) {
        const icons = {
            'contractual': 'fas fa-file-contract',
            'critical': 'fas fa-exclamation-triangle',
            'procedural': 'fas fa-cogs',
            'compliance': 'fas fa-check-circle',
            'formal_notice': 'fas fa-bell',
            'critical_failure': 'fas fa-times-circle',
            'evidence': 'fas fa-search',
            'resolution': 'fas fa-gavel',
            'strategic': 'fas fa-chess'
        };
        return icons[category] || 'fas fa-circle';
    }
    
    getDocumentIcon(type) {
        const icons = {
            'briefing': 'fas fa-file-alt',
            'expert_report': 'fas fa-microscope',
            'legal_decision': 'fas fa-gavel',
            'correspondence': 'fas fa-envelope',
            'financial_analysis': 'fas fa-chart-line',
            'legal_analysis': 'fas fa-balance-scale',
            'technical_drawings': 'fas fa-drafting-compass',
            'regulatory': 'fas fa-stamp'
        };
        return icons[type] || 'fas fa-file';
    }
    
    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    }
    
    showClaimDetails(claimKey) {
        const claim = this.caseData.heads_of_claim[claimKey];
        if (!claim) return;
        
        const modalHTML = `
            <div id="claim-details-modal" class="modal-overlay">
                <div class="modal-container large">
                    <div class="modal-header">
                        <h3>${claim.title}</h3>
                        <button class="modal-close" onclick="app.closeModal('claim-details-modal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div class="claim-details-content">
                            <div class="detail-section">
                                <h4>Claim Reference</h4>
                                <p>${claim.claim_reference}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Folder Structure</h4>
                                <p>📁 ${claim.parent_folder}${claim.subfolder ? ' → ' + claim.subfolder : ''}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Description</h4>
                                <p>${claim.description}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Success Assessment</h4>
                                <div class="success-bars">
                                    <div class="success-bar">
                                        <span>Success Probability</span>
                                        <div class="bar-container">
                                            <div class="bar-fill" style="width: ${claim.success_probability}%"></div>
                                        </div>
                                        <span>${claim.success_probability}%</span>
                                    </div>
                                    <div class="success-bar">
                                        <span>Evidence Strength</span>
                                        <div class="bar-container">
                                            <div class="bar-fill" style="width: ${claim.evidence_strength}%"></div>
                                        </div>
                                        <span>${claim.evidence_strength}%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Quantum Breakdown</h4>
                                <div class="quantum-table">
                                    ${Object.entries(claim.quantum_breakdown).map(([key, value]) => `
                                        <div class="quantum-row">
                                            <span class="quantum-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                                            <span class="quantum-value">£${typeof value === 'number' ? value.toLocaleString() : value}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    showRelatedDocuments(claimKey) {
        const claim = this.caseData.heads_of_claim[claimKey];
        if (!claim || !claim.related_documents) return;
        
        const modalHTML = `
            <div id="related-docs-modal" class="modal-overlay">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3>Related Documents - ${claim.title}</h3>
                        <button class="modal-close" onclick="app.closeModal('related-docs-modal')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-content">
                        <div class="related-docs-list">
                            ${claim.related_documents.map(docId => {
                                const doc = this.caseData.documents[docId];
                                return doc ? `
                                    <div class="related-doc-item" onclick="app.showComprehensiveDocumentModal('${docId}')">
                                        <div class="doc-icon">
                                            <i class="${this.getDocumentIcon(doc.type)}"></i>
                                        </div>
                                        <div class="doc-info">
                                            <h5>${doc.title}</h5>
                                            <p>${doc.type.replace('_', ' ').toUpperCase()}</p>
                                            <span class="evidence-strength">Evidence: ${doc.evidence_strength}%</span>
                                        </div>
                                    </div>
                                ` : `
                                    <div class="related-doc-item unavailable">
                                        <div class="doc-icon">
                                            <i class="fas fa-file-times"></i>
                                        </div>
                                        <div class="doc-info">
                                            <h5>${docId}</h5>
                                            <p>Document not found in library</p>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    showComprehensiveDocumentModal(docId) {
        const doc = this.caseData.documents[docId];
        if (!doc) {
            alert(`Document not found: ${docId}`);
            return;
        }
        
        const modalHTML = `
            <div id="comprehensive-document-modal" class="modal-overlay document-modal">
                <div class="comprehensive-document-viewer">
                    <div class="document-header">
                        <div class="document-title">
                            <h2>${doc.title}</h2>
                            <span class="document-type">${doc.type.replace('_', ' ').toUpperCase()}</span>
                        </div>
                        <div class="document-controls">
                            <button class="btn-icon" onclick="app.downloadDocument('${docId}')" title="Download">
                                <i class="fas fa-download"></i>
                            </button>
                            <button class="btn-icon" onclick="app.analyzeDocument('${docId}')" title="AI Analysis">
                                <i class="fas fa-brain"></i>
                            </button>
                            <button class="btn-icon" onclick="app.closeModal('comprehensive-document-modal')" title="Close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="document-body">
                        <div class="document-preview">
                            <div class="document-info-panel">
                                <div class="info-section">
                                    <h4>Document Information</h4>
                                    <div class="info-grid">
                                        <div class="info-item">
                                            <label>Author:</label>
                                            <span>${doc.author}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Date:</label>
                                            <span>${doc.date || doc.date_range || 'Not specified'}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Pages:</label>
                                            <span>${doc.pages}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>File Location:</label>
                                            <span class="file-location">${doc.file_location}</span>
                                        </div>
                                        <div class="info-item">
                                            <label>Evidence Strength:</label>
                                            <span class="strength-badge strength-${doc.evidence_strength >= 85 ? 'high' : doc.evidence_strength >= 70 ? 'medium' : 'low'}">
                                                ${doc.evidence_strength}%
                                            </span>
                                        </div>
                                        <div class="info-item">
                                            <label>Admissibility:</label>
                                            <span class="admissibility-badge admissibility-${doc.admissibility.replace(' ', '-')}">${doc.admissibility}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="info-section">
                                    <h4>Summary</h4>
                                    <p>${doc.summary}</p>
                                </div>
                                
                                ${doc.key_sections ? `
                                <div class="info-section">
                                    <h4>Key Sections</h4>
                                    <ul class="key-sections-list">
                                        ${doc.key_sections.map(section => `<li>${section}</li>`).join('')}
                                    </ul>
                                </div>
                                ` : ''}
                                
                                ${doc.technical_findings ? `
                                <div class="info-section">
                                    <h4>Technical Findings</h4>
                                    <ul class="technical-findings-list">
                                        ${doc.technical_findings.map(finding => `<li>${finding}</li>`).join('')}
                                    </ul>
                                </div>
                                ` : ''}
                                
                                ${doc.key_content ? `
                                <div class="info-section">
                                    <h4>Key Content</h4>
                                    <ul class="key-content-list">
                                        ${doc.key_content.map(content => `<li>${content}</li>`).join('')}
                                    </ul>
                                </div>
                                ` : ''}
                                
                                ${doc.cross_references && doc.cross_references.length > 0 ? `
                                <div class="info-section">
                                    <h4>Cross References</h4>
                                    <div class="cross-references">
                                        ${doc.cross_references.map(ref => `
                                            <button class="cross-ref-btn" onclick="app.showComprehensiveDocumentModal('${ref}')">
                                                <i class="fas fa-link"></i>
                                                ${ref.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                            
                            <div class="document-viewer-panel">
                                <div class="viewer-placeholder">
                                    <div class="placeholder-content">
                                        <i class="fas fa-file-pdf fa-4x"></i>
                                        <h3>Document Preview</h3>
                                        <p>File: ${doc.file_location}</p>
                                        <p>Click Download to access the full document</p>
                                        <button class="btn-primary" onclick="app.downloadDocument('${docId}')">
                                            <i class="fas fa-download"></i>
                                            Download Document
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.remove();
        }
    }
    
    viewDocument(docId) {
        this.showComprehensiveDocumentModal(docId);
    }
    
    downloadDocument(docId) {
        const doc = this.caseData.documents[docId];
        if (doc) {
            alert(`Downloading: ${doc.title}\nLocation: ${doc.file_location}`);
        } else {
            alert(`Document not found: ${docId}`);
        }
    }
    
    analyzeDocument(docId) {
        const doc = this.caseData.documents[docId];
        if (doc) {
            alert(`AI Analysis for: ${doc.title}\n\nThis feature would provide:\n• Document summarization\n• Key finding extraction\n• Cross-reference analysis\n• Evidence strength assessment`);
        } else {
            alert(`Document not found: ${docId}`);
        }
    }
    
    shareDocument(docId) {
        const doc = this.caseData.documents[docId];
        if (doc) {
            alert(`Share functionality for: ${doc.title}\n\nThis would allow sharing with team members and external parties.`);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ComprehensiveClaimSystem();
});