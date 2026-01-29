// Define the main application class
class StatisticsLoginApp {
    private rootElement: HTMLElement | null;

    constructor() {
        this.rootElement = document.getElementById('root');
        if (!this.rootElement) {
            throw new Error('Root element not found');
        }
        
        this.initializeApp();
    }

    private initializeApp(): void {
        // Create the entire page structure
        const pageContainer = document.createElement('div');
        pageContainer.className = 'page-container';

        // Create header
        const header = this.createHeader();
        pageContainer.appendChild(header);

        // Create navbar
        const navbar = this.createNavbar();
        pageContainer.appendChild(navbar);

        // Create main content
        const mainContent = this.createMainContent();
        pageContainer.appendChild(mainContent);

        // Create footer
        const footer = this.createFooter();
        pageContainer.appendChild(footer);

        // Append everything to the root
        this.rootElement?.appendChild(pageContainer);
    }

    private createHeader(): HTMLElement {
        const header = document.createElement('header');
        header.className = 'header';

        const headerContent = document.createElement('div');
        headerContent.className = 'header-content';

        // Left logo section
        const logoLeft = document.createElement('div');
        logoLeft.className = 'logo-left';
        const logoImg = document.createElement('img');
        logoImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSIjMDAzMzY2IiAvPgogIDx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEcgPC90ZXh0Pgo8L3N2Zz4='; // Placeholder SVG
        logoImg.alt = 'Telangana Government Emblem';
        logoLeft.appendChild(logoImg);

        // Center title section
        const titleCenter = document.createElement('div');
        titleCenter.className = 'title-center';
        const titleH1 = document.createElement('h1');
        titleH1.textContent = 'CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES';
        const titleP = document.createElement('p');
        titleP.textContent = 'GOVERNMENT OF TELANGANA - INDIA';
        titleCenter.appendChild(titleH1);
        titleCenter.appendChild(titleP);

        // Right social media section
        const logoRight = document.createElement('div');
        logoRight.className = 'logo-right';
        const socialIcons = document.createElement('div');
        socialIcons.className = 'social-icons';
        
        // Create social media icons
        for (let i = 0; i < 4; i++) {
            const socialIcon = document.createElement('div');
            socialIcon.className = 'social-icon';
            socialIcons.appendChild(socialIcon);
        }
        
        logoRight.appendChild(socialIcons);

        // Combine all header elements
        headerContent.appendChild(logoLeft);
        headerContent.appendChild(titleCenter);
        headerContent.appendChild(logoRight);
        header.appendChild(headerContent);

        return header;
    }

    private createNavbar(): HTMLElement {
        const navbar = document.createElement('nav');
        navbar.className = 'navbar';

        const navMenu = document.createElement('div');
        navMenu.className = 'nav-menu';

        // Navigation items
        const navItems = [
            'HOME', 'ABOUT US', 'ADMINISTRATION', 'WINGS', 'CITIZEN SERVICES',
            'TENDERS', 'CIRCULARS', 'PRICE', 'IMPORTANT LINKS',
            'RTI ACTS', 'DOWNLOADS', 'LOGIN', 'CONTACTS'
        ];

        navItems.forEach((item, index) => {
            const navItem = document.createElement('span');
            navItem.className = 'nav-item';
            navItem.textContent = item;
            
            navMenu.appendChild(navItem);
            
            // Add separator except for the last item
            if (index < navItems.length - 1) {
                const separator = document.createElement('span');
                separator.className = 'nav-separator';
                separator.textContent = '|';
                navMenu.appendChild(separator);
            }
        });

        navbar.appendChild(navMenu);

        return navbar;
    }

    private createMainContent(): HTMLElement {
        const mainContainer = document.createElement('main');
        mainContainer.className = 'main-container';

        const loginBox = document.createElement('div');
        loginBox.className = 'login-box';

        // Login header
        const loginHeader = document.createElement('div');
        loginHeader.className = 'login-header';
        const loginTitle = document.createElement('h2');
        loginTitle.textContent = 'Statistics Login';
        loginHeader.appendChild(loginTitle);

        // Form table
        const formTable = document.createElement('table');
        formTable.className = 'form-table';

        // Username row
        const usernameRow = document.createElement('tr');
        usernameRow.className = 'form-row';
        
        const usernameLabelCell = document.createElement('td');
        usernameLabelCell.className = 'form-label';
        usernameLabelCell.textContent = 'User Name';
        
        const usernameInputCell = document.createElement('td');
        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.className = 'form-input';
        usernameInputCell.appendChild(usernameInput);
        
        usernameRow.appendChild(usernameLabelCell);
        usernameRow.appendChild(usernameInputCell);

        // Password row
        const passwordRow = document.createElement('tr');
        passwordRow.className = 'form-row';
        
        const passwordLabelCell = document.createElement('td');
        passwordLabelCell.className = 'form-label';
        passwordLabelCell.textContent = 'Password';
        
        const passwordInputCell = document.createElement('td');
        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.className = 'form-input';
        passwordInputCell.appendChild(passwordInput);
        
        passwordRow.appendChild(passwordLabelCell);
        passwordRow.appendChild(passwordInputCell);

        // Append rows to table
        formTable.appendChild(usernameRow);
        formTable.appendChild(passwordRow);

        // Button row
        const buttonRow = document.createElement('div');
        buttonRow.className = 'button-row';
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Submit';
        submitBtn.type = 'button';
        
        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-btn';
        clearBtn.textContent = 'Clear';
        clearBtn.type = 'button';
        
        buttonRow.appendChild(submitBtn);
        buttonRow.appendChild(clearBtn);

        // Assemble login box
        loginBox.appendChild(loginHeader);
        loginBox.appendChild(formTable);
        loginBox.appendChild(buttonRow);

        mainContainer.appendChild(loginBox);

        return mainContainer;
    }

    private createFooter(): HTMLElement {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        // Top footer row with links
        const footerLinks = document.createElement('div');
        footerLinks.className = 'footer-links';
        
        const linksText = 'Terms and Conditions | Privacy Policy | Hyperlinking Policy | Copyright Policy | Feedback | Help';
        const linkSpans = linksText.split('|').map(link => link.trim());
        
        linkSpans.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.className = 'footer-link';
            linkElement.textContent = link;
            footerLinks.appendChild(linkElement);
            
            if (index < linkSpans.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                footerLinks.appendChild(separator);
            }
        });

        // Middle content
        const footerContent = document.createElement('div');
        footerContent.className = 'footer-content';
        footerContent.textContent = 'Content on this website is published and managed by Civil Supplies Department, H.O - Telangana.';

        // Bottom copyright
        const copyrightDiv = document.createElement('div');
        copyrightDiv.className = 'copyright';
        copyrightDiv.textContent = 'COPYRIGHT ©2018 Civil Supplies Department';

        footer.appendChild(footerLinks);
        footer.appendChild(footerContent);
        footer.appendChild(copyrightDiv);

        return footer;
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StatisticsLoginApp();
});

// Export something to make this file a module
export {};