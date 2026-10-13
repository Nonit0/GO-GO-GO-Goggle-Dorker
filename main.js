const DEFAULT_DOMAIN = "example.com";

const DORK_CATEGORIES = {
    "Login & Auth": [
        'site:example.com inurl:login',
        'site:example.com intitle:"login"',
        'site:example.com inurl:auth',
        'site:example.com "forgot password"',
        'site:example.com "reset password"',
        'site:example.com inurl:register',
        'site:example.com inurl:signup'
    ],
    "Admin Panels": [
        'site:example.com intitle:"admin"',
        'site:example.com inurl:admin',
        'site:example.com inurl:dashboard',
        'site:example.com "Tomcat Manager"',
        'site:example.com "phpMyAdmin"',
        'site:example.com inurl:cpanel',
        'site:example.com inurl:webadmin'
    ],
    "Index of /": [
        '"Index of /" "Parent Directory" site:example.com',
        '"Index of /" backup site:example.com',
        '"Index of /" config site:example.com',
        '"Index of /" uploads site:example.com',
        '"Index of /" private site:example.com',
        '"Index of /" .git site:example.com'
    ],
    "Config Files": [
        'site:example.com ext:env',
        'site:example.com ext:ini',
        'site:example.com ext:cnf',
        'site:example.com ext:conf',
        'site:example.com ext:yaml',
        'site:example.com ext:yml',
        'site:example.com ext:json "config"'
    ],
    "Database Dumps": [
        'site:example.com ext:sql',
        'site:example.com ext:db',
        'site:example.com ext:bak',
        'site:example.com ext:old',
        'site:example.com ext:mdb',
        'site:example.com ext:sqlite'
    ],
    "Cloud Storage": [
        'site:s3.amazonaws.com "example.com"',
        'site:blob.core.windows.net "example.com"',
        'site:googleapis.com "example.com"',
        'site:drive.google.com "example.com"'
    ],
    "Log Files": [
        'site:example.com ext:log',
        'site:example.com inurl:log',
        'site:example.com "server.log"',
        'site:example.com "access_log"',
        'site:example.com "error_log"'
    ],
    "Vulnerable Params": [
        'site:example.com inurl:id=',
        'site:example.com inurl:page=',
        'site:example.com inurl:dir=',
        'site:example.com inurl:search=',
        'site:example.com inurl:file='
    ],
    "Sensitive Docs": [
        'site:example.com ext:pdf "confidential"',
        'site:example.com ext:doc "not for distribution"',
        'site:example.com ext:xls "internal"',
        'site:example.com ext:xlsx "passwords"'
    ],
    "Email Addresses": [
        'site:example.com "@example.com"',
        'site:example.com ext:csv "email"',
        'site:example.com ext:txt "email"'
    ],
    "API Endpoints": [
        'site:example.com inurl:api',
        'site:example.com inurl:graphql',
        'site:example.com inurl:swagger',
        'site:example.com inurl:rest'
    ],
    "Dev / Staging": [
        'site:example.com inurl:dev',
        'site:example.com inurl:staging',
        'site:example.com inurl:test',
        'site:example.com inurl:sandbox'
    ],
    "Tech Fingerprinting": [
        'site:example.com "powered by wordpress"',
        'site:example.com "phpinfo()"',
        'site:example.com "Apache Status"'
    ]
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
