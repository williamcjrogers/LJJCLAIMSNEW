// Dashboard Module
import { formatCurrency, formatPercentage } from '../utils/helpers.js';

export class Dashboard {
    constructor(container, caseData) {
        this.container = container;
        this.caseData = caseData;
        this.charts = {};
        this.init();
    }
    
    init() {
        this.render();
        this.initCharts();
        this.bindEvents();
    }
    
    render() {
        this.container.innerHTML = `
            <section id="dashboard" class="content-section active">
                <div class="section-header">
                    <h1>Case Dashboard</h1>
                    <p>Comprehensive overview of LJJ SVP claim status and key metrics</p>
                </div>

                ${this.renderMetricsGrid()}
                ${this.renderDashboardGrid()}
            </section>
        `;
    }
    
    renderMetricsGrid() {
        return `
            <div class="metrics-grid">
                <div class="metric-card critical">
                    <div class="metric-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="metric-content">
                        <h3>28</h3>
                        <p>Critical Issues Identified</p>
                        <span class="metric-trend up">+5 this week</span>
                    </div>
                </div>
                <div class="metric-card success">
                    <div class="metric-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="metric-content">
                        <h3>72%</h3>
                        <p>Evidence Strength Score</p>
                        <span class="metric-trend neutral">Realistic assessment</span>
                    </div>
                </div>
                <div class="metric-card warning">
                    <div class="metric-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="metric-content">
                        <h3>6</h3>
                        <p>Missing Evidence Items</p>
                        <span class="metric-trend up">Identified gaps</span>
                    </div>
                </div>
                <div class="metric-card info">
                    <div class="metric-icon">
                        <i class="fas fa-pound-sign"></i>
                    </div>
                    <div class="metric-content">
                        <h3>${formatCurrency(this.caseData.claim_value)}</h3>
                        <p>Estimated Claim Value</p>
                        <span class="metric-trend neutral">Under review</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderDashboardGrid() {
        return `
            <div class="dashboard-grid">
                <div class="dashboard-card large">
                    <div class="card-header">
                        <h3>Case Progress Overview</h3>
                        <div class="card-actions">
                            <button class="btn-icon refresh-btn" title="Refresh">
                                <i class="fas fa-sync-alt"></i>
                            </button>
                            <button class="btn-icon export-btn" title="Export">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                    ${this.renderProgressTimeline()}
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3>Evidence Distribution</h3>
                    </div>
                    <div class="chart-container">
                        <canvas id="evidence-chart"></canvas>
                    </div>
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3>Recent Activity</h3>
                    </div>
                    ${this.renderActivityFeed()}
                </div>

                <div class="dashboard-card">
                    <div class="card-header">
                        <h3>Team Performance</h3>
                    </div>
                    ${this.renderTeamStats()}
                </div>
            </div>
        `;
    }
    
    renderProgressTimeline() {
        return `
            <div class="progress-timeline">
                <div class="timeline-step completed">
                    <div class="step-icon"><i class="fas fa-check"></i></div>
                    <div class="step-content">
                        <h4>Evidence Collection</h4>
                        <p>Documents gathered and catalogued</p>
                        <span class="step-date">Mar 2021 - Jan 2024</span>
                    </div>
                </div>
                <div class="timeline-step completed">
                    <div class="step-icon"><i class="fas fa-check"></i></div>
                    <div class="step-content">
                        <h4>Technical Analysis</h4>
                        <p>K&T investigation completed</p>
                        <span class="step-date">Jan 2024</span>
                    </div>
                </div>
                <div class="timeline-step active">
                    <div class="step-icon"><i class="fas fa-play"></i></div>
                    <div class="step-content">
                        <h4>Claim Validation</h4>
                        <p>Currently in progress</p>
                        <span class="step-date">Aug 2024</span>
                    </div>
                </div>
                <div class="timeline-step pending">
                    <div class="step-icon"><i class="fas fa-clock"></i></div>
                    <div class="step-content">
                        <h4>Final Settlement</h4>
                        <p>Pending completion</p>
                        <span class="step-date">Est. Q4 2024</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    renderActivityFeed() {
        const activities = [
            {
                icon: 'fas fa-file-alt',
                type: 'success',
                title: 'K&T Block C Report',
                action: 'uploaded',
                time: '2 hours ago'
            },
            {
                icon: 'fas fa-comment',
                type: 'info',
                title: 'Strategy review',
                action: 'comment added',
                time: '4 hours ago'
            },
            {
                icon: 'fas fa-exclamation-circle',
                type: 'warning',
                title: 'Missing evidence',
                action: 'flagged',
                time: '1 day ago'
            }
        ];
        
        return `
            <div class="activity-feed">
                ${activities.map(activity => `
                    <div class="activity-item">
                        <div class="activity-icon ${activity.type}">
                            <i class="${activity.icon}"></i>
                        </div>
                        <div class="activity-content">
                            <p><strong>${activity.title}</strong> ${activity.action}</p>
                            <span class="activity-time">${activity.time}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    renderTeamStats() {
        const teamMembers = [
            { role: 'Senior Partner', task: 'Strategy oversight', progress: 95 },
            { role: 'Case Manager', task: 'Evidence coordination', progress: 78 },
            { role: 'Legal Analyst', task: 'Document analysis', progress: 85 }
        ];
        
        return `
            <div class="team-stats">
                ${teamMembers.map(member => `
                    <div class="team-member">
                        <div class="member-avatar">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="member-info">
                            <h4>${member.role}</h4>
                            <p>${member.task}</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${member.progress}%"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    initCharts() {
        // Initialize evidence distribution chart
        const ctx = this.container.querySelector('#evidence-chart');
        if (ctx && window.Chart) {
            this.charts.evidence = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Technical Reports', 'Correspondence', 'Legal Documents', 'Drawings'],
                    datasets: [{
                        data: [35, 25, 25, 15],
                        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
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
        }
    }
    
    bindEvents() {
        // Refresh button
        this.container.querySelector('.refresh-btn')?.addEventListener('click', () => {
            this.refresh();
        });
        
        // Export button
        this.container.querySelector('.export-btn')?.addEventListener('click', () => {
            this.exportData();
        });
    }
    
    refresh() {
        // Refresh dashboard data
        console.log('Refreshing dashboard...');
        // Add loading state and re-fetch data
    }
    
    exportData() {
        // Export dashboard data
        console.log('Exporting dashboard data...');
        // Implement export functionality
    }
    
    updateMetrics(newData) {
        // Update dashboard metrics with new data
        Object.assign(this.caseData, newData);
        this.render();
        this.initCharts();
        this.bindEvents();
    }
}

export default Dashboard;
