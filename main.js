const DEFAULT_DOMAIN = "example.com";

const DORK_CATEGORIES = {
    "Login & Auth": [
        'site:example.com inurl:login',
        'site:example.com intitle:"login"',
        'site:example.com inurl:auth',
        'site:example.com "forgot password"',
        'site:example.com "reset password"'
    ],
    "Admin Panels": [
        'site:example.com intitle:"admin"',
        'site:example.com inurl:admin',
        'site:example.com inurl:dashboard',
        'site:example.com "Tomcat Manager"',
        'site:example.com "phpMyAdmin"'
    ],
    "Index of /": [
        '"Index of /" "Parent Directory" site:example.com',
        '"Index of /" backup site:example.com',
        '"Index of /" config site:example.com',
        '"Index of /" uploads site:example.com',
        '"Index of /" private site:example.com'
    ],
    "Config Files": [
        'site:example.com ext:env',
        'site:example.com ext:ini',
        'site:example.com ext:cnf',
        'site:example.com ext:conf',
        'site:example.com ext:yaml',
        'site:example.com ext:yml'
    ],
    "Database Dumps": [
        'site:example.com ext:sql',
        'site:example.com ext:db',
        'site:example.com ext:bak',
        'site:example.com ext:old'
    ],
    "API Endpoints": ['site:example.com inurl:api'],
    "Dev / Staging": ['site:example.com inurl:dev', 'site:example.com inurl:staging'],
    "Error Pages": ['site:example.com "syntax error"', 'site:example.com "fatal error"'],
    "Sensitive Docs": ['site:example.com ext:pdf confidential', 'site:example.com ext:doc "not for distribution"'],
    "Tech Fingerprinting": ['site:example.com "powered by wordpress"']
};

const categoryGrid = document.getElementById('categoryGrid');
const dorksList = document.getElementById('dorksList');
const resultsTitle = document.getElementById('resultsTitle');
const domainInput = document.getElementById('targetDomain');

let currentCategory = "Admin Panels";

function renderCategories() {
    categoryGrid.innerHTML = '';
    Object.keys(DORK_CATEGORIES).forEach(category => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${category === currentCategory ? 'active' : ''}`;
        btn.innerHTML = `<strong>${category}</strong><br><small>${DORK_CATEGORIES[category].length} dorks - Ranger panel</small>`;
        btn.onclick = () => {
            currentCategory = category;
            renderCategories();
            renderDorks();
        };
        categoryGrid.appendChild(btn);
    });
}

function renderDorks() {
    resultsTitle.textContent = currentCategory.toUpperCase();
    dorksList.innerHTML = '';
    const targetDomain = domainInput.value || DEFAULT_DOMAIN;
    
    DORK_CATEGORIES[currentCategory].forEach((originalDork, index) => {
        const customizedDork = originalDork.replace(new RegExp(DEFAULT_DOMAIN, 'g'), targetDomain);
        
        const card = document.createElement('div');
        card.className = 'dork-card';
        card.innerHTML = `
            <div class="dork-title">${currentCategory} #${index + 1}</div>
            <div class="dork-original">${originalDork}</div>
            <div class="dork-custom">${customizedDork}</div>
            <div class="dork-actions">
                <button class="btn-copy-dork" onclick="navigator.clipboard.writeText('${customizedDork}')">Copy dork</button>
                <button class="btn-copy-original" onclick="navigator.clipboard.writeText('${originalDork}')">Copy original</button>
            </div>
        `;
        dorksList.appendChild(card);
    });
}

domainInput.addEventListener('input', renderDorks);
renderCategories();
renderDorks();
