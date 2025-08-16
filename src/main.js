// Main Application Entry Point
import { Sidebar } from './components/Sidebar.js';
import { Dashboard } from './modules/Dashboard.js';
import { caseData } from './data/caseData.js';
import { buildingServicesClaims } from './data/buildingServicesClaims.js';
import { documentsData } from './data/documentsData.js';

class ClaimManagementApp {
    constructor() {
        this.currentSection = 'dashboard';
        this.modules = {};
        this.components = {};
        this.data = {
            case: caseData,
            claims: buildingServicesClaims,
            documents: documentsData
        };
        
        this.init();
    }
    
    async init() {
        try {
            await this.loadStyles();
            this.initializeComponents();
            this.initializeModules();
            this.bindGlobalEvents();
            
            // Update breadcrumb
            this.updateBreadcrumb('Dashboard');
            
            console.log('LJJ SVP Claim Management System initialized successfully');
        } catch (error) {
            console.error('Failed to initialize application:', error);
        }
    }
    
    async loadStyles() {
        const stylesheets = [
            '/src/styles/base/variables.css',
            '/src/styles/base/reset.css',
            '/src/styles/components/sidebar.css'
        ];
        
        const loadPromises = stylesheets.map(href => {
            return new Promise((resolve, reject) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            });
        });
        
        await Promise.all(loadPromises);
    }
    
    initializeComponents() {
        // Initialize Sidebar
        const sidebarContainer = document.querySelector('.sidebar-container') || 
                                 this.createContainer('sidebar-container');
        
        this.components.sidebar = new Sidebar(sidebarContainer, {
            onSectionChange: (section) => this.switchSection(section),
            user: {
                name: 'Public User',
                role: 'Viewer',
                avatar: '<i class="fas fa-user"></i>'
            }
        });
    }
    
    initializeModules() {
        // Initialize Dashboard
        const mainContent = document.querySelector('.main-content') || 
                           this.createContainer('main-content');
        
        this.modules.dashboard = new Dashboard(mainContent, this.data.case);
        
        // Initialize other modules as needed
        this.initializeLazyModules();
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
            'ai-insights': () => import('./modules/AIInsights.js')
        };
    }
    
    async switchSection(section) {
        if (section === this.currentSection) return;
        
        try {
            // Hide current section
            this.hideCurrentSection();
            
            // Load module if not already loaded
            if (!this.modules[section] && this.lazyModules[section]) {
                const moduleFile = await this.lazyModules[section]();
                const ModuleClass = moduleFile.default || moduleFile[this.capitalizeFirst(section)];
                
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
            headerSearch.addEventListener('input', (e) => {
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
        document.addEventListener('keydown', (e) => {
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
            switch(e.key) {
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
            'dashboard': 'Dashboard',
            'strategy': 'Strategy Roadmap',
            'timeline': 'Case Timeline',
            'evidence': 'Evidence Library',
            'analytics': 'Analytics',
            'collaboration': 'Team Workspace',
            'ai-query': 'AI Query',
            'ai-insights': 'AI Insights'
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
