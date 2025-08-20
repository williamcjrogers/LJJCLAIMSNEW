// Master Dashboard Module - Overview of all Heads of Claim
import { claimsHierarchy, ClaimsHierarchyUtils } from '../data/claimsHierarchy.js';

export class MasterDashboard {
  constructor(container, options = {}) {
    this.claimsData = claimsHierarchy;
    this.container = container;
    this.options = options || {};
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    if (!this.container) {
      console.error('Container not provided');
      return;
    }

    this.container.innerHTML = `
            <div class="master-dashboard">
                ${this.renderHeader()}
                ${this.renderOverviewMetrics()}
                ${this.renderHeadsOfClaimGrid()}
                ${this.renderSummaryCharts()}
                ${this.renderMasterTimeline()}
            </div>
        `;

    this.attachEventListeners();
    this.renderCharts();
  }

  renderHeader() {
    return `
            <div class="dashboard-header">
                <h1>Master Claims Dashboard</h1>
                <div class="project-info">
                    <h2>${this.claimsData.master.case_name}</h2>
                    <div class="project-meta">
                        <span class="case-id">Case ID: ${this.claimsData.master.case_id}</span>
                        <span class="total-value">Total Claim Value: £${this.claimsData.master.total_claim_value.toLocaleString()}</span>
                        <span class="status">Status: ${this.claimsData.master.status}</span>
                    </div>
                </div>
            </div>
        `;
  }

  renderOverviewMetrics() {
    const totalHeads = this.claimsData.headsOfClaim.length;
    const totalSubClaims = this.claimsData.headsOfClaim.reduce(
      (sum, head) => sum + head.subClaims.length,
      0
    );
    const totalValue = ClaimsHierarchyUtils.calculateSummary().total_claim_value;
    const avgStrength = Math.round(ClaimsHierarchyUtils.calculateSummary().average_strength);
    const avgSuccess = 75; // Default value since it's not in the utils

    return `
            <div class="overview-metrics">
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-folder-tree"></i>
                    </div>
                    <div class="metric-content">
                        <div class="metric-value">${totalHeads}</div>
                        <div class="metric-label">Heads of Claim</div>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-list-check"></i>
                    </div>
                    <div class="metric-content">
                        <div class="metric-value">${totalSubClaims}</div>
                        <div class="metric-label">Sub-Claims/Defects</div>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-pound-sign"></i>
                    </div>
                    <div class="metric-content">
                        <div class="metric-value">£${totalValue.toLocaleString()}</div>
                        <div class="metric-label">Total Claim Value</div>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="metric-content">
                        <div class="metric-value">${avgStrength}%</div>
                        <div class="metric-label">Avg Evidence Strength</div>
                    </div>
                </div>
                
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <div class="metric-content">
                        <div class="metric-value">${avgSuccess}%</div>
                        <div class="metric-label">Avg Success Rate</div>
                    </div>
                </div>
            </div>
        `;
  }

  renderHeadsOfClaimGrid() {
    return `
            <div class="heads-of-claim-section">
                <h2>Heads of Claim Overview</h2>
                <div class="heads-grid">
                    ${this.claimsData.headsOfClaim.map(head => this.renderHeadOfClaimCard(head)).join('')}
                </div>
            </div>
        `;
  }

  renderHeadOfClaimCard(head) {
    const subClaimsCount = head.subClaims.length;
    const totalSubClaimValue = head.subClaims.reduce((sum, sub) => sum + sub.claimAmount, 0);

    return `
            <div class="head-claim-card" data-head-id="${head.id}">
                <div class="card-header">
                    <h3>${head.name}</h3>
                    <span class="folder-ref">Folder ${head.folderRef}</span>
                    <span class="status-badge ${head.status}">${head.status}</span>
                </div>
                
                <div class="card-body">
                    <div class="claim-metrics">
                        <div class="metric">
                            <span class="label">Total Claim:</span>
                            <span class="value">£${head.totalClaim.toLocaleString()}</span>
                        </div>
                        <div class="metric">
                            <span class="label">Sub-Claims:</span>
                            <span class="value">${subClaimsCount} defects</span>
                        </div>
                        <div class="metric">
                            <span class="label">Sub-Claims Value:</span>
                            <span class="value">£${totalSubClaimValue.toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <div class="strength-indicators">
                        <div class="indicator">
                            <span class="label">Evidence Strength</span>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${head.evidenceStrength}%; background: ${this.getStrengthColor(head.evidenceStrength)}"></div>
                                <span class="progress-text">${head.evidenceStrength}%</span>
                            </div>
                        </div>
                        <div class="indicator">
                            <span class="label">Success Probability</span>
                            <div class="success-value ${this.getSuccessClass(head.successProbability)}">
                                ${head.successProbability}%
                            </div>
                        </div>
                    </div>
                    
                    <div class="subclaims-preview">
                        <span class="preview-label">Key Defects:</span>
                        <ul>
                            ${head.subClaims
                              .slice(0, 2)
                              .map(
                                sub => `
                                <li>${sub.name} - £${sub.claimAmount.toLocaleString()}</li>
                            `
                              )
                              .join('')}
                            ${subClaimsCount > 2 ? `<li class="more">+${subClaimsCount - 2} more...</li>` : ''}
                        </ul>
                    </div>
                </div>
                
                <button class="btn-view-timeline" data-head-id="${head.id}">
                    <i class="fas fa-clock"></i> View Timeline & Details
                </button>
            </div>
        `;
  }

  renderSummaryCharts() {
    return `
            <div class="summary-charts">
                <h2>Analysis Charts</h2>
                <div class="charts-grid">
                    <div class="chart-card">
                        <h3>Claim Value Distribution</h3>
                        <canvas id="valueChart"></canvas>
                    </div>
                    <div class="chart-card">
                        <h3>Evidence Strength by Head</h3>
                        <canvas id="strengthChart"></canvas>
                    </div>
                    <div class="chart-card">
                        <h3>Success Probability Overview</h3>
                        <canvas id="successChart"></canvas>
                    </div>
                </div>
            </div>
        `;
  }

  renderMasterTimeline() {
    return `
            <div class="master-timeline-section">
                <h2>Master Project Timeline</h2>
                <div class="timeline-container">
                    <div class="timeline-line"></div>
                    ${this.claimsData.masterTimeline
                      .map(
                        event => `
                        <div class="timeline-event">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <div class="event-date">${new Date(event.date).toLocaleDateString(
                                  'en-GB',
                                  {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                  }
                                )}</div>
                                <div class="event-title">${event.title}</div>
                                <div class="event-description">${event.description}</div>
                                <div class="affected-heads">
                                    <span class="label">Affects:</span>
                                    ${event.affectedHeads
                                      .map(headId => {
                                        const head = this.claimsData.headsOfClaim.find(
                                          h => h.id === headId
                                        );
                                        return head
                                          ? `<span class="head-tag">${head.name}</span>`
                                          : '';
                                      })
                                      .join('')}
                                </div>
                            </div>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `;
  }

  renderCharts() {
    // Value Distribution Chart
    const valueCtx = document.getElementById('valueChart');
    if (valueCtx) {
      new Chart(valueCtx, {
        type: 'doughnut',
        data: {
          labels: this.claimsData.headsOfClaim.map(h => h.name),
          datasets: [
            {
              data: this.claimsData.headsOfClaim.map(h => h.totalClaim),
              backgroundColor: [
                '#3b82f6',
                '#10b981',
                '#f59e0b',
                '#ef4444',
                '#8b5cf6',
                '#ec4899',
                '#06b6d4',
                '#84cc16',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: {
              callbacks: {
                label: context => {
                  return `${context.label}: £${context.raw.toLocaleString()}`;
                },
              },
            },
          },
        },
      });
    }

    // Evidence Strength Chart
    const strengthCtx = document.getElementById('strengthChart');
    if (strengthCtx) {
      new Chart(strengthCtx, {
        type: 'bar',
        data: {
          labels: this.claimsData.headsOfClaim.map(h => h.name),
          datasets: [
            {
              label: 'Evidence Strength (%)',
              data: this.claimsData.headsOfClaim.map(h => h.evidenceStrength),
              backgroundColor: this.claimsData.headsOfClaim.map(h =>
                this.getStrengthColor(h.evidenceStrength)
              ),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, max: 100 },
          },
        },
      });
    }

    // Success Probability Chart
    const successCtx = document.getElementById('successChart');
    if (successCtx) {
      new Chart(successCtx, {
        type: 'radar',
        data: {
          labels: this.claimsData.headsOfClaim.map(h => h.name),
          datasets: [
            {
              label: 'Success Probability',
              data: this.claimsData.headsOfClaim.map(h => h.successProbability),
              borderColor: '#8b5cf6',
              backgroundColor: 'rgba(139, 92, 246, 0.2)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: { beginAtZero: true, max: 100 },
          },
        },
      });
    }
  }

  attachEventListeners() {
    // View timeline buttons
    document.querySelectorAll('.btn-view-timeline').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const headId = btn.getAttribute('data-head-id');
        if (this.options.onHeadOfClaimClick) {
          this.options.onHeadOfClaimClick(headId, 'view');
        }
      });
    });
  }

  getStrengthColor(strength) {
    if (strength >= 85) return '#10b981';
    if (strength >= 70) return '#3b82f6';
    if (strength >= 50) return '#f59e0b';
    return '#ef4444';
  }

  getSuccessClass(probability) {
    if (probability >= 80) return 'success-high';
    if (probability >= 60) return 'success-medium';
    return 'success-low';
  }
}

export default MasterDashboard;
