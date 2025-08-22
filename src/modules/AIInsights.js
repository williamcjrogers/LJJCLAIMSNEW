// AI Insights Module - Machine learning analysis and recommendations
import { claimsHierarchy } from '../data/claimsHierarchy.js';

export class AIInsights {
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
      <div class="ai-insights-module">
        <div class="section-header">
          <h1>AI-Powered Case Insights</h1>
          <p>Machine learning analysis and intelligent recommendations</p>
        </div>
        
        <div class="ai-dashboard">
          <div class="ai-card primary">
            <div class="ai-header">
              <h3><i class="fas fa-brain"></i> Case Intelligence Summary</h3>
              <div class="ai-status">
                <span class="ai-indicator active"></span>
                <span>AI Active</span>
              </div>
            </div>
            <div class="ai-insights-content">
              ${this.renderKeyInsights()}
            </div>
          </div>
          
          <div class="ai-predictions">
            <h3>Outcome Predictions</h3>
            <div class="prediction-cards">
              ${this.renderPredictions()}
            </div>
          </div>
          
          <div class="pattern-analysis">
            <h3>Pattern Recognition</h3>
            <div class="patterns-grid">
              ${this.renderPatterns()}
            </div>
          </div>
          
          <div class="recommendation-engine">
            <h3>Strategic Recommendations</h3>
            <div class="recommendations-list">
              ${this.renderRecommendations()}
            </div>
          </div>
          
          <div class="risk-analysis">
            <h3>Risk Analysis</h3>
            <div class="risk-factors">
              ${this.renderRiskFactors()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderKeyInsights() {
    const insights = [
      {
        type: 'success',
        icon: 'thumbs-up',
        title: 'Strong Technical Foundation',
        description: 'K&T investigation provides comprehensive technical evidence with photographic support across 28 identified failures.',
        confidence: 94
      },
      {
        type: 'warning',
        icon: 'exclamation-triangle',
        title: 'Timeline Vulnerability',
        description: 'LJJ\'s early damage reporting may create defensive narrative. Counter-strategy required.',
        riskLevel: 'Medium'
      },
      {
        type: 'info',
        icon: 'lightbulb',
        title: 'Pattern Recognition',
        description: 'Systematic installation failures indicate organizational rather than individual issues.',
        patternStrength: 87
      },
      {
        type: 'primary',
        icon: 'chart-line',
        title: 'Claim Value Optimization',
        description: 'Current evidence supports 72% of total claim value. Additional documentation could increase to 85%.',
        potential: '+13%'
      }
    ];

    return insights.map(insight => `
      <div class="insight-item">
        <div class="insight-icon ${insight.type}">
          <i class="fas fa-${insight.icon}"></i>
        </div>
        <div class="insight-content">
          <h4>${insight.title}</h4>
          <p>${insight.description}</p>
          ${insight.confidence ? `<span class="confidence">Confidence: ${insight.confidence}%</span>` : ''}
          ${insight.riskLevel ? `<span class="risk-level">Risk Level: ${insight.riskLevel}</span>` : ''}
          ${insight.patternStrength ? `<span class="pattern-strength">Pattern Strength: ${insight.patternStrength}%</span>` : ''}
          ${insight.potential ? `<span class="potential">Potential: ${insight.potential}</span>` : ''}
        </div>
      </div>
    `).join('');
  }

  renderPredictions() {
    const predictions = [
      {
        scenario: 'Most Likely',
        probability: 65,
        outcome: 'Partial settlement with focus on technical failures. LJJ\'s early damage reporting limits full recovery.',
        valueRange: '£1.2M - £1.8M (50-75%)',
        class: 'likely'
      },
      {
        scenario: 'Optimistic',
        probability: 25,
        outcome: 'Strong technical evidence overcomes timeline challenges. Missing Block A&B reports obtained.',
        valueRange: '£1.8M - £2.2M (75-90%)',
        class: 'optimistic'
      },
      {
        scenario: 'Conservative',
        probability: 10,
        outcome: 'LJJ successfully defends with early damage reporting. Limited technical recovery only.',
        valueRange: '£600K - £1.2M (25-50%)',
        class: 'conservative'
      }
    ];

    return predictions.map(pred => `
      <div class="prediction-card ${pred.class}">
        <div class="prediction-header">
          <h4>${pred.scenario} Scenario</h4>
          <span class="probability">${pred.probability}%</span>
        </div>
        <p>${pred.outcome}</p>
        <div class="value-range">
          <span>${pred.valueRange}</span>
        </div>
        <div class="probability-bar">
          <div class="probability-fill" style="width: ${pred.probability}%"></div>
        </div>
      </div>
    `).join('');
  }

  renderPatterns() {
    const patterns = [
      {
        pattern: 'Installation Failures',
        frequency: 'High',
        impact: 'Critical',
        description: 'Consistent pattern of incorrect installations across multiple systems'
      },
      {
        pattern: 'Documentation Gaps',
        frequency: 'Medium',
        impact: 'Moderate',
        description: 'Missing commissioning certificates and test results'
      },
      {
        pattern: 'Communication Breakdowns',
        frequency: 'High',
        impact: 'High',
        description: 'Repeated failures in contractor coordination'
      },
      {
        pattern: 'Quality Control Issues',
        frequency: 'Very High',
        impact: 'Critical',
        description: 'Lack of proper inspection and sign-off procedures'
      }
    ];

    return patterns.map(pattern => `
      <div class="pattern-card">
        <h4>${pattern.pattern}</h4>
        <p>${pattern.description}</p>
        <div class="pattern-metrics">
          <span class="frequency">Frequency: <strong>${pattern.frequency}</strong></span>
          <span class="impact">Impact: <strong>${pattern.impact}</strong></span>
        </div>
      </div>
    `).join('');
  }

  renderRecommendations() {
    const recommendations = [
      {
        priority: 1,
        action: 'Obtain Missing K&T Reports',
        impact: 'High',
        effort: 'Medium',
        description: 'Blocks A&B reports critical for comprehensive claim'
      },
      {
        priority: 2,
        action: 'Coordinate Expert Witnesses',
        impact: 'High',
        effort: 'Low',
        description: 'Align CCI and K&T expert testimony'
      },
      {
        priority: 3,
        action: 'Document Timeline Defense',
        impact: 'Medium',
        effort: 'Medium',
        description: 'Prepare counter-narrative for early damage reports'
      },
      {
        priority: 4,
        action: 'Quantify Consequential Losses',
        impact: 'Medium',
        effort: 'High',
        description: 'Calculate indirect damages from service failures'
      }
    ];

    return recommendations.map(rec => `
      <div class="recommendation-item">
        <div class="rec-priority">${rec.priority}</div>
        <div class="rec-content">
          <h4>${rec.action}</h4>
          <p>${rec.description}</p>
          <div class="rec-metrics">
            <span class="impact-badge ${rec.impact.toLowerCase()}">${rec.impact} Impact</span>
            <span class="effort-badge ${rec.effort.toLowerCase()}">${rec.effort} Effort</span>
          </div>
        </div>
        <button class="btn-action">Take Action</button>
      </div>
    `).join('');
  }

  renderRiskFactors() {
    const risks = [
      {
        factor: 'Missing Evidence',
        level: 30,
        trend: 'decreasing',
        mitigation: 'Active document recovery in progress'
      },
      {
        factor: 'Timeline Challenges',
        level: 45,
        trend: 'stable',
        mitigation: 'Developing counter-narrative strategy'
      },
      {
        factor: 'Technical Complexity',
        level: 25,
        trend: 'decreasing',
        mitigation: 'Expert reports simplifying technical issues'
      },
      {
        factor: 'Legal Precedent',
        level: 35,
        trend: 'stable',
        mitigation: 'Researching similar case outcomes'
      }
    ];

    return risks.map(risk => `
      <div class="risk-factor-item">
        <div class="risk-header">
          <h4>${risk.factor}</h4>
          <span class="risk-trend ${risk.trend}">
            <i class="fas fa-arrow-${risk.trend === 'increasing' ? 'up' : risk.trend === 'decreasing' ? 'down' : 'right'}"></i>
            ${risk.trend}
          </span>
        </div>
        <div class="risk-meter">
          <div class="risk-bar">
            <div class="risk-fill ${risk.level > 60 ? 'high' : risk.level > 30 ? 'medium' : 'low'}" 
                 style="width: ${risk.level}%"></div>
          </div>
          <span class="risk-value">${risk.level}%</span>
        </div>
        <p class="mitigation">Mitigation: ${risk.mitigation}</p>
      </div>
    `).join('');
  }

  attachEventListeners() {
    // Action buttons
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-action')) {
        const item = e.target.closest('.recommendation-item');
        const action = item?.querySelector('h4')?.textContent;
        console.log('Taking action on:', action);
        
        // Visual feedback
        e.target.textContent = 'Processing...';
        e.target.disabled = true;
        
        setTimeout(() => {
          e.target.textContent = 'Action Initiated';
          e.target.classList.add('success');
        }, 1500);
      }
    });
  }
}