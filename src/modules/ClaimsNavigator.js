// Claims Navigator Module - Handles navigation between master dashboard and individual timelines
import { MasterDashboard } from './MasterDashboard.js';
import { IndividualTimeline } from './IndividualTimeline.js';
import { realClaimsHierarchy } from '../data/realClaimsData.js';

export class ClaimsNavigator {
  constructor() {
    this.currentView = 'master';
    this.masterDashboard = new MasterDashboard();
    this.currentTimeline = null;
    this.container = null;
    this.init();
  }

  init() {
    // Set up global navigation function
    window.navigateToTimeline = headOfClaimId => this.navigateToTimeline(headOfClaimId);
    window.navigateToMaster = () => this.navigateToMaster();
    window.claimsNavigator = this;
  }

  setContainer(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container not found: ${containerId}`);
      return;
    }
    this.render();
  }

  render() {
    if (!this.container) return;

    // Clear container
    this.container.innerHTML = '';

    // Create navigation wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'claims-navigator-wrapper';
    wrapper.innerHTML = `
            <div id="navigationBreadcrumb" class="navigation-breadcrumb"></div>
            <div id="viewContainer" class="view-container"></div>
        `;
    this.container.appendChild(wrapper);

    // Render current view
    if (this.currentView === 'master') {
      this.renderMasterView();
    } else {
      this.renderTimelineView();
    }
  }

  renderMasterView() {
    this.updateBreadcrumb('Master Dashboard');
    const viewContainer = document.getElementById('viewContainer');
    if (viewContainer) {
      viewContainer.innerHTML = '<div id="masterDashboardContainer"></div>';
      this.masterDashboard.render('masterDashboardContainer');
    }
  }

  renderTimelineView() {
    if (!this.currentTimeline) return;

    const headOfClaim = realClaimsHierarchy.headsOfClaim.find(
      h => h.id === this.currentTimeline.headOfClaimId
    );
    if (headOfClaim) {
      this.updateBreadcrumb('Master Dashboard', headOfClaim.name);
    }

    const viewContainer = document.getElementById('viewContainer');
    if (viewContainer) {
      viewContainer.innerHTML = '<div id="timelineContainer"></div>';
      this.currentTimeline.render('timelineContainer');
    }
  }

  navigateToTimeline(headOfClaimId) {
    console.log(`Navigating to timeline: ${headOfClaimId}`);
    this.currentView = 'timeline';
    this.currentTimeline = new IndividualTimeline(headOfClaimId);
    this.render();
  }

  navigateToMaster() {
    console.log('Navigating to master dashboard');
    this.currentView = 'master';
    this.currentTimeline = null;
    this.render();
  }

  updateBreadcrumb(...items) {
    const breadcrumb = document.getElementById('navigationBreadcrumb');
    if (!breadcrumb) return;

    const breadcrumbHTML = items
      .map((item, index) => {
        if (index === 0) {
          return `<span class="breadcrumb-item clickable" onclick="window.navigateToMaster()">${item}</span>`;
        } else {
          return `<span class="breadcrumb-separator">›</span><span class="breadcrumb-item">${item}</span>`;
        }
      })
      .join('');

    breadcrumb.innerHTML = breadcrumbHTML;
  }
}
