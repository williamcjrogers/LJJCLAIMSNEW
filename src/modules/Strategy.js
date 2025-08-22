// Strategy Module - Strategic planning and recommendations
import { claimsHierarchy } from '../data/claimsHierarchy.js';

export class Strategy {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.claimsData = claimsHierarchy;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="strategy-module">
        <div class="section-header">
          <h1>Strategic Roadmap</h1>
          <p>AI-powered adaptive strategy recommendations for optimal case outcome</p>
        </div>
        
        <div class="strategy-overview">
          <div class="strategy-card primary">
            <div class="strategy-header">
              <h3><i class="fas fa-bullseye"></i> Current Strategy</h3>
              <span class="confidence-score">Confidence: 72%</span>
            </div>
            <div class="strategy-content">
              <h4>Evidence-Based Technical Failure Claims</h4>
              <p>Focus on K&T technical findings, LJJ's failure to demonstrate proper commissioning, and Building Control non-compliance.</p>
              <div class="strategy-metrics">
                <div class="metric">
                  <span class="metric-label">Success Probability</span>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 72%"></div>
                  </div>
                  <span class="metric-value">72%</span>
                </div>
                <div class="metric">
                  <span class="metric-label">Risk Level</span>
                  <div class="risk-indicator medium">Medium</div>
                </div>
              </div>
              <div class="strategy-actions">
                <button class="btn-primary">Execute Strategy</button>
                <button class="btn-secondary">Modify Approach</button>
              </div>
            </div>
          </div>
        </div>

        <div class="alternative-strategies">
          <h3>Alternative Strategies</h3>
          <div class="strategies-grid">
            ${this.renderAlternativeStrategies()}
          </div>
        </div>

        <div class="roadmap-timeline">
          <h3>Implementation Timeline</h3>
          ${this.renderRoadmap()}
        </div>

        <div class="ai-recommendations">
          <div class="ai-header">
            <h3><i class="fas fa-robot"></i> AI Strategic Recommendations</h3>
            <span class="ai-confidence">AI Confidence: 91%</span>
          </div>
          ${this.renderRecommendations()}
        </div>
      </div>
    `;
  }

  renderAlternativeStrategies() {
    const strategies = [
      {
        title: 'Contractual Breach Focus',
        confidence: 68,
        description: 'Emphasize LJJ\'s failure to meet contractual obligations and witnessing requirements.',
        risk: 'medium'
      },
      {
        title: 'Time-Based Omission',
        confidence: 64,
        description: 'Focus on timeline failures and formal notice compliance issues.',
        risk: 'high'
      },
      {
        title: 'Hybrid Approach',
        confidence: 75,
        description: 'Combine technical failures with contractual breaches for maximum impact.',
        risk: 'low'
      }
    ];

    return strategies.map(strategy => `
      <div class="alternative-card">
        <div class="alternative-header">
          <h4>${strategy.title}</h4>
          <span class="confidence">${strategy.confidence}%</span>
        </div>
        <p>${strategy.description}</p>
        <div class="risk-assessment">
          <span class="risk-label">Risk:</span>
          <div class="risk-meter ${strategy.risk}"></div>
          <span>${strategy.risk.charAt(0).toUpperCase() + strategy.risk.slice(1)}</span>
        </div>
        <button class="btn-secondary">Explore Strategy</button>
      </div>
    `).join('');
  }

  renderRoadmap() {
    const phases = [
      {
        title: 'Phase 1: Evidence Consolidation',
        status: 'completed',
        description: 'Complete technical documentation review',
        date: 'Completed Jan 2024'
      },
      {
        title: 'Phase 2: Gap Analysis & Recovery',
        status: 'active',
        description: 'Identify and obtain missing critical evidence',
        date: 'In Progress - Aug 2024'
      },
      {
        title: 'Phase 3: Legal Position Strengthening',
        status: 'pending',
        description: 'Prepare comprehensive legal arguments',
        date: 'Planned Sep 2024'
      },
      {
        title: 'Phase 4: Settlement Negotiation',
        status: 'pending',
        description: 'Execute settlement strategy',
        date: 'Target Q4 2024'
      }
    ];

    return `
      <div class="roadmap-container">
        ${phases.map(phase => `
          <div class="roadmap-phase ${phase.status}">
            <div class="phase-marker"></div>
            <div class="phase-content">
              <h4>${phase.title}</h4>
              <p>${phase.description}</p>
              <span class="phase-date">${phase.date}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderRecommendations() {
    const recommendations = [
      {
        priority: 'high',
        icon: 'exclamation-triangle',
        title: 'Secure Missing K&T Reports',
        description: 'Blocks A&B reports are critical for comprehensive technical failure argument. Estimated impact: +15% claim strength.',
        action: 'Take Action'
      },
      {
        priority: 'medium',
        icon: 'lightbulb',
        title: 'Leverage Timeline Patterns',
        description: 'LJJ\'s consistent reporting of damage early in project creates defensive liability pattern. Exploit this narrative.',
        action: 'Explore'
      },
      {
        priority: 'info',
        icon: 'chart-line',
        title: 'Expert Witness Coordination',
        description: 'CCI expert report aligns perfectly with K&T findings. Coordinate testimony for maximum impact.',
        action: 'Review'
      }
    ];

    return `
      <div class="recommendations-grid">
        ${recommendations.map(rec => `
          <div class="recommendation-card ${rec.priority}-priority">
            <div class="recommendation-header">
              <i class="fas fa-${rec.icon}"></i>
              <h4>${rec.title}</h4>
            </div>
            <p>${rec.description}</p>
            <button class="btn-${rec.priority === 'high' ? 'urgent' : 'secondary'}">${rec.action}</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  attachEventListeners() {
    // Strategy action buttons
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-primary')) {
        console.log('Executing strategy...');
      } else if (e.target.classList.contains('btn-secondary')) {
        console.log('Modifying approach...');
      }
    });
  }
}