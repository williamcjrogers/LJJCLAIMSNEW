// Evidence Viewer Module - Preview and Download functionality
import {
  evidenceRegistry,
  getEvidenceByHeadId,
  getEvidenceCount,
} from '../data/evidenceRegistry.js';

export class EvidenceViewer {
  constructor() {
    this.currentEvidence = null;
    this.previewModal = null;
    this.basePath =
      'C:/Users/William/Downloads/OneDrive_1_14-08-2025/LJJ - MEP Information Pack for DACB/WR New/';
  }

  // Render evidence library for a head of claim
  renderEvidenceLibrary(headId) {
    const evidence = getEvidenceByHeadId(headId);
    if (!evidence) return '<div class="no-evidence">No evidence available</div>';

    return `
            <div class="evidence-library">
                <div class="evidence-header">
                    <h3><i class="fas fa-folder-open"></i> Evidence Library - ${evidence.headName}</h3>
                    <span class="evidence-count">${getEvidenceCount(headId)} files</span>
                </div>
                <div class="evidence-categories">
                    ${Object.entries(evidence.evidenceCategories)
                      .map(
                        ([category, files]) => `
                        <div class="evidence-category">
                            <h4 class="category-title">
                                <i class="fas fa-folder"></i> ${category}
                                <span class="file-count">(${files.length})</span>
                            </h4>
                            <div class="evidence-files">
                                ${files.map(file => this.renderEvidenceFile(file, headId)).join('')}
                            </div>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `;
  }

  // Render individual evidence file card
  renderEvidenceFile(file, headId) {
    const icon = this.getFileIcon(file.fileName);
    const canPreview = this.canPreviewFile(file.fileName);

    return `
            <div class="evidence-file-card" data-file-id="${file.id}">
                <div class="file-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="file-info">
                    <div class="file-name">${file.fileName}</div>
                    <div class="file-meta">
                        <span class="file-type">${file.type}</span>
                        <span class="file-size">${file.size}</span>
                        <span class="file-date">${new Date(file.uploadDate).toLocaleDateString('en-GB')}</span>
                    </div>
                </div>
                <div class="file-actions">
                    ${
                      canPreview
                        ? `
                        <button class="btn-preview" onclick="window.evidenceViewer.previewFile('${file.id}', '${headId}')" title="Preview">
                            <i class="fas fa-eye"></i>
                        </button>
                    `
                        : ''
                    }
                    <button class="btn-download" onclick="window.evidenceViewer.downloadFile('${file.id}', '${headId}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        `;
  }

  // Get appropriate icon for file type
  getFileIcon(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    switch (ext) {
      case 'pdf':
        return 'fas fa-file-pdf text-red-500';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'fas fa-file-image text-blue-500';
      case 'doc':
      case 'docx':
        return 'fas fa-file-word text-blue-600';
      case 'xls':
      case 'xlsx':
        return 'fas fa-file-excel text-green-600';
      default:
        return 'fas fa-file text-gray-500';
    }
  }

  // Check if file can be previewed
  canPreviewFile(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    return ['pdf', 'jpg', 'jpeg', 'png', 'gif'].includes(ext);
  }

  // Preview file in modal
  previewFile(fileId, headId) {
    const evidence = getEvidenceByHeadId(headId);
    let file = null;

    // Find the file
    Object.values(evidence.evidenceCategories).forEach(category => {
      const found = category.find(f => f.id === fileId);
      if (found) file = found;
    });

    if (!file) {
      console.error('File not found:', fileId);
      return;
    }

    const ext = file.fileName.split('.').pop().toLowerCase();
    const fullPath = this.basePath + file.filePath;

    // Create and show preview modal
    this.showPreviewModal(file, ext, fullPath);
  }

  // Show preview modal
  showPreviewModal(file, ext, fullPath) {
    // Remove existing modal if any
    if (this.previewModal) {
      this.previewModal.remove();
    }

    const modalHTML = `
            <div class="evidence-preview-modal" id="evidencePreviewModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${file.fileName}</h3>
                        <button class="modal-close" onclick="window.evidenceViewer.closePreview()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        ${this.getPreviewContent(file, ext, fullPath)}
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" onclick="window.evidenceViewer.downloadFromPreview('${file.id}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="btn btn-secondary" onclick="window.evidenceViewer.closePreview()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.previewModal = document.getElementById('evidencePreviewModal');
    this.currentEvidence = file;

    // Add click outside to close
    this.previewModal.addEventListener('click', e => {
      if (e.target === this.previewModal) {
        this.closePreview();
      }
    });
  }

  // Get preview content based on file type
  getPreviewContent(file, ext, fullPath) {
    if (ext === 'pdf') {
      return `
                <iframe 
                    src="file:///${fullPath}" 
                    class="pdf-preview"
                    width="100%" 
                    height="600px"
                    title="${file.fileName}"
                ></iframe>
            `;
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) {
      return `
                <img 
                    src="file:///${fullPath}" 
                    alt="${file.fileName}"
                    class="image-preview"
                />
            `;
    } else {
      return `
                <div class="preview-unavailable">
                    <i class="fas fa-file fa-3x"></i>
                    <p>Preview not available for this file type</p>
                    <p>Click download to view the file</p>
                </div>
            `;
    }
  }

  // Close preview modal
  closePreview() {
    if (this.previewModal) {
      this.previewModal.remove();
      this.previewModal = null;
      this.currentEvidence = null;
    }
  }

  // Download file
  downloadFile(fileId, headId) {
    const evidence = getEvidenceByHeadId(headId);
    let file = null;

    // Find the file
    Object.values(evidence.evidenceCategories).forEach(category => {
      const found = category.find(f => f.id === fileId);
      if (found) file = found;
    });

    if (!file) {
      console.error('File not found:', fileId);
      return;
    }

    const fullPath = this.basePath + file.filePath;

    // Create download link
    const link = document.createElement('a');
    link.href = `file:///${fullPath}`;
    link.download = file.fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show download notification
    this.showNotification(`Downloading: ${file.fileName}`);
  }

  // Download from preview
  downloadFromPreview() {
    if (this.currentEvidence) {
      const fullPath = this.basePath + this.currentEvidence.filePath;
      const link = document.createElement('a');
      link.href = `file:///${fullPath}`;
      link.download = this.currentEvidence.fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.showNotification(`Downloading: ${this.currentEvidence.fileName}`);
    }
  }

  // Show notification
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'evidence-notification';
    notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Render evidence summary card
  renderEvidenceSummary(headId) {
    const count = getEvidenceCount(headId);
    const evidence = getEvidenceByHeadId(headId);

    if (!evidence) return '';

    const categories = Object.keys(evidence.evidenceCategories);

    return `
            <div class="evidence-summary-card">
                <div class="summary-header">
                    <i class="fas fa-folder-tree"></i>
                    <h4>Evidence Summary</h4>
                </div>
                <div class="summary-stats">
                    <div class="stat">
                        <span class="stat-value">${count}</span>
                        <span class="stat-label">Total Files</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${categories.length}</span>
                        <span class="stat-label">Categories</span>
                    </div>
                </div>
                <div class="category-breakdown">
                    ${categories
                      .map(
                        cat => `
                        <div class="category-item">
                            <span class="category-name">${cat}</span>
                            <span class="category-count">${evidence.evidenceCategories[cat].length}</span>
                        </div>
                    `
                      )
                      .join('')}
                </div>
            </div>
        `;
  }

  // Search evidence
  renderEvidenceSearch() {
    return `
            <div class="evidence-search">
                <div class="search-input-wrapper">
                    <i class="fas fa-search"></i>
                    <input 
                        type="text" 
                        id="evidenceSearchInput" 
                        placeholder="Search evidence files..."
                        onkeyup="window.evidenceViewer.handleSearch(event)"
                    />
                </div>
                <div id="evidenceSearchResults"></div>
            </div>
        `;
  }

  // Handle search
  handleSearch(event) {
    const searchTerm = event.target.value;
    const resultsContainer = document.getElementById('evidenceSearchResults');

    if (searchTerm.length < 2) {
      resultsContainer.innerHTML = '';
      return;
    }

    const results = this.searchEvidence(searchTerm);

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">No files found</div>';
      return;
    }

    resultsContainer.innerHTML = `
            <div class="search-results">
                <div class="results-header">Found ${results.length} files</div>
                ${results
                  .map(
                    result => `
                    <div class="search-result-item">
                        <div class="result-info">
                            <div class="result-name">${result.fileName}</div>
                            <div class="result-path">${result.headName} / ${result.category}</div>
                        </div>
                        <div class="result-actions">
                            <button onclick="window.evidenceViewer.previewFile('${result.id}', '${result.headId}')">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button onclick="window.evidenceViewer.downloadFile('${result.id}', '${result.headId}')">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                `
                  )
                  .join('')}
            </div>
        `;
  }

  // Search evidence helper
  searchEvidence(searchTerm) {
    const results = [];
    Object.keys(evidenceRegistry).forEach(headId => {
      const headEvidence = evidenceRegistry[headId];
      Object.entries(headEvidence.evidenceCategories).forEach(([categoryName, files]) => {
        files.forEach(file => {
          if (
            file.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            file.type.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              ...file,
              headId,
              headName: headEvidence.headName,
              category: categoryName,
            });
          }
        });
      });
    });
    return results;
  }
}

// Create global instance
window.evidenceViewer = new EvidenceViewer();

export default EvidenceViewer;
