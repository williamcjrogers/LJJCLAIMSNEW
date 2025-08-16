// Master Dashboard - Overview of all Heads of Claim
import { formatCurrency, formatPercentage } from '../utils/helpers.js';
import { claimsHierarchy, ClaimsHierarchyUtils } from '../data/claimsHierarchy.js';

export class MasterDashboard {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            onHeadOfClaimClick: () => {},
            ...options
        };
        
        this.data = claimsHierarchy;
        this.summary = ClaimsHierarchyUtils.calculateSummary();
        this.init();
    }
    
    init() {
        this.render();
        this.bindEvents();
        this.initCharts();
    }
    
    render() {
        this.container.innerHTML = `
            <section id="master-dashboard" class="content-section active">
                <div class="section-header">
                    <h1>Master Claims Dashboard</h1>
                    <p>Comprehensive overview of all heads of claim for ${this.data.master.case_name}</p>
                </div>

                ${this.renderOverviewMetrics()}
                ${this.renderHeadsOfClaimGrid()}
                ${this.renderSummaryCharts()}
                ${this.renderSharedTimeline()}
            </section>
        `;
    }
    
    renderOverviewMetrics() {
        return `
            <div class="master-metrics-grid">
                <div class="metric-card primary">
                    <div class="metric-icon">
                        <i class="fas fa-gavel"></i>
                    </div>
                    <div class="metric-content">
                        <h3>${this.summary.total_heads_of_claim}</h3>
                        <p>Heads of Claim</p>
                        <span class="metric-trend">Active cases</span>
                    </div>
                </div>
                
                <div class="metric-card info">
                    <div class="metric-icon">
                        <i class="fas fa-list-alt"></i>
                    </div>
                    <div class="metric-content">
                        <h3>${this.summary.total_sub_claims}</h3>
                        <p>Sub-claims & Defects</p>
                        <span class="metric-trend">Detailed breakdown</span>
                    </div>
                </div>
                
                <div class="metric-card success">
                    <div class="metric-icon">
                        <i class="fas fa-pound-sign"></i>
                    </div>
                    <div class="metric-content">
                        <h3>${formatCurrency(this.summary.total_claim_value)}</h3>
                        <p>Total Claim Value</p>
                        <span class="metric-trend">All heads combined</span>
                    </div>
                </div>
                
                <div class="metric-card warning">
                    <div class="metric-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="metric-content">
                        <h3>${formatPercentage(this.summary.average_strength)}</h3>
                        <p>Average Evidence Strength</p>
                        <span class="metric-trend">Across all claims</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderHeadsOfClaimGrid() {
        const heads = Object.entries(this.data.heads_of_claim);
        
        return `
            <div class="heads-of-claim-section">
                <div class="section-title">
                    <h2>Heads of Claim Overview</h2>
                    <p>Click on any head of claim to view detailed breakdown</p>
                </div>
                
                <div class="heads-grid">
                    ${heads.map(([key, head]) => this.renderHeadOfClaimCard(key, head)).join('')}
                </div>
            </div>
        `;
    }
    
    renderHeadOfClaimCard(key, head) {
        const subClaimsCount = Object.keys(head.sub_claims || {}).length;
        const strengthClass = this.getStrengthClass(head.evidence_strength);
        
        return `
            <div class="head-of-claim-card ${strengthClass}" data-head-id="${key}">
                <div class="card-header">
                    <div class="claim-title">
                        <h3>${head.title}</h3>
                        <span class="claim-id">${head.id}</span>
                    </div>
                    <div class="claim-status">
                        <span class="status-badge ${head.status}">${head.status}</span>
                    </div>
                </div>
                
                <div class="card-content">
                    <p class="claim-description">${head.description}</p>
                    
                    <div class="claim-metrics">
                        <div class="metric-row">
                            <span class="metric-label">Claim Value:</span>
                            <span class="metric-value">${formatCurrency(head.claim_value)}</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Sub-claims:</span>
                            <span class="metric-value">${subClaimsCount} items</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-label">Success Probability:</span>
                            <span class="metric-value">${formatPercentage(head.success_probability)}</span>
                        </div>
                    </div>
                    
                    <div class="evidence-strength">
                        <label>Evidence Strength: ${formatPercentage(head.evidence_strength)}</label>
                        <div class="strength-bar">
                            <div class="strength-fill" style="width: ${head.evidence_strength}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="btn-primary view-details" data-head-id="${key}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="btn-secondary view-timeline" data-head-id="${key}">
                        <i class="fas fa-history"></i> Timeline
                    </button>
                </div>
            </div>
        `;
    }
    
    renderSummaryCharts() {
        return `
            <div class="summary-charts">
                <div class="chart-card">
                    <div class="card-header">
                        <h3>Claim Value Distribution</h3>
                    </div>
                    <div class="chart-container">
                        <canvas id="claim-value-chart"></canvas>
                    </div>
                </div>
                
                <div class="chart-card">
                    <div class="card-header">
                        <h3>Evidence Strength Comparison</h3>
                    </div>
                    <div class="chart-container">
                        <canvas id="evidence-strength-chart"></canvas>
                    </div>
                </div>
                
                <div class="chart-card">
                    <div class="card-header">
                        <h3>Success Probability Analysis</h3>
                    </div>
                    <div class="chart-container">
                        <canvas id="success-probability-chart"></canvas>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderSharedTimeline() {
        const sharedEvents = this.data.shared_timeline || [];
        
        return `
            <div class="shared-timeline-section">
                <div class="section-title">
                    <h2>Master Timeline</h2>
                    <p>Key events affecting multiple heads of claim</p>
                </div>
                
                <div class="master-timeline">
                    ${sharedEvents.map(event => this.renderTimelineEvent(event)).join('')}
                </div>
                
                <div class="timeline-actions">
                    <button class="btn-secondary view-all-timelines">
                        <i class="fas fa-calendar-alt"></i> View All Individual Timelines
                    </button>
                </div>
            </div>
        `;
    }
    
    renderTimelineEvent(event) {
        const affectedClaims = event.affected_claims || [];
        
        return `
            <div class="timeline-event shared-event">
                <div class="event-date">${event.date}</div>
                <div class="event-content">
                    <h4>${event.event}</h4>
                    <p>${event.description}</p>
                    <div class="affected-claims">
                        <span class="label">Affects:</span>
                        ${affectedClaims.map(claimId => `
                            <span class="claim-tag" data-claim-id="${claimId}">
                                ${this.getClaimTitle(claimId)}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="event-impact ${event.impact}">
                    <i class="fas fa-circle"></i>
                </div>
            </div>
        `;
    }
    
    initCharts() {
        if (!window.Chart) return;
        
        this.initClaimValueChart();
        this.initEvidenceStrengthChart();
        this.initSuccessProbabilityChart();
    }
    
    initClaimValueChart() {
        const ctx = this.container.querySelector('#claim-value-chart');
        if (!ctx) return;
        
        const heads = Object.values(this.data.heads_of_claim);
        const labels = heads.map(head => head.title);
        const values = heads.map(head => head.claim_value / 1000); // Convert to thousands
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        '#3b82f6',
                        '#10b981', 
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6',
                        '#06b6d4'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                return `${context.label}: £${context.raw}k`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    initEvidenceStrengthChart() {
        const ctx = this.container.querySelector('#evidence-strength-chart');
        if (!ctx) return;
        
        const heads = Object.values(this.data.heads_of_claim);
        const labels = heads.map(head => head.title);
        const strengths = heads.map(head => head.evidence_strength);
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Evidence Strength (%)',
                    data: strengths,
                    backgroundColor: '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
    
    initSuccessProbabilityChart() {
        const ctx = this.container.querySelector('#success-probability-chart');
        if (!ctx) return;
        
        const heads = Object.values(this.data.heads_of_claim);
        const labels = heads.map(head => head.title);
        const probabilities = heads.map(head => head.success_probability);
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Success Probability',
                    data: probabilities,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
    
    bindEvents() {
        // Head of claim card clicks
        this.container.addEventListener('click', (e) => {
            const headCard = e.target.closest('.head-of-claim-card');
            const viewDetailsBtn = e.target.closest('.view-details');
            const viewTimelineBtn = e.target.closest('.view-timeline');
            
            if (viewDetailsBtn) {
                const headId = viewDetailsBtn.dataset.headId;
                this.options.onHeadOfClaimClick(headId, 'details');
            } else if (viewTimelineBtn) {
                const headId = viewTimelineBtn.dataset.headId;
                this.options.onHeadOfClaimClick(headId, 'timeline');
            } else if (headCard) {
                const headId = headCard.dataset.headId;
                this.options.onHeadOfClaimClick(headId, 'overview');
            }
        });
        
        // Claim tag clicks in timeline
        this.container.addEventListener('click', (e) => {
            const claimTag = e.target.closest('.claim-tag');
            if (claimTag) {
                const claimId = claimTag.dataset.claimId;
                this.options.onHeadOfClaimClick(claimId, 'details');
            }
        });
    }
    
    // Utility methods
    getStrengthClass(strength) {
        if (strength >= 85) return 'strength-high';
        if (strength >= 70) return 'strength-medium';
        return 'strength-low';
    }
    
    getClaimTitle(claimId) {
        const head = this.data.heads_of_claim[claimId];
        return head ? head.title : claimId;
    }
    
    refresh() {
        this.summary = ClaimsHierarchyUtils.calculateSummary();
        this.render();
        this.bindEvents();
        this.initCharts();
    }
}

export default MasterDashboard;
