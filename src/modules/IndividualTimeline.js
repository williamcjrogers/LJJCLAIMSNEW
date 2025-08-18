// Individual Timeline Module - Detailed view for each Head of Claim
import { realClaimsHierarchy, RealClaimsUtils } from '../data/realClaimsData.js';
import { EvidenceViewer } from './EvidenceViewer.js';
import { getEvidenceCount } from '../data/evidenceRegistry.js';

export class IndividualTimeline {
  constructor(headOfClaimId) {
    this.headOfClaimId = headOfClaimId;
    this.currentHead = null;
    this.container = null;
    this.evidenceViewer = new EvidenceViewer();
    this.init();
  }

  init() {
    // Find the specific head of claim
    this.headOfClaim = RealClaimsUtils.getHeadOfClaimById(this.headOfClaimId);
    if (!this.headOfClaim) {
      console.error(`Head of claim not found: ${this.headOfClaimId}`);
      return;
    }
  }

  render(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container not found: ${containerId}`);
      return;
    }

    this.container.innerHTML = `
            <div class="individual-timeline">
                ${this.renderHeader()}
                ${this.renderSummaryCards()}
                ${this.renderSubClaims()}
                ${this.renderTimeline()}
                ${this.evidenceViewer.renderEvidenceLibrary(this.headOfClaim.id)}
                ${this.renderSuccessAnalysis()}
            </div>
        `;

    this.attachEventListeners();
    this.renderCharts();
  }

  renderHeader() {
    return `
            <div class="timeline-header">
                <button class="btn-back" id="backToMaster">
                    <i class="fas fa-arrow-left"></i> Back to Master Dashboard
                </button>
                <h1>${this.headOfClaim.name}</h1>
                <div class="header-meta">
                    <span class="folder-ref">Folder Ref: ${this.headOfClaim.folderRef}</span>
                    <span class="claim-value">Total Claim: £${this.headOfClaim.totalClaim.toLocaleString()}</span>
                    <span class="evidence-strength">Evidence: ${this.headOfClaim.evidenceStrength}%</span>
                    <span class="success-rate">Success: ${this.headOfClaim.successProbability}%</span>
                </div>
            </div>
        `;
  }

  renderSummaryCards() {
    const subClaimsCount = this.headOfClaim.subClaims.length;
    const totalSubClaimValue = this.headOfClaim.subClaims.reduce(
      (sum, sub) => sum + sub.claimAmount,
      0
    );
    const avgEvidence = Math.round(
      this.headOfClaim.subClaims.reduce((sum, sub) => sum + sub.evidenceStrength, 0) /
        subClaimsCount
    );
    const totalEvidenceItems = getEvidenceCount(this.headOfClaim.id);

    return `
            <div class="summary-cards">
                <div class="summary-card">
                    <div class="card-icon"><i class="fas fa-folder-tree"></i></div>
                    <div class="card-content">
                        <div class="card-value">${subClaimsCount}</div>
                        <div class="card-label">Sub-Claims/Defects</div>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-icon"><i class="fas fa-pound-sign"></i></div>
                    <div class="card-content">
                        <div class="card-value">£${totalSubClaimValue.toLocaleString()}</div>
                        <div class="card-label">Total Sub-Claims Value</div>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="card-content">
                        <div class="card-value">${avgEvidence}%</div>
                        <div class="card-label">Avg Evidence Strength</div>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                    <div class="card-content">
                        <div class="card-value">${totalEvidenceItems}</div>
                        <div class="card-label">Evidence Documents</div>
                    </div>
                </div>
            </div>
        `;
  }

  renderSubClaims() {
    return `
            <div class="sub-claims-section">
                <h2>Sub-Claims / Defects</h2>
                <div class="sub-claims-grid">
                    ${this.headOfClaim.subClaims
                      .map(
                        subClaim => `
                        <div class="sub-claim-card" data-subclaim-id="${subClaim.id}">
                            <div class="sub-claim-header">
                                <h3>${subClaim.name}</h3>
                                <span class="defect-number">Defect #${subClaim.defectNumber}</span>
                            </div>
                            <div class="sub-claim-body">
                                <div class="sub-claim-metric">
                                    <span class="metric-label">Claim Amount:</span>
                                    <span class="metric-value">£${subClaim.claimAmount.toLocaleString()}</span>
                                </div>
                                <div class="sub-claim-metric">
                                    <span class="metric-label">Evidence Strength:</span>
                                    <div class="evidence-bar">
                                        <div class="evidence-fill" style="width: ${subClaim.evidenceStrength}%; background: ${this.getStrengthColor(subClaim.evidenceStrength)}"></div>
                                        <span class="evidence-text">${subClaim.evidenceStrength}%</span>
                                    </div>
                                </div>
                                <div class="sub-claim-metric">
                                    <span class="metric-label">Success Probability:</span>
                                    <span class="metric-value ${this.getSuccessClass(subClaim.successProbability)}">${subClaim.successProbability}%</span>
                                </div>
                                ${
                                  subClaim.items && subClaim.items.length > 0
                                    ? `
                                    <div class="sub-claim-items">
                                        <span class="metric-label">Breakdown:</span>
                                        <ul class="items-list">
                                            ${subClaim.items
                                              .slice(0, 3)
                                              .map(
                                                item => `
                                                <li>
                                                    <span class="item-desc">${item.description}</span>
                                                    <span class="item-amount">£${item.amount.toLocaleString()}</span>
                                                </li>
                                            `
                                              )
                                              .join('')}
                                            ${subClaim.items.length > 3 ? `<li class="more-items">+${subClaim.items.length - 3} more items</li>` : ''}
                                        </ul>
                                    </div>
                                `
                                    : ''
                                }
                                <div class="sub-claim-evidence">
                                    <span class="metric-label">Evidence:</span>
                                    <div class="evidence-items">
                                        ${subClaim.evidence
                                          .map(
                                            item => `
                                            <div class="evidence-item">
                                                <i class="fas ${this.getEvidenceIcon(item.type)}"></i>
                                                <span class="evidence-title">${item.title}</span>
                                                <div class="evidence-actions">
                                                    <button class="btn-download" data-evidence-id="${item.id}" title="Download">
                                                        <i class="fas fa-download"></i>
                                                    </button>
                                                    <button class="btn-preview" data-evidence-id="${item.id}" title="Preview">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        `
                                          )
                                          .join('')}
                                    </div>
                                </div>
                            </div>
                            <button class="btn-view-timeline" data-subclaim-id="${subClaim.id}">
                                <i class="fas fa-clock"></i> View Detailed Timeline
                            </button>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `;
  }

  renderTimeline() {
    // Combine master timeline events that affect this head of claim
    const relevantMasterEvents = realClaimsHierarchy.masterTimeline.filter(event =>
      event.affectedHeads.includes(this.headOfClaimId)
    );

    const allEvents = [
      ...relevantMasterEvents.map(e => ({ ...e, source: 'master' })),
      ...this.headOfClaim.timeline.map(e => ({ ...e, source: 'individual' })),
    ].sort((a, b) => new Date(a.date) - new Date(b.date));

    return `
            <div class="timeline-section">
                <h2>Project Timeline</h2>
                <div class="timeline-filter">
                    <button class="filter-btn active" data-filter="all">All Events</button>
                    <button class="filter-btn" data-filter="master">Master Events</button>
                    <button class="filter-btn" data-filter="individual">Individual Events</button>
                </div>
                <div class="timeline-container">
                    <div class="timeline-line"></div>
                    ${allEvents
                      .map(
                        event => `
                        <div class="timeline-event ${event.source}-event" data-source="${event.source}">
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
                                <div class="event-meta">
                                    <span class="event-source ${event.source}">${event.source === 'master' ? 'Master Timeline' : 'Individual Timeline'}</span>
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

  renderSuccessAnalysis() {
    const analysis = this.calculateSuccessFactors();

    return `
            <div class="success-analysis">
                <h2>Success Rate Analysis</h2>
                <div class="analysis-content">
                    <div class="analysis-chart">
                        <canvas id="successChart"></canvas>
                    </div>
                    <div class="analysis-details">
                        <h3>Key Success Factors</h3>
                        <ul class="success-factors">
                            <li class="${analysis.evidenceScore >= 80 ? 'positive' : 'neutral'}">
                                <i class="fas fa-file-alt"></i>
                                <span>Evidence Strength: ${this.headOfClaim.evidenceStrength}%</span>
                                <p>${analysis.evidenceReasoning}</p>
                            </li>
                            <li class="${analysis.documentationComplete ? 'positive' : 'negative'}">
                                <i class="fas fa-check-circle"></i>
                                <span>Documentation: ${analysis.documentationComplete ? 'Complete' : 'Incomplete'}</span>
                                <p>${analysis.documentationReasoning}</p>
                            </li>
                            <li class="${analysis.complianceIssues ? 'negative' : 'positive'}">
                                <i class="fas fa-exclamation-triangle"></i>
                                <span>Compliance: ${analysis.complianceIssues ? 'Issues Found' : 'Compliant'}</span>
                                <p>${analysis.complianceReasoning}</p>
                            </li>
                            <li class="neutral">
                                <i class="fas fa-balance-scale"></i>
                                <span>Legal Merit: ${analysis.legalMerit}%</span>
                                <p>${analysis.legalReasoning}</p>
                            </li>
                        </ul>
                        <div class="overall-assessment">
                            <h3>Overall Assessment</h3>
                            <p>${analysis.overallReasoning}</p>
                            <div class="success-probability">
                                <span class="label">Success Probability:</span>
                                <span class="value ${this.getSuccessClass(this.headOfClaim.successProbability)}">${this.headOfClaim.successProbability}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  calculateSuccessFactors() {
    const category = this.headOfClaim.name;
    const evidenceScore = this.headOfClaim.evidenceStrength;

    const analysis = {
      evidenceScore,
      documentationComplete: evidenceScore >= 85,
      complianceIssues: false,
      legalMerit: 75,
      evidenceReasoning: '',
      documentationReasoning: '',
      complianceReasoning: '',
      legalReasoning: '',
      overallReasoning: '',
    };

    // Category-specific analysis
    if (category.includes('Life Safety')) {
      analysis.complianceIssues = true;
      analysis.legalMerit = 85;
      analysis.complianceReasoning =
        'Fire safety and life safety systems have strict regulatory requirements. Non-compliance identified.';
      analysis.legalReasoning = 'Strong legal position due to health and safety regulations.';
    } else if (category.includes('Building Management')) {
      analysis.legalMerit = 80;
      analysis.legalReasoning =
        'BMS commissioning defects are well-documented with clear contractual requirements.';
    } else if (category.includes('Electrical')) {
      analysis.complianceIssues = true;
      analysis.complianceReasoning =
        'Multiple NICEIC compliance issues identified requiring remediation.';
    }

    // Evidence reasoning
    if (evidenceScore >= 85) {
      analysis.evidenceReasoning =
        'Strong documentary evidence including test reports, certificates, and commissioning data.';
    } else if (evidenceScore >= 75) {
      analysis.evidenceReasoning =
        'Good evidence base with installation records and defect reports.';
    } else {
      analysis.evidenceReasoning =
        'Evidence available but additional documentation may strengthen the claim.';
    }

    // Documentation reasoning
    analysis.documentationReasoning = analysis.documentationComplete
      ? 'All required documentation is complete and properly filed.'
      : 'Some documentation gaps exist that should be addressed.';

    // Overall reasoning
    analysis.overallReasoning =
      `This claim for ${category} has a ${this.headOfClaim.successProbability}% probability of success based on: ` +
      `${evidenceScore >= 80 ? 'strong evidence, ' : 'available evidence, '}` +
      `${analysis.complianceIssues ? 'identified compliance issues requiring remediation, ' : ''}` +
      `and clear contractual obligations. The claimed amount of £${this.headOfClaim.totalClaim.toLocaleString()} is supported by detailed cost breakdowns.`;

    return analysis;
  }

  renderCharts() {
    // Render success factors chart
    const ctx = document.getElementById('successChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Evidence', 'Documentation', 'Compliance', 'Legal Merit', 'Cost Justification'],
          datasets: [
            {
              label: 'Success Factors',
              data: [
                this.headOfClaim.evidenceStrength,
                85,
                this.headOfClaim.name.includes('Safety') ? 60 : 80,
                75,
                90,
              ],
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgb(59, 130, 246)',
              pointBackgroundColor: 'rgb(59, 130, 246)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(59, 130, 246)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { display: false },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });
    }
  }

  attachEventListeners() {
    // Back button
    const backBtn = document.getElementById('backToMaster');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.navigateToMaster && window.navigateToMaster();
      });
    }

    // Timeline filters
    document.querySelectorAll('.timeline-filter .filter-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const filter = e.target.dataset.filter;

        // Update active button
        document
          .querySelectorAll('.timeline-filter .filter-btn')
          .forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        // Filter events
        document.querySelectorAll('.timeline-event').forEach(event => {
          if (filter === 'all' || event.dataset.source === filter) {
            event.style.display = 'flex';
          } else {
            event.style.display = 'none';
          }
        });
      });
    });

    // Evidence actions
    document.querySelectorAll('.btn-download').forEach(btn => {
      btn.addEventListener('click', e => {
        const evidenceId = e.currentTarget.dataset.evidenceId;
        this.downloadEvidence(evidenceId);
      });
    });

    document.querySelectorAll('.btn-preview').forEach(btn => {
      btn.addEventListener('click', e => {
        const evidenceId = e.currentTarget.dataset.evidenceId;
        this.previewEvidence(evidenceId);
      });
    });

    // View timeline buttons
    document.querySelectorAll('.btn-view-timeline').forEach(btn => {
      btn.addEventListener('click', e => {
        const subClaimId = e.currentTarget.dataset.subclaimId;
        this.showSubClaimTimeline(subClaimId);
      });
    });
  }

  downloadEvidence(evidenceId) {
    console.log(`Downloading evidence: ${evidenceId}`);
    // Implementation would download the actual evidence file
    alert(`Evidence download initiated for: ${evidenceId}`);
  }

  previewEvidence(evidenceId) {
    console.log(`Previewing evidence: ${evidenceId}`);
    // Implementation would open a preview modal
    alert(`Evidence preview for: ${evidenceId}`);
  }

  showSubClaimTimeline(subClaimId) {
    console.log(`Showing timeline for subclaim: ${subClaimId}`);
    // Implementation would show detailed subclaim timeline
    alert(`Detailed timeline view for: ${subClaimId}`);
  }

  getEvidenceIcon(type) {
    const iconMap = {
      document: 'fa-file-alt',
      report: 'fa-file-chart-line',
      'test-report': 'fa-clipboard-check',
      certificate: 'fa-certificate',
      drawing: 'fa-drafting-compass',
      specification: 'fa-file-contract',
      invoice: 'fa-file-invoice',
      design: 'fa-pencil-ruler',
      data: 'fa-database',
    };
    return iconMap[type] || 'fa-file';
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
