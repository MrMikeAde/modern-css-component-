# Coding Standards & Guidelines

To ensure that every component in this repository is production-ready, performant, and educational, all contributors and maintainers must strictly follow these coding standards.

---

## Navigation
[Getting Started](getting-started.md) | [Coding Standards](coding-standards.md) | [Accessibility (a11y)](accessibility.md) | [Browser Support](browser-support.md) | [Component Template](COMPONENT_TEMPLATE.md)

---

## 1. HTML Formatting & Structure

### Semantic markup is mandatory
Avoid the temptation to write `<div>` soup. Use HTML5 semantic layout structures that carry native browser and screen-reader meaning.
* Use `<button>` for actions, `<a>` for navigation links.
* Use sectioning tags (`<header>`, `<main>`, `<nav>`, `<aside>`, `<article>`, `<section>`, `<footer>`) to delineate page architecture.
* Use details and summaries (`<details>`, `<summary>`) for accordions and toggles.
* Use native `<dialog>` elements for modals.

### Strict Validation
- Always use correct attributes (`alt` on `<img>`, `type` on `<button>`, `id` and `for` pairings for form fields).
- Ensure valid nesting structures (e.g., do not place block-level elements inside `<a>` tags unless appropriate, no nested interactive controls).

---

## 2. CSS Architecture & Naming (BEM)

We adhere to a slightly modernized version of **BEM (Block, Element, Modifier)** naming to prevent selector pollution and ensure copy-paste compatibility.

### Class Scoping
Every class must be scoped under the primary component Block name:

```css
/* Block */
.card-component { ... }

/* Element (demarcated by two underscores) */
.card-component__header { ... }
.card-component__body { ... }

/* Modifier (demarcated by two hyphens) */
.card-component--featured { ... }
.card-component__header--highlighted { ... }
```

### Avoid Tag Selectors
Never style global elements inside a component stylesheet unless scoped under a class wrapper:
```css
/* BAD: This impacts all paragraphs on the page */
p { line-height: 1.5; }

/* GOOD: Scoped specifically to the component block */
.testimonial-card p { line-height: 1.5; }
```

---

## 3. Advanced Modern CSS Specifications

We target modern, future-proof standards instead of legacy solutions:

### CSS Custom Properties (Variables)
All key design options (colors, spacing, typography sizes, border radiuses) must be exposed as CSS custom variables at the top of the component:
```css
.badge {
  --badge-bg: #e0f2fe;
  --badge-text: #0369a1;
  --badge-padding: 0.25rem 0.75rem;

  background-color: var(--badge-bg);
  color: var(--badge-text);
  padding: var(--badge-padding);
}
```

### Logical Properties
Always prioritize **CSS Logical Properties** over physical ones to naturally support bidirectionality (LTR/RTL text flow):
- Use `margin-inline-start` instead of `margin-left`
- Use `margin-inline-end` instead of `margin-right`
- Use `padding-block` instead of `padding-top` and `padding-bottom`
- Use `inline-size` instead of `width`
- Use `block-size` instead of `height`

```css
/* Legacy styling */
.nav-item {
  margin-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

/* Modern styling */
.nav-item {
  margin-inline-end: 1.5rem;
  padding-block: 0.5rem;
}
```

### Responsive Design
- **Mobile-First**: Write base component styles for mobile screens, then enhance progressively using media queries.
- **Container Queries**: Where appropriate, use `@container` rules instead of `@media`. This allows a card, list, or sidebar to change its internal layout depending on the space its parent container allocates, rather than the viewport size.
- **Fluid Typography**: Utilize mathematical functions like `clamp()` for font sizes so text adapts fluidly without abrupt media-query jumps.

---

## 4. Pure CSS State Handling

We avoid JavaScript unless it is strictly necessary to satisfy accessibility rules (like dynamically toggling focus containment inside complex menus).
Use these native selectors for state logic:
- `:hover` and `:focus-visible` for action element responsiveness.
- `:checked` and the sibling/descendant selectors (`+`, `~`) to manage toggle tabs, accordion expanders, and checkboxes.
- `:target` to toggle views.
- `:disabled` to properly style elements that are non-interactive.
- `:has()` to style parents based on their children's state (e.g., styling a form row when its input is focused: `.form-row:has(input:focus)`).
