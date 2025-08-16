// Individual Head of Claim View with Sub-claims and Timeline
import { formatCurrency, formatPercentage, formatDate } from '../utils/helpers.js';
import { ClaimsHierarchyUtils } from '../data/claimsHierarchy.js';

export class HeadOfClaimView {
    constructor(container, headId, options = {}) {
        this.container = container;
        this.headId = headId;
        this.options = {
            onBackToMaster: () => {},
            onSubClaimClick: () => {},
            ...options
        };
        
        this.headData = ClaimsHierarchyUtils.getHeadOfClaim(headId);
        this.timeline = ClaimsHierarchyUtils.getCombinedTimeline(headId);
        this.activeTab = 'overview';
        
        if (!this.headData) {
            throw new Error(`Head of claim '${headId}' not found`);
        }
        
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
        this.initCharts();
    }
    
    render() {
        this.container.innerHTML = `
            <section id="head-of-claim-${this.headId}" class="content-section active">
                ${this.renderHeader()}
                ${this.renderNavigationTabs()}
                ${this.renderTabContent()}
            </section>
        `;
    }
    
    renderHeader() {
        return `
            <div class="claim-header">
                <div class="header-navigation">
                    <button class="back-btn" id="back-to-master">
                        <i class="fas fa-arrow-left"></i> Back to Master
                    </button>
                    <div class="breadcrumb-claim">
                        <span>Master Dashboard</span>
                        <i class="fas fa-chevron-right"></i>
                        <span class="current">${this.headData.title}</span>
                    </div>
                </div>
                
                <div class="claim-title-section">
                    <div class="title-content">
                        <h1>${this.headData.title}</h1>
                        <p class="claim-description">${this.headData.description}</p>
                        <div class="claim-meta">
                            <span class="claim-id">${this.headData.id}</span>
                            <span class="status-badge ${this.headData.status}">${this.headData.status}</span>
                        </div>
                    </div>
                    
                    <div class="claim-summary-metrics">
                        <div class="summary-metric">
                            <div class="metric-value">${formatCurrency(this.headData.claim_value)}</div>
                            <div class="metric-label">Total Claim Value</div>
                        </div>
                        <div class="summary-metric">
                            <div class="metric-value">${formatPercentage(this.headData.evidence_strength)}</div>
                            <div class="metric-label">Evidence Strength</div>
                        </div>
                        <div class="summary-metric">
                            <div class="metric-value">${formatPercentage(this.headData.success_probability)}</div>
                            <div class="metric-label">Success Probability</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderNavigationTabs() {
        return `
            <div class="claim-tabs">
                <button class="tab-btn ${this.activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
                    <i class="fas fa-chart-pie"></i> Overview
                </button>
                <button class="tab-btn ${this.activeTab === 'subclaims' ? 'active' : ''}" data-tab="subclaims">
                    <i class="fas fa-list-alt"></i> Sub-claims & Defects
                </button>
                <button class="tab-btn ${this.activeTab === 'timeline' ? 'active' : ''}" data-tab="timeline">
                    <i class="fas fa-history"></i> Timeline
                </button>
                <button class="tab-btn ${this.activeTab === 'evidence' ? 'active' : ''}" data-tab="evidence">
                    <i class="fas fa-folder-open"></i> Evidence
                </button>
                <button class="tab-btn ${this.activeTab === 'analysis' ? 'active' : ''}" data-tab="analysis">
                    <i class="fas fa-chart-line"></i> Analysis
                </button>
            </div>
        `;
    }
    
    renderTabContent() {
        switch(this.activeTab) {
            case 'overview':
                return this.renderOverviewTab();
            case 'subclaims':
                return this.renderSubClaimsTab();
            case 'timeline':
                return this.renderTimelineTab();
            case 'evidence':
                return this.renderEvidenceTab();
            case 'analysis':
                return this.renderAnalysisTab();
            default:
                return this.renderOverviewTab();
        }
    }
    
    renderOverviewTab() {
        const subClaims = Object.entries(this.headData.sub_claims || {});
        const totalSubClaimsValue = subClaims.reduce((sum, [key, subClaim]) => 
            sum + (subClaim.claim_value || 0), 0);
        
        return `
            <div class="tab-content active" id="overview-tab">
                <div class="overview-grid">
                    <div class="overview-card primary">
                        <h3>Claim Breakdown</h3>
                        <div class="breakdown-chart">
                            <canvas id="subclaim-value-chart"></canvas>
                        </div>
                        <div class="breakdown-legend">
                            ${subClaims.map(([key, subClaim]) => `
                                <div class="legend-item">
                                    <span class="legend-color" style="background: ${this.getSubClaimColor(key)}"></span>
                                    <span class="legend-label">${subClaim.title}</span>
                                    <span class="legend-value">${formatCurrency(subClaim.claim_value)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="overview-card">
                        <h3>Key Metrics</h3>
                        <div class="metrics-list">
                            <div class="metric-item">
                                <span class="metric-name">Total Sub-claims</span>
                                <span class="metric-value">${subClaims.length}</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-name">Combined Value</span>
                                <span class="metric-value">${formatCurrency(totalSubClaimsValue)}</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-name">Timeline Events</span>
                                <span class="metric-value">${this.timeline.length}</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-name">Evidence Items</span>
                                <span class="metric-value">${this.countEvidenceItems()}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="overview-card">
                        <h3>Recent Activity</h3>
                        <div class="recent-timeline">
                            ${this.timeline.slice(-3).map(event => `
                                <div class="timeline-item compact">
                                    <div class="timeline-date">${formatDate(event.date)}</div>
                                    <div class="timeline-content">
                                        <h5>${event.event}</h5>
                                        <p>${event.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="overview-card">
                        <h3>Status Summary</h3>
                        <div class="status-indicators">
                            <div class="status-item">
                                <div class="status-icon success">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="status-content">
                                    <h5>Strong Evidence Base</h5>
                                    <p>${formatPercentage(this.headData.evidence_strength)} evidence strength</p>
                                </div>
                            </div>
                            
                            <div class="status-item">
                                <div class="status-icon ${this.getSuccessProbabilityClass()}">
                                    <i class="fas fa-target"></i>
                                </div>
                                <div class="status-content">
                                    <h5>Success Probability</h5>
                                    <p>${formatPercentage(this.headData.success_probability)} likelihood</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderSubClaimsTab() {
        const subClaims = Object.entries(this.headData.sub_claims || {});
        
        return `
            <div class="tab-content" id="subclaims-tab">
                <div class="subclaims-header">
                    <h2>Sub-claims & Defects Breakdown</h2>
                    <p>Detailed analysis of individual claims within ${this.headData.title}</p>
                </div>
                
                <div class="subclaims-grid">
                    ${subClaims.map(([key, subClaim]) => this.renderSubClaimCard(key, subClaim)).join('')}
                </div>
            </div>
        `;
    }
    
    renderSubClaimCard(key, subClaim) {
        return `
            <div class="subclaim-card" data-subclaim-id="${key}">
                <div class="subclaim-header">
                    <div class="subclaim-title">
                        <h3>${subClaim.title}</h3>
                        <span class="subclaim-id">${subClaim.id}</span>
                    </div>
                    <div class="subclaim-status">
                        <span class="status-badge ${subClaim.status}">${subClaim.status}</span>
                    </div>
                </div>
                
                <div class="subclaim-content">
                    <p class="subclaim-description">${subClaim.description}</p>
                    
                    <div class="subclaim-value">
                        <strong>Claim Value: ${formatCurrency(subClaim.claim_value)}</strong>
                    </div>
                    
                    <div class="defects-section">
                        <h4>Key Defects</h4>
                        <div class="defects-list">
                            ${(subClaim.defects || []).map(defect => `
                                <div class="defect-item">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span>${defect}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="evidence-section">
                        <h4>Supporting Evidence</h4>
                        <div class="evidence-list">
                            ${(subClaim.evidence_items || []).map(item => `
                                <div class="evidence-item">
                                    <i class="fas fa-file-alt"></i>
                                    <span>${item}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="subclaim-actions">
                    <button class="btn-primary view-subclaim" data-subclaim-id="${key}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn-secondary edit-subclaim" data-subclaim-id="${key}">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                </div>
            </div>
        `;
    }
    
    renderTimelineTab() {
        return `
            <div class="tab-content" id="timeline-tab">
                <div class="timeline-header">
                    <h2>${this.headData.title} Timeline</h2>
                    <p>Chronological events specific to this head of claim</p>
                    
                    <div class="timeline-filters">
                        <button class="filter-btn active" data-filter="all">All Events</button>
                        <button class="filter-btn" data-filter="critical">Critical</button>
                        <button class="filter-btn" data-filter="evidence">Evidence</button>
                        <button class="filter-btn" data-filter="formal">Formal</button>
                    </div>
                </div>
                
                <div class="claim-timeline">
                    ${this.timeline.map(event => this.renderTimelineEvent(event)).join('')}
                </div>
            </div>
        `;
    }
    
    renderTimelineEvent(event) {
        const isSharedEvent = event.affected_claims ? true : false;
        
        return `
            <div class="timeline-event ${event.category} ${isSharedEvent ? 'shared-event' : ''}">
                <div class="event-date">${formatDate(event.date)}</div>
                <div class="event-content">
                    <h4>${event.event}</h4>
                    <p>${event.description}</p>
                    ${isSharedEvent ? `
                        <div class="shared-indicator">
                            <i class="fas fa-share-alt"></i>
                            <span>Affects multiple claims</span>
                        </div>
                    ` : ''}
                </div>
                <div class="event-impact ${event.impact}">
                    <i class="fas fa-circle"></i>
                </div>
            </div>
        `;
    }
    
    renderEvidenceTab() {
        // This would show all evidence related to this head of claim
        return `
            <div class="tab-content" id="evidence-tab">
                <div class="evidence-header">
                    <h2>Evidence Library - ${this.headData.title}</h2>
                    <p>All evidence documents and materials for this head of claim</p>
                </div>
                
                <div class="evidence-placeholder">
                    <p>Evidence management functionality will be integrated here</p>
                    <p>This will show filtered evidence specific to ${this.headData.title}</p>
                </div>
            </div>
        `;
    }
    
    renderAnalysisTab() {
        return `
            <div class="tab-content" id="analysis-tab">
                <div class="analysis-header">
                    <h2>Detailed Analysis - ${this.headData.title}</h2>
                    <p>In-depth analysis and projections for this head of claim</p>
                </div>
                
                <div class="analysis-grid">
                    <div class="analysis-card">
                        <h3>Strength Analysis</h3>
                        <div class="chart-container">
                            <canvas id="strength-analysis-chart"></canvas>
                        </div>
                    </div>
                    
                    <div class="analysis-card">
                        <h3>Risk Assessment</h3>
                        <div class="risk-matrix">
                            <!-- Risk assessment visualization -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    initCharts() {
        if (!window.Chart) return;
        
        if (this.activeTab === 'overview') {
            this.initSubClaimValueChart();
        }
    }
    
    initSubClaimValueChart() {
        const ctx = this.container.querySelector('#subclaim-value-chart');
        if (!ctx) return;
        
        const subClaims = Object.entries(this.headData.sub_claims || {});
        const labels = subClaims.map(([key, subClaim]) => subClaim.title);
        const values = subClaims.map(([key, subClaim]) => subClaim.claim_value / 1000);
        
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: subClaims.map(([key]) => this.getSubClaimColor(key))
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // We show custom legend
                    }
                }
            }
        });
    }
    
    bindEvents() {
        // Back to master button
        this.container.querySelector('#back-to-master')?.addEventListener('click', () => {
            this.options.onBackToMaster();
        });
        
        // Tab navigation
        this.container.addEventListener('click', (e) => {
            const tabBtn = e.target.closest('.tab-btn');
            if (tabBtn) {
                const newTab = tabBtn.dataset.tab;
                this.switchTab(newTab);
            }
        });
        
        // Sub-claim interactions
        this.container.addEventListener('click', (e) => {
            const viewSubClaimBtn = e.target.closest('.view-subclaim');
            if (viewSubClaimBtn) {
                const subClaimId = viewSubClaimBtn.dataset.subclaimId;
                this.options.onSubClaimClick(this.headId, subClaimId);
            }
        });
    }
    
    switchTab(newTab) {
        if (newTab === this.activeTab) return;
        
        // Update tab buttons
        this.container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.container.querySelector(`[data-tab="${newTab}"]`)?.classList.add('active');
        
        // Update active tab and re-render content
        this.activeTab = newTab;
        
        // Re-render tab content
        const tabContentContainer = this.container.querySelector('.tab-content');
        if (tabContentContainer) {
            tabContentContainer.outerHTML = this.renderTabContent();
            this.initCharts();
        }
    }
    
    // Utility methods
    getSubClaimColor(subClaimKey) {
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
        const index = Object.keys(this.headData.sub_claims || {}).indexOf(subClaimKey);
        return colors[index % colors.length];
    }
    
    getSuccessProbabilityClass() {
        const prob = this.headData.success_probability;
        if (prob >= 75) return 'success';
        if (prob >= 50) return 'warning';
        return 'error';
    }
    
    countEvidenceItems() {
        const subClaims = Object.values(this.headData.sub_claims || {});
        return subClaims.reduce((total, subClaim) => 
            total + (subClaim.evidence_items?.length || 0), 0);
    }
}

export default HeadOfClaimView;
