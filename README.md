# ⚡ GO GO GOOGLE DORKER

A Ranger-themed OSINT dashboard for fast, focused Google dorking. 

This project provides a sleek, dark-mode web interface to generate and copy Google Dorks tailored to a specific target domain. It eliminates the need to manually type repetitive search queries during reconnaissance phases.

## ✨ Features

- **Dynamic Domain Substitution:** Enter your target domain once, and it automatically updates all dorks in real-time.
- **Categorized Dorks:** Dorks are neatly organized into categories like Admin Panels, Database Dumps, Config Files, Cloud Storage, and more.
- **One-Click Copy:** Easily copy either the original dork template or the customized dork with your target domain.
- **No Backend Required:** 100% static client-side application (HTML/CSS/JS). Just open and run.
- **Ranger-Themed UI:** Dark aesthetics with neon green accents for a comfortable OSINT experience.

## 🚀 How to Use

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Nonit0/GO-GO-GO-Goggle-Dorker.git
   ```
2. Navigate to the folder and open `index.html` in any modern web browser.
3. Enter your target domain in the **TARGET DOMAIN** input field (e.g., `target-company.com`).
4. Browse through the categories on the left.
5. Click **Copy dork** to copy the customized search query to your clipboard and paste it into Google.

## 🗂️ Current Dork Categories

- Login & Auth Pages
- Admin Panels
- Directory Listings (Index of /)
- Configuration Files
- Database Dumps
- API Endpoints
- Dev / Staging Environments
- Error Pages
- Sensitive Documents
- Tech Fingerprinting
- Cloud Storage (S3, etc.)
- Log Files
- Vulnerable Parameters
- Email Addresses

## ⚠️ Disclaimer

This tool is created for **educational purposes and authorized penetration testing only**. The use of Google Dorks to discover sensitive information on targets without prior mutual consent is illegal. The developer is not responsible for any misuse or damage caused by this program.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
If you want to add more dorks, simply edit the `DORK_CATEGORIES` dictionary inside `main.js`.
