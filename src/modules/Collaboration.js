// Collaboration Module - Team workspace and communication
export class Collaboration {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.currentTab = 'discussion';
    this.messages = this.loadMessages();
    this.tasks = this.loadTasks();
    this.notes = this.loadNotes();
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  loadMessages() {
    return [
      {
        id: 1,
        user: 'Senior Partner',
        avatar: 'SP',
        message: 'K&T Block C report has been uploaded. Please review the technical findings.',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        type: 'info'
      },
      {
        id: 2,
        user: 'Case Manager',
        avatar: 'CM',
        message: 'Reviewing now. Initial assessment shows strong evidence for BMS failures.',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        type: 'response'
      },
      {
        id: 3,
        user: 'Legal Analyst',
        avatar: 'LA',
        message: 'Missing K&T Blocks A&B reports flagged as high priority.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        type: 'warning'
      }
    ];
  }

  loadTasks() {
    return [
      { id: 1, title: 'Review K&T Block C findings', assignee: 'Case Manager', status: 'in-progress', priority: 'high' },
      { id: 2, title: 'Locate missing K&T reports', assignee: 'Legal Analyst', status: 'pending', priority: 'critical' },
      { id: 3, title: 'Prepare expert witness brief', assignee: 'Senior Partner', status: 'pending', priority: 'medium' },
      { id: 4, title: 'Compile NCR documentation', assignee: 'Junior Associate', status: 'completed', priority: 'low' }
    ];
  }

  loadNotes() {
    return [
      {
        id: 1,
        title: 'Key Technical Failures',
        content: '1. BMS integration failures across all blocks\n2. Fire alarm system non-compliance\n3. Pressure issues in DCWS systems',
        author: 'Technical Expert',
        lastModified: new Date(Date.now() - 24 * 60 * 60 * 1000)
      },
      {
        id: 2,
        title: 'Settlement Strategy',
        content: 'Focus on technical evidence strength. LJJ early damage reporting creates defensive position.',
        author: 'Senior Partner',
        lastModified: new Date(Date.now() - 48 * 60 * 60 * 1000)
      }
    ];
  }

  render() {
    this.container.innerHTML = `
      <div class="collaboration-module">
        <div class="section-header">
          <h1>Team Workspace</h1>
          <p>Real-time collaboration and communication hub</p>
        </div>
        
        <div class="collaboration-layout">
          <div class="team-panel">
            <h3>Active Team Members</h3>
            <div class="team-list">
              ${this.renderTeamMembers()}
            </div>
          </div>
          
          <div class="workspace-main">
            <div class="workspace-tabs">
              <button class="tab-btn active" data-tab="discussion">Discussion</button>
              <button class="tab-btn" data-tab="tasks">Tasks</button>
              <button class="tab-btn" data-tab="notes">Shared Notes</button>
            </div>
            
            <div class="workspace-content">
              <div class="tab-content active" id="discussion-tab">
                ${this.renderDiscussion()}
              </div>
              <div class="tab-content" id="tasks-tab" style="display: none;">
                ${this.renderTasks()}
              </div>
              <div class="tab-content" id="notes-tab" style="display: none;">
                ${this.renderNotes()}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderTeamMembers() {
    const members = [
      { name: 'Senior Partner', role: 'Lead Counsel', status: 'online', avatar: 'SP' },
      { name: 'Case Manager', role: 'Evidence Coordinator', status: 'online', avatar: 'CM' },
      { name: 'Legal Analyst', role: 'Document Review', status: 'busy', avatar: 'LA' },
      { name: 'Technical Expert', role: 'K&T Analysis', status: 'offline', avatar: 'TE' },
      { name: 'Junior Associate', role: 'Research', status: 'online', avatar: 'JA' }
    ];

    return members.map(member => `
      <div class="team-member-item">
        <div class="member-avatar ${member.status}">
          <span>${member.avatar}</span>
          <div class="status-indicator"></div>
        </div>
        <div class="member-details">
          <div class="member-name">${member.name}</div>
          <div class="member-role">${member.role}</div>
        </div>
      </div>
    `).join('');
  }

  renderDiscussion() {
    return `
      <div class="discussion-container">
        <div class="discussion-feed">
          ${this.messages.map(msg => `
            <div class="message-item ${msg.type}">
              <div class="message-avatar">${msg.avatar}</div>
              <div class="message-content">
                <div class="message-header">
                  <span class="message-user">${msg.user}</span>
                  <span class="message-time">${this.formatTime(msg.timestamp)}</span>
                </div>
                <div class="message-text">${msg.message}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="message-composer">
          <input type="text" placeholder="Type your message..." id="message-input-field">
          <button class="send-btn">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
  }

  renderTasks() {
    const tasksByStatus = {
      pending: this.tasks.filter(t => t.status === 'pending'),
      'in-progress': this.tasks.filter(t => t.status === 'in-progress'),
      completed: this.tasks.filter(t => t.status === 'completed')
    };

    return `
      <div class="tasks-container">
        <div class="tasks-header">
          <button class="btn-primary">
            <i class="fas fa-plus"></i> New Task
          </button>
        </div>
        <div class="tasks-board">
          ${Object.entries(tasksByStatus).map(([status, tasks]) => `
            <div class="task-column">
              <h4>${status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}</h4>
              <div class="task-list">
                ${tasks.map(task => `
                  <div class="task-card priority-${task.priority}">
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                      <span class="task-assignee">${task.assignee}</span>
                      <span class="task-priority">${task.priority}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderNotes() {
    return `
      <div class="notes-container">
        <div class="notes-header">
          <button class="btn-primary">
            <i class="fas fa-plus"></i> New Note
          </button>
        </div>
        <div class="notes-grid">
          ${this.notes.map(note => `
            <div class="note-card">
              <div class="note-header">
                <h4>${note.title}</h4>
                <button class="btn-icon">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
              <div class="note-content">${note.content.replace(/\n/g, '<br>')}</div>
              <div class="note-meta">
                <span class="note-author">${note.author}</span>
                <span class="note-time">${this.formatDate(note.lastModified)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  formatTime(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  }

  formatDate(date) {
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  attachEventListeners() {
    // Tab switching
    const tabBtns = this.container.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.switchTab(e.target.dataset.tab);
      });
    });

    // Message sending
    const sendBtn = this.container.querySelector('.send-btn');
    const messageInput = this.container.querySelector('#message-input-field');
    
    if (sendBtn && messageInput) {
      sendBtn.addEventListener('click', () => {
        this.sendMessage(messageInput.value);
        messageInput.value = '';
      });
      
      messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage(messageInput.value);
          messageInput.value = '';
        }
      });
    }
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    
    // Update tab buttons
    const tabBtns = this.container.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update tab content
    const tabs = this.container.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      const isActive = tab.id === `${tabName}-tab`;
      tab.style.display = isActive ? 'block' : 'none';
    });
  }

  sendMessage(text) {
    if (!text.trim()) return;
    
    const newMessage = {
      id: this.messages.length + 1,
      user: 'Current User',
      avatar: 'CU',
      message: text,
      timestamp: new Date(),
      type: 'sent'
    };
    
    this.messages.push(newMessage);
    
    // Re-render discussion
    const discussionTab = this.container.querySelector('#discussion-tab');
    if (discussionTab) {
      discussionTab.innerHTML = this.renderDiscussion();
    }
  }
}