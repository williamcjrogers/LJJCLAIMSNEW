// Analytics Module - Data analysis and insights
import { claimsHierarchy } from '../data/claimsHierarchy.js';

export class Analytics {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.claimsData = claimsHierarchy;
    this.init();
  }

  init() {
    this.render();
    this.initializeCharts();
  }

  render() {
    this.container.innerHTML = `
      <div class="analytics-module">
        <div class="section-header">
          <h1>Advanced Analytics</h1>
          <p>Data-driven insights and predictive analysis for case optimization</p>
        </div>
        
        <div class="analytics-dashboard">
          <div class="analytics-card">
            <div class="card-header">
              <h3>Case Strength Analysis</h3>
            </div>
            <div class="strength-meter">
              <canvas id="strength-gauge-chart"></canvas>
              <div class="strength-details">
                ${this.renderStrengthFactors()}
              </div>
            </div>
          </div>

          <div class="analytics-card">
            <div class="card-header">
              <h3>Risk Assessment Matrix</h3>
            </div>
            <div class="risk-matrix">
              ${this.renderRiskMatrix()}
            </div>
          </div>

          <div class="analytics-card large">
            <div class="card-header">
              <h3>Claim Value Distribution</h3>
            </div>
            <div class="chart-container">
              <canvas id="value-distribution-chart"></canvas>
            </div>
          </div>

          <div class="analytics-card">
            <div class="card-header">
              <h3>Evidence Coverage</h3>
            </div>
            <div class="coverage-stats">
              ${this.renderEvidenceCoverage()}
            </div>
          </div>

          <div class="analytics-card large">
            <div class="card-header">
              <h3>Predictive Outcome Analysis</h3>
            </div>
            <div class="outcome-analysis">
              <canvas id="outcome-prediction-chart"></canvas>
            </div>
          </div>

          <div class="analytics-card">
            <div class="card-header">
              <h3>Key Performance Indicators</h3>
            </div>
            <div class="kpi-grid">
              ${this.renderKPIs()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderStrengthFactors() {
    const factors = [
      { name: 'Technical Evidence', score: 92 },
      { name: 'Documentation', score: 85 },
      { name: 'Timeline Consistency', score: 78 },
      { name: 'Expert Support', score: 88 },
      { name: 'Legal Precedent', score: 72 }
    ];

    return factors.map(factor => `
      <div class="strength-factor">
        <span class="factor-name">${factor.name}</span>
        <div class="factor-bar">
          <div class="factor-fill" style="width: ${factor.score}%"></div>
        </div>
        <span class="factor-score">${factor.score}%</span>
      </div>
    `).join('');
  }

  renderRiskMatrix() {
    const risks = [
      { category: 'Timeline Issues', probability: 'Medium', impact: 'High', score: 6 },
      { category: 'Missing Evidence', probability: 'Low', impact: 'Medium', score: 3 },
      { category: 'Technical Complexity', probability: 'High', impact: 'Medium', score: 6 },
      { category: 'Legal Challenges', probability: 'Medium', impact: 'Medium', score: 4 }
    ];

    return `
      <div class="risk-table">
        <table>
          <thead>
            <tr>
              <th>Risk Category</th>
              <th>Probability</th>
              <th>Impact</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            ${risks.map(risk => `
              <tr>
                <td>${risk.category}</td>
                <td><span class="risk-badge ${risk.probability.toLowerCase()}">${risk.probability}</span></td>
                <td><span class="risk-badge ${risk.impact.toLowerCase()}">${risk.impact}</span></td>
                <td><span class="risk-score">${risk.score}/10</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  renderEvidenceCoverage() {
    const coverage = [
      { type: 'Technical Reports', available: 24, required: 28, percentage: 86 },
      { type: 'Correspondence', available: 156, required: 156, percentage: 100 },
      { type: 'Expert Assessments', available: 3, required: 4, percentage: 75 },
      { type: 'Financial Records', available: 42, required: 45, percentage: 93 }
    ];

    return coverage.map(item => `
      <div class="coverage-item">
        <div class="coverage-header">
          <span class="coverage-type">${item.type}</span>
          <span class="coverage-ratio">${item.available}/${item.required}</span>
        </div>
        <div class="coverage-bar">
          <div class="coverage-fill ${item.percentage >= 90 ? 'success' : item.percentage >= 70 ? 'warning' : 'danger'}" 
               style="width: ${item.percentage}%"></div>
        </div>
        <span class="coverage-percentage">${item.percentage}%</span>
      </div>
    `).join('');
  }

  renderKPIs() {
    const kpis = [
      { label: 'Total Claim Value', value: '£2.4M', trend: 'stable' },
      { label: 'Recovery Rate', value: '72%', trend: 'up' },
      { label: 'Case Duration', value: '3.5 years', trend: 'stable' },
      { label: 'Document Count', value: '428', trend: 'up' },
      { label: 'Critical Issues', value: '28', trend: 'down' },
      { label: 'Success Probability', value: '65%', trend: 'up' }
    ];

    return kpis.map(kpi => `
      <div class="kpi-card">
        <div class="kpi-value">${kpi.value}</div>
        <div class="kpi-label">${kpi.label}</div>
        <div class="kpi-trend ${kpi.trend}">
          <i class="fas fa-arrow-${kpi.trend === 'up' ? 'up' : kpi.trend === 'down' ? 'down' : 'right'}"></i>
        </div>
      </div>
    `).join('');
  }

  initializeCharts() {
    // Only initialize charts if Chart.js is available
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js not loaded - skipping chart initialization');
      return;
    }

    this.createStrengthGauge();
    this.createValueDistributionChart();
    this.createOutcomePredictionChart();
  }

  createStrengthGauge() {
    const canvas = this.container.querySelector('#strength-gauge-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Strong', 'Weak'],
        datasets: [{
          data: [72, 28],
          backgroundColor: ['#10b981', '#e5e7eb'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });
  }

  createValueDistributionChart() {
    const canvas = this.container.querySelector('#value-distribution-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Electrical', 'Mechanical', 'BMS', 'Fire Systems', 'Public Health'],
        datasets: [{
          label: 'Claim Value (£)',
          data: [850000, 620000, 450000, 320000, 160000],
          backgroundColor: '#3b82f6'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '£' + (value / 1000) + 'k';
              }
            }
          }
        }
      }
    });
  }

  createOutcomePredictionChart() {
    const canvas = this.container.querySelector('#outcome-prediction-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Current', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
        datasets: [
          {
            label: 'Optimistic',
            data: [65, 72, 78, 82, 85],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4
          },
          {
            label: 'Realistic',
            data: [65, 68, 70, 72, 72],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
          },
          {
            label: 'Conservative',
            data: [65, 62, 60, 58, 55],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            min: 40,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}