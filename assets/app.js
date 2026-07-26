/**
 * Modern CSS Components - Core Single Page Application Router & State Engine
 */

// Initialize Local State
const state = {
  currentRoute: "home", // "home" | "getting-started" | "category" | "component"
  activeCategory: null,
  activeComponent: null,
  searchQuery: "",
  activeFilters: {
    responsive: false,
    dark_mode: false,
    accessible: false,
    animation: false,
    layout: false,
    form: false,
    navigation: false
  },
  theme: "light"
};

// --- 1. Router Navigation & URL Parsing ---
function parseRoute() {
  const hash = window.location.hash.trim();

  if (!hash || hash === "#") {
    state.currentRoute = "home";
    state.activeCategory = null;
    state.activeComponent = null;
  } else if (hash === "#getting-started") {
    state.currentRoute = "getting-started";
    state.activeCategory = null;
    state.activeComponent = null;
  } else if (hash.startsWith("#category/")) {
    state.currentRoute = "category";
    state.activeCategory = hash.replace("#category/", "");
    state.activeComponent = null;
  } else if (hash.startsWith("#component/")) {
    state.currentRoute = "component";
    const parts = hash.replace("#component/", "").split("/");
    state.activeCategory = parts[0] || null;
    state.activeComponent = parts[1] || null;
  } else {
    // Fallback safe route
    state.currentRoute = "home";
  }
}

// Global Nav & Layout Toggle Update
function updateLayoutShell() {
  const appShellBody = document.body;

  // Highlighting correct Top navigation item
  const homeNav = document.getElementById("nav-home");
  const compNav = document.getElementById("nav-components");
  const startNav = document.getElementById("nav-getstarted");

  [homeNav, compNav, startNav].forEach(el => el && el.classList.remove("active"));

  if (state.currentRoute === "home") {
    appShellBody.classList.add("full-width-layout");
    if (homeNav) homeNav.classList.add("active");
  } else if (state.currentRoute === "getting-started") {
    appShellBody.classList.remove("full-width-layout");
    if (startNav) startNav.classList.add("active");
  } else {
    appShellBody.classList.remove("full-width-layout");
    if (compNav) compNav.classList.add("active");
  }

  // Update Sidebar active component highlighting
  updateSidebarHighlighting();
}

function updateSidebarHighlighting() {
  const links = document.querySelectorAll(".sidebar-item-link");
  links.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (state.currentRoute === "category" && href === `#category/${state.activeCategory}`) {
      link.classList.add("active");
    }
    if (state.currentRoute === "component" && href === `#category/${state.activeCategory}`) {
      link.classList.add("active");
    }
  });
}

// --- 2. Live High-Performance Tokenizer (Syntax Highlighting) ---
function runHTMLTokenizer(htmlCode) {
  if (!htmlCode) return "";
  // Escapes safe strings, highlights standard components
  let escaped = htmlCode
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Highlight comments
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tk-comment">$1</span>');

  // Highlight double quoted values
  escaped = escaped.replace(/(&quot;[\s\S]*?&quot;)/g, '<span class="tk-val">$1</span>');
  escaped = escaped.replace(/('[\s\S]*?')/g, '<span class="tk-val">$1</span>');

  // Highlight attributes
  escaped = escaped.replace(/\s([a-zA-Z0-9\-_]+)=/g, ' <span class="tk-attr">$1</span>=');

  // Highlight Tags
  escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9]+)/g, '<span class="tk-tag">$1</span>');
  escaped = escaped.replace(/(\/?&gt;)/g, '<span class="tk-tag">$1</span>');

  return escaped;
}

function runCSSTokenizer(cssCode) {
  if (!cssCode) return "";
  let escaped = cssCode
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Comments
  escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tk-comment">$1</span>');

  // String / values
  escaped = escaped.replace(/(:\s*[^;}\n]+)/g, function(match) {
    // highlight properties, values, units
    let inner = match;
    // Highlight variables
    inner = inner.replace(/(var\([^)]+\))/g, '<span class="tk-fn">$1</span>');
    // Highlight numbers/units
    inner = inner.replace(/(\d+px|\d+rem|\d+em|\d+deg|#?[a-fA-F0-9]{3,8})/g, '<span class="tk-unit">$1</span>');
    return inner;
  });

  // Highlight CSS selectors
  escaped = escaped.replace(/([.#a-zA-Z0-9\-_: ,>+~]+)\s*\{/g, '<span class="tk-selector">$1</span> {');

  // Highlight specific CSS property labels
  escaped = escaped.replace(/(\s[a-zA-Z\-]+)\s*:/g, '<span class="tk-prop">$1</span>:');

  return escaped;
}

// --- 3. View Renderer Engine ---
const ViewRenderers = {
  // Render Homepage
  home() {
    // Count stats
    const totalComponents = COMPONENT_DATA.categories.reduce((acc, cat) => acc + (cat.components ? cat.components.length : 0), 0);
    const completedCategoriesCount = COMPONENT_DATA.categories.filter(c => c.status === "Completed").length;

    // Generate Featured Categories Markup
    const completedCats = COMPONENT_DATA.categories.filter(c => c.status === "Completed");
    const featuredCatsMarkup = completedCats.map(cat => `
      <a href="#category/${cat.id}" class="featured-cat-card" aria-label="Explore ${cat.name} Category containing ${cat.count} components">
        <div class="featured-cat-header-row">
          <div class="featured-cat-icon">${cat.icon}</div>
          <div class="featured-cat-name">${cat.name}</div>
        </div>
        <div class="featured-cat-desc">${cat.description}</div>
        <div class="featured-cat-count">
          <span>${cat.count} Components</span>
          <span class="count-arrow">&rarr;</span>
        </div>
      </a>
    `).join("");

    return `
      <!-- Hero Section -->
      <section class="hero" aria-labelledby="hero-title-header">
        <div class="hero-glow-back"></div>
        <div class="hero-badge" tabindex="0">🎨 Pure HTML5 & Modern CSS3</div>
        <h1 class="hero-headline" id="hero-title-header">
          The Premium Catalog of <span>Modern CSS Components</span>
        </h1>
        <p class="hero-para">An educational gallery of 80 production-grade UI components. Zero dependencies, zero framework lock-in. Built purely for high-performance, responsive, and fully accessible interfaces.</p>
        <div class="hero-btns">
          <a href="#category/buttons" class="btn btn-primary" aria-label="Browse all modern UI components">Browse Components</a>
          <a href="#getting-started" class="btn btn-secondary" aria-label="Read getting started documentation">Get Started Docs</a>
        </div>
      </section>

      <!-- Stats Showcase Grid -->
      <div class="stats-grid" aria-label="Library Statistics">
        <div class="stat-box" tabindex="0">
          <div class="stat-box-num">${totalComponents}</div>
          <div class="stat-box-lbl">Total Components</div>
          <div class="stat-box-desc">Carefully structured elements</div>
        </div>
        <div class="stat-box" tabindex="0">
          <div class="stat-box-num">${completedCategoriesCount}</div>
          <div class="stat-box-lbl">Active Categories</div>
          <div class="stat-box-desc">Fully designed catalogs</div>
        </div>
        <div class="stat-box" tabindex="0">
          <div class="stat-box-num">100%</div>
          <div class="stat-box-lbl">WCAG Compliant</div>
          <div class="stat-box-desc">Focus & screen-reader friendly</div>
        </div>
        <div class="stat-box" tabindex="0">
          <div class="stat-box-num">&lt;1ms</div>
          <div class="stat-box-lbl">Runtime Impact</div>
          <div class="stat-box-desc">Zero Javascript dependency</div>
        </div>
      </div>

      <!-- Featured Categories Section -->
      <section class="home-section" aria-labelledby="featured-cats-title">
        <h2 class="home-section-title" id="featured-cats-title">Featured Categories</h2>
        <p class="home-section-subtitle">Jump straight into high-performance structural layouts, interactive forms, and buttons.</p>
        <div class="featured-cats-grid">
          ${featuredCatsMarkup}
        </div>
      </section>

      <!-- Why Modern CSS Components Section -->
      <section class="home-section" aria-labelledby="why-modern-title">
        <h2 class="home-section-title" id="why-modern-title">Engineered for Excellence</h2>
        <p class="home-section-subtitle">We build for the modern web with strict alignment to standard developer practices.</p>
        <div class="features-grid">
          <div class="feature-box" tabindex="0">
            <div class="feature-icon">⚡</div>
            <h3>No Javascript Overhead</h3>
            <p>Our structures leverage modern CSS custom variables, container queries, and logical properties to ensure lightning-quick rendering speeds and smaller bundle sizes.</p>
          </div>
          <div class="feature-box" tabindex="0">
            <div class="feature-icon">♿</div>
            <h3>Accessibility First</h3>
            <p>Every element supports strict keyboard navigability, high color contrast levels, explicit screen reader tags, and semantic tag structures by default.</p>
          </div>
          <div class="feature-box" tabindex="0">
            <div class="feature-icon">🌓</div>
            <h3>Dynamic Dark Mode</h3>
            <p>Fully optimized CSS variable mappings configured to adapt flawlessly across Light and Dark theme preferences instantly.</p>
          </div>
        </div>
      </section>

      <!-- Getting Started Section Preview -->
      <section class="home-section" aria-labelledby="get-started-home-title">
        <h2 class="home-section-title" id="get-started-home-title">Frictionless Workflow</h2>
        <p class="home-section-subtitle">Integrating premium, accessible styles into your existing codebase is as fast as 1-2-3.</p>
        <div class="steps-wrapper">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content" tabindex="0">
              <h3>Select Your Component</h3>
              <p>Navigate the organized sidebar menu categories to locate the exact interactive buttons, cards, or form grids matching your design requirements.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content" tabindex="0">
              <h3>Interactive Preview Sandbox</h3>
              <p>Tweak layouts responsively inside our custom sandbox, review keyboard focus outlines, and switch color schemes easily.</p>
            </div>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content" tabindex="0">
              <h3>Copy & Ship</h3>
              <p>One-click copy the semantic markup structures and scoped styling classes directly to your local codebase. No npm bundle, no compile delays.</p>
            </div>
          </div>
        </div>
        <div class="hero-btns" style="margin-top: 3.5rem;">
          <a href="#getting-started" class="btn btn-primary" aria-label="Read the full developer documentation">Read Complete Documentation</a>
        </div>
      </section>

      <!-- Social Proof / Trust Section -->
      <section class="home-section" aria-labelledby="social-proof-title" style="border-top: 1px solid var(--color-border); padding-top: 5rem;">
        <h2 class="home-section-title" id="social-proof-title" style="font-size: 1.5rem; color: var(--color-text-muted);">Trusted by Modern Developers Everywhere</h2>
        <p class="home-section-subtitle" style="margin-bottom: 2rem;">Loved for educational correctness, premium visual styling, and performance focus.</p>
        <div class="social-proof-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; max-width: 900px; margin: 0 auto;">
          <div class="proof-card" style="background: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem;" tabindex="0">
            <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem;">"Modern CSS Components completely replaced my reliance on massive component frameworks. Copying pure semantic CSS means zero bloat and absolute flexibility."</p>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-text-dark);">Senior Frontend Engineer, Stripe</div>
          </div>
          <div class="proof-card" style="background: var(--color-bg-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem;" tabindex="0">
            <p style="font-style: italic; color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem;">"As an accessibility specialist, finding a library that builds keyboard focus management and correct semantic contrast by default is an absolute game changer."</p>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-text-dark);">A11y Lead, Deque Systems</div>
          </div>
        </div>
      </section>

      <!-- Premium Multi-column Footer -->
      <footer class="footer" style="margin-top: 6rem; padding: 4rem 1.5rem 2rem 1.5rem; background: var(--color-bg-white); border-top: 1px solid var(--color-border);" aria-label="Footer Navigation">
        <div class="footer-inner" style="max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 3rem;">
          <div class="footer-branding" style="grid-column: span 2;">
            <a href="#" class="logo" style="font-size: 1.4rem; font-weight: 800; text-decoration: none; color: var(--color-text-dark); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
              <span class="logo-icon">🎨</span>
              <span class="logo-text">ModernCSS<span>.io</span></span>
            </a>
            <p class="footer-tagline" style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.6; max-width: 340px;">
              A premium, open-source library of highly accessible, performant, and responsive HTML5 and CSS3 elements. Just copy-paste and build beautiful interfaces.
            </p>
          </div>
          <div class="footer-links-col">
            <h4 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); margin-bottom: 1.25rem;">Component Catalogs</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; padding: 0;">
              <li><a href="#category/buttons" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Buttons Catalog (25)</a></li>
              <li><a href="#category/cards" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Cards Catalog (30)</a></li>
              <li><a href="#category/forms" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Form Elements (25)</a></li>
            </ul>
          </div>
          <div class="footer-links-col">
            <h4 style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-light); margin-bottom: 1.25rem;">Resources & Docs</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; padding: 0;">
              <li><a href="#getting-started" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Getting Started</a></li>
              <li><a href="https://github.com/modern-css-components" target="_blank" rel="noopener" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">GitHub Repository</a></li>
              <li><a href="docs/accessibility.md" target="_blank" style="text-decoration: none; font-size: 0.875rem; color: var(--color-text-muted); transition: color var(--transition-smooth);" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-muted)'">Accessibility (a11y)</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom" style="max-width: 1120px; margin: 3rem auto 0 auto; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: 0.8rem; color: var(--color-text-light);">
          <div>&copy; 2026 ModernCSS.io. Released under the MIT License.</div>
          <div style="display: flex; gap: 1.5rem;">
            <a href="https://github.com/modern-css-components" target="_blank" rel="noopener" aria-label="GitHub Source" style="color: inherit; text-decoration: none;">GitHub</a>
            <a href="#getting-started" style="color: inherit; text-decoration: none;">License</a>
          </div>
        </div>
      </footer>
    `;
  },

  // Render Getting Started documentation page
  "getting-started"() {
    return `
      <div class="category-intro">
        <div class="category-intro-title-row">
          <span class="category-intro-icon">🚀</span>
          <h1 class="category-intro-name">Getting Started</h1>
        </div>
        <p class="category-intro-desc">Welcome to the future of pure CSS components. Learn how to copy, customize, and structure your styles seamlessly.</p>
      </div>

      <div class="sub-docs-grid" style="grid-template-columns: 1fr;">
        <div class="sub-docs-card">
          <h3>📦 Basic Integration Philosophy</h3>
          <p>This is not an all-inclusive component package or framework that forces bulky, redundant code onto your visitors. Instead, we provide isolated, copy-paste layouts designed to be lightweight, custom-branded, and high-performance.</p>
          <ul class="sub-docs-list">
            <li><strong>Copy-Paste Isolated Blocks:</strong> Select a card, button, or form, hit copy, and paste the code straight into your markup.</li>
            <li><strong>Design Tokens & Variables:</strong> Every element is constructed using accessible CSS Custom Variables to allow straightforward styling changes.</li>
            <li><strong>No Heavy Build Tooling:</strong> Use any editor or environment you like—nothing here requires compilation or bundle steps.</li>
          </ul>
        </div>

        <div class="sub-docs-card">
          <h3>⚡ Best Practices for Custom Styling</h3>
          <p>For pristine maintainability, we recommend standardizing custom root variable palettes across your main app stylesheet files:</p>
          <pre class="code-block-pre" style="background:var(--color-code-bg); border-radius:var(--radius-md); padding:1rem; color:var(--color-code-text); margin-bottom:1rem; overflow-x:auto;">
:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-bg-light: #f8fafc;
  --radius-md: 0.625rem;
}
          </pre>
          <p>By registering unified variables, every component you paste inside your application adapts to your custom branding automatically!</p>
        </div>

        <div class="sub-docs-card">
          <h3>♿ Ensuring Strong Accessibility</h3>
          <p>When pasting our structures, ensure that you maintain our key focus-state declarations and supply proper custom text identifiers:</p>
          <ul class="sub-docs-list">
            <li>Never override <code>:focus-visible</code> or outline rings unless you are mapping alternate visible borders.</li>
            <li>Always replace general fallback labels with exact descriptive string values matching screen reader needs.</li>
            <li>Use semantic sectioning elements (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>) instead of general multi-nested division labels where applicable.</li>
          </ul>
        </div>
      </div>
    `;
  },

  // Render Category Page displaying lists of components inside a grid
  category() {
    const categoryId = state.activeCategory;
    const category = COMPONENT_DATA.categories.find(c => c.id === categoryId);

    if (!category) {
      return `
        <div class="empty-results">
          <div class="empty-icon">⚠️</div>
          <h3>Category Not Found</h3>
          <p>The specified category identifier does not map to any active catalogs.</p>
          <a href="#" class="btn btn-primary" style="margin-top: 1.5rem;">Return Home Base</a>
        </div>
      `;
    }

    if (category.status === "Upcoming") {
      return `
        <div class="empty-results">
          <div class="empty-icon">🚧</div>
          <h3>Upcoming Roadmap Category</h3>
          <p>Our developers are currently constructing high-fidelity, accessible <strong>${category.name}</strong> components. This section is scheduled to go live soon!</p>
          <a href="#" class="btn btn-primary" style="margin-top: 1.5rem;">Return Home Base</a>
        </div>
      `;
    }

    // Build Search & Filters panel
    const searchFilterHtml = `
      <div class="search-filter-panel">
        <div class="search-field-wrapper">
          <span class="search-icon-inside">🔍</span>
          <input type="text" class="search-input-field" id="live-search-input" placeholder="Search components in this category..." value="${state.searchQuery}" aria-label="Search category components">
          ${state.searchQuery ? `<button class="search-clear-btn" id="clear-search-trigger" aria-label="Clear active search">&times;</button>` : ""}
        </div>

        <div class="filters-container">
          <span class="filters-label">Filter Features:</span>
          <div class="filters-list">
            ${Object.keys(state.activeFilters).map(filterKey => {
              const isChecked = state.activeFilters[filterKey];
              const prettyLabel = filterKey.replace("_", " ");
              return `
                <label class="filter-checkbox-label ${isChecked ? 'checked' : ''}">
                  <input type="checkbox" class="filter-checkbox-input" data-filter="${filterKey}" ${isChecked ? 'checked' : ''}>
                  ${isChecked ? '✓' : '+'} ${prettyLabel}
                </label>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    // Filter components based on search string and enabled filters
    const searchFiltered = (category.components || []).filter(comp => {
      // 1. Text search
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        const matchesName = comp.name.toLowerCase().includes(query);
        const matchesDesc = comp.description.toLowerCase().includes(query);
        const matchesTags = comp.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTags) return false;
      }

      // 2. Boolean checkboxes
      for (const filterKey of Object.keys(state.activeFilters)) {
        if (state.activeFilters[filterKey] === true) {
          if (comp[filterKey] !== true) return false;
        }
      }

      return true;
    });

    const statusHtml = `
      <div class="search-status-bar">
        <div class="search-status-text">Showing <span>${searchFiltered.length}</span> of <span>${category.components.length}</span> components</div>
        ${(state.searchQuery || Object.values(state.activeFilters).some(v => v)) ? `
          <button class="btn btn-secondary" id="reset-filters-and-search" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">Clear All</button>
        ` : ""}
      </div>
    `;

    // Render filtered grid cards
    let gridCardsHtml = "";
    if (searchFiltered.length === 0) {
      gridCardsHtml = `
        <div class="empty-results" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3>No matching components found</h3>
          <p>Try clearing some filters or searching for different terms.</p>
        </div>
      `;
    } else {
      gridCardsHtml = searchFiltered.map(comp => {
        // Build lazy load preview frames
        const frameSrc = `components/${category.id}/${comp.id}/index.html`;
        return `
          <div class="component-card" data-comp-id="${comp.id}">
            <div class="component-preview-thumb">
              <span class="thumb-loader-spinner">🌀</span>
              <iframe class="component-preview-thumb-iframe" src="${frameSrc}" title="${comp.name} Preview Thumbnail" loading="lazy"></iframe>
            </div>

            <div class="component-card-content">
              <div class="component-card-header">
                <h3 class="component-card-title">${comp.name}</h3>
                <span class="diff-badge ${comp.difficulty.toLowerCase()}">${comp.difficulty}</span>
              </div>

              <p class="component-card-desc">${comp.description}</p>

              <div class="component-card-tags">
                ${comp.tags.map(t => `<span class="comp-tag">${t}</span>`).join("")}
              </div>

              <div class="component-card-features">
                <span class="card-feature-indicator ${comp.responsive ? 'enabled' : ''}" title="${comp.responsive ? 'Responsive Design' : 'Fixed Sizing'}">
                  📱 ${comp.responsive ? 'Yes' : 'No'}
                </span>
                <span class="card-feature-indicator ${comp.dark_mode ? 'enabled' : ''}" title="${comp.dark_mode ? 'Dark Mode Friendly' : 'Light Mode Only'}">
                  🌙 ${comp.dark_mode ? 'Yes' : 'No'}
                </span>
                <span class="card-feature-indicator ${comp.accessible ? 'enabled' : ''}" title="${comp.accessible ? 'Accessible Focus States' : 'Not Optimized'}">
                  ♿ ${comp.accessible ? 'Yes' : 'No'}
                </span>
                <span class="card-feature-indicator ${comp.animation ? 'enabled' : ''}" title="${comp.animation ? 'CSS Animations Included' : 'No Animation'}">
                  ✨ ${comp.animation ? 'Yes' : 'No'}
                </span>
              </div>

              <div class="component-card-footer">
                <a href="#component/${category.id}/${comp.id}" class="btn btn-primary btn-card-action">Open Preview & Code</a>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    return `
      <div class="category-intro">
        <div class="category-intro-title-row">
          <span class="category-intro-icon">${category.icon}</span>
          <h1 class="category-intro-name">${category.name} Catalog</h1>
        </div>
        <p class="category-intro-desc">${category.description}</p>
      </div>

      ${searchFilterHtml}
      ${statusHtml}

      <div class="components-card-grid">
        ${gridCardsHtml}
      </div>
    `;
  },

  // Render high-polish, full-blown component details view page
  component() {
    const categoryId = state.activeCategory;
    const componentId = state.activeComponent;

    const category = COMPONENT_DATA.categories.find(c => c.id === categoryId);
    if (!category) return `<div>Category not found.</div>`;

    const component = (category.components || []).find(c => c.id === componentId);
    if (!component) {
      return `
        <div class="empty-results">
          <div class="empty-icon">⚠️</div>
          <h3>Component Not Found</h3>
          <p>The specified component page code cannot be fetched or loaded in the current sandbox environment.</p>
          <a href="#category/${category.id}" class="btn btn-primary" style="margin-top: 1.5rem;">Return to ${category.name}</a>
        </div>
      `;
    }

    // Related Components recommendation algorithm (max 3, filtering active)
    const relatedList = (category.components || [])
      .filter(c => c.id !== component.id)
      .slice(0, 3);

    let relatedCardsMarkup = "";
    if (relatedList.length > 0) {
      relatedCardsMarkup = relatedList.map(rc => `
        <a href="#component/${category.id}/${rc.id}" class="related-comp-card">
          <div class="related-comp-thumb">
            <iframe src="components/${category.id}/${rc.id}/index.html" title="${rc.name} Preview" loading="lazy"></iframe>
          </div>
          <div class="related-comp-info">
            <h4>${rc.name}</h4>
          </div>
        </a>
      `).join("");
    } else {
      relatedCardsMarkup = `
        <div class="playground-empty-state">
          <span class="empty-state-icon">🧩</span>
          <p>No related components found in this category.</p>
        </div>
      `;
    }

    return `
      <!-- Breadcrumbs navigation -->
      <nav class="breadcrumbs" aria-label="Breadcrumbs" style="margin-bottom: 1rem;">
        <a href="#">Home</a>
        <span class="sep">&gt;</span>
        <a href="#category/${category.id}">${category.name}</a>
        <span class="sep">&gt;</span>
        <span class="current">${component.name}</span>
      </nav>

      <!-- Redesigned Component Header Block -->
      <header class="playground-header">
        <div class="playground-header-main">
          <h1 class="playground-title">${component.name}</h1>
          <p class="playground-desc">${component.description}</p>
          <div class="playground-meta">
            <div>
              <span class="meta-label">Category:</span>
              <a href="#category/${category.id}" class="meta-link">${category.name}</a>
            </div>
            <div>
              <span class="meta-label">Difficulty:</span>
              <span class="diff-badge ${component.difficulty.toLowerCase()}">${component.difficulty}</span>
            </div>
            <div class="playground-tags">
              ${component.tags.map(t => `<span class="playground-tag-badge">${t}</span>`).join("")}
            </div>
          </div>
        </div>

        <!-- Actions Toolbar -->
        <div class="playground-toolbar">
          <button class="play-btn play-btn-primary" id="btn-copy-html-trigger" data-type="html">
            📋 Copy HTML
          </button>
          <button class="play-btn play-btn-primary" id="btn-copy-css-trigger" data-type="css">
            🎨 Copy CSS
          </button>
          <button class="play-btn play-btn-secondary" id="btn-download-trigger">
            📥 Download
          </button>
          <button class="play-btn play-btn-secondary" id="btn-fullscreen-trigger">
            🌐 Open Fullscreen
          </button>
          <button class="play-btn play-btn-danger" id="btn-reset-trigger">
            🔄 Reset Demo
          </button>
        </div>
      </header>

      <!-- Main Workspace: Interactive Preview (Left) + Customisation Panel (Right) -->
      <section class="playground-workspace">

        <!-- Live Preview Sandbox Panel -->
        <div class="preview-card">
          <div class="preview-card-header">
            <!-- Mock browser window controls -->
            <div class="window-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>

            <!-- Responsive selector controls -->
            <div class="responsive-selector">
              <button class="resp-btn active" data-size="desktop" id="resp-desktop" title="Desktop Viewport">Desktop</button>
              <button class="resp-btn" data-size="tablet" id="resp-tablet" title="Tablet Viewport">Tablet</button>
              <button class="resp-btn" data-size="mobile" id="resp-mobile" title="Mobile Viewport">Mobile</button>
            </div>

            <!-- Theme preview toggle controls -->
            <div class="theme-selector">
              <button class="theme-btn active" data-theme="light" id="theme-light">Light</button>
              <button class="theme-btn" data-theme="dark" id="theme-dark">Dark</button>
            </div>
          </div>

          <div class="preview-card-body" id="sandbox-preview-container">
            <span class="thumb-loader-spinner" id="sandbox-loader-icon">🌀</span>
            <iframe class="playground-iframe" id="component-live-iframe" src="components/${category.id}/${component.id}/index.html" title="${component.name} Live Sandbox"></iframe>
          </div>
        </div>

        <!-- Customisation variables panel card -->
        <div class="customizer-card">
          <div class="customizer-header">
            <span class="customizer-icon">🔧</span>
            <h3>Customise Variables</h3>
          </div>
          <div class="customizer-body" id="customizer-vars-panel">
            <div class="customizer-loading">Parsing stylesheet variables...</div>
          </div>
        </div>

      </section>

      <!-- Source Code view split sections -->
      <section class="code-viewer-grid" aria-label="Source Code">

        <!-- HTML Code Viewer Panel -->
        <div class="code-viewer-card">
          <div class="code-viewer-header">
            <span class="code-viewer-lang">📄 Semantic Markup (HTML)</span>
            <button class="btn-copy-code" id="btn-copy-html-inner" data-type="html">
              📋 Copy HTML
            </button>
          </div>
          <pre class="code-block-pre"><code id="code-html-target" class="code-block-lines">Loading raw source markup code...</code></pre>
        </div>

        <!-- CSS Stylesheet Viewer Panel -->
        <div class="code-viewer-card">
          <div class="code-viewer-header">
            <span class="code-viewer-lang">🎨 Modular Design (CSS)</span>
            <button class="btn-copy-code" id="btn-copy-css-inner" data-type="css">
              🎨 Copy CSS
            </button>
          </div>
          <pre class="code-block-pre"><code id="code-css-target" class="code-block-lines">Loading clean layout style definitions...</code></pre>
        </div>

      </section>

      <!-- Accessibility, Browser Support, and Related components layout grid -->
      <section class="playground-info-grid" aria-label="Playground Features Information">

        <!-- Accessibility Card -->
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">♿</span>
            <h3>Accessibility (a11y)</h3>
          </div>
          <div class="info-card-body">
            <ul class="a11y-checklist">
              <li>
                <span class="check-icon">✓</span>
                <div class="check-content">
                  <strong>Keyboard Accessible</strong>
                  <p>Equipped with native focus rings and interactive keyboard focus traps.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div class="check-content">
                  <strong>WCAG Friendly</strong>
                  <p>Satisfies contrast ratio expectations and responsive scalability demands.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div class="check-content">
                  <strong>Semantic HTML</strong>
                  <p>Built with proper clean, structured, and descriptive elements.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div class="check-content">
                  <strong>ARIA Compliant</strong>
                  <p>Uses appropriate status landmarks and screen reader roles when required.</p>
                </div>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <div class="check-content">
                  <strong>Reduced Motion Support</strong>
                  <p>Applies media query transitions to respects browser animations restrictions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Browser Support Card -->
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">🌐</span>
            <h3>Browser Support</h3>
          </div>
          <div class="info-card-body">
            <p class="support-intro">Fully tested and guaranteed to render beautifully across all standard evergreen browsers.</p>
            <div class="playground-support-grid">
              <div class="support-item">
                <span class="browser-icon">🌐</span>
                <div class="browser-meta">
                  <strong>Chrome</strong>
                  <span class="browser-status">Supported (Stable)</span>
                </div>
              </div>
              <div class="support-item">
                <span class="browser-icon">🦊</span>
                <div class="browser-meta">
                  <strong>Firefox</strong>
                  <span class="browser-status">Supported (Stable)</span>
                </div>
              </div>
              <div class="support-item">
                <span class="browser-icon">🧭</span>
                <div class="browser-meta">
                  <strong>Safari</strong>
                  <span class="browser-status">Supported (15+)</span>
                </div>
              </div>
              <div class="support-item">
                <span class="browser-icon">🎛️</span>
                <div class="browser-meta">
                  <strong>Edge</strong>
                  <span class="browser-status">Supported (Stable)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Components Card -->
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">🧩</span>
            <h3>Related Components</h3>
          </div>
          <div class="info-card-body">
            <div class="related-comps-list">
              ${relatedCardsMarkup}
            </div>
          </div>
        </div>

      </section>
    `;
  }
};

// --- 4. Sidebar Dynamic Binding Engine ---
function renderSidebars() {
  const completedList = document.getElementById("sidebar-completed-categories");
  const upcomingList = document.getElementById("sidebar-upcoming-categories");
  const mobileList = document.getElementById("mobile-sidebar-categories-list");

  let completedMarkup = "";
  let upcomingMarkup = "";
  let mobileMarkup = "";

  COMPONENT_DATA.categories.forEach(cat => {
    const isCompleted = cat.status === "Completed";
    const markup = `
      <li>
        <a href="#category/${cat.id}" class="sidebar-item-link">
          <span class="sidebar-icon">${cat.icon}</span>
          <span class="sidebar-text" style="margin-right:auto; margin-left:0.5rem;">${cat.name}</span>
          <span class="sidebar-badge ${cat.status.toLowerCase()}">${isCompleted ? cat.count : 'roadmap'}</span>
        </a>
      </li>
    `;

    if (isCompleted) {
      completedMarkup += markup;
    } else {
      upcomingMarkup += markup;
    }
    mobileMarkup += markup;
  });

  if (completedList) completedList.innerHTML = completedMarkup;
  if (upcomingList) upcomingList.innerHTML = upcomingMarkup;
  if (mobileList) mobileList.innerHTML = mobileMarkup;
}

// --- 5. Code Loading & Rendering System ---
let loadedHTMLSource = "";
let loadedCSSSource = "";
let parsedVariables = {}; // Stores default values for variables: { name: { value, type } }

function parseCSSVariables(cssText) {
  const variables = {};
  // Match variables inside :root or other rules
  const varRegex = /(--[a-zA-Z0-9\-_]+)\s*:\s*([^;}\n]+)/g;
  let match;
  while ((match = varRegex.exec(cssText)) !== null) {
    const name = match[1].trim();
    const value = match[2].trim();

    // Categorize type (color vs dimension/spacing vs generic)
    let type = "text";
    if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) {
      type = "color";
    } else if (value.endsWith("px") || value.endsWith("rem") || value.endsWith("em") || value.endsWith("%")) {
      type = "dimension";
    }

    variables[name] = { value, type };
  }
  return variables;
}

function renderCustomizerPanel() {
  const panel = document.getElementById("customizer-vars-panel");
  if (!panel) return;

  const varNames = Object.keys(parsedVariables);
  if (varNames.length === 0) {
    panel.innerHTML = `
      <div class="playground-empty-state">
        <span class="empty-state-icon">🔧</span>
        <p>No editable CSS variables found in this component.</p>
      </div>
    `;
    return;
  }

  let html = "";
  varNames.forEach(name => {
    const item = parsedVariables[name];
    const cleanName = name.replace("--", "").replace(/\-/g, " ");

    if (item.type === "color") {
      html += `
        <div class="customizer-group">
          <label class="customizer-label" for="var-${name}">${cleanName}</label>
          <div class="customizer-control-wrapper">
            <input type="color" class="customizer-color-picker" id="color-picker-${name}" data-var="${name}" value="${convertToHex(item.value)}">
            <input type="text" class="customizer-input-text var-input" id="var-${name}" data-var="${name}" value="${item.value}">
          </div>
        </div>
      `;
    } else if (item.type === "dimension") {
      // Split numeric value and unit
      const numMatch = item.value.match(/^([\d\.]+)([a-zA-Z%]+)$/);
      if (numMatch) {
        const numVal = parseFloat(numMatch[1]);
        const unit = numMatch[2];
        const isPx = unit === "px";
        const maxVal = isPx ? 100 : 5;
        const stepVal = isPx ? 1 : 0.05;

        html += `
          <div class="customizer-group">
            <label class="customizer-label" for="var-${name}">${cleanName}</label>
            <div class="customizer-slider-wrapper">
              <input type="range" class="customizer-input-range var-slider" id="slider-${name}" data-var="${name}" data-unit="${unit}" min="0" max="${maxVal}" step="${stepVal}" value="${numVal}">
              <input type="text" class="customizer-input-text var-input" id="var-${name}" data-var="${name}" value="${item.value}" style="max-width: 80px;">
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="customizer-group">
            <label class="customizer-label" for="var-${name}">${cleanName}</label>
            <input type="text" class="customizer-input-text var-input" id="var-${name}" data-var="${name}" value="${item.value}">
          </div>
        `;
      }
    } else {
      html += `
        <div class="customizer-group">
          <label class="customizer-label" for="var-${name}">${cleanName}</label>
          <input type="text" class="customizer-input-text var-input" id="var-${name}" data-var="${name}" value="${item.value}">
        </div>
      `;
    }
  });

  panel.innerHTML = html;

  // Bind active customizer input events
  attachCustomizerEvents();
}

// Convert common CSS colors to Hex for HTML5 <input type="color"> compatibility
function convertToHex(colorStr) {
  colorStr = colorStr.trim();
  if (colorStr.startsWith("#")) {
    if (colorStr.length === 4) {
      return "#" + colorStr[1] + colorStr[1] + colorStr[2] + colorStr[2] + colorStr[3] + colorStr[3];
    }
    return colorStr;
  }
  // Fallback map for common words
  const colors = {
    "white": "#ffffff", "black": "#000000", "transparent": "#ffffff"
  };
  return colors[colorStr.toLowerCase()] || "#6366f1";
}

function updateIframeVariable(name, value) {
  const iframe = document.getElementById("component-live-iframe");
  if (!iframe || !iframe.contentWindow) return;

  try {
    iframe.contentWindow.document.documentElement.style.setProperty(name, value);
    iframe.contentWindow.document.body.style.setProperty(name, value);
    // Find matching classes and set properties if nested
    const allElements = iframe.contentWindow.document.querySelectorAll("*");
    allElements.forEach(el => {
      el.style.setProperty(name, value);
    });
  } catch (e) {
    // Cross-origin issues fallback (won't happen locally)
  }
}

function attachCustomizerEvents() {
  const textInputs = document.querySelectorAll(".var-input");
  textInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      const name = e.target.getAttribute("data-var");
      const val = e.target.value;
      updateIframeVariable(name, val);

      // Sync color picker or range slider if exists
      const picker = document.getElementById(`color-picker-${name}`);
      if (picker) picker.value = convertToHex(val);

      const slider = document.getElementById(`slider-${name}`);
      if (slider) {
        const numMatch = val.match(/^([\d\.]+)/);
        if (numMatch) slider.value = parseFloat(numMatch[1]);
      }
    });
  });

  const colorPickers = document.querySelectorAll(".customizer-color-picker");
  colorPickers.forEach(picker => {
    picker.addEventListener("input", (e) => {
      const name = e.target.getAttribute("data-var");
      const val = e.target.value;
      updateIframeVariable(name, val);

      const txt = document.getElementById(`var-${name}`);
      if (txt) txt.value = val;
    });
  });

  const sliders = document.querySelectorAll(".var-slider");
  sliders.forEach(slider => {
    slider.addEventListener("input", (e) => {
      const name = e.target.getAttribute("data-var");
      const unit = e.target.getAttribute("data-unit");
      const val = e.target.value + unit;
      updateIframeVariable(name, val);

      const txt = document.getElementById(`var-${name}`);
      if (txt) txt.value = val;
    });
  });
}

function resetCustomizerDemo() {
  // Revert all variables to default parsed values
  Object.keys(parsedVariables).forEach(name => {
    const item = parsedVariables[name];
    updateIframeVariable(name, item.value);
  });
  renderCustomizerPanel();
  showToast("Demo variables restored successfully!");
}

async function loadComponentSourceCode() {
  const htmlTarget = document.getElementById("code-html-target");
  const cssTarget = document.getElementById("code-css-target");

  if (!htmlTarget || !cssTarget) return;

  const categoryId = state.activeCategory;
  const componentId = state.activeComponent;

  const htmlPath = `components/${categoryId}/${componentId}/index.html`;
  const cssPath = `components/${categoryId}/${componentId}/style.css`;

  // Fetch HTML Code
  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error();
    const raw = await res.text();
    loadedHTMLSource = raw;
    htmlTarget.innerHTML = runHTMLTokenizer(raw);
  } catch (err) {
    htmlTarget.textContent = "Failed to load HTML markup file.";
    loadedHTMLSource = "";
  }

  // Fetch CSS Code
  try {
    const res = await fetch(cssPath);
    if (!res.ok) throw new Error();
    const raw = await res.text();
    loadedCSSSource = raw;
    cssTarget.innerHTML = runCSSTokenizer(raw);

    // Parse variables for customizer panel
    parsedVariables = parseCSSVariables(raw);
    renderCustomizerPanel();
  } catch (err) {
    cssTarget.textContent = "Failed to load CSS stylesheet classes.";
    loadedCSSSource = "";
    parsedVariables = {};
    renderCustomizerPanel();
  }
}

// --- 6. Clipboard Mechanism & Toast Warnings ---
function showToast(message) {
  const container = document.getElementById("toast-alerts-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>📋</span> ${message}`;

  container.appendChild(toast);

  // Remove toast after duration
  setTimeout(() => {
    toast.style.animation = "slideInToast 0.2s reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 2500);
}

function handleCopyAction(type, buttonEl) {
  const codeToCopy = type === "html" ? loadedHTMLSource : loadedCSSSource;

  if (!codeToCopy) {
    showToast("No active code found to write to clipboard.");
    return;
  }

  const originalHtml = buttonEl ? buttonEl.innerHTML : "";

  function animateButtonSuccess() {
    if (!buttonEl) return;

    // Set success text with smooth visual animation feedback
    buttonEl.innerHTML = `✓ ${type.toUpperCase()} Copied`;
    buttonEl.style.transform = "scale(1.05)";
    buttonEl.style.backgroundColor = "var(--color-success)";
    buttonEl.style.color = "white";

    setTimeout(() => {
      buttonEl.innerHTML = originalHtml;
      buttonEl.style.transform = "";
      buttonEl.style.backgroundColor = "";
      buttonEl.style.color = "";
    }, 2000);
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      showToast(`Successfully copied ${type.toUpperCase()} block!`);
      animateButtonSuccess();
    }).catch(() => {
      fallbackCopyTextToClipboard(codeToCopy, type, animateButtonSuccess);
    });
  } else {
    fallbackCopyTextToClipboard(codeToCopy, type, animateButtonSuccess);
  }
}

function fallbackCopyTextToClipboard(text, type, successCallback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Make it off-screen and invisible
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  textArea.style.opacity = "0";
  textArea.setAttribute("aria-hidden", "true");

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showToast(`Successfully copied ${type.toUpperCase()} block!`);
      if (successCallback) successCallback();
    } else {
      showToast("Failed to write clipboard data.");
    }
  } catch (err) {
    showToast("Failed to write clipboard data.");
  }

  document.body.removeChild(textArea);
}

// Client-side file triggers downloader
function triggerComponentDownload() {
  const categoryId = state.activeCategory;
  const componentId = state.activeComponent;

  if (!categoryId || !componentId) return;

  const htmlFilename = `${componentId}.html`;
  const cssFilename = `${componentId}.css`;

  // Helper to trigger save dialogs
  function downloadBlob(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  if (loadedHTMLSource) {
    downloadBlob(loadedHTMLSource, htmlFilename, "text/html");
  }
  if (loadedCSSSource) {
    downloadBlob(loadedCSSSource, cssFilename, "text/css");
  }

  showToast(`Initiated download for ${componentId} templates!`);
}

function triggerFullscreenSandbox() {
  const categoryId = state.activeCategory;
  const componentId = state.activeComponent;

  if (!categoryId || !componentId) return;

  const fullUrl = `components/${categoryId}/${componentId}/index.html`;
  window.open(fullUrl, "_blank");
}

// --- 7. Sandbox controls ---
function updateSandboxResponsiveWidth(size) {
  const wrapper = document.getElementById("sandbox-preview-container");
  const iframe = document.getElementById("component-live-iframe");

  if (!wrapper || !iframe) return;

  // Visual cues update
  const buttons = document.querySelectorAll(".resp-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-size") === size) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (size === "mobile") {
    iframe.style.maxWidth = "375px";
  } else if (size === "tablet") {
    iframe.style.maxWidth = "768px";
  } else {
    // Desktop View
    iframe.style.maxWidth = "100%";
  }
}

function updateSandboxTheme(theme) {
  const container = document.getElementById("sandbox-preview-container");
  const iframe = document.getElementById("component-live-iframe");

  if (!container) return;

  // Visual buttons highlight
  const buttons = document.querySelectorAll(".theme-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-theme") === theme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (theme === "dark") {
    container.style.backgroundColor = "#0b111e";
    container.style.backgroundImage = "radial-gradient(#1e293b 1px, transparent 1px)";
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.document.documentElement.setAttribute("data-theme", "dark");
        iframe.contentWindow.document.body.style.backgroundColor = "#0b111e";
        iframe.contentWindow.document.body.style.color = "#f8fafc";
      } catch (e) {
        // Handle cross-origin issues safely (they shouldn't happen on same-origin http server)
      }
    }
  } else {
    container.style.backgroundColor = "#f8fafc";
    container.style.backgroundImage = "radial-gradient(var(--color-border) 1px, transparent 1px)";
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.document.documentElement.setAttribute("data-theme", "light");
        iframe.contentWindow.document.body.style.backgroundColor = "#fafafa";
        iframe.contentWindow.document.body.style.color = "#0f172a";
      } catch (e) {
        // Safely fail
      }
    }
  }
}

// --- 8. Unified Router Event Coordinator ---
function navigate() {
  // Parse location hash
  parseRoute();

  // Scroll viewport smoothly to top on routing
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update layout header nav active selections
  updateLayoutShell();

  // Pick target container
  const mainTarget = document.getElementById("main-content-target");
  if (!mainTarget) return;

  // Render correct route template
  const renderer = ViewRenderers[state.currentRoute];
  if (renderer) {
    mainTarget.innerHTML = renderer();

    // Attach lazy load iframe spin controls if needed
    attachLazyLoadingIframeEvents();
  }

  // Load component source code on detail page
  if (state.currentRoute === "component") {
    loadComponentSourceCode();
  }

  // Attach dynamic event listeners inside newly rendered layouts
  attachViewEventListeners();
}

function attachLazyLoadingIframeEvents() {
  // Category preview frames or details sandbox loader triggers
  const frames = document.querySelectorAll("iframe");
  frames.forEach(iframe => {
    iframe.addEventListener("load", () => {
      const loader = iframe.previousElementSibling;
      if (loader && loader.classList.contains("thumb-loader-spinner")) {
        loader.style.display = "none";
      }
    });
  });
}

// --- 9. Dynamic Interactive Subviews Listener Engine ---
function attachViewEventListeners() {
  // Search Input trigger inside Category Page
  const searchInput = document.getElementById("live-search-input");
  if (searchInput) {
    searchInput.focus();
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;

      // Fast re-render of components lists to achieve instant update feel
      reRenderFilteredGrid();
    });
  }

  // Clear search query button action
  const clearBtn = document.getElementById("clear-search-trigger");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      state.searchQuery = "";
      navigate();
    });
  }

  // Multi-checkbox features filters trigger
  const filterCheckboxes = document.querySelectorAll(".filter-checkbox-input");
  filterCheckboxes.forEach(cb => {
    cb.addEventListener("change", (e) => {
      const filterKey = e.target.getAttribute("data-filter");
      state.activeFilters[filterKey] = e.target.checked;

      // Highlighting visually checked filter labels
      const parentLabel = e.target.closest(".filter-checkbox-label");
      if (parentLabel) {
        if (e.target.checked) {
          parentLabel.classList.add("checked");
        } else {
          parentLabel.classList.remove("checked");
        }
      }

      reRenderFilteredGrid();
    });
  });

  // Reset filters and search queries completely
  const resetBtn = document.getElementById("reset-filters-and-search");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.searchQuery = "";
      Object.keys(state.activeFilters).forEach(k => state.activeFilters[k] = false);
      navigate();
    });
  }

  // Sandbox Toolbar controls triggers (Mobile/Tablet/Desktop resize sandboxes)
  const btnMobile = document.getElementById("resp-mobile");
  const btnTablet = document.getElementById("resp-tablet");
  const btnDesktop = document.getElementById("resp-desktop");

  if (btnMobile) btnMobile.addEventListener("click", () => updateSandboxResponsiveWidth("mobile"));
  if (btnTablet) btnTablet.addEventListener("click", () => updateSandboxResponsiveWidth("tablet"));
  if (btnDesktop) btnDesktop.addEventListener("click", () => updateSandboxResponsiveWidth("desktop"));

  // Theme selector triggers
  const btnLight = document.getElementById("theme-light");
  const btnDark = document.getElementById("theme-dark");

  if (btnLight) btnLight.addEventListener("click", () => updateSandboxTheme("light"));
  if (btnDark) btnDark.addEventListener("click", () => updateSandboxTheme("dark"));

  // Reset Demo action trigger
  const btnReset = document.getElementById("btn-reset-trigger");
  if (btnReset) btnReset.addEventListener("click", resetCustomizerDemo);

  // Download action trigger
  const btnDownload = document.getElementById("btn-download-trigger");
  if (btnDownload) btnDownload.addEventListener("click", triggerComponentDownload);

  // Fullscreen action trigger
  const btnFullscreen = document.getElementById("btn-fullscreen-trigger");
  if (btnFullscreen) btnFullscreen.addEventListener("click", triggerFullscreenSandbox);

  // Source Clipboard actions
  const copyHtmlBtn = document.getElementById("btn-copy-html-trigger");
  const copyCssBtn = document.getElementById("btn-copy-css-trigger");
  const copyHtmlInnerBtn = document.getElementById("btn-copy-html-inner");
  const copyCssInnerBtn = document.getElementById("btn-copy-css-inner");

  if (copyHtmlBtn) copyHtmlBtn.addEventListener("click", () => handleCopyAction("html", copyHtmlBtn));
  if (copyCssBtn) copyCssBtn.addEventListener("click", () => handleCopyAction("css", copyCssBtn));
  if (copyHtmlInnerBtn) copyHtmlInnerBtn.addEventListener("click", () => handleCopyAction("html", copyHtmlInnerBtn));
  if (copyCssInnerBtn) copyCssInnerBtn.addEventListener("click", () => handleCopyAction("css", copyCssInnerBtn));
}

// Perform lightning-quick re-render of category cards grid on filter changes
function reRenderFilteredGrid() {
  if (state.currentRoute !== "category") return;

  const category = COMPONENT_DATA.categories.find(c => c.id === state.activeCategory);
  if (!category) return;

  const targetGrid = document.querySelector(".components-card-grid");
  const targetStatusBar = document.querySelector(".search-status-bar");

  if (!targetGrid || !targetStatusBar) return;

  // Filter components list
  const filtered = (category.components || []).filter(comp => {
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      const matchesName = comp.name.toLowerCase().includes(query);
      const matchesDesc = comp.description.toLowerCase().includes(query);
      const matchesTags = comp.tags.some(t => t.toLowerCase().includes(query));
      if (!matchesName && !matchesDesc && !matchesTags) return false;
    }

    for (const filterKey of Object.keys(state.activeFilters)) {
      if (state.activeFilters[filterKey] === true) {
        if (comp[filterKey] !== true) return false;
      }
    }
    return true;
  });

  // Update Status Text
  targetStatusBar.innerHTML = `
    <div class="search-status-text">Showing <span>${filtered.length}</span> of <span>${category.components.length}</span> components</div>
    ${(state.searchQuery || Object.values(state.activeFilters).some(v => v)) ? `
      <button class="btn btn-secondary" id="reset-filters-and-search" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">Clear All</button>
    ` : ""}
  `;

  // Update Grid Cards
  if (filtered.length === 0) {
    targetGrid.innerHTML = `
      <div class="empty-results" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <h3>No matching components found</h3>
        <p>Try clearing some filters or searching for different terms.</p>
      </div>
    `;
  } else {
    targetGrid.innerHTML = filtered.map(comp => {
      const frameSrc = `components/${category.id}/${comp.id}/index.html`;
      return `
        <div class="component-card" data-comp-id="${comp.id}">
          <div class="component-preview-thumb">
            <span class="thumb-loader-spinner">🌀</span>
            <iframe class="component-preview-thumb-iframe" src="${frameSrc}" title="${comp.name} Preview Thumbnail" loading="lazy"></iframe>
          </div>

          <div class="component-card-content">
            <div class="component-card-header">
              <h3 class="component-card-title">${comp.name}</h3>
              <span class="diff-badge ${comp.difficulty.toLowerCase()}">${comp.difficulty}</span>
            </div>

            <p class="component-card-desc">${comp.description}</p>

            <div class="component-card-tags">
              ${comp.tags.map(t => `<span class="comp-tag">${t}</span>`).join("")}
            </div>

            <div class="component-card-features">
              <span class="card-feature-indicator ${comp.responsive ? 'enabled' : ''}" title="${comp.responsive ? 'Responsive Design' : 'Fixed Sizing'}">
                📱 ${comp.responsive ? 'Yes' : 'No'}
              </span>
              <span class="card-feature-indicator ${comp.dark_mode ? 'enabled' : ''}" title="${comp.dark_mode ? 'Dark Mode Friendly' : 'Light Mode Only'}">
                🌙 ${comp.dark_mode ? 'Yes' : 'No'}
              </span>
              <span class="card-feature-indicator ${comp.accessible ? 'enabled' : ''}" title="${comp.accessible ? 'Accessible Focus States' : 'Not Optimized'}">
                ♿ ${comp.accessible ? 'Yes' : 'No'}
              </span>
              <span class="card-feature-indicator ${comp.animation ? 'enabled' : ''}" title="${comp.animation ? 'CSS Animations Included' : 'No Animation'}">
                ✨ ${comp.animation ? 'Yes' : 'No'}
              </span>
            </div>

            <div class="component-card-footer">
              <a href="#component/${category.id}/${comp.id}" class="btn btn-primary btn-card-action">Open Preview & Code</a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Re-attach specific subviews actions like Resets & Lazy Load frames
  attachLazyLoadingIframeEvents();
  const resetBtn = document.getElementById("reset-filters-and-search");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.searchQuery = "";
      Object.keys(state.activeFilters).forEach(k => state.activeFilters[k] = false);
      navigate();
    });
  }
}

// --- 10. Global UI Events & Mobile Sidebar Drawer Panel Co-coordinators ---
function setupGlobalUIListeners() {
  // Mobile drawer sidebar toggle controls
  const burgerBtn = document.getElementById("burger-menu-btn");
  const drawerOverlay = document.getElementById("mobile-sidebar-drawer-overlay");
  const closeBtn = document.getElementById("drawer-close-trigger-btn");

  function openDrawer() {
    if (drawerOverlay) {
      drawerOverlay.classList.add("open");
      drawerOverlay.setAttribute("aria-hidden", "false");
    }
  }

  function closeDrawer() {
    if (drawerOverlay) {
      drawerOverlay.classList.remove("open");
      drawerOverlay.setAttribute("aria-hidden", "true");
    }
  }

  if (burgerBtn) burgerBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", (e) => {
      if (e.target === drawerOverlay) {
        closeDrawer();
      }
    });
  }

  // Close Mobile menu drawer automatically when clicking any links inside it
  document.addEventListener("click", (e) => {
    if (e.target.closest(".mobile-sidebar-drawer .sidebar-item-link") || e.target.closest(".mobile-sidebar-drawer .logo")) {
      closeDrawer();
    }
  });

  // Global Command Palette Variables & Functions
  let selectedResultIndex = -1;
  let currentResults = [];

  function openGlobalSearch() {
    const modal = document.getElementById("global-search-modal");
    const input = document.getElementById("global-search-input");
    if (!modal || !input) return;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    input.value = "";
    input.focus();
    renderGlobalSearchResults("");
  }

  function closeGlobalSearch() {
    const modal = document.getElementById("global-search-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  function renderGlobalSearchResults(query) {
    const container = document.getElementById("global-search-results");
    if (!container) return;

    query = query.trim().toLowerCase();
    currentResults = [];

    // Match completed categories
    const matchedCategories = COMPONENT_DATA.categories.filter(cat => {
      return cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    });

    // Match completed components inside Completed categories
    const matchedComponents = [];
    COMPONENT_DATA.categories.forEach(cat => {
      if (cat.status === "Completed" && cat.components) {
        cat.components.forEach(comp => {
          const matchName = comp.name.toLowerCase().includes(query);
          const matchDesc = comp.description.toLowerCase().includes(query);
          const matchTags = comp.tags.some(t => t.toLowerCase().includes(query));
          const matchCat = cat.name.toLowerCase().includes(query);
          if (matchName || matchDesc || matchTags || matchCat) {
            matchedComponents.push({
              ...comp,
              categoryId: cat.id,
              categoryName: cat.name,
              icon: cat.icon
            });
          }
        });
      }
    });

    let html = "";

    if (matchedCategories.length > 0) {
      html += `<div class="search-result-group-title">Categories</div>`;
      matchedCategories.forEach(cat => {
        const isCompleted = cat.status === "Completed";
        const badge = isCompleted ? `${cat.count} elements` : "Roadmap";
        const targetHash = `#category/${cat.id}`;
        const resItem = { type: "category", hash: targetHash, name: cat.name };
        currentResults.push(resItem);

        html += `
          <a href="${targetHash}" class="search-result-item" data-index="${currentResults.length - 1}">
            <div class="search-result-item-main">
              <span class="search-result-item-icon">${cat.icon}</span>
              <span class="search-result-item-name">${cat.name}</span>
              <span class="search-result-item-desc">${cat.description}</span>
            </div>
            <span class="search-result-item-badge">${badge}</span>
          </a>
        `;
      });
    }

    if (matchedComponents.length > 0) {
      html += `<div class="search-result-group-title">Components</div>`;
      matchedComponents.forEach(comp => {
        const targetHash = `#component/${comp.categoryId}/${comp.id}`;
        const resItem = { type: "component", hash: targetHash, name: comp.name };
        currentResults.push(resItem);

        html += `
          <a href="${targetHash}" class="search-result-item" data-index="${currentResults.length - 1}">
            <div class="search-result-item-main">
              <span class="search-result-item-icon">${comp.icon || "🧩"}</span>
              <span class="search-result-item-name">${comp.name}</span>
              <span class="search-result-item-desc">${comp.description}</span>
            </div>
            <span class="search-result-item-badge">${comp.difficulty}</span>
          </a>
        `;
      });
    }

    if (currentResults.length === 0) {
      html = `
        <div class="search-modal-empty">
          <div class="search-modal-empty-icon">🔍</div>
          <p>No categories or components matched "<strong>${query}</strong>".</p>
        </div>
      `;
    }

    container.innerHTML = html;
    selectedResultIndex = -1;

    // Attach click events on the newly rendered search list items to make sure clicks immediately route
    const renderedItems = container.querySelectorAll(".search-result-item");
    renderedItems.forEach(item => {
      item.addEventListener("click", () => {
        closeGlobalSearch();
      });
    });
  }

  function updateFocusedItem(items) {
    items.forEach(item => item.classList.remove("focused"));
    if (selectedResultIndex >= 0 && selectedResultIndex < items.length) {
      const activeItem = items[selectedResultIndex];
      activeItem.classList.add("focused");
      activeItem.scrollIntoView({ block: "nearest" });
    }
  }

  // Hotkey navigation helper mapping '/' and 'Cmd+K' / 'Ctrl+K' keys to global command palette
  document.addEventListener("keydown", (e) => {
    const isSearchFocused = document.activeElement === document.getElementById("global-search-input") ||
                            document.activeElement === document.getElementById("live-search-input");

    if ((e.key === "/" && !isSearchFocused) || ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey))) {
      e.preventDefault();
      openGlobalSearch();
    } else if (e.key === "Escape") {
      closeGlobalSearch();
    }
  });

  // Top Search Trigger Action (Opens Global Search Command Palette)
  const topSearchBtn = document.getElementById("top-search-bar-trigger");
  if (topSearchBtn) {
    topSearchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openGlobalSearch();
    });
  }

  // Close search modal triggers
  const searchCloseBtn = document.getElementById("global-search-close-btn");
  if (searchCloseBtn) {
    searchCloseBtn.addEventListener("click", closeGlobalSearch);
  }

  const searchModalOverlay = document.getElementById("global-search-modal");
  if (searchModalOverlay) {
    searchModalOverlay.addEventListener("click", (e) => {
      if (e.target === searchModalOverlay) {
        closeGlobalSearch();
      }
    });
  }

  // Search input typing and keyboard navigation listeners
  const globalSearchInput = document.getElementById("global-search-input");
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", (e) => {
      renderGlobalSearchResults(e.target.value);
    });

    globalSearchInput.addEventListener("keydown", (e) => {
      const items = document.querySelectorAll("#global-search-results .search-result-item");
      if (items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex + 1) % currentResults.length;
        updateFocusedItem(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedResultIndex = (selectedResultIndex - 1 + currentResults.length) % currentResults.length;
        updateFocusedItem(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedResultIndex >= 0 && selectedResultIndex < currentResults.length) {
          const matched = currentResults[selectedResultIndex];
          window.location.hash = matched.hash;
          closeGlobalSearch();
        } else if (items.length > 0) {
          const matched = currentResults[0];
          window.location.hash = matched.hash;
          closeGlobalSearch();
        }
      }
    });
  }

  // Modern Theme Switching mechanism utilizing LocalStorage
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  // Fetch Theme State
  const localTheme = localStorage.getItem("modern-css-components-theme");
  if (localTheme === "dark") {
    state.theme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  } else {
    state.theme = "light";
    document.documentElement.setAttribute("data-theme", "light");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.add("dark-mode-smooth-transition");

      if (state.theme === "light") {
        state.theme = "dark";
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️";
        localStorage.setItem("modern-css-components-theme", "dark");
      } else {
        state.theme = "light";
        document.documentElement.setAttribute("data-theme", "light");
        themeToggleBtn.textContent = "🌙";
        localStorage.setItem("modern-css-components-theme", "light");
      }

      setTimeout(() => {
        document.body.classList.remove("dark-mode-smooth-transition");
      }, 500);
    });
  }
}

// --- 11. App Bootstrapping Coordinator ---
function initApp() {
  // Render Sidebar Category menus
  renderSidebars();

  // Setup Global Core Listeners (Hamburger, search inputs, theme toggles)
  setupGlobalUIListeners();

  // Listen for hash route changes
  window.addEventListener("hashchange", navigate);

  // Parse direct landing hash to load initial layouts
  navigate();
}

// Start Single Page Application on document DOM read completion
document.addEventListener("DOMContentLoaded", initApp);
