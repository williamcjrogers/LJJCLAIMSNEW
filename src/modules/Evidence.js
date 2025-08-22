// Evidence Module - Document management and viewing
import { documentsData } from '../data/documentsData.js';

export class Evidence {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.documents = documentsData || [];
    this.currentFilter = 'all';
    this.searchTerm = '';
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.container.innerHTML = `
      <div class="evidence-module">
        <div class="section-header">
          <h1>Evidence Library</h1>
          <p>Comprehensive document management with categorization and cross-referencing</p>
        </div>
        
        <div class="evidence-controls">
          <div class="search-filters">
            <input type="text" 
                   class="evidence-search" 
                   placeholder="Search documents, content, or metadata..."
                   id="evidence-search-input">
            <select class="category-filter" id="category-filter-select">
              <option value="all">All Categories</option>
              <option value="technical">Technical Reports</option>
              <option value="correspondence">Correspondence</option>
              <option value="legal">Legal Documents</option>
              <option value="drawings">Technical Drawings</option>
            </select>
          </div>
          <div class="evidence-actions">
            <button class="btn-primary">
              <i class="fas fa-upload"></i> Upload Document
            </button>
            <button class="btn-secondary">
              <i class="fas fa-download"></i> Export Library
            </button>
          </div>
        </div>
        
        <div class="evidence-stats">
          <div class="stat-card">
            <span class="stat-value">${this.documents.length}</span>
            <span class="stat-label">Total Documents</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">${this.getDocumentsByCategory('technical').length}</span>
            <span class="stat-label">Technical Reports</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">${this.getDocumentsByCategory('correspondence').length}</span>
            <span class="stat-label">Correspondence</span>
          </div>
        </div>
        
        <div class="evidence-grid" id="evidence-grid-container">
          ${this.renderDocuments()}
        </div>
      </div>
    `;
  }

  renderDocuments() {
    const filteredDocs = this.getFilteredDocuments();
    
    if (filteredDocs.length === 0) {
      return '<p class="no-documents">No documents found matching your criteria</p>';
    }

    return filteredDocs.map(doc => `
      <div class="evidence-item" data-doc-id="${doc.id || ''}">
        <div class="doc-icon">
          ${this.getDocumentIcon(doc.type || 'document')}
        </div>
        <div class="doc-content">
          <h4 class="doc-title">${doc.title || 'Untitled Document'}</h4>
          <p class="doc-description">${doc.description || 'No description available'}</p>
          <div class="doc-meta">
            <span class="doc-date">${this.formatDate(doc.date)}</span>
            <span class="doc-category">${doc.category || 'Uncategorized'}</span>
            ${doc.size ? `<span class="doc-size">${this.formatFileSize(doc.size)}</span>` : ''}
          </div>
        </div>
        <div class="doc-actions">
          <button class="btn-icon" title="View">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn-icon" title="Download">
            <i class="fas fa-download"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  getFilteredDocuments() {
    let filtered = [...this.documents];
    
    // Apply category filter
    if (this.currentFilter !== 'all') {
      filtered = filtered.filter(doc => doc.category === this.currentFilter);
    }
    
    // Apply search filter
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(doc => 
        (doc.title && doc.title.toLowerCase().includes(searchLower)) ||
        (doc.description && doc.description.toLowerCase().includes(searchLower)) ||
        (doc.category && doc.category.toLowerCase().includes(searchLower))
      );
    }
    
    return filtered;
  }

  getDocumentsByCategory(category) {
    return this.documents.filter(doc => doc.category === category);
  }

  getDocumentIcon(type) {
    const icons = {
      pdf: '<i class="fas fa-file-pdf"></i>',
      excel: '<i class="fas fa-file-excel"></i>',
      word: '<i class="fas fa-file-word"></i>',
      image: '<i class="fas fa-file-image"></i>',
      email: '<i class="fas fa-envelope"></i>',
      document: '<i class="fas fa-file-alt"></i>'
    };
    return icons[type] || icons.document;
  }

  formatDate(dateStr) {
    if (!dateStr) return 'Unknown date';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  formatFileSize(bytes) {
    if (!bytes) return '';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  }

  attachEventListeners() {
    // Search input
    const searchInput = this.container.querySelector('#evidence-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchTerm = e.target.value;
        this.updateDocumentGrid();
      });
    }
    
    // Category filter
    const categorySelect = this.container.querySelector('#category-filter-select');
    if (categorySelect) {
      categorySelect.addEventListener('change', (e) => {
        this.currentFilter = e.target.value;
        this.updateDocumentGrid();
      });
    }
    
    // Document actions
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.btn-icon')) {
        const btn = e.target.closest('.btn-icon');
        const docItem = btn.closest('.evidence-item');
        const docId = docItem?.dataset.docId;
        
        if (btn.title === 'View' && docId) {
          this.viewDocument(docId);
        } else if (btn.title === 'Download' && docId) {
          this.downloadDocument(docId);
        }
      }
    });
  }

  updateDocumentGrid() {
    const grid = this.container.querySelector('#evidence-grid-container');
    if (grid) {
      grid.innerHTML = this.renderDocuments();
    }
  }

  viewDocument(docId) {
    console.log('Viewing document:', docId);
    // Implement document viewer
  }

  downloadDocument(docId) {
    console.log('Downloading document:', docId);
    // Implement download functionality
  }
}