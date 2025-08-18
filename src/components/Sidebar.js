// Sidebar Component
// import { getCategoryClass } from '../utils/helpers.js';

export class Sidebar {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      onSectionChange: () => {},
      user: {
        name: 'Public User',
        role: 'Viewer',
        avatar: '<i class="fas fa-user"></i>',
      },
      ...options,
    };

    this.activeSection = 'dashboard';
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div class="company-brand">
                        <i class="fas fa-building"></i>
                        <span>Quantum</span>
                    </div>
                    <div class="case-info">
                        <h3>LJJ SVP Claim</h3>
                        <span class="case-id">#WEL-2024-001</span>
                    </div>
                </div>

                <nav class="sidebar-nav">
                    <ul class="nav-menu">
                        ${this.renderNavItems()}
                    </ul>
                </nav>

                <div class="sidebar-footer">
                    <div class="user-profile">
                        <div class="user-avatar" id="user-avatar">
                            ${this.options.user.avatar}
                        </div>
                        <div class="user-info">
                            <span class="user-name">${this.options.user.name}</span>
                            <span class="user-role">${this.options.user.role}</span>
                        </div>
                        <button class="logout-btn" id="logout-btn">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </aside>
        `;
  }

  renderNavItems() {
    const navItems = [
      { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Master Claims' },
      { id: 'strategy', icon: 'fas fa-chess-knight', label: 'Strategy Roadmap' },
      { id: 'timeline', icon: 'fas fa-history', label: 'Case Timeline' },
      { id: 'evidence', icon: 'fas fa-folder-open', label: 'Evidence Library' },
      { id: 'analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
      { id: 'collaboration', icon: 'fas fa-users', label: 'Team Workspace' },
      { id: 'ai-query', icon: 'fas fa-robot', label: 'AI Query' },
      { id: 'ai-insights', icon: 'fas fa-brain', label: 'AI Insights' },
    ];

    return navItems
      .map(
        item => `
            <li class="nav-item ${item.id === this.activeSection ? 'active' : ''}" data-section="${item.id}">
                <i class="${item.icon}"></i>
                <span>${item.label}</span>
                <div class="nav-indicator"></div>
            </li>
        `
      )
      .join('');
  }

  bindEvents() {
    // Navigation items
    this.container.addEventListener('click', e => {
      const navItem = e.target.closest('.nav-item');
      if (navItem) {
        const section = navItem.dataset.section;
        this.setActiveSection(section);
      }

      // Logout button
      if (e.target.closest('.logout-btn')) {
        this.handleLogout();
      }
    });
  }

  setActiveSection(section) {
    if (section === this.activeSection) return;

    // Update active state
    this.container.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    const activeItem = this.container.querySelector(`[data-section="${section}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
      this.activeSection = section;
      this.options.onSectionChange(section);
    }
  }

  handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
      // Handle logout logic
      console.log('Logout functionality would be implemented here');
    }
  }

  updateUser(userData) {
    this.options.user = { ...this.options.user, ...userData };
    const avatar = this.container.querySelector('#user-avatar');
    const name = this.container.querySelector('.user-name');
    const role = this.container.querySelector('.user-role');

    if (avatar) avatar.innerHTML = this.options.user.avatar;
    if (name) name.textContent = this.options.user.name;
    if (role) role.textContent = this.options.user.role;
  }

  toggle() {
    this.container.querySelector('.sidebar').classList.toggle('open');
  }
}

export default Sidebar;
