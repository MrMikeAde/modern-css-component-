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

## 📂 Repository Structure & Components Status

The codebase is cleanly organized to allow frictionless navigation. Explore our status indicators below:

- 🟢 **Completed**: Production-ready, fully styled and documented component directories.
- 🟡 **In Progress**: Directories and structure configured; layout guidelines active.

```text
modern-css-components/
├── .github/              # Community templates and configurations
├── assets/               # Project-wide images, logos, and global graphics
├── components/           # The heart of the library: 20 distinct categories of UI components
│   ├── accordions/ 🟡    # Accordions and collapsible panels (e.g., using <details>)
│   ├── alerts/ 🟡        # Notification banners, toast layouts, and inline alerts
│   ├── avatars/ 🟡       # User profile chips, badge overlays, and status indicators
│   ├── badges/ 🟡        # Pill tags, count indicators, and micro-labels
│   ├── breadcrumbs/ 🟡    # Hierarchical page navigation trails
│   ├── buttons/ 🟢       # [COMPLETED] 25 unique, production-ready custom button elements!
│   ├── cards/ 🟡         # Content-focused cards using Grid and Container Queries
│   ├── footers/ 🟡       # Standard and complex site-wide footer layouts
│   ├── forms/ 🟡         # Accessible inputs, validation states, checkboxes, and radio buttons
│   ├── heroes/ 🟡        # Engaging intro sections, header headers, and landing banners
│   ├── loaders/ 🟡       # Infinite CSS animations, spinners, and skeleton screens
│   ├── modals/ 🟡        # Accessible pop-ups utilizing the native HTML <dialog> element
│   ├── navigation/ 🟡    # Responsive headers, dropdown menus, and sidebar panels
│   ├── pagination/ 🟡    # Next/Prev buttons and numbered list navigators
│   ├── pricing/ 🟡       # Premium comparison plans and billing toggle cards
│   ├── progress/ 🟡      # Visual task tracking bars and circular metrics
│   ├── tables/ 🟡        # Fluid, responsive, and sortable-ready data grids
│   ├── tabs/ 🟡          # Tabbed navigation panels
│   ├── tooltips/ 🟡      # Contextual info triggers and popovers
│   └── utilities/ 🟡     # Modern utility classes (screen-readers, layout wrappers, etc.)
```

---

## 🟢 Buttons Category Directory (`components/buttons/`)

Explore our newly completed collection of 25 premium button variants, designed to fit into any modern UI or SaaS application:

1. [Primary Button](./components/buttons/primary-button) - Elegant Indigo primary brand trigger.
2. [Secondary Button](./components/buttons/secondary-button) - Neutral Slate low-emphasis support action.
3. [Outline Button](./components/buttons/outline-button) - Bordered minimalist element with a solid hover sweep.
4. [Ghost Button](./components/buttons/ghost-button) - Transparent text button for low prominence.
5. [Gradient Button](./components/buttons/gradient-button) - Sunset gradient calling element with animated backgrounds.
6. [Glassmorphism Button](./components/buttons/glassmorphism-button) - Opaque frosted-glass effect suitable for deep backgrounds.
7. [Neumorphism Button](./components/buttons/neumorphism-button) - Tactile soft-shadow button with convex-to-concave transitions.
8. [Icon Button](./components/buttons/icon-button) - Circular trigger enclosing standard inline SVG elements.
9. [Rounded Pill Button](./components/buttons/rounded-pill-button) - Rounded modern pill badge CTA trigger.
10. [Animated Border Button](./components/buttons/animated-border-button) - Cyberpunk dark element with a flowing gradient outer border.
11. [Shine Hover Button](./components/buttons/shine-hover-button) - Diagonal glass-sweep sheen trigger mapping on hover.
12. [Ripple Style Button](./components/buttons/ripple-style-button) - Material design expand wave that swells outwards on clicks.
13. [Loading Button](./components/buttons/loading-button) - Disabled process button displaying a rotating circular spinner.
14. [Success Button](./components/buttons/success-button) - Confirmatory Emerald green alert interaction trigger.
15. [Danger Button](./components/buttons/danger-button) - Cautionary destructive Red trigger representing irreversible actions.
16. [Warning Button](./components/buttons/warning-button) - Amber warning action trigger for non-destructive cautions.
17. [Floating Action Button (FAB)](./components/buttons/floating-action-button) - Elevated circular element designed for float screen layouts.
18. [Social Login Button](./components/buttons/social-login-button) - Official GitHub auth brand component.
19. [3D Press Button](./components/buttons/3d-press-button) - Tactile isometric button shifting 6px down on clicks.
20. [Minimal Button](./components/buttons/minimal-button) - Scandinavian boutique editorial serif action trigger.
21. [Underline Hover Button](./components/buttons/underline-hover-button) - Low-emphasis link that grows an underline outward from center.
22. [Split Color Button](./components/buttons/split-color-button) - Dual-tone layout sweeping colors left-to-right on hover.
23. [Dark Mode Button](./components/buttons/dark-mode-button) - Dark cyber-tech button emitting glowing neon cyan shadows.
24. [Soft UI Button](./components/buttons/soft-ui-button) - Soft-lit elegant double shadow reporting button.
25. [Premium CTA Button](./components/buttons/premium-cta-button) - Luxe gold-brass gradient CTA with integrated shimmer sweeps.

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
