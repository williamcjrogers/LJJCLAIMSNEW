// Timeline Module - Chronological view of case events
import { caseData } from '../data/caseData.js';

export class Timeline {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.events = this.processTimelineData();
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  processTimelineData() {
    const events = [];
    
    // Extract events from case data
    if (caseData.timeline) {
      events.push(...caseData.timeline);
    }
    
    // Sort events by date
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  render() {
    this.container.innerHTML = `
      <div class="timeline-module">
        <div class="section-header">
          <h1>Case Timeline</h1>
          <p>Chronological view of all case events</p>
        </div>
        
        <div class="timeline-controls">
          <div class="timeline-filters">
            <button class="filter-btn active" data-filter="all">All Events</button>
            <button class="filter-btn" data-filter="critical">Critical</button>
            <button class="filter-btn" data-filter="formal">Formal Notices</button>
            <button class="filter-btn" data-filter="evidence">Evidence</button>
          </div>
        </div>
        
        <div class="timeline-container">
          ${this.renderTimelineEvents()}
        </div>
      </div>
    `;
  }

  renderTimelineEvents() {
    if (!this.events || this.events.length === 0) {
      return '<p class="no-events">No timeline events available</p>';
    }

    return this.events.map(event => `
      <div class="timeline-event ${event.type || ''}" data-type="${event.type}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="event-date">${this.formatDate(event.date)}</div>
          <div class="event-title">${event.title || 'Event'}</div>
          <div class="event-description">${event.description || ''}</div>
          ${event.documents ? `<div class="event-docs">📎 ${event.documents.length} documents</div>` : ''}
        </div>
      </div>
    `).join('');
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  }

  attachEventListeners() {
    // Filter buttons
    const filterBtns = this.container.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleFilterChange(e.target.dataset.filter);
      });
    });
  }

  handleFilterChange(filter) {
    this.currentFilter = filter;
    const events = this.container.querySelectorAll('.timeline-event');
    const filterBtns = this.container.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    // Filter events
    events.forEach(event => {
      if (filter === 'all') {
        event.style.display = 'flex';
      } else {
        event.style.display = event.dataset.type === filter ? 'flex' : 'none';
      }
    });
  }
}