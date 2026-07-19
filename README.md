# Modern CSS Components

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)
[![HTML5](https://img.shields.io/badge/HTML5-supported-orange.svg)](#tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-modern-blue.svg)](#tech-stack)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-purple.svg)](#tech-stack)
[![Accessibility](https://img.shields.io/badge/Accessibility-a11y-success.svg)](docs/accessibility.md)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg)](#)

A production-ready, highly educational, and beautifully designed library of modern HTML5 & CSS3 UI components.

This repository is **NOT a framework** (it is not another Bootstrap or Tailwind). Instead, it is an open-source catalog of pristine, modular, copy-paste-ready components that leverage modern CSS specifications to the absolute fullest—requiring **no JavaScript** unless essential for native web accessibility.

---

## 🎯 Vision & Philosophy

Modern CSS is incredibly powerful. Features like CSS Grid, Flexbox, Container Queries, CSS Custom Properties (Variables), Logical Properties, and modern pseudo-classes (`:has()`, `:is()`, `:where()`) have rendered many heavy JavaScript and CSS framework dependencies obsolete.

This project exists to:
1. **Empower Developers**: Provide gorgeous, accessible, performance-focused components that can be immediately integrated into any codebase.
2. **Educate the Community**: Serve as an interactive textbook for modern CSS. Each component is thoroughly documented, showing *how* and *why* modern CSS rules are applied.
3. **Set Standards**: Champion semantic HTML5, absolute accessibility (a11y), and performance optimization.

---

## 🛠️ Tech Stack & Pillars

- **HTML5**: Strictly semantic tags (`<nav>`, `<article>`, `<header>`, `<dialog>`) for native structural meaning.
- **CSS3 & Custom Properties**: Dynamic theme capabilities and micro-customization using native variables.
- **Flexbox & CSS Grid**: Layouts that scale beautifully and intuitively without old-school hacks.
- **Container Queries**: Component-driven responsive design that adapts to parent dimensions, not just the viewport size.
- **Logical Properties**: Future-proof styling that easily supports multi-directional text layouts (e.g., LTR and RTL) using `margin-inline`, `padding-block`, etc.
- **Mobile-First Workflow**: Styles designed for small screens first, progressively enhanced for larger displays.
- **Accessibility (a11y)**: Built-in focus management, high color contrast, screen-reader optimizations, and standard ARIA integration.

---

## 📂 Repository Structure

The codebase is cleanly organized to allow frictionless navigation:

```text
modern-css-components/
├── .github/              # Community templates and configurations
├── assets/               # Project-wide images, logos, and global graphics
├── components/           # The heart of the library: 20 distinct categories of UI components
│   ├── accordions/       # Accordions and collapsible panels (e.g., using <details>)
│   ├── alerts/           # Notification banners, toast layouts, and inline alerts
│   ├── avatars/          # User profile chips, badge overlays, and status indicators
│   ├── badges/           # Pill tags, count indicators, and micro-labels
│   ├── breadcrumbs/      # Hierarchical page navigation trails
│   ├── buttons/          # Standard, outline, interactive state, and group buttons
│   ├── cards/            # Content-focused cards using Grid and Container Queries
│   ├── footers/          # Standard and complex site-wide footer layouts
│   ├── forms/            # Accessible inputs, validation states, checkboxes, and radio buttons
│   ├── heroes/           # Engaging intro sections, header headers, and landing banners
│   ├── loaders/          # Infinite CSS animations, spinners, and skeleton screens
│   ├── modals/           # Accessible pop-ups utilizing the native HTML <dialog> element
│   ├── navigation/       # Responsive headers, dropdown menus, and sidebar panels
│   ├── pagination/       # Next/Prev buttons and numbered list navigators
│   ├── pricing/          # Premium comparison plans and billing toggle cards
│   ├── progress/         # Visual task tracking bars and circular metrics
│   ├── tables/           # Fluid, responsive, and sortable-ready data grids
│   ├── tabs/             # Tabbed navigation panels
│   ├── tooltips/         # Contextual info triggers and popovers
│   └── utilities/        # Modern utility classes (screen-readers, layout wrappers, etc.)
├── docs/                 # Guides, conventions, and design specs
│   ├── COMPONENT_TEMPLATE.md  # Standardized blueprint for implementing components
│   ├── accessibility.md  # Screen reader, focus, and ARIA rules
│   ├── browser-support.md# Native compatibility guidelines
│   ├── coding-standards.md# Writing rules (naming, CSS structure, logical properties)
│   └── getting-started.md# Overview on using, copy-pasting, and organizing
├── examples/             # Full page templates and implementation examples
├── CHANGELOG.md          # History of versions and updates
├── CODE_OF_CONDUCT.md    # Contributor rules and guidelines
├── CONTRIBUTING.md       # Step-by-step contribution guidelines
├── LICENSE               # MIT license detailing usage rights
└── ROADMAP.md            # Vision of future phases and development milestones
```

---

## 📖 Educational Philosophy

Every folder and component serves as a learning reference:
- **No Mystery Code**: All declarations are clear. We explain *why* a particular CSS property was chosen (e.g., using `inset-inline-start` instead of `left` to handle RTL layouts elegantly).
- **The Power of Pure CSS**: We challenge the notion that "interactive" requires JavaScript. We use native elements like `<details>`, CSS nesting, transition delays, and native `<dialog>` to handle states seamlessly.
- **Copy & Learn**: Developers don't just import an NPM package; they inspect, copy, customize, and understand exactly what is executing.

---

## 🚀 Getting Started

To explore or integrate components into your projects:

1. **Browse**: Navigate to the `components/` directory and find the component type you need.
2. **Read the Docs**: Every component directory contains a README detailing:
   - Visual mockups & structure
   - Semantic HTML source code
   - Clean CSS variables and styles
   - Responsive and Accessibility notes
3. **Copy & Paste**: Simply copy the HTML and CSS directly into your own project!
4. **Customize**: Modify the local CSS Variables (e.g., `--btn-bg: #4f46e5`) to match your brand style instantly.

For a deeper introduction, see [Getting Started Guide](docs/getting-started.md).

---

## 🤝 Contributing

We are passionate about making this the definitive resource for modern CSS techniques. Contributions of new components, standard practices, or bug fixes are highly welcome!

Please read our [Contributing Guide](CONTRIBUTING.md) to understand our coding standards, BEM naming conventions, and validation process before opening a Pull Request.

---

## 🗺️ Future Roadmap

- **Phase 1 (Complete)**: Formulate the architectural repository blueprint, coding standards, and documentation templates.
- **Phase 2 (In Progress)**: Design and build the baseline HTML/CSS codes for all 20 categories.
- **Phase 3 (Planned)**: Release advanced Container Query showcases, native light/dark mode implementations, and an interactive web portal for seamless visual copying.

Read more in our [Roadmap](ROADMAP.md).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
