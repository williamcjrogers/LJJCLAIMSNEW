// Sub-Claim Detail View Module - Detailed view for individual sub-claims/defects
import { RealClaimsUtils } from '../data/realClaimsData.js';

export class SubClaimDetailView {
  constructor(headOfClaimId, subClaimId, options = {}) {
    this.headOfClaimId = headOfClaimId;
    this.subClaimId = subClaimId;
    this.options = {
      onBackToHead: () => {},
      onBackToMaster: () => {},
      ...options,
    };

    this.headOfClaim = null;
    this.subClaim = null;
    this.container = null;

    this.init();
  }

  init() {
    // Find the head of claim and sub-claim
    this.headOfClaim = RealClaimsUtils.getHeadOfClaimById(this.headOfClaimId);
    if (!this.headOfClaim) {
      console.error(`Head of claim not found: ${this.headOfClaimId}`);
      return;
    }

    this.subClaim = this.headOfClaim.subClaims.find(sc => sc.id === this.subClaimId);
    if (!this.subClaim) {
      console.error(`Sub-claim not found: ${this.subClaimId}`);
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
      <div class="sub-claim-detail-view">
        ${this.renderHeader()}
        ${this.renderSummarySection()}
        ${this.renderBreakdownSection()}
        ${this.renderEvidenceSection()}
        ${this.renderAnalysisSection()}
        ${this.renderActionsSection()}
      </div>
    `;

    this.attachEventListeners();
    this.renderCharts();
  }

  renderHeader() {
    return `
      <div class="sub-claim-header">
        <div class="navigation-buttons">
          <button class="btn-back" id="backToHead">
            <i class="fas fa-arrow-left"></i> Back to ${this.headOfClaim.name}
          </button>
          <button class="btn-back-master" id="backToMaster">
            <i class="fas fa-th"></i> Master Dashboard
          </button>
        </div>
        
        <div class="sub-claim-title">
          <h1>${this.subClaim.name}</h1>
          <div class="sub-claim-meta">
            <span class="defect-number">Defect #${this.subClaim.defectNumber}</span>
            <span class="parent-claim">Parent: ${this.headOfClaim.name}</span>
            <span class="folder-ref">Folder ${this.headOfClaim.folderRef}</span>
            <span class="status-badge ${this.subClaim.status}">${this.subClaim.status}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderSummarySection() {
    return `
      <div class="summary-section">
        <h2>Claim Summary</h2>
        <div class="summary-cards">
          <div class="summary-card primary">
            <div class="card-icon"><i class="fas fa-pound-sign"></i></div>
            <div class="card-content">
              <div class="card-value">£${this.subClaim.claimAmount.toLocaleString()}</div>
              <div class="card-label">Total Claim Amount</div>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon"><i class="fas fa-chart-line"></i></div>
            <div class="card-content">
              <div class="card-value">${this.subClaim.evidenceStrength}%</div>
              <div class="card-label">Evidence Strength</div>
              <div class="progress-bar mini">
                <div class="progress-fill" style="width: ${this.subClaim.evidenceStrength}%; background: ${this.getStrengthColor(this.subClaim.evidenceStrength)}"></div>
              </div>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon"><i class="fas fa-percentage"></i></div>
            <div class="card-content">
              <div class="card-value ${this.getSuccessClass(this.subClaim.successProbability)}">${this.subClaim.successProbability}%</div>
              <div class="card-label">Success Probability</div>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon"><i class="fas fa-file-alt"></i></div>
            <div class="card-content">
              <div class="card-value">${this.subClaim.evidence ? this.subClaim.evidence.length : 0}</div>
              <div class="card-label">Evidence Items</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderBreakdownSection() {
    if (!this.subClaim.items || this.subClaim.items.length === 0) {
      return '';
    }

    const totalItemsValue = this.subClaim.items.reduce((sum, item) => sum + item.amount, 0);

    return `
      <div class="breakdown-section">
        <h2>Cost Breakdown</h2>
        <div class="breakdown-table">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              ${this.subClaim.items
                .map(item => {
                  const percentage = ((item.amount / totalItemsValue) * 100).toFixed(1);
                  return `
                  <tr>
                    <td>${item.description}</td>
                    <td class="amount">£${item.amount.toLocaleString()}</td>
                    <td>
                      <div class="percentage-bar">
                        <div class="percentage-fill" style="width: ${percentage}%"></div>
                        <span class="percentage-text">${percentage}%</span>
                      </div>
                    </td>
                  </tr>
                `;
                })
                .join('')}
            </tbody>
            <tfoot>
              <tr>
                <td><strong>Total</strong></td>
                <td class="amount"><strong>£${totalItemsValue.toLocaleString()}</strong></td>
                <td><strong>100%</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        ${
          totalItemsValue !== this.subClaim.claimAmount
            ? `
          <div class="breakdown-note warning">
            <i class="fas fa-exclamation-triangle"></i>
            Note: Item breakdown total (£${totalItemsValue.toLocaleString()}) differs from claim amount (£${this.subClaim.claimAmount.toLocaleString()})
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  renderEvidenceSection() {
    const evidence = this.subClaim.evidence || [];

    return `
      <div class="evidence-section">
        <div class="section-header">
          <h2>Supporting Evidence</h2>
          <button class="btn-secondary" id="addEvidence">
            <i class="fas fa-plus"></i> Add Evidence
          </button>
        </div>
        
        ${
          evidence.length > 0
            ? `
          <div class="evidence-grid">
            ${evidence
              .map(
                doc => `
              <div class="evidence-card" data-evidence-id="${doc.id}">
                <div class="evidence-icon ${this.getDocumentTypeClass(doc.type)}">
                  <i class="${this.getDocumentIcon(doc.type)}"></i>
                </div>
                <div class="evidence-content">
                  <h4>${doc.title}</h4>
                  <span class="evidence-type">${this.formatDocumentType(doc.type)}</span>
                </div>
                <div class="evidence-actions">
                  <button class="btn-icon" title="View">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn-icon" title="Download">
                    <i class="fas fa-download"></i>
                  </button>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        `
            : `
          <div class="no-evidence">
            <i class="fas fa-folder-open"></i>
            <p>No evidence documents attached yet</p>
            <button class="btn-primary" id="uploadFirstEvidence">
              <i class="fas fa-upload"></i> Upload First Document
            </button>
          </div>
        `
        }
      </div>
    `;
  }

  renderAnalysisSection() {
    return `
      <div class="analysis-section">
        <h2>Risk Analysis</h2>
        <div class="analysis-grid">
          <div class="analysis-card">
            <h3>Strengths</h3>
            <ul class="analysis-list strengths">
              ${this.getStrengths()
                .map(s => `<li><i class="fas fa-check-circle"></i> ${s}</li>`)
                .join('')}
            </ul>
          </div>
          
          <div class="analysis-card">
            <h3>Weaknesses</h3>
            <ul class="analysis-list weaknesses">
              ${this.getWeaknesses()
                .map(w => `<li><i class="fas fa-exclamation-circle"></i> ${w}</li>`)
                .join('')}
            </ul>
          </div>
          
          <div class="analysis-card">
            <h3>Recommendations</h3>
            <ul class="analysis-list recommendations">
              ${this.getRecommendations()
                .map(r => `<li><i class="fas fa-lightbulb"></i> ${r}</li>`)
                .join('')}
            </ul>
          </div>
        </div>
        
        <div class="success-factors">
          <h3>Success Factors Analysis</h3>
          <canvas id="successFactorsChart"></canvas>
        </div>
      </div>
    `;
  }

  renderActionsSection() {
    return `
      <div class="actions-section">
        <h2>Actions & Timeline</h2>
        <div class="actions-container">
          <div class="action-buttons">
            <button class="btn-primary">
              <i class="fas fa-edit"></i> Edit Claim Details
            </button>
            <button class="btn-secondary">
              <i class="fas fa-file-export"></i> Export Report
            </button>
            <button class="btn-secondary">
              <i class="fas fa-share"></i> Share with Team
            </button>
            <button class="btn-danger">
              <i class="fas fa-archive"></i> Archive Claim
            </button>
          </div>
          
          <div class="timeline-preview">
            <h3>Related Timeline Events</h3>
            <div class="timeline-items">
              ${this.getRelatedTimelineEvents()
                .map(
                  event => `
                <div class="timeline-item">
                  <div class="timeline-date">${this.formatDate(event.date)}</div>
                  <div class="timeline-content">
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Back navigation
    const backToHead = document.getElementById('backToHead');
    if (backToHead) {
      backToHead.addEventListener('click', () => this.options.onBackToHead());
    }

    const backToMaster = document.getElementById('backToMaster');
    if (backToMaster) {
      backToMaster.addEventListener('click', () => this.options.onBackToMaster());
    }

    // Evidence actions
    const addEvidence = document.getElementById('addEvidence');
    if (addEvidence) {
      addEvidence.addEventListener('click', () => this.handleAddEvidence());
    }

    const uploadFirst = document.getElementById('uploadFirstEvidence');
    if (uploadFirst) {
      uploadFirst.addEventListener('click', () => this.handleAddEvidence());
    }
  }

  renderCharts() {
    // Success factors radar chart
    const ctx = document.getElementById('successFactorsChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [
            'Evidence Quality',
            'Documentation',
            'Timeline Consistency',
            'Technical Merit',
            'Legal Precedent',
          ],
          datasets: [
            {
              label: 'Current Status',
              data: [this.subClaim.evidenceStrength, 85, 75, this.subClaim.successProbability, 70],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    }
  }

  // Helper methods
  getStrengthColor(strength) {
    if (strength >= 80) return '#10b981';
    if (strength >= 60) return '#f59e0b';
    return '#ef4444';
  }

  getSuccessClass(probability) {
    if (probability >= 75) return 'success-high';
    if (probability >= 50) return 'success-medium';
    return 'success-low';
  }

  getDocumentTypeClass(type) {
    const typeClasses = {
      document: 'doc-type-document',
      report: 'doc-type-report',
      'test-report': 'doc-type-test',
      certificate: 'doc-type-certificate',
      drawing: 'doc-type-drawing',
      photo: 'doc-type-photo',
      email: 'doc-type-email',
    };
    return typeClasses[type] || 'doc-type-default';
  }

  getDocumentIcon(type) {
    const icons = {
      document: 'fas fa-file-alt',
      report: 'fas fa-file-chart-line',
      'test-report': 'fas fa-flask',
      certificate: 'fas fa-certificate',
      drawing: 'fas fa-drafting-compass',
      photo: 'fas fa-image',
      email: 'fas fa-envelope',
    };
    return icons[type] || 'fas fa-file';
  }

  formatDocumentType(type) {
    return type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  getStrengths() {
    const strengths = [];
    if (this.subClaim.evidenceStrength >= 80) {
      strengths.push('Strong documentary evidence');
    }
    if (this.subClaim.successProbability >= 75) {
      strengths.push('High probability of success');
    }
    if (this.subClaim.evidence && this.subClaim.evidence.length >= 3) {
      strengths.push('Multiple supporting documents');
    }
    if (this.subClaim.items && this.subClaim.items.length > 0) {
      strengths.push('Detailed cost breakdown available');
    }
    return strengths.length > 0 ? strengths : ['Evidence collection in progress'];
  }

  getWeaknesses() {
    const weaknesses = [];
    if (this.subClaim.evidenceStrength < 60) {
      weaknesses.push('Limited documentary evidence');
    }
    if (this.subClaim.successProbability < 50) {
      weaknesses.push('Lower probability of full recovery');
    }
    if (!this.subClaim.evidence || this.subClaim.evidence.length < 2) {
      weaknesses.push('Additional evidence needed');
    }
    return weaknesses.length > 0 ? weaknesses : ['No significant weaknesses identified'];
  }

  getRecommendations() {
    const recommendations = [];
    if (this.subClaim.evidenceStrength < 80) {
      recommendations.push('Gather additional supporting documentation');
    }
    if (!this.subClaim.items || this.subClaim.items.length === 0) {
      recommendations.push('Provide detailed cost breakdown');
    }
    recommendations.push('Review similar precedent cases');
    recommendations.push('Coordinate with technical experts');
    return recommendations;
  }

  getRelatedTimelineEvents() {
    // Get timeline events from the parent head of claim
    return this.headOfClaim.timeline || [];
  }

  handleAddEvidence() {
    alert('Evidence upload functionality will be implemented in the next phase');
  }
}

export default SubClaimDetailView;
