// Main Application Entry Point
import { Sidebar } from './components/Sidebar.js';
import { MasterDashboard } from './modules/MasterDashboard_clean.js';
import { HeadOfClaimView } from './modules/HeadOfClaimView.js';
// import { EnhancedEvidenceViewer } from './modules/EnhancedEvidenceViewer.js';
import { caseData } from './data/caseData.js';
import { buildingServicesClaims } from './data/buildingServicesClaims.js';
import { documentsData } from './data/documentsData.js';
import { claimsHierarchy } from './data/claimsHierarchy.js';
// import { comprehensiveEvidenceRegistry } from './data/comprehensiveEvidenceRegistry.js';
// import { ljjClaimsDetail } from './data/ljjClaimsDetail.js';

class ClaimManagementApp {
  constructor() {
    this.currentSection = 'dashboard';
    this.modules = {};
    this.components = {};
    this.data = {
      case: caseData,
      claims: buildingServicesClaims,
      documents: documentsData,
      hierarchy: claimsHierarchy,
    };

    // Current view state
    this.currentView = {
      type: 'master', // 'master', 'head-of-claim', 'sub-claim'
      headId: null,
      subClaimId: null,
    };

    this.init();
  }

  async init() {
    try {
      console.log('Initializing LJJ SVP Claim Management System...');

      await this.loadStyles();
      console.log('Styles loaded successfully');

      this.initializeComponents();
      console.log('Components initialized');

      this.initializeModules();
      console.log('Modules initialized');

      this.bindGlobalEvents();
      console.log('Events bound');

      // Update breadcrumb
      this.updateBreadcrumb('Dashboard');

      console.log('LJJ SVP Claim Management System initialized successfully');
    } catch (error) {
      console.error('Failed to initialize application:', error);
      this.showError('Application failed to initialize. Please check console for details.');
    }
  }

  async loadStyles() {
    // Styles are already loaded via HTML, so we don't need to load them dynamically
    console.log('Styles already loaded via HTML');
  }

  initializeComponents() {
    // Initialize Sidebar
    const sidebarContainer = document.querySelector('.sidebar');

    if (sidebarContainer) {
      this.components.sidebar = new Sidebar(sidebarContainer, {
        onSectionChange: section => this.switchSection(section),
        user: {
          name: 'Public User',
          role: 'Viewer',
          avatar: '<i class="fas fa-user"></i>',
        },
      });
    } else {
      console.error('Sidebar container not found');
    }
  }

  initializeModules() {
    // Initialize Master Dashboard as the default view
    const mainContent = document.querySelector('.main-content');

    if (mainContent) {
      // Hide the existing dashboard section
      const existingDashboard = document.getElementById('dashboard');
      if (existingDashboard) {
        existingDashboard.classList.remove('active');
      }

      // Create a container for the master dashboard
      const masterDashboardContainer = document.createElement('section');
      masterDashboardContainer.id = 'master-dashboard';
      masterDashboardContainer.className = 'content-section active';
      mainContent.appendChild(masterDashboardContainer);

      this.modules.masterDashboard = new MasterDashboard(masterDashboardContainer, {
        onHeadOfClaimClick: (headId, action) => this.navigateToHeadOfClaim(headId, action),
      });

      // Initialize other modules as needed
      this.initializeLazyModules();
    } else {
      console.error('Main content container not found');
    }
  }

  async initializeLazyModules() {
    // These modules will be loaded on demand
    this.lazyModules = {
      timeline: () => import('./modules/Timeline.js'),
      evidence: () => import('./modules/Evidence.js'),
      strategy: () => import('./modules/Strategy.js'),
      analytics: () => import('./modules/Analytics.js'),
      collaboration: () => import('./modules/Collaboration.js'),
      'ai-query': () => import('./modules/AIQuery.js'),
      'ai-insights': () => import('./modules/AIInsights.js'),
    };
  }

  async switchSection(section) {
    if (section === this.currentSection) return;

    try {
      // Map legacy 'dashboard' to the new master dashboard view
      if (section === 'dashboard') {
        this.navigateToMaster();
        return;
      }

      // Hide current section
      this.hideCurrentSection();

      // Load module if not already loaded
      if (!this.modules[section] && this.lazyModules[section]) {
        const moduleFile = await this.lazyModules[section]();
        // Get the correct module class name
        const classNameMap = {
          timeline: 'Timeline',
          evidence: 'Evidence',
          strategy: 'Strategy',
          analytics: 'Analytics',
          collaboration: 'Collaboration',
          'ai-query': 'AIQuery',
          'ai-insights': 'AIInsights',
        };
        const className = classNameMap[section];
        const ModuleClass = moduleFile[className];

        if (!ModuleClass) {
          console.error(`Module class ${className} not found in ${section}`);
          throw new Error(`Module class not found`);
        }

        const container = this.getOrCreateSectionContainer(section);
        this.modules[section] = new ModuleClass(container, this.data);
      }

      // Show new section
      this.showSection(section);
      this.currentSection = section;

      // Update breadcrumb
      this.updateBreadcrumb(this.getSectionTitle(section));
    } catch (error) {
      console.error(`Failed to load section ${section}:`, error);
      this.showError(`Failed to load ${section} section`);
    }
  }

  hideCurrentSection() {
    const currentContainer = document.querySelector('.content-section.active');
    if (currentContainer) {
      currentContainer.classList.remove('active');
    }
  }

  showSection(section) {
    const container = document.getElementById(section);
    if (container) {
      container.classList.add('active');
    }
  }

  getOrCreateSectionContainer(section) {
    let container = document.getElementById(section);
    if (!container) {
      container = document.createElement('section');
      container.id = section;
      container.className = 'content-section';

      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.appendChild(container);
      }
    }
    return container;
  }

  createContainer(className) {
    const container = document.createElement('div');
    container.className = className;
    document.body.appendChild(container);
    return container;
  }

  bindGlobalEvents() {
    // Global search
    const headerSearch = document.getElementById('header-search');
    if (headerSearch) {
      headerSearch.addEventListener('input', e => {
        this.handleGlobalSearch(e.target.value);
      });
    }

    // Sidebar toggle for mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        this.components.sidebar?.toggle();
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      this.handleKeyboardShortcuts(e);
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  handleGlobalSearch(query) {
    // Implement global search functionality
    console.log('Global search:', query);
  }

  handleKeyboardShortcuts(e) {
    // Implement keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case '/':
          e.preventDefault();
          document.getElementById('header-search')?.focus();
          break;
      }
    }
  }

  handleResize() {
    // Handle responsive behavior
    const width = window.innerWidth;
    if (width < 1024) {
      document.body.classList.add('mobile-view');
    } else {
      document.body.classList.remove('mobile-view');
    }
  }

  updateBreadcrumb(sectionTitle) {
    const breadcrumbCurrent = document.getElementById('current-section');
    if (breadcrumbCurrent) {
      breadcrumbCurrent.textContent = sectionTitle;
    }
  }

  getSectionTitle(section) {
    const titles = {
      dashboard: 'Dashboard',
      strategy: 'Strategy Roadmap',
      timeline: 'Case Timeline',
      evidence: 'Evidence Library',
      analytics: 'Analytics',
      collaboration: 'Team Workspace',
      'ai-query': 'AI Query',
      'ai-insights': 'AI Insights',
    };
    return titles[section] || this.capitalizeFirst(section);
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  showError(message) {
    // Show error notification
    console.error(message);
    // Implement proper error UI
  }

  // Navigation methods for hierarchical claims
  navigateToHeadOfClaim(headId) {
    try {
      const container = this.getOrCreateSectionContainer('head-of-claim-view');

      // Create or update the head of claim view
      this.modules.headOfClaimView = new HeadOfClaimView(container, headId, {
        onBackToMaster: () => this.navigateToMaster(),
        onSubClaimClick: (headId, subClaimId) => this.navigateToSubClaim(headId, subClaimId),
      });

      // Update view state
      this.currentView = {
        type: 'head-of-claim',
        headId: headId,
        subClaimId: null,
      };

      // Hide other sections and show this one
      this.hideCurrentSection();
      this.showSection('head-of-claim-view');

      // Update navigation
      const headData = this.data.hierarchy.heads_of_claim[headId];
      this.updateBreadcrumb(headData?.title || 'Head of Claim');

      // Update sidebar if needed
      this.components.sidebar?.setActiveSection('claims');
    } catch (error) {
      console.error('Error navigating to head of claim:', error);
      this.showError(`Failed to load head of claim: ${headId}`);
    }
  }

  navigateToMaster() {
    try {
      // Show master dashboard
      this.hideCurrentSection();

      // Show master dashboard
      this.showSection('master-dashboard');

      // Update view state
      this.currentView = {
        type: 'master',
        headId: null,
        subClaimId: null,
      };

      // Update navigation
      this.updateBreadcrumb('Master Dashboard');
      this.components.sidebar?.setActiveSection('dashboard');
    } catch (error) {
      console.error('Error navigating to master:', error);
      this.showError('Failed to load master dashboard');
    }
  }

  async navigateToSubClaim(headId, subClaimId) {
    try {
      // Dynamically import the SubClaimDetailView module
      const { SubClaimDetailView } = await import('./modules/SubClaimDetailView.js');

      const container = this.getOrCreateSectionContainer('sub-claim-detail-view');

      // Create the sub-claim detail view
      this.modules.subClaimDetailView = new SubClaimDetailView(headId, subClaimId, {
        onBackToHead: () => this.navigateToHeadOfClaim(headId),
        onBackToMaster: () => this.navigateToMaster(),
      });

      // Update view state
      this.currentView = {
        type: 'sub-claim',
        headId: headId,
        subClaimId: subClaimId,
      };

      // Hide other sections and show this one
      this.hideCurrentSection();
      container.classList.add('active');

      // Render the sub-claim view
      this.modules.subClaimDetailView.render('sub-claim-detail-view');

      // Update navigation
      const headData = this.data.hierarchy.heads_of_claim?.[headId];
      const subClaimData = headData?.sub_claims?.[subClaimId];
      this.updateBreadcrumb(subClaimData?.title || 'Sub-Claim Detail');

      // Update sidebar if needed
      this.components.sidebar?.setActiveSection('claims');
    } catch (error) {
      console.error('Error navigating to sub-claim:', error);
      this.showError(`Failed to load sub-claim: ${subClaimId}`);
    }
  }

  // Public API methods
  updateCaseData(newData) {
    Object.assign(this.data.case, newData);
    // Notify relevant modules of data change
    if (this.modules.dashboard) {
      this.modules.dashboard.updateMetrics(newData);
    }
  }

  navigateToSection(section) {
    this.components.sidebar?.setActiveSection(section);
  }

  getUserData() {
    return this.components.sidebar?.options.user || {};
  }

  setUserData(userData) {
    this.components.sidebar?.updateUser(userData);
  }
}

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new ClaimManagementApp();
  });
} else {
  window.app = new ClaimManagementApp();
}

// Export for module usage
export default ClaimManagementApp;
