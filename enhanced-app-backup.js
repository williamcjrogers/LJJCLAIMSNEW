// Enhanced LJJ SVP Claim Management System
class ClaimManagementSystem {
    constructor() {
        this.currentUser = null;
        this.currentSection = 'dashboard';
        this.socket = null;
        this.charts = {};
        
        this.caseData = {
            id: 'WEL-2024-001',
            title: 'LJJ SVP Claim',
            status: 'active',
            confidence: 65, // Realistic assessment based on actual evidence
            totalValue: 2400000,
            issuesIdentified: 28,
            evidenceStrength: 72, // Honest assessment considering gaps
            missingEvidence: 6, // Updated based on briefing document
            
            // Detailed claim narratives and success analysis
            claims: {
                technical_failure: {
                    title: "Technical Installation Failures",
                    narrative: "LJJ's installation of SVP systems across Welbourne development demonstrated systematic technical failures. The K&T investigation identified 28 specific defects in Block C alone, including leaking boss connections, missing gasket seals, unglued fittings, and poor workmanship. These failures resulted in odour escape, water damage, and non-compliance with Building Regulations.",
                    evidence_strength: 85,
                    success_probability: 75,
                    basis: "Strong technical evidence from independent K&T investigation with photographic documentation. CCI expert witness report corroborates findings. However, success depends on proving these failures existed at handover versus subsequent damage.",
                    risks: [
                        "LJJ may argue damage occurred post-handover during UL occupation",
                        "Some photographic evidence taken 2+ years after installation",
                        "Need to establish timeline of when failures occurred"
                    ],
                    value_estimate: 1800000
                },
                
                contractual_breach: {
                    title: "Breach of Contract - Failure to Complete Works",
                    narrative: "LJJ failed to complete contracted SVP works and testing to required standards. Despite multiple formal notices and deadlines, LJJ did not provide proper witnessing of testing, failed to rectify known defects, and ultimately abandoned works before completion. This constitutes fundamental breach of contract terms.",
                    evidence_strength: 70,
                    success_probability: 60,
                    basis: "Clear contractual timeline showing LJJ's failure to meet obligations. Formal notices and correspondence demonstrate repeated non-compliance. However, LJJ reported damage early, potentially creating defensive position.",
                    risks: [
                        "LJJ's early damage reporting may suggest proactive approach",
                        "Could argue they were prevented from completing works",
                        "Questions over whether formal notice procedures were properly followed"
                    ],
                    value_estimate: 800000
                },
                
                professional_negligence: {
                    title: "Professional Negligence in Design and Installation",
                    narrative: "LJJ owed a duty of care as specialist contractors to design and install SVP systems to professional standards. The systematic nature of failures across multiple blocks suggests negligent approach to both design and installation phases. The failure to follow industry standards and Building Regulations constitutes professional negligence.",
                    evidence_strength: 65,
                    success_probability: 55,
                    basis: "Pattern of systematic failures suggests negligence rather than isolated issues. Expert evidence supports sub-standard installation practices. However, establishing duty of care and causation may prove challenging.",
                    risks: [
                        "Need to prove specific duty of care beyond contractual obligations",
                        "LJJ may argue they followed provided specifications",
                        "Professional negligence claims have higher burden of proof"
                    ],
                    value_estimate: 600000
                },
                
                time_based_claims: {
                    title: "Delays and Time-Related Costs",
                    narrative: "LJJ's failures resulted in significant project delays, additional investigation costs, and remedial works. The extended timeline from first damage reports in August 2021 to final resolution in February 2024 demonstrates the prolonged impact of LJJ's failures on the project completion.",
                    evidence_strength: 60,
                    success_probability: 45,
                    basis: "Clear timeline showing extended resolution period. Additional costs for K&T investigation and remedial works are documented. However, establishing causation and quantum of delay costs may be disputed.",
                    risks: [
                        "Difficult to separate LJJ-caused delays from other project issues",
                        "Delay costs often disputed and hard to quantify precisely",
                        "May be challenged on mitigation of delay impacts"
                    ],
                    value_estimate: 400000
                }
            },
            
            overall_assessment: {
                narrative: "The LJJ SVP claim presents a mixed case with strong technical evidence but significant procedural and timeline challenges. While the K&T investigation provides compelling evidence of systematic installation failures, LJJ's early reporting of damage creates a defensive narrative that may reduce claim success. The strongest elements are the technical failures with independent expert corroboration, while the weakest aspects relate to proving when failures occurred and establishing full causation for all claimed losses.",
                realistic_outcome: "Partial settlement likely in range £1.2M - £1.8M representing 50-75% of claimed value",
                key_challenges: [
                    "Proving failures existed at handover vs. subsequent damage",
                    "LJJ's defensive position from early damage reporting", 
                    "Missing K&T reports for Blocks A&B limit comprehensive evidence",
                    "Timeline gaps may undermine some contractual breach arguments"
                ],
                strengths: [
                    "Independent K&T technical investigation with 28 documented failures",
                    "CCI expert witness report supports technical findings",
                    "Clear pattern of systematic rather than isolated failures",
                    "Building Control sign-off after UL remediation validates defects"
                ]
            },
            
            timeline: [
                { date: '23.03.21', title: 'SVP Benchmark for inspection', description: 'Initial benchmarking email sent', category: 'planning', priority: 'low' },
                { date: '02.08.21', title: 'LJJ reports damaged SVPs', description: 'LJJ started reporting damaged SVP systems', category: 'issue', priority: 'medium' },
                { date: '04.11.21', title: 'Collaboration concerns', description: 'LJJ not working collaboratively - email documented', category: 'issue', priority: 'high' },
                { date: '22.02.22', title: 'More SVP damage reported', description: 'LJJ reporting additional damage to SVP systems', category: 'issue', priority: 'medium' },
                { date: '10.03.22', title: 'Quinn Ross witness request', description: 'Quinn Ross asking to witness SVP testing', category: 'testing', priority: 'medium' },
                { date: '25.10.22', title: 'ESD Site Observation', description: 'Client tracker notes incomplete test certificates', category: 'compliance', priority: 'high' },
                { date: '31.08.23', title: 'UL notifies LJJ of leaks', description: 'Official notification with investigative works confirmation', category: 'formal', priority: 'high' },
                { date: '11.10.23', title: 'SVP test rescheduled', description: 'Witnessing rescheduled - failed to happen', category: 'testing', priority: 'critical' },
                { date: '07.11.23', title: 'LJJ confirms SVP issues', description: 'John Angel confirms witnessing will not proceed', category: 'failure', priority: 'critical' },
                { date: '09.11.23', title: 'UL formal notice', description: 'Notice giving deadline of 10.11.23 for completion', category: 'formal', priority: 'critical' },
                { date: '10.11.23', title: 'Contract omission notice', description: 'UL omits remaining SVP works from LJJ contract', category: 'termination', priority: 'critical' },
                { date: '13.11.23', title: 'UL instructs stand-down', description: 'LJJ told to cease all SVP investigation work', category: 'termination', priority: 'critical' },
                { date: '07.01.24', title: 'K&T Block C Investigation', description: '28 issues identified in comprehensive report', category: 'evidence', priority: 'high' },
                { date: '26.01.24', title: 'CCI Expert witness report', description: 'Independent expert assessment of SVP defects', category: 'evidence', priority: 'high' },
                { date: '08.02.24', title: 'NCR46 issued to LJJ', description: 'Formal non-conformance report for SVP stack defects', category: 'formal', priority: 'high' },
                { date: '16.02.24', title: 'Building Control sign-off', description: 'BC approval following UL/K&T remediation works', category: 'resolution', priority: 'medium' }
            ],
            
            documents: [
                {
                    id: 'ljj-briefing',
                    title: 'LJJ SVP Validation Briefing 11.08.25',
                    category: 'technical',
                    type: 'pdf',
                    size: '178.3KB',
                    path: 'LJJ SVP Validation Briefing 11.08.25.pdf',
                    preview: 'Comprehensive briefing document outlining timeline, evidence review, and key considerations for the SVP claim validation.',
                    keyPoints: ['Timeline of events', 'Strengths and weaknesses', 'Missing evidence gaps'],
                    linkedDocs: ['kt-block-c', 'svp-positions'],
                    uploadDate: '2024-08-11',
                    lastModified: '2024-08-11',
                    tags: ['briefing', 'validation', 'timeline'],
                    confidence: 95
                },
                {
                    id: 'kt-block-c',
                    title: 'United Living Block C SVP Report',
                    category: 'technical',
                    type: 'pdf',
                    size: '7.2MB',
                    path: 'Mechanical Building Services/United Living Block C SVP report.pdf',
                    preview: '28 issues identified by K&T investigation including leaking connections, missing seals, and poor workmanship.',
                    keyPoints: ['28 technical failures', 'Photo evidence', 'Cross-block issues'],
                    linkedDocs: ['ljj-briefing', 'svp-positions'],
                    uploadDate: '2024-01-07',
                    lastModified: '2024-01-07',
                    tags: ['K&T', 'investigation', 'technical'],
                    confidence: 98
                },
                {
                    id: 'svp-positions',
                    title: '2283-00-SK-0145 Revised Level 08 SVP Positions',
                    category: 'drawings',
                    type: 'pdf',
                    size: '1.4MB',
                    path: 'Mechanical Building Services/2283-00-SK-0145 Revised Level 08 SVP positions.pdf',
                    preview: 'Technical drawing showing SVP stack positions and structural layout for Level 08.',
                    keyPoints: ['SVP routing layout', 'Structural correlations', 'Grid references'],
                    linkedDocs: ['kt-block-c'],
                    uploadDate: '2020-07-23',
                    lastModified: '2020-07-23',
                    tags: ['drawings', 'SVP', 'technical'],
                    confidence: 85
                },
                {
                    id: 'adjudication-decision',
                    title: 'Adjudicator\'s Decision Email',
                    category: 'legal',
                    type: 'eml',
                    size: '45KB',
                    path: 'BMS/FW In the matter of an adjudication between LJJ Limited (Referring Party) - and - United Living (South) Limited (Responding Party) - Adjudicator\'s Decision.eml',
                    preview: 'Official adjudication decision correspondence between parties.',
                    keyPoints: ['Legal decision', 'Formal ruling', 'Binding outcome'],
                    uploadDate: '2024-02-15',
                    lastModified: '2024-02-15',
                    tags: ['adjudication', 'legal', 'decision'],
                    confidence: 100
                },
                {
                    id: 'ljj-progress',
                    title: 'LJJ Progress Report 9',
                    category: 'correspondence',
                    type: 'pdf',
                    size: '890KB',
                    path: 'BMS/LJJ Progress Report 9.pdf',
                    preview: 'LJJ\'s internal progress reporting document.',
                    keyPoints: ['LJJ perspective', 'Progress claims', 'Internal reporting'],
                    uploadDate: '2023-09-15',
                    lastModified: '2023-09-15',
                    tags: ['progress', 'LJJ', 'reporting'],
                    confidence: 70
                }
            ],
            
            teamMembers: [
                {
                    id: 'senior-partner',
                    name: 'Senior Partner',
                    role: 'Lead Counsel',
                    avatar: 'SP',
                    status: 'online',
                    lastActive: new Date(),
                    permissions: ['read', 'write', 'admin'],
                    performance: 95
                },
                {
                    id: 'case-manager',
                    name: 'Case Manager',
                    role: 'Case Coordination',
                    avatar: 'CM',
                    status: 'online',
                    lastActive: new Date(Date.now() - 300000),
                    permissions: ['read', 'write'],
                    performance: 78
                },
                {
                    id: 'analyst',
                    name: 'Legal Analyst',
                    role: 'Document Analysis',
                    avatar: 'LA',
                    status: 'away',
                    lastActive: new Date(Date.now() - 1800000),
                    permissions: ['read', 'write'],
                    performance: 85
                },
                {
                    id: 'viewer',
                    name: 'Document Viewer',
                    role: 'Review Only',
                    avatar: 'DV',
                    status: 'offline',
                    lastActive: new Date(Date.now() - 7200000),
                    permissions: ['read'],
                    performance: 60
                }
            ],
            
            aiInsights: [
                {
                    type: 'strength',
                    title: 'Strong Technical Foundation',
                    description: 'K&T investigation provides comprehensive technical evidence with photographic support across 28 identified failures.',
                    confidence: 94,
                    impact: 'high',
                    recommendation: 'Emphasize systematic nature of failures in legal arguments'
                },
                {
                    type: 'risk',
                    title: 'Timeline Vulnerability',
                    description: 'LJJ\'s early damage reporting may create defensive narrative requiring counter-strategy.',
                    confidence: 87,
                    impact: 'medium',
                    recommendation: 'Develop counter-narrative focusing on contractual obligations'
                },
                {
                    type: 'opportunity',
                    title: 'Pattern Recognition',
                    description: 'Systematic installation failures indicate organizational rather than individual issues.',
                    confidence: 91,
                    impact: 'high',
                    recommendation: 'Highlight organizational failure patterns in expert testimony'
                }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        // Set default user for public access
        this.currentUser = {
            role: 'viewer',
            name: 'Public User',
            avatar: this.getRoleAvatar('viewer'),
            permissions: this.getRolePermissions('viewer'),
            loginTime: new Date()
        };
        
        // Show main app directly without login
        document.getElementById('main-app').style.display = 'flex';
        
        // Update user info in sidebar
        document.getElementById('user-name').textContent = this.currentUser.name;
        document.getElementById('user-role').textContent = this.getRoleDisplayName(this.currentUser.role);
        document.getElementById('user-avatar').innerHTML = this.currentUser.avatar;
        
        // Initialize the dashboard
        this.initializeDashboard();
        
        // Initialize real-time features
        this.initializeRealTime();
    }
    
    setupEventListeners() {
        // Navigation and other event listeners only
        
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => this.handleNavigation(e));
        });
        
        // Sidebar toggle for mobile
        const sidebarToggle = document.getElementById('sidebar-toggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => this.toggleSidebar());
        }
        
        // Logout (disabled for public access)
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.style.display = 'none'; // Hide logout button for public access
        }
        
        // Search functionality
        document.getElementById('header-search').addEventListener('input', (e) => this.handleSearch(e));
        
        // Timeline filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleTimelineFilter(e));
        });
        
        // Evidence search and filter
        const evidenceSearch = document.getElementById('evidence-search');
        const categoryFilter = document.getElementById('category-filter');
        
        if (evidenceSearch) {
            evidenceSearch.addEventListener('input', (e) => this.filterEvidence());
        }
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => this.filterEvidence());
        }
        
        // Real-time updates
        this.setupRealTimeUpdates();
        
        // Keyboard shortcuts
        this.setupKeyboardShortcuts();
    }
    
    showLoginModal() {
        document.getElementById('login-modal').style.display = 'flex';
        document.getElementById('main-app').style.display = 'none';
    }
    
    handleLogin(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const role = formData.get('role');
        
        // Simulate authentication
        this.currentUser = {
            email: email,
            role: role,
            name: this.getRoleDisplayName(role),
            avatar: this.getRoleAvatar(role),
            permissions: this.getRolePermissions(role),
            loginTime: new Date()
        };
        
        // Hide login modal and show main app
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('main-app').style.display = 'flex';
        
        // Update user info in sidebar
        this.updateUserInfo();
        
        // Initialize dashboard
        this.initializeDashboard();
        
        // Start real-time features
        this.initializeRealTime();
        
        // Show welcome notification
        this.showNotification('Welcome to LJJ SVP Claim Management System', 'success');
    }
    
    getRoleDisplayName(role) {
        const roles = {
            'senior-partner': 'Senior Partner',
            'case-manager': 'Case Manager',
            'analyst': 'Legal Analyst',
            'viewer': 'Document Viewer'
        };
        return roles[role] || 'User';
    }
    
    getRoleAvatar(role) {
        const avatars = {
            'senior-partner': 'SP',
            'case-manager': 'CM',
            'analyst': 'LA',
            'viewer': 'DV'
        };
        return avatars[role] || 'U';
    }
    
    getRolePermissions(role) {
        const permissions = {
            'senior-partner': ['read', 'write', 'admin', 'strategy', 'analytics'],
            'case-manager': ['read', 'write', 'collaborate'],
            'analyst': ['read', 'write', 'analyze'],
            'viewer': ['read']
        };
        return permissions[role] || ['read'];
    }
    
    updateUserInfo() {
        document.getElementById('user-name').textContent = this.currentUser.name;
        document.getElementById('user-role').textContent = this.currentUser.role;
        document.getElementById('user-avatar').innerHTML = `<span>${this.currentUser.avatar}</span>`;
    }
    
    handleNavigation(e) {
        const section = e.currentTarget.dataset.section;
        if (!section) return;
        
        // Check permissions
        if (!this.hasPermission(section)) {
            this.showNotification('Insufficient permissions to access this section', 'error');
            return;
        }
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        // Update breadcrumb
        document.getElementById('current-section').textContent = this.getSectionTitle(section);
        
        // Hide all sections and show target
        document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(section).classList.add('active');
        
        this.currentSection = section;
        
        // Initialize section-specific functionality
        this.initializeSection(section);
    }
    
    getSectionTitle(section) {
        const titles = {
            'dashboard': 'Dashboard',
            'strategy': 'Strategy Roadmap',
            'timeline': 'Case Timeline',
            'evidence': 'Evidence Library',
            'analytics': 'Analytics',
            'collaboration': 'Team Workspace',
            'ai-insights': 'AI Insights'
        };
        return titles[section] || 'Section';
    }
    
    hasPermission(section) {
        const requiredPermissions = {
            'dashboard': ['read'],
            'strategy': ['read', 'strategy'],
            'timeline': ['read'],
            'evidence': ['read'],
            'analytics': ['read', 'analytics'],
            'collaboration': ['read', 'collaborate'],
            'ai-insights': ['read', 'analytics']
        };
        
        const required = requiredPermissions[section] || ['read'];
        return required.some(perm => this.currentUser.permissions.includes(perm));
    }
    
    initializeSection(section) {
        switch (section) {
            case 'dashboard':
                this.initializeDashboard();
                break;
            case 'strategy':
                this.initializeStrategy();
                break;
            case 'timeline':
                this.initializeTimeline();
                break;
            case 'evidence':
                this.initializeEvidence();
                break;
            case 'analytics':
                this.initializeAnalytics();
                break;
            case 'collaboration':
                this.initializeCollaboration();
                break;
            case 'ai-insights':
                this.initializeAIInsights();
                break;
        }
    }
    
    initializeDashboard() {
        this.createEvidenceChart();
        this.updateMetrics();
        this.loadRecentActivity();
        this.updateTeamStats();
    }
    
    createEvidenceChart() {
        const ctx = document.getElementById('evidence-chart');
        if (!ctx) return;
        
        if (this.charts.evidence) {
            this.charts.evidence.destroy();
        }
        
        this.charts.evidence = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Technical Reports', 'Correspondence', 'Legal Documents', 'Technical Drawings'],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: [
                        '#2563eb',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    }
                }
            }
        });
    }
    
    updateMetrics() {
        // Animate metric values
        this.animateCounter('.metric-card.critical h3', this.caseData.issuesIdentified);
        this.animateCounter('.metric-card.success h3', this.caseData.evidenceStrength, '%');
        this.animateCounter('.metric-card.warning h3', this.caseData.missingEvidence);
        this.animateCounter('.metric-card.info h3', this.caseData.totalValue / 1000000, 'M', '£');
    }
    
    animateCounter(selector, target, suffix = '', prefix = '') {
        const element = document.querySelector(selector);
        if (!element) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (suffix === 'M') {
                displayValue = (current).toFixed(1);
            }
            
            element.textContent = `${prefix}${displayValue}${suffix}`;
        }, 20);
    }
    
    loadRecentActivity() {
        // This would typically load from an API
        const activities = [
            {
                type: 'success',
                icon: 'fas fa-file-alt',
                message: '<strong>K&T Block C Report</strong> uploaded',
                time: '2 hours ago'
            },
            {
                type: 'info',
                icon: 'fas fa-comment',
                message: '<strong>Strategy review</strong> comment added',
                time: '4 hours ago'
            },
            {
                type: 'warning',
                icon: 'fas fa-exclamation-circle',
                message: '<strong>Missing evidence</strong> flagged',
                time: '1 day ago'
            }
        ];
        
        // Update activity feed (implementation would go here)
    }
    
    updateTeamStats() {
        this.caseData.teamMembers.forEach(member => {
            // Update team member progress bars with animation
            const progressBar = document.querySelector(`[data-member="${member.id}"] .progress-fill`);
            if (progressBar) {
                setTimeout(() => {
                    progressBar.style.width = `${member.performance}%`;
                }, 100);
            }
        });
    }
    
    initializeStrategy() {
        this.loadStrategyData();
        this.updateRoadmap();
        this.generateAIRecommendations();
        this.renderClaimNarratives();
    }
    
    loadStrategyData() {
        // Load and display current strategy information
        const strategies = [
            {
                name: 'Evidence-Based Technical Failure Claims',
                confidence: 87,
                description: 'Focus on K&T technical findings, LJJ\'s failure to demonstrate proper commissioning, and Building Control non-compliance.',
                pros: ['Strong technical evidence', 'Clear failure patterns', 'Expert witness support'],
                cons: ['Time elapsed since issues', 'Some UL signed documents'],
                timeline: '3-4 months',
                cost: 'Medium',
                successRate: 78
            }
        ];
        
        // Update strategy display (implementation would go here)
    }
    
    updateRoadmap() {
        // Update roadmap phases based on current progress
        const phases = document.querySelectorAll('.roadmap-phase');
        phases.forEach((phase, index) => {
            // Add interactive features and progress tracking
            phase.addEventListener('click', () => this.showPhaseDetails(index));
        });
    }
    
    generateAIRecommendations() {
        // AI-powered strategic recommendations
        const recommendations = this.caseData.aiInsights.map(insight => ({
            priority: insight.impact === 'high' ? 'high' : insight.impact === 'medium' ? 'medium' : 'low',
            title: insight.title,
            description: insight.description,
            confidence: insight.confidence,
            action: insight.recommendation
        }));
        
        // Display recommendations (implementation would go here)
    }
    
    renderClaimNarratives() {
        const narrativesContainer = document.getElementById('claim-narratives');
        if (!narrativesContainer) return;
        
        const claims = this.caseData.claims;
        let narrativesHTML = '';
        
        Object.entries(claims).forEach(([key, claim]) => {
            const successClass = claim.success_probability >= 70 ? 'high-success' : 
                               claim.success_probability >= 50 ? 'medium-success' : 'low-success';
            
            narrativesHTML += `
                <div class="narrative-card ${successClass}">
                    <div class="narrative-header">
                        <h4>${claim.title}</h4>
                        <div class="success-metrics">
                            <span class="success-rate">Success: ${claim.success_probability}%</span>
                            <span class="evidence-strength">Evidence: ${claim.evidence_strength}%</span>
                            <span class="value-estimate">Value: £${(claim.value_estimate/1000000).toFixed(1)}M</span>
                        </div>
                    </div>
                    
                    <div class="narrative-content">
                        <div class="narrative-text">
                            <h5>Case Narrative</h5>
                            <p>${claim.narrative}</p>
                        </div>
                        
                        <div class="basis-analysis">
                            <h5>Basis for Assessment</h5>
                            <p>${claim.basis}</p>
                        </div>
                        
                        <div class="risk-factors">
                            <h5>Key Risks</h5>
                            <ul>
                                ${claim.risks.map(risk => `<li>${risk}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Add overall assessment
        const overall = this.caseData.overall_assessment;
        narrativesHTML += `
            <div class="narrative-card overall-assessment">
                <div class="narrative-header">
                    <h4>Overall Case Assessment</h4>
                    <div class="realistic-outcome">
                        <span class="outcome-label">Realistic Outcome:</span>
                        <span class="outcome-value">${overall.realistic_outcome}</span>
                    </div>
                </div>
                
                <div class="narrative-content">
                    <div class="narrative-text">
                        <h5>Executive Summary</h5>
                        <p>${overall.narrative}</p>
                    </div>
                    
                    <div class="strengths-weaknesses">
                        <div class="strengths">
                            <h5>Key Strengths</h5>
                            <ul>
                                ${overall.strengths.map(strength => `<li class="strength-item">${strength}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="challenges">
                            <h5>Key Challenges</h5>
                            <ul>
                                ${overall.key_challenges.map(challenge => `<li class="challenge-item">${challenge}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        narrativesContainer.innerHTML = narrativesHTML;
    }
    
    initializeTimeline() {
        this.renderTimeline();
        this.setupTimelineFilters();
    }
    
    renderTimeline(filter = 'all') {
        const timeline = document.getElementById('case-timeline');
        if (!timeline) return;
        
        let filteredEvents = this.caseData.timeline;
        
        if (filter !== 'all') {
            filteredEvents = this.caseData.timeline.filter(event => {
                switch (filter) {
                    case 'critical':
                        return event.priority === 'critical';
                    case 'formal':
                        return event.category === 'formal' || event.category === 'termination';
                    case 'evidence':
                        return event.category === 'evidence';
                    default:
                        return true;
                }
            });
        }
        
        const timelineHTML = filteredEvents.map((event, index) => {
            const priorityClass = `priority-${event.priority}`;
            const categoryClass = `category-${event.category}`;
            
            return `
                <div class="timeline-event ${priorityClass} ${categoryClass}" data-event-id="${index}">
                    <div class="timeline-marker">
                        <div class="timeline-icon">
                            ${this.getTimelineIcon(event.category)}
                        </div>
                        <div class="timeline-date">${event.date}</div>
                    </div>
                    <div class="timeline-content-card">
                        <div class="timeline-header">
                            <h4>${event.title}</h4>
                            <span class="priority-badge ${event.priority}">${event.priority}</span>
                        </div>
                        <p>${event.description}</p>
                        <div class="timeline-actions">
                            <button class="btn-link" onclick="app.showEventDetails(${index})">
                                <i class="fas fa-eye"></i> View Details
                            </button>
                            <button class="btn-link" onclick="app.showRelatedDocs(${index})">
                                <i class="fas fa-paperclip"></i> Related Docs
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        timeline.innerHTML = `
            <div class="timeline-track">
                ${timelineHTML}
            </div>
        `;
        
        // Add interactive features
        this.addTimelineInteractivity();
    }
    
    getTimelineIcon(category) {
        const icons = {
            'planning': '<i class="fas fa-calendar-alt"></i>',
            'issue': '<i class="fas fa-exclamation-triangle"></i>',
            'testing': '<i class="fas fa-vials"></i>',
            'compliance': '<i class="fas fa-shield-alt"></i>',
            'formal': '<i class="fas fa-file-contract"></i>',
            'failure': '<i class="fas fa-times-circle"></i>',
            'termination': '<i class="fas fa-ban"></i>',
            'evidence': '<i class="fas fa-search"></i>',
            'resolution': '<i class="fas fa-check-circle"></i>'
        };
        return icons[category] || '<i class="fas fa-circle"></i>';
    }
    
    addTimelineInteractivity() {
        document.querySelectorAll('.timeline-event').forEach(event => {
            event.addEventListener('mouseenter', () => {
                event.classList.add('timeline-event-hover');
            });
            
            event.addEventListener('mouseleave', () => {
                event.classList.remove('timeline-event-hover');
            });
        });
    }
    
    setupTimelineFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.renderTimeline(e.target.dataset.filter);
            });
        });
    }
    
    initializeEvidence() {
        this.renderEvidenceGrid();
        this.setupEvidenceFilters();
        this.setupEvidenceUpload();
    }
    
    renderEvidenceGrid(filter = {}) {
        const evidenceGrid = document.getElementById('evidence-grid');
        if (!evidenceGrid) return;
        
        let filteredDocs = this.caseData.documents;
        
        // Apply filters
        if (filter.category && filter.category !== 'all') {
            filteredDocs = filteredDocs.filter(doc => doc.category === filter.category);
        }
        
        if (filter.search) {
            const searchTerm = filter.search.toLowerCase();
            filteredDocs = filteredDocs.filter(doc => 
                doc.title.toLowerCase().includes(searchTerm) ||
                doc.preview.toLowerCase().includes(searchTerm) ||
                doc.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        const evidenceHTML = filteredDocs.map(doc => {
            const confidenceColor = doc.confidence >= 90 ? 'success' : 
                                   doc.confidence >= 70 ? 'warning' : 'error';
            
            return `
                <div class="evidence-card" data-doc-id="${doc.id}">
                    <div class="evidence-header">
                        <div class="evidence-type">
                            ${this.getFileIcon(doc.type)}
                            <span class="file-type">${doc.type.toUpperCase()}</span>
                        </div>
                        <div class="evidence-confidence">
                            <span class="confidence-badge ${confidenceColor}">${doc.confidence}%</span>
                        </div>
                    </div>
                    
                    <div class="evidence-content">
                        <h4>${doc.title}</h4>
                        <p class="evidence-preview">${doc.preview}</p>
                        
                        <div class="evidence-meta">
                            <span class="file-size">${doc.size}</span>
                            <span class="upload-date">${new Date(doc.uploadDate).toLocaleDateString()}</span>
                        </div>
                        
                        <div class="evidence-tags">
                            ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        
                        <div class="key-points">
                            ${doc.keyPoints.map(point => `
                                <div class="key-point">
                                    <i class="fas fa-check-circle"></i>
                                    <span>${point}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="evidence-actions">
                        <button class="btn-primary" onclick="app.viewDocument('${doc.id}')">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="btn-secondary" onclick="app.analyzeDocument('${doc.id}')">
                            <i class="fas fa-brain"></i> AI Analysis
                        </button>
                        <button class="btn-secondary" onclick="app.shareDocument('${doc.id}')">
                            <i class="fas fa-share-alt"></i> Share
                        </button>
                    </div>
                    
                    <div class="evidence-links">
                        <span class="linked-count">${doc.linkedDocs ? doc.linkedDocs.length : 0} linked documents</span>
                        <button class="btn-link" onclick="app.showLinkedDocs('${doc.id}')">
                            View Links
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        evidenceGrid.innerHTML = evidenceHTML || '<div class="no-results">No documents found matching your criteria.</div>';
    }
    
    getFileIcon(type) {
        const icons = {
            'pdf': '<i class="fas fa-file-pdf text-red-500"></i>',
            'doc': '<i class="fas fa-file-word text-blue-500"></i>',
            'xls': '<i class="fas fa-file-excel text-green-500"></i>',
            'eml': '<i class="fas fa-envelope text-yellow-500"></i>',
            'jpg': '<i class="fas fa-file-image text-purple-500"></i>',
            'png': '<i class="fas fa-file-image text-purple-500"></i>'
        };
        return icons[type] || '<i class="fas fa-file text-gray-500"></i>';
    }
    
    filterEvidence() {
        const search = document.getElementById('evidence-search')?.value || '';
        const category = document.getElementById('category-filter')?.value || 'all';
        
        this.renderEvidenceGrid({ search, category });
    }
    
    setupEvidenceFilters() {
        // Already handled in setupEventListeners
    }
    
    setupEvidenceUpload() {
        // File upload functionality would be implemented here
    }
    
    initializeAnalytics() {
        this.createStrengthGauge();
        this.createRiskMatrix();
        this.createOutcomeChart();
        this.updateAnalyticsData();
    }
    
    createStrengthGauge() {
        const ctx = document.getElementById('strength-gauge');
        if (!ctx) return;
        
        if (this.charts.strength) {
            this.charts.strength.destroy();
        }
        
        this.charts.strength = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [this.caseData.evidenceStrength, 100 - this.caseData.evidenceStrength],
                    backgroundColor: ['#10b981', '#f1f5f9'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                cutout: '80%'
            }
        });
    }
    
    createRiskMatrix() {
        const riskMatrix = document.getElementById('risk-matrix');
        if (!riskMatrix) return;
        
        const risks = [
            { name: 'Timeline Delays', probability: 0.3, impact: 0.7, category: 'medium' },
            { name: 'Missing Evidence', probability: 0.4, impact: 0.8, category: 'high' },
            { name: 'Expert Witness Availability', probability: 0.2, impact: 0.6, category: 'low' },
            { name: 'Settlement Negotiation', probability: 0.6, impact: 0.5, category: 'medium' }
        ];
        
        const matrixHTML = risks.map(risk => `
            <div class="risk-bubble ${risk.category}" 
                 style="left: ${risk.probability * 80 + 10}%; bottom: ${risk.impact * 80 + 10}%;"
                 title="${risk.name}">
                <span>${risk.name}</span>
            </div>
        `).join('');
        
        riskMatrix.innerHTML = `
            <div class="risk-matrix-grid">
                <div class="risk-axis risk-axis-x">
                    <span>Low</span>
                    <span>Probability</span>
                    <span>High</span>
                </div>
                <div class="risk-axis risk-axis-y">
                    <span>High</span>
                    <span>Impact</span>
                    <span>Low</span>
                </div>
                ${matrixHTML}
            </div>
        `;
    }
    
    createOutcomeChart() {
        const ctx = document.getElementById('outcome-chart');
        if (!ctx) return;
        
        if (this.charts.outcome) {
            this.charts.outcome.destroy();
        }
        
        this.charts.outcome = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                datasets: [{
                    label: 'Success Probability',
                    data: [65, 68, 72, 75, 78, 82, 85, 87],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Settlement Value Estimate',
                    data: [1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.3, 2.4],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Success Probability (%)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Settlement Value (£M)'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                }
            }
        });
    }
    
    updateAnalyticsData() {
        // Update strength factors with animation
        const factors = [
            { name: 'Technical Evidence', score: 92 },
            { name: 'Documentation', score: 85 },
            { name: 'Timeline Consistency', score: 78 }
        ];
        
        factors.forEach((factor, index) => {
            setTimeout(() => {
                const factorElement = document.querySelectorAll('.strength-factor')[index];
                if (factorElement) {
                    const fillElement = factorElement.querySelector('.factor-fill');
                    const scoreElement = factorElement.querySelector('.factor-score');
                    
                    if (fillElement) fillElement.style.width = `${factor.score}%`;
                    if (scoreElement) scoreElement.textContent = `${factor.score}%`;
                }
            }, index * 200);
        });
    }
    
    initializeCollaboration() {
        this.renderTeamList();
        this.setupDiscussion();
        this.initializeRealTimeChat();
    }
    
    renderTeamList() {
        const teamList = document.getElementById('team-list');
        if (!teamList) return;
        
        const teamHTML = this.caseData.teamMembers.map(member => {
            const statusClass = member.status === 'online' ? 'online' : 
                               member.status === 'away' ? 'away' : 'offline';
            
            return `
                <div class="team-member-card ${statusClass}" data-member-id="${member.id}">
                    <div class="member-avatar">
                        <span>${member.avatar}</span>
                        <div class="status-indicator ${statusClass}"></div>
                    </div>
                    <div class="member-details">
                        <h4>${member.name}</h4>
                        <p>${member.role}</p>
                        <span class="last-active">${this.formatLastActive(member.lastActive)}</span>
                    </div>
                    <div class="member-actions">
                        <button class="btn-icon" onclick="app.startDirectMessage('${member.id}')" title="Direct Message">
                            <i class="fas fa-comment"></i>
                        </button>
                        <button class="btn-icon" onclick="app.startVideoCall('${member.id}')" title="Video Call">
                            <i class="fas fa-video"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        teamList.innerHTML = teamHTML;
    }
    
    formatLastActive(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        
        if (minutes < 1) return 'Active now';
        if (minutes < 60) return `${minutes}m ago`;
        
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    }
    
    setupDiscussion() {
        const messageInput = document.getElementById('message-input');
        const sendBtn = document.querySelector('.send-btn');
        
        if (messageInput && sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    }
    
    sendMessage() {
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();
        
        if (!message) return;
        
        // Add message to discussion feed
        this.addMessageToFeed({
            id: Date.now(),
            sender: this.currentUser,
            message: message,
            timestamp: new Date(),
            type: 'text'
        });
        
        messageInput.value = '';
        
        // In a real app, this would send via WebSocket or API
        this.simulateResponse(message);
    }
    
    addMessageToFeed(message) {
        const discussionFeed = document.getElementById('discussion-feed');
        if (!discussionFeed) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender.id === this.currentUser.id ? 'message-own' : 'message-other'}`;
        messageElement.innerHTML = `
            <div class="message-avatar">
                <span>${message.sender.avatar}</span>
            </div>
            <div class="message-content">
                <div class="message-header">
                    <span class="message-sender">${message.sender.name}</span>
                    <span class="message-time">${new Date(message.timestamp).toLocaleTimeString()}</span>
                </div>
                <div class="message-text">${message.message}</div>
            </div>
        `;
        
        discussionFeed.appendChild(messageElement);
        discussionFeed.scrollTop = discussionFeed.scrollHeight;
    }
    
    simulateResponse(userMessage) {
        // Simulate AI or team member responses
        setTimeout(() => {
            const responses = [
                'I agree with that assessment.',
                'Let me review the documentation and get back to you.',
                'That\'s an interesting perspective on the case.',
                'We should schedule a meeting to discuss this further.',
                'I\'ve updated the evidence file accordingly.'
            ];
            
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const randomMember = this.caseData.teamMembers[Math.floor(Math.random() * this.caseData.teamMembers.length)];
            
            this.addMessageToFeed({
                id: Date.now() + 1,
                sender: randomMember,
                message: randomResponse,
                timestamp: new Date(),
                type: 'text'
            });
        }, 1000 + Math.random() * 3000);
    }
    
    initializeRealTimeChat() {
        // WebSocket connection would be established here
        // For demo purposes, we'll simulate real-time updates
    }
    
    initializeAIInsights() {
        this.renderAIInsights();
        this.generatePredictions();
        this.setupAIInteractions();
    }
    
    renderAIInsights() {
        const insightsContent = document.querySelector('.ai-insights-content');
        if (!insightsContent) return;
        
        const insightsHTML = this.caseData.aiInsights.map(insight => {
            const iconClass = insight.type === 'strength' ? 'success' :
                             insight.type === 'risk' ? 'warning' : 'info';
            const icon = insight.type === 'strength' ? 'fas fa-thumbs-up' :
                        insight.type === 'risk' ? 'fas fa-exclamation-triangle' : 'fas fa-lightbulb';
            
            return `
                <div class="insight-item">
                    <div class="insight-icon ${iconClass}">
                        <i class="${icon}"></i>
                    </div>
                    <div class="insight-content">
                        <h4>${insight.title}</h4>
                        <p>${insight.description}</p>
                        <span class="confidence">Confidence: ${insight.confidence}%</span>
                        <div class="insight-actions">
                            <button class="btn-link" onclick="app.exploreInsight('${insight.type}')">
                                <i class="fas fa-search-plus"></i> Explore
                            </button>
                            <button class="btn-link" onclick="app.implementRecommendation('${insight.type}')">
                                <i class="fas fa-play"></i> Implement
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        insightsContent.innerHTML = insightsHTML;
    }
    
    generatePredictions() {
        // AI prediction algorithms would run here
        // For demo, we'll display pre-calculated predictions
    }
    
    setupAIInteractions() {
        // Setup AI interaction handlers
    }
    
    // Utility methods
    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        // Implement global search functionality
        this.performGlobalSearch(searchTerm);
    }
    
    performGlobalSearch(searchTerm) {
        if (searchTerm.length < 2) return;
        
        const results = [];
        
        // Search documents
        this.caseData.documents.forEach(doc => {
            if (doc.title.toLowerCase().includes(searchTerm) ||
                doc.preview.toLowerCase().includes(searchTerm) ||
                doc.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
                results.push({ type: 'document', item: doc, relevance: this.calculateRelevance(doc, searchTerm) });
            }
        });
        
        // Search timeline
        this.caseData.timeline.forEach(event => {
            if (event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm)) {
                results.push({ type: 'timeline', item: event, relevance: this.calculateRelevance(event, searchTerm) });
            }
        });
        
        // Sort by relevance and show results
        results.sort((a, b) => b.relevance - a.relevance);
        this.showSearchResults(results, searchTerm);
    }
    
    calculateRelevance(item, searchTerm) {
        let relevance = 0;
        const title = (item.title || '').toLowerCase();
        const content = (item.preview || item.description || '').toLowerCase();
        
        if (title.includes(searchTerm)) relevance += 10;
        if (content.includes(searchTerm)) relevance += 5;
        
        return relevance;
    }
    
    showSearchResults(results, searchTerm) {
        // Implementation for showing search results overlay
    }
    
    handleTimelineFilter(e) {
        const filter = e.target.dataset.filter;
        this.renderTimeline(filter);
    }
    
    toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open');
    }
    
    logout() {
        this.currentUser = null;
        this.showLoginModal();
        this.showNotification('Successfully logged out', 'info');
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                              type === 'error' ? 'fa-times-circle' : 
                              type === 'warning' ? 'fa-exclamation-triangle' : 
                              'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
        
        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }
    
    setupRealTimeUpdates() {
        // Simulate real-time updates
        setInterval(() => {
            this.updateNotificationBadge();
            this.updateTeamStatus();
        }, 30000);
    }
    
    updateNotificationBadge() {
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            const currentCount = parseInt(badge.textContent) || 0;
            const newCount = Math.max(0, currentCount + Math.floor(Math.random() * 2) - 1);
            badge.textContent = newCount;
            badge.style.display = newCount > 0 ? 'block' : 'none';
        }
    }
    
    updateTeamStatus() {
        // Simulate team member status changes
        this.caseData.teamMembers.forEach(member => {
            if (Math.random() < 0.1) { // 10% chance of status change
                const statuses = ['online', 'away', 'offline'];
                member.status = statuses[Math.floor(Math.random() * statuses.length)];
                member.lastActive = new Date();
            }
        });
        
        if (this.currentSection === 'collaboration') {
            this.renderTeamList();
        }
    }
    
    initializeRealTime() {
        // Initialize WebSocket connections for real-time features
        // This would connect to a real WebSocket server in production
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Global shortcuts
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'k':
                        e.preventDefault();
                        document.getElementById('header-search').focus();
                        break;
                    case '1':
                        e.preventDefault();
                        this.navigateToSection('dashboard');
                        break;
                    case '2':
                        e.preventDefault();
                        this.navigateToSection('strategy');
                        break;
                    case '3':
                        e.preventDefault();
                        this.navigateToSection('timeline');
                        break;
                    case '4':
                        e.preventDefault();
                        this.navigateToSection('evidence');
                        break;
                }
            }
        });
    }
    
    navigateToSection(section) {
        const navItem = document.querySelector(`[data-section="${section}"]`);
        if (navItem) {
            navItem.click();
        }
    }
    
    // Document interaction methods
    viewDocument(docId) {
        const doc = this.caseData.documents.find(d => d.id === docId);
        if (!doc) return;
        
        this.showDocumentModal(doc);
    }
    
    showDocumentModal(doc) {
        // Create modal HTML
        const modalHTML = `
            <div id="document-modal" class="modal-overlay document-modal">
                <div class="document-viewer">
                    <div class="document-header">
                        <div class="document-info">
                            <h3>${doc.title}</h3>
                            <div class="document-meta">
                                <span class="doc-type">${doc.type.toUpperCase()}</span>
                                <span class="doc-size">${doc.size}</span>
                                <span class="doc-date">Modified: ${new Date(doc.lastModified).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div class="document-actions">
                            <button class="btn-secondary" onclick="app.downloadDocument('${doc.id}')">
                                <i class="fas fa-download"></i> Download
                            </button>
                            <button class="btn-icon close-modal" onclick="app.closeDocumentModal()">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="document-content">
                        <div class="document-preview">
                            ${this.generateDocumentPreview(doc)}
                        </div>
                        
                        <div class="document-details">
                            <div class="detail-section">
                                <h4>Description</h4>
                                <p>${doc.preview}</p>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Key Points</h4>
                                <ul class="key-points-list">
                                    ${doc.keyPoints.map(point => `<li>${point}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Tags</h4>
                                <div class="tags-container">
                                    ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="detail-section">
                                <h4>Confidence Score</h4>
                                <div class="confidence-display">
                                    <div class="confidence-bar">
                                        <div class="confidence-fill" style="width: ${doc.confidence}%"></div>
                                    </div>
                                    <span class="confidence-text">${doc.confidence}% reliability</span>
                                </div>
                            </div>
                            
                            ${doc.linkedDocs && doc.linkedDocs.length > 0 ? `
                                <div class="detail-section">
                                    <h4>Related Documents</h4>
                                    <div class="related-docs">
                                        ${doc.linkedDocs.map(linkedId => {
                                            const linkedDoc = this.caseData.documents.find(d => d.id === linkedId);
                                            return linkedDoc ? `
                                                <div class="related-doc" onclick="app.viewDocument('${linkedDoc.id}')">
                                                    <i class="fas fa-file"></i>
                                                    <span>${linkedDoc.title}</span>
                                                </div>
                                            ` : '';
                                        }).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal
        const existingModal = document.getElementById('document-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal
        setTimeout(() => {
            document.getElementById('document-modal').style.display = 'flex';
        }, 10);
    }
    
    generateDocumentPreview(doc) {
        switch (doc.type.toLowerCase()) {
            case 'pdf':
                return `
                    <div class="pdf-preview">
                        <div class="pdf-placeholder">
                            <i class="fas fa-file-pdf"></i>
                            <h4>PDF Document</h4>
                            <p>${doc.title}</p>
                            <p class="file-path">${doc.path}</p>
                            <button class="btn-primary" onclick="app.downloadDocument('${doc.id}')">
                                <i class="fas fa-download"></i> Download to View
                            </button>
                        </div>
                    </div>
                `;
            case 'eml':
                return `
                    <div class="email-preview">
                        <div class="email-placeholder">
                            <i class="fas fa-envelope"></i>
                            <h4>Email Message</h4>
                            <p>${doc.title}</p>
                            <p class="file-path">${doc.path}</p>
                            <button class="btn-primary" onclick="app.downloadDocument('${doc.id}')">
                                <i class="fas fa-download"></i> Download to View
                            </button>
                        </div>
                    </div>
                `;
            default:
                return `
                    <div class="file-preview">
                        <div class="file-placeholder">
                            <i class="fas fa-file"></i>
                            <h4>Document File</h4>
                            <p>${doc.title}</p>
                            <p class="file-path">${doc.path}</p>
                            <button class="btn-primary" onclick="app.downloadDocument('${doc.id}')">
                                <i class="fas fa-download"></i> Download to View
                            </button>
                        </div>
                    </div>
                `;
        }
    }
    
    closeDocumentModal() {
        const modal = document.getElementById('document-modal');
        if (modal) {
            modal.remove();
        }
    }
    
    downloadDocument(docId) {
        const doc = this.caseData.documents.find(d => d.id === docId);
        if (!doc) return;
        
        // Show notification about file location
        this.showNotification(`Document location: ${doc.path}`, 'info');
        
        // In a real application, this would trigger an actual download
        // For now, we'll show the file path to the user
        const downloadInfo = `
            <div class="download-info">
                <h4>Document Download Information</h4>
                <p><strong>File:</strong> ${doc.title}</p>
                <p><strong>Type:</strong> ${doc.type.toUpperCase()}</p>
                <p><strong>Size:</strong> ${doc.size}</p>
                <p><strong>Location:</strong> ${doc.path}</p>
                <p class="note">Navigate to the file location to access the document.</p>
            </div>
        `;
        
        // Create temporary download modal
        const downloadModal = `
            <div id="download-modal" class="modal-overlay">
                <div class="download-dialog">
                    ${downloadInfo}
                    <div class="download-actions">
                        <button class="btn-primary" onclick="document.getElementById('download-modal').remove()">
                            <i class="fas fa-check"></i> OK
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', downloadModal);
    }
    
    analyzeDocument(docId) {
        const doc = this.caseData.documents.find(d => d.id === docId);
        if (!doc) return;
        
        this.showNotification(`Starting AI analysis of ${doc.title}`, 'info');
        
        // Simulate AI analysis
        setTimeout(() => {
            this.showNotification('AI analysis complete - insights available', 'success');
        }, 3000);
    }
    
    shareDocument(docId) {
        const doc = this.caseData.documents.find(d => d.id === docId);
        if (!doc) return;
        
        // Show sharing modal
        this.showNotification(`Sharing ${doc.title}`, 'info');
    }
    
    showEventDetails(eventIndex) {
        const event = this.caseData.timeline[eventIndex];
        if (!event) return;
        
        // Show event details modal
        this.showNotification(`Viewing details for: ${event.title}`, 'info');
    }
    
    showRelatedDocs(eventIndex) {
        const event = this.caseData.timeline[eventIndex];
        if (!event) return;
        
        // Show related documents
        this.showNotification(`Loading related documents for: ${event.title}`, 'info');
    }
    
    showLinkedDocs(docId) {
        const doc = this.caseData.documents.find(d => d.id === docId);
        if (!doc) return;
        
        this.showNotification(`Showing linked documents for: ${doc.title}`, 'info');
    }
    
    // Strategy methods
    showPhaseDetails(phaseIndex) {
        this.showNotification(`Viewing Phase ${phaseIndex + 1} details`, 'info');
    }
    
    exploreInsight(insightType) {
        this.showNotification(`Exploring ${insightType} insights`, 'info');
    }
    
    implementRecommendation(insightType) {
        this.showNotification(`Implementing ${insightType} recommendation`, 'info');
    }
    
    // Collaboration methods
    startDirectMessage(memberId) {
        const member = this.caseData.teamMembers.find(m => m.id === memberId);
        if (!member) return;
        
        this.showNotification(`Starting direct message with ${member.name}`, 'info');
    }
    
    startVideoCall(memberId) {
        const member = this.caseData.teamMembers.find(m => m.id === memberId);
        if (!member) return;
        
        this.showNotification(`Starting video call with ${member.name}`, 'info');
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ClaimManagementSystem();
});

// Add some additional CSS for new features
const additionalCSS = `
.timeline-event {
    position: relative;
    margin: 2rem 0;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.5s ease forwards;
}

.timeline-event:nth-child(even) {
    animation-delay: 0.1s;
}

.timeline-marker {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.timeline-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-content-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    margin-left: 3rem;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-fast);
}

.timeline-event-hover .timeline-content-card {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.timeline-header {
    display: flex;
    justify-content: between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
}

.priority-badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    font-weight: 600;
}

.priority-badge.critical {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error-color);
}

.priority-badge.high {
    background: rgba(245, 158, 11, 0.1);
    color: var(--warning-color);
}

.priority-badge.medium {
    background: rgba(59, 130, 246, 0.1);
    color: var(--info-color);
}

.priority-badge.low {
    background: rgba(107, 114, 128, 0.1);
    color: var(--text-muted);
}

.timeline-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.btn-link {
    background: none;
    border: none;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: all var(--transition-fast);
}

.btn-link:hover {
    color: var(--primary-dark);
}

.evidence-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-fast);
}

.evidence-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.evidence-header {
    padding: 1rem 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.evidence-type {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.file-type {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
}

.confidence-badge {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
}

.confidence-badge.success {
    background: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
}

.confidence-badge.warning {
    background: rgba(245, 158, 11, 0.1);
    color: var(--warning-color);
}

.confidence-badge.error {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error-color);
}

.evidence-content {
    padding: 1rem;
}

.evidence-content h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.evidence-preview {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
}

.evidence-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    color: var(--text-muted);
}

.evidence-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 1rem;
}

.tag {
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
}

.key-points {
    margin-bottom: 1rem;
}

.key-point {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.375rem;
    font-size: 0.875rem;
}

.key-point i {
    color: var(--success-color);
    font-size: 0.75rem;
}

.evidence-actions {
    padding: 1rem;
    border-top: 1px solid var(--border-light);
    display: flex;
    gap: 0.75rem;
}

.evidence-links {
    padding: 0 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: var(--text-muted);
}

.team-member-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    margin-bottom: 0.75rem;
    transition: all var(--transition-fast);
    position: relative;
}

.team-member-card:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow-sm);
}

.team-member-card .member-avatar {
    position: relative;
}

.status-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--bg-primary);
}

.status-indicator.online {
    background: var(--success-color);
}

.status-indicator.away {
    background: var(--warning-color);
}

.status-indicator.offline {
    background: var(--text-muted);
}

.member-details {
    flex: 1;
}

.member-details h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.member-details p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
}

.last-active {
    font-size: 0.7rem;
    color: var(--text-muted);
}

.member-actions {
    display: flex;
    gap: 0.5rem;
}

.message {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    animation: slideInUp 0.3s ease;
}

.message-own {
    flex-direction: row-reverse;
}

.message-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 600;
    flex-shrink: 0;
}

.message-content {
    flex: 1;
    max-width: 70%;
}

.message-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
}

.message-sender {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
}

.message-time {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.message-text {
    background: var(--bg-tertiary);
    padding: 0.75rem 1rem;
    border-radius: var(--radius-lg);
    font-size: 0.875rem;
    line-height: 1.4;
}

.message-own .message-text {
    background: var(--primary-color);
    color: white;
}

.notification {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    padding: 1rem 1.5rem;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 320px;
    animation: slideInRight 0.3s ease;
}

.notification-success {
    border-left: 4px solid var(--success-color);
}

.notification-error {
    border-left: 4px solid var(--error-color);
}

.notification-warning {
    border-left: 4px solid var(--warning-color);
}

.notification-info {
    border-left: 4px solid var(--info-color);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
}

.notification-content i {
    font-size: 1.25rem;
}

.notification-success .notification-content i {
    color: var(--success-color);
}

.notification-error .notification-content i {
    color: var(--error-color);
}

.notification-warning .notification-content i {
    color: var(--warning-color);
}

.notification-info .notification-content i {
    color: var(--info-color);
}

.notification-close {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.25rem;
    line-height: 1;
}

.notification-close:hover {
    color: var(--text-primary);
}

.risk-matrix-grid {
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
}

.risk-bubble {
    position: absolute;
    width: 80px;
    height: 40px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: white;
    cursor: pointer;
    transform: translate(-50%, 50%);
    transition: all var(--transition-fast);
}

.risk-bubble:hover {
    transform: translate(-50%, 50%) scale(1.1);
}

.risk-bubble.low {
    background: var(--success-color);
}

.risk-bubble.medium {
    background: var(--warning-color);
}

.risk-bubble.high {
    background: var(--error-color);
}

.risk-axis {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: var(--text-muted);
}

.risk-axis-x {
    bottom: -30px;
    left: 0;
    right: 0;
    justify-content: space-between;
    padding: 0 10%;
}

.risk-axis-y {
    left: -80px;
    top: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-between;
    padding: 10% 0;
    writing-mode: vertical-rl;
    text-orientation: mixed;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;

// Inject additional CSS
const styleElement = document.createElement('style');
styleElement.textContent = additionalCSS;
document.head.appendChild(styleElement);