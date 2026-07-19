# Accessibility Guidelines (a11y)

In **Modern CSS Components**, accessibility is not an afterthought; it is a fundamental requirement. To make our components truly production-ready, we build them to be inclusive, screen-reader friendly, and perfectly keyboard-navigable.

---

## Navigation
[Getting Started](getting-started.md) | [Coding Standards](coding-standards.md) | [Accessibility (a11y)](accessibility.md) | [Browser Support](browser-support.md) | [Component Template](COMPONENT_TEMPLATE.md)

---

## 1. Native HTML Over ARIA Hacks

The first rule of ARIA is: **Do not use ARIA if a native HTML element already has the correct accessibility features built-in.**

Whenever possible, we prefer:
* `<button>` instead of `<div role="button">`
* `<details>` and `<summary>` instead of a JavaScript-powered accordion `div`
* `<dialog>` instead of a manual backdrop and keyboard-trapping modal frame
* `<a>` (with an `href`) instead of span elements styled as hyperlinks

---

## 2. Keyboard Navigation

Every interactive component must be fully functional using only a keyboard:
* **Focus Indicator**: Never remove focus rings using `outline: none` or `outline: 0`. Instead, style them beautifully using `:focus-visible` so keyboard users have a clear visual pointer, while mouse users don't see distracting rings.
* **Logical Tab Index**: Avoid overriding the default document tab sequence with custom positive `tabindex` values. Use semantic ordering instead. If an element needs to be tabbed but is not natively focusable, use `tabindex="0"`.

```css
/* Styling focus rings for keyboard navigators */
.interactive-element:focus-visible {
  outline: 2px solid var(--color-focus, #3b82f6);
  outline-offset: 4px;
}
```

---

## 3. Screen Reader Optimization

* **ARIALabels**: Ensure non-text components (like icon-only buttons) have an explicit description:
  ```html
  <button type="button" aria-label="Close modal">
    <svg>...</svg>
  </button>
  ```
* **SR-Only Utilities**: Use an invisible utility class (`.sr-only`) to output descriptive text for screen readers while hiding it visually:
  ```html
  <a href="/cart">
    <svg>...</svg>
    <span class="sr-only">Shopping Cart (3 items)</span>
  </a>
  ```
* **State Mapping**: Map interactive state visually and semantically:
  - If a dropdown is open, use `aria-expanded="true"`.
  - If a tab is selected, use `aria-selected="true"`.

---

## 4. Visual Contrast & Accessibility

* **Contrast Ratio**: Ensure all text has a minimum contrast ratio of `4.5:1` for body text and `3:1` for large text (above 18pt bold or 24pt regular) in accordance with WCAG 2.1 AA requirements.
* **Avoid Color-Only Cues**: Never use color as the *sole* way to convey state or information. Alerts, forms, and badges should combine color with semantic iconography, textual labels, or distinct patterns.
* **Prefers-Reduced-Motion**: Respect user preferences regarding motion by wrapping intensive transitions and animations inside media queries:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
