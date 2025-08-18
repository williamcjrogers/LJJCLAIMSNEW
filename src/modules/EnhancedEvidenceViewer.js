// Enhanced Evidence Viewer Module with Full OneDrive Integration
import {
  comprehensiveEvidenceRegistry,
  getEvidenceByHeadOfClaim,
  searchEvidence,
} from '../data/comprehensiveEvidenceRegistry.js';

export class EnhancedEvidenceViewer {
  constructor(container) {
    this.container = container;
    this.currentView = 'overview'; // overview, head-of-claim, folder, file
    this.currentHeadOfClaim = null;
    this.currentFolder = null;
    this.currentFile = null;
    this.searchTerm = '';

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
            <div class="evidence-viewer-enhanced">
                <div class="evidence-header">
                    <div class="evidence-breadcrumb">
                        <span class="breadcrumb-item" data-view="overview">Evidence Library</span>
                        <span class="breadcrumb-separator" style="display: none;">›</span>
                        <span class="breadcrumb-item" id="current-head" style="display: none;"></span>
                        <span class="breadcrumb-separator" style="display: none;">›</span>
                        <span class="breadcrumb-item" id="current-folder" style="display: none;"></span>
                    </div>
                    <div class="evidence-search">
                        <input type="text" id="evidence-search-input" placeholder="Search evidence files..." />
                        <button id="evidence-search-btn"><i class="fas fa-search"></i></button>
                    </div>
                </div>
                
                <div class="evidence-toolbar">
                    <div class="view-controls">
                        <button class="view-btn active" data-view="grid"><i class="fas fa-th"></i> Grid</button>
                        <button class="view-btn" data-view="list"><i class="fas fa-list"></i> List</button>
                        <button class="view-btn" data-view="tree"><i class="fas fa-folder-tree"></i> Tree</button>
                    </div>
                    <div class="evidence-stats">
                        <span id="evidence-count">Loading...</span>
                    </div>
                </div>
                
                <div class="evidence-content" id="evidence-content">
                    ${this.renderOverview()}
                </div>
                
                <div class="evidence-preview-modal" id="evidence-preview-modal" style="display: none;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 id="preview-title">Document Preview</h3>
                            <button class="modal-close" id="close-preview">×</button>
                        </div>
                        <div class="modal-body" id="preview-content">
                            <!-- Preview content will be loaded here -->
                        </div>
                        <div class="modal-footer">
                            <button class="btn-download" id="download-file">
                                <i class="fas fa-download"></i> Download
                            </button>
                            <button class="btn-share" id="share-file">
                                <i class="fas fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

    this.updateStats();
  }

  renderOverview() {
    let html = '<div class="evidence-grid">';

    // Render Heads of Claim cards
    for (const [name, data] of Object.entries(comprehensiveEvidenceRegistry.headsOfClaim)) {
      const fileCount = this.countFilesInHead(data);
      html += `
                <div class="evidence-card head-of-claim-card" data-head-id="${data.id}">
                    <div class="card-icon">
                        ${this.getHeadIcon(data.id)}
                    </div>
                    <div class="card-content">
                        <h3>${name}</h3>
                        <p class="card-description">${data.description}</p>
                        <div class="card-meta">
                            <span class="claim-amount">${data.totalClaim || 'TBD'}</span>
                            <span class="file-count">${fileCount} files</span>
                        </div>
                        <div class="defect-tags">
                            ${data.defects
                              .slice(0, 3)
                              .map(d => `<span class="defect-tag">${d}</span>`)
                              .join('')}
                            ${data.defects.length > 3 ? `<span class="more-tag">+${data.defects.length - 3} more</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
    }

    // Add Additional Evidence section
    html += `
            <div class="evidence-section">
                <h3 class="section-title">Supporting Documentation</h3>
                <div class="evidence-grid">
        `;

    // NCRs Card
    html += `
            <div class="evidence-card ncr-card" data-folder="ncrs">
                <div class="card-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="card-content">
                    <h3>Non-Conformance Reports</h3>
                    <p class="card-description">All NCRs issued</p>
                    <div class="card-meta">
                        <span class="file-count">57 NCRs</span>
                    </div>
                </div>
            </div>
        `;

    // Notices Card
    html += `
            <div class="evidence-card notices-card" data-folder="notices">
                <div class="card-icon">
                    <i class="fas fa-gavel"></i>
                </div>
                <div class="card-content">
                    <h3>Formal Notices</h3>
                    <p class="card-description">Legal notices and communications</p>
                    <div class="card-meta">
                        <span class="file-count">14 notices</span>
                    </div>
                </div>
            </div>
        `;

    // Correspondence Card
    html += `
            <div class="evidence-card correspondence-card" data-folder="correspondence">
                <div class="card-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="card-content">
                    <h3>Key Correspondence</h3>
                    <p class="card-description">Email chains and letters</p>
                    <div class="card-meta">
                        <span class="file-count">Multiple threads</span>
                    </div>
                </div>
            </div>
        `;

    // Quinn Ross Reports Card
    html += `
            <div class="evidence-card quinn-ross-card" data-folder="quinn-ross">
                <div class="card-icon">
                    <i class="fas fa-clipboard-check"></i>
                </div>
                <div class="card-content">
                    <h3>Quinn Ross Reports</h3>
                    <p class="card-description">M&E Monitoring Reports</p>
                    <div class="card-meta">
                        <span class="file-count">4 reports</span>
                    </div>
                </div>
            </div>
        `;

    html += '</div></div></div>';
    return html;
  }

  renderHeadOfClaimView(headId) {
    const headData = getEvidenceByHeadOfClaim(headId);
    if (!headData) return '<p>Head of claim not found</p>';

    let html = `
            <div class="head-of-claim-view">
                <div class="head-summary">
                    <h2>${headData.name}</h2>
                    <p>${headData.description}</p>
                    <div class="claim-info">
                        <span class="total-claim">Total Claim: ${headData.totalClaim || 'TBD'}</span>
                    </div>
                </div>
                
                <div class="defects-section">
                    <h3>Identified Defects</h3>
                    <div class="defect-list">
                        ${headData.defects
                          .map(
                            d => `
                            <div class="defect-item">
                                <i class="fas fa-exclamation-circle"></i>
                                <span>${d}</span>
                            </div>
                        `
                          )
                          .join('')}
                    </div>
                </div>
                
                <div class="evidence-folders">
                    <h3>Evidence Folders</h3>
                    <div class="folder-grid">
        `;

    for (const [folderName, folderData] of Object.entries(headData.evidenceFolders)) {
      const fileCount = this.countFilesInFolder(folderData);
      html += `
                <div class="folder-card" data-folder-path="${folderData.path}" data-folder-name="${folderName}">
                    <div class="folder-icon">
                        <i class="fas fa-folder"></i>
                    </div>
                    <div class="folder-content">
                        <h4>${folderName}</h4>
                        <span class="file-count">${fileCount} items</span>
                    </div>
                </div>
            `;
    }

    html += '</div></div></div>';
    return html;
  }

  renderFolderView(folderPath, folderName) {
    // This would render the contents of a specific folder
    // For now, showing a placeholder
    return `
            <div class="folder-view">
                <h2>${folderName}</h2>
                <p>Folder: ${folderPath}</p>
                <div class="file-list">
                    <p>Files will be listed here when connected to actual file system</p>
                </div>
            </div>
        `;
  }

  bindEvents() {
    // Navigation events
    this.container.addEventListener('click', e => {
      // Head of Claim card click
      if (e.target.closest('.head-of-claim-card')) {
        const card = e.target.closest('.head-of-claim-card');
        const headId = card.dataset.headId;
        this.showHeadOfClaim(headId);
      }

      // Folder card click
      if (e.target.closest('.folder-card')) {
        const card = e.target.closest('.folder-card');
        const folderPath = card.dataset.folderPath;
        const folderName = card.dataset.folderName;
        this.showFolder(folderPath, folderName);
      }

      // Breadcrumb navigation
      if (e.target.classList.contains('breadcrumb-item')) {
        const view = e.target.dataset.view;
        if (view === 'overview') {
          this.showOverview();
        }
      }

      // View controls
      if (e.target.closest('.view-btn')) {
        const btn = e.target.closest('.view-btn');
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Implement view change logic here
      }

      // Modal close
      if (e.target.id === 'close-preview') {
        this.closePreview();
      }
    });

    // Search functionality
    const searchBtn = document.getElementById('evidence-search-btn');
    const searchInput = document.getElementById('evidence-search-input');

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.performSearch(searchInput.value);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
          this.performSearch(searchInput.value);
        }
      });
    }
  }

  showHeadOfClaim(headId) {
    this.currentView = 'head-of-claim';
    this.currentHeadOfClaim = headId;

    const content = document.getElementById('evidence-content');
    content.innerHTML = this.renderHeadOfClaimView(headId);

    // Update breadcrumb
    const headData = getEvidenceByHeadOfClaim(headId);
    document.getElementById('current-head').textContent = headData.name;
    document.getElementById('current-head').style.display = 'inline';
    document.querySelector('.breadcrumb-separator').style.display = 'inline';
  }

  showFolder(folderPath, folderName) {
    this.currentView = 'folder';
    this.currentFolder = folderPath;

    const content = document.getElementById('evidence-content');
    content.innerHTML = this.renderFolderView(folderPath, folderName);

    // Update breadcrumb
    document.getElementById('current-folder').textContent = folderName;
    document.getElementById('current-folder').style.display = 'inline';
    document.querySelectorAll('.breadcrumb-separator')[1].style.display = 'inline';
  }

  showOverview() {
    this.currentView = 'overview';
    this.currentHeadOfClaim = null;
    this.currentFolder = null;

    const content = document.getElementById('evidence-content');
    content.innerHTML = this.renderOverview();

    // Reset breadcrumb
    document.getElementById('current-head').style.display = 'none';
    document.getElementById('current-folder').style.display = 'none';
    document.querySelectorAll('.breadcrumb-separator').forEach(sep => (sep.style.display = 'none'));
  }

  performSearch(searchTerm) {
    this.searchTerm = searchTerm;
    const results = searchEvidence(searchTerm);

    const content = document.getElementById('evidence-content');
    if (results.length === 0) {
      content.innerHTML = '<p class="no-results">No results found</p>';
    } else {
      let html = '<div class="search-results">';
      html += `<h3>Search Results (${results.length})</h3>`;
      html += '<div class="results-list">';

      results.forEach(result => {
        html += `
                    <div class="result-item">
                        <span class="result-type">${result.type}</span>
                        <span class="result-name">${result.name || result.defect}</span>
                        ${result.headOfClaim ? `<span class="result-parent">in ${result.headOfClaim}</span>` : ''}
                    </div>
                `;
      });

      html += '</div></div>';
      content.innerHTML = html;
    }
  }

  countFilesInHead(headData) {
    let count = 0;
    for (const folder of Object.values(headData.evidenceFolders)) {
      if (folder.files) count += folder.files.length;
      if (folder.subfolders) count += Object.keys(folder.subfolders).length * 10; // Estimate
    }
    return count;
  }

  countFilesInFolder(folderData) {
    if (folderData.files) return folderData.files.length;
    if (folderData.subfolders) return Object.keys(folderData.subfolders).length;
    return 0;
  }

  getHeadIcon(headId) {
    const icons = {
      svp: '<i class="fas fa-toilet"></i>',
      bms: '<i class="fas fa-microchip"></i>',
      mechanical: '<i class="fas fa-cogs"></i>',
      electrical: '<i class="fas fa-bolt"></i>',
      'life-safety': '<i class="fas fa-fire-extinguisher"></i>',
    };
    return icons[headId] || '<i class="fas fa-folder"></i>';
  }

  updateStats() {
    const statsEl = document.getElementById('evidence-count');
    if (statsEl) {
      let totalFiles = 0;
      for (const head of Object.values(comprehensiveEvidenceRegistry.headsOfClaim)) {
        totalFiles += this.countFilesInHead(head);
      }
      statsEl.textContent = `${totalFiles}+ evidence files`;
    }
  }

  closePreview() {
    const modal = document.getElementById('evidence-preview-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
