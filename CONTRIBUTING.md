# Contributing to Modern CSS Components

First off, thank you for considering contributing to **Modern CSS Components**! It's people like you who make the open-source community an amazing place to learn, inspire, and create.

We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new modern CSS techniques
- Adding comprehensive educational documentation

---

## Our Philosophy

Before contributing, please review our core principles:

1. **No Frameworks, No Bloat**: This project is an open-source library of copy-paste CSS components. Do not introduce build-step requirements or framework-specific setups unless they are optional configurations.
2. **Modern CSS First**: Leverage CSS Variables, Flexbox, Grid, Container Queries, Logical Properties, and modern pseudo-classes (`:has()`, `:is()`, `:where()`).
3. **No JavaScript (Unless Necessary)**: Interactive states should rely on HTML/CSS logic (like `:checked`, `:target`, CSS transitions/animations) where possible. JS should only be used if accessibility (ARIA) or complex functionality absolutely requires it.
4. **Educational & Documented**: Code should be deeply explained. Our purpose is both to provide beautiful components and to teach modern CSS best practices.
5. **Accessibility (a11y)**: Semantic HTML and proper ARIA standards are mandatory.

---

## How Can I Contribute?

### 1. Reporting Bugs
- Check the [Issues Tab](https://github.com/your-username/modern-css-components/issues) to ensure the bug hasn't been reported yet.
- Use the Bug Report template to submit details including browser, OS, and a minimal reproducible example (e.g., CodePen).

### 2. Proposing a Component
- We welcome additions! Please check our [Roadmap](ROADMAP.md) first.
- Open an Issue with the tag `proposal` to discuss your component design and modern CSS features before writing code.

### 3. Submitting Pull Requests
We use the standard GitHub Flow:

1. **Fork** the repository and create your branch from `main`.
2. Ensure you follow our [Coding Standards](docs/coding-standards.md) (Modern CSS, Logical Properties, Semantic HTML).
3. Follow the `COMPONENT_TEMPLATE.md` structure in your component's documentation.
4. Keep CSS clean, well-commented, and mobile-first.
5. Submit a pull request and describe your changes.

---

## Style & Coding Standards

To maintain a highly-maintainable, production-ready library, please adhere to:

- **Naming Conventions**: Use BEM (Block-Element-Modifier) or clean, semantic class names scoped to the component (e.g., `.card`, `.card__header`, `.card--featured`).
- **CSS Variables**: Use local CSS variables for customization (e.g., `--btn-bg`, `--btn-color`).
- **Logical Properties**: Prioritize `margin-inline`, `padding-block`, `inset-inline-start`, etc., over physical directions.
- **Responsive Design**: Implement responsive layouts using Fluid Typography, CSS Grid (`minmax()`), or Container Queries instead of heavy media-query lists where appropriate.

---

## Community

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

Thank you for helping us build the best open-source library of Modern CSS components!
