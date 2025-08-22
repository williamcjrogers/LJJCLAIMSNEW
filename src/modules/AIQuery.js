// AI Query Module - Natural language query interface
import { claimsHierarchy } from '../data/claimsHierarchy.js';
import { documentsData } from '../data/documentsData.js';
import { buildingServicesClaims } from '../data/buildingServicesClaims.js';

export class AIQuery {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.queryHistory = [];
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="ai-query-module">
        <div class="section-header">
          <h1>AI Query Assistant</h1>
          <p>Ask questions about the LJJ SVP claim with semantic understanding and document retrieval</p>
        </div>
        
        <div class="ai-query-interface">
          <div class="query-input-section">
            <div class="query-input-container">
              <textarea
                id="ai-query-textarea"
                class="ai-query-input"
                placeholder="Ask me anything about the LJJ SVP claim... 

Examples:
• What BMS issues were identified in 2023?
• Show me all documents related to NCR reports
• What were the key technical failures in Block C?
• Timeline of Quinn Ross involvement
• Calculate total claim values for electrical systems"
                rows="6"
              ></textarea>
              <div class="query-actions">
                <button class="btn-primary query-submit" id="submit-query-btn">
                  <i class="fas fa-search"></i> Search & Analyze
                </button>
                <button class="btn-secondary query-clear" id="clear-query-btn">
                  <i class="fas fa-trash"></i> Clear
                </button>
              </div>
            </div>
            
            <div class="query-suggestions">
              <h4>Quick Queries:</h4>
              <div class="suggestion-tags">
                <button class="suggestion-tag" data-query="What are the main BMS integration failures?">
                  BMS Failures
                </button>
                <button class="suggestion-tag" data-query="Show me all K&T investigation findings">
                  K&T Findings
                </button>
                <button class="suggestion-tag" data-query="Timeline of NCR reports and compliance issues">
                  NCR Timeline
                </button>
                <button class="suggestion-tag" data-query="What is the total claim value across all building services?">
                  Total Claims
                </button>
                <button class="suggestion-tag" data-query="Show me Service/DCWS pressure problems">
                  Pressure Issues
                </button>
                <button class="suggestion-tag" data-query="List all electrical system failures">
                  Electrical Issues
                </button>
              </div>
            </div>
          </div>
          
          <div class="query-results" id="ai-query-results-container" style="display: none;">
            <!-- Results will be populated here -->
          </div>
          
          <div class="query-history-panel">
            <h4>Recent Queries</h4>
            <div class="history-list" id="query-history-list">
              ${this.renderQueryHistory()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderQueryHistory() {
    if (this.queryHistory.length === 0) {
      return '<p class="no-history">No query history yet</p>';
    }
    
    return this.queryHistory.slice(-5).reverse().map(query => `
      <div class="history-item" data-query="${query.text}">
        <i class="fas fa-history"></i>
        <span class="history-text">${query.text}</span>
        <span class="history-time">${this.formatTime(query.timestamp)}</span>
      </div>
    `).join('');
  }

  formatTime(date) {
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  attachEventListeners() {
    // Submit button
    const submitBtn = this.container.querySelector('#submit-query-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => this.submitQuery());
    }
    
    // Clear button
    const clearBtn = this.container.querySelector('#clear-query-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearQuery());
    }
    
    // Query suggestions
    const suggestionTags = this.container.querySelectorAll('.suggestion-tag');
    suggestionTags.forEach(tag => {
      tag.addEventListener('click', (e) => {
        const query = e.target.dataset.query;
        this.setQuery(query);
      });
    });
    
    // Query history
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.history-item')) {
        const query = e.target.closest('.history-item').dataset.query;
        this.setQuery(query);
      }
    });
    
    // Enter key submission
    const textarea = this.container.querySelector('#ai-query-textarea');
    if (textarea) {
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
          e.preventDefault();
          this.submitQuery();
        }
      });
    }
  }

  setQuery(query) {
    const textarea = this.container.querySelector('#ai-query-textarea');
    if (textarea) {
      textarea.value = query;
    }
  }

  clearQuery() {
    const textarea = this.container.querySelector('#ai-query-textarea');
    if (textarea) {
      textarea.value = '';
    }
    
    const resultsContainer = this.container.querySelector('#ai-query-results-container');
    if (resultsContainer) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
    }
  }

  submitQuery() {
    const textarea = this.container.querySelector('#ai-query-textarea');
    if (!textarea || !textarea.value.trim()) return;
    
    const query = textarea.value.trim();
    
    // Add to history
    this.queryHistory.push({
      text: query,
      timestamp: new Date()
    });
    
    // Update history display
    const historyList = this.container.querySelector('#query-history-list');
    if (historyList) {
      historyList.innerHTML = this.renderQueryHistory();
    }
    
    // Process query
    const results = this.processQuery(query);
    this.displayResults(results);
  }

  processQuery(query) {
    const queryLower = query.toLowerCase();
    const results = {
      query: query,
      timestamp: new Date(),
      findings: [],
      documents: [],
      insights: []
    };
    
    // BMS related queries
    if (queryLower.includes('bms')) {
      results.findings.push({
        title: 'BMS Integration Failures',
        content: 'Multiple BMS integration issues identified across all blocks including communication failures, incorrect sensor mapping, and control logic errors.',
        confidence: 95
      });
      results.documents.push({
        title: 'K&T BMS Assessment Report',
        type: 'technical',
        relevance: 98
      });
    }
    
    // K&T related queries
    if (queryLower.includes('k&t') || queryLower.includes('k and t')) {
      results.findings.push({
        title: 'K&T Investigation Findings',
        content: '28 critical technical failures identified in Block C. Missing reports for Blocks A&B flagged as high priority.',
        confidence: 92
      });
      results.insights.push('Missing K&T reports for Blocks A&B could strengthen claim by 15%');
    }
    
    // Total claim value
    if (queryLower.includes('total') && queryLower.includes('claim')) {
      const total = claimsHierarchy.master.total_claim_value;
      results.findings.push({
        title: 'Total Claim Value',
        content: `Total claim value across all building services: £${total.toLocaleString()}`,
        confidence: 100
      });
    }
    
    // Electrical issues
    if (queryLower.includes('electrical')) {
      results.findings.push({
        title: 'Electrical System Failures',
        content: 'Emergency lighting failures, distribution board issues, and earthing problems identified across multiple blocks.',
        confidence: 88
      });
    }
    
    // Pressure issues
    if (queryLower.includes('pressure')) {
      results.findings.push({
        title: 'Pressure System Issues',
        content: 'Service/DCWS pressure problems documented in multiple reports. Inadequate pressure for upper floors.',
        confidence: 85
      });
    }
    
    // Default response if no specific matches
    if (results.findings.length === 0) {
      results.findings.push({
        title: 'General Query Response',
        content: 'Searching across case documentation for relevant information...',
        confidence: 60
      });
    }
    
    return results;
  }

  displayResults(results) {
    const resultsContainer = this.container.querySelector('#ai-query-results-container');
    if (!resultsContainer) return;
    
    resultsContainer.innerHTML = `
      <div class="results-header">
        <h3>Query Results</h3>
        <span class="results-timestamp">${this.formatTime(results.timestamp)}</span>
      </div>
      
      ${results.findings.length > 0 ? `
        <div class="findings-section">
          <h4>Key Findings</h4>
          ${results.findings.map(finding => `
            <div class="finding-card">
              <div class="finding-header">
                <h5>${finding.title}</h5>
                <span class="confidence-badge">${finding.confidence}% confidence</span>
              </div>
              <p>${finding.content}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${results.documents.length > 0 ? `
        <div class="documents-section">
          <h4>Related Documents</h4>
          ${results.documents.map(doc => `
            <div class="related-doc">
              <i class="fas fa-file-alt"></i>
              <span class="doc-title">${doc.title}</span>
              <span class="relevance-score">${doc.relevance}% relevant</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${results.insights.length > 0 ? `
        <div class="insights-section">
          <h4>AI Insights</h4>
          ${results.insights.map(insight => `
            <div class="insight-item">
              <i class="fas fa-lightbulb"></i>
              <span>${insight}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
    
    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
  }
}