# Browser Support & Feature Detection

Our project leverages cutting-edge CSS features. To keep these components production-ready and highly accessible across various environments, we must carefully manage browser support.

---

## Navigation
[Getting Started](getting-started.md) | [Coding Standards](coding-standards.md) | [Accessibility (a11y)](accessibility.md) | [Browser Support](browser-support.md) | [Component Template](COMPONENT_TEMPLATE.md)

---

## 1. Supported Platform Matrix

Our components are written to target modern evergreen browsers (Chrome, Safari, Firefox, Edge).

We define our core target baseline as:
- **Chrome / Chromium**: 105+
- **Apple Safari**: 16+
- **Mozilla Firefox**: 110+
- **Microsoft Edge**: 105+

---

## 2. Progressive Enhancement

We follow the principle of **Progressive Enhancement**. Every component must render a clean, readable layout on older browser versions, and scale up beautifully when advanced CSS layout features are present.

### CSS Feature Detection (`@supports`)
When using extremely modern or partially supported specs, we wrap them inside native `@supports` blocks:

```css
/* Base flexbox fallback styling for wide support */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Enhancing with Grid container queries if supported */
@supports (container-type: inline-size) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
```

---

## 3. Key Feature Support Status

Below is the status of the modern CSS features used across this library:

| CSS Feature | Minimum Safari | Minimum Chrome | Minimum Firefox | Fallback Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **CSS Variables** | 9.1 | 49 | 31 | Hardcoded root colors inside fallback properties. |
| **Grid Layout** | 10.1 | 57 | 52 | Standard block formatting or Flexbox wrappers. |
| **Logical Properties**| 15 | 89 | 66 | Physical properties (e.g., `margin-left`) for older devices. |
| **Container Queries** | 16 | 105 | 110 | Standard viewport media-queries (`@media`). |
| **Parent Selector (`:has()`)** | 15.4 | 105 | 121 | Fallback static styles or clean CSS nested styling. |
| **Native `<dialog>`** | 15.4 | 37 | 98 | Basic overlay structures toggled via classes. |

---

## 4. Helpful Developer Resources

When writing or modifying component CSS, always refer to:
- [Can I Use](https://caniuse.com/) for detailed, updated support statistics.
- [MDN Web Docs](https://developer.mozilla.org/) for spec compliance standards.
- Modern CSS blogs to keep abreast of rapid changes in platform engines.
