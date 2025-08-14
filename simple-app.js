// Simple LJJ SVP Claim Management System
class SimpleClaimSystem {
    constructor() {
        this.currentUser = {
            role: 'viewer',
            name: 'Public User',
            avatar: '<i class="fas fa-user"></i>',
            permissions: ['read'],
            loginTime: new Date()
        };
        
        this.caseData = {
            confidence: 65,
            evidenceStrength: 72,
            missingEvidence: 6,
            claims: {
                technical_failure: {
                    title: "Technical Installation Failures",
                    narrative: "LJJ's installation of SVP systems demonstrated systematic technical failures. The K&T investigation identified 28 specific defects including leaking boss connections, missing gasket seals, unglued fittings, and poor workmanship.",
                    evidence_strength: 85,
                    success_probability: 75,
                    basis: "Strong technical evidence from independent K&T investigation with photographic documentation. However, success depends on proving these failures existed at handover versus subsequent damage.",
                    risks: [
                        "LJJ may argue damage occurred post-handover during UL occupation",
                        "Some photographic evidence taken 2+ years after installation",
                        "Need to establish timeline of when failures occurred"
                    ],
                    value_estimate: 1800000
                },
                contractual_breach: {
                    title: "Breach of Contract - Failure to Complete Works", 
                    narrative: "LJJ failed to complete contracted SVP works and testing to required standards. Despite multiple formal notices and deadlines, LJJ did not provide proper witnessing of testing, failed to rectify known defects, and ultimately abandoned works before completion.",
                    evidence_strength: 70,
                    success_probability: 60,
                    basis: "Clear contractual timeline showing LJJ's failure to meet obligations. Formal notices and correspondence demonstrate repeated non-compliance. However, LJJ reported damage early, potentially creating defensive position.",
                    risks: [
                        "LJJ's early damage reporting may suggest proactive approach",
                        "Could argue they were prevented from completing works",
                        "Questions over whether formal notice procedures were properly followed"
                    ],
                    value_estimate: 800000
                }
            },
            overall_assessment: {
                narrative: "The LJJ SVP claim presents a mixed case with strong technical evidence but significant procedural and timeline challenges. While the K&T investigation provides compelling evidence of systematic installation failures, LJJ's early reporting of damage creates a defensive narrative that may reduce claim success.",
                realistic_outcome: "Partial settlement likely in range £1.2M - £1.8M representing 50-75% of claimed value"
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
        
        Object.entries(this.caseData.claims).forEach(([key, claim]) => {
            const successClass = claim.success_probability >= 70 ? 'high-success' : 
                               claim.success_probability >= 50 ? 'medium-success' : 'low-success';
            
            html += `
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
        html += `
            <div class="narrative-card overall-assessment">
                <div class="narrative-header">
                    <h4>Overall Case Assessment</h4>
                    <div class="realistic-outcome">
                        <span class="outcome-label">Realistic Outcome:</span>
                        <span class="outcome-value">${this.caseData.overall_assessment.realistic_outcome}</span>
                    </div>
                </div>
                
                <div class="narrative-content">
                    <div class="narrative-text">
                        <h5>Executive Summary</h5>
                        <p>${this.caseData.overall_assessment.narrative}</p>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SimpleClaimSystem();
});

// Add basic document viewing functionality
window.app = {
    viewDocument: function(docId) {
        alert('Document viewer functionality - Document ID: ' + docId);
    },
    analyzeDocument: function(docId) {
        alert('AI analysis functionality - Document ID: ' + docId);
    },
    shareDocument: function(docId) {
        alert('Share functionality - Document ID: ' + docId);
    },
    downloadDocument: function(docId) {
        alert('Download functionality - Document ID: ' + docId);
    }
};