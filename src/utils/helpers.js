// Utility functions extracted from existing codebase

export function getCategoryClass(category) {
    const classMap = {
        'bms': 'category-bms',
        'mechanical': 'category-mechanical',
        'electrical': 'category-electrical',
        'life-safety': 'category-life-safety',
        'planning': 'timeline-planning',
        'issue': 'timeline-issue',
        'testing': 'timeline-testing',
        'compliance': 'timeline-compliance',
        'formal': 'timeline-formal',
        'failure': 'timeline-failure',
        'termination': 'timeline-termination',
        'evidence': 'timeline-evidence',
        'resolution': 'timeline-resolution',
        'contractual': 'timeline-contractual',
        'critical': 'timeline-critical',
        'procedural': 'timeline-procedural'
    };
    return classMap[category] || '';
}

export function highlightSearchTerm(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

export function formatCurrency(amount, currency = '£') {
    return `${currency}${(amount / 1000000).toFixed(1)}M`;
}

export function formatPercentage(value) {
    return `${Math.round(value)}%`;
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

export function sanitizeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
