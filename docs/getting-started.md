# Getting Started with Modern CSS Components

Welcome to **Modern CSS Components**! This guide will help you understand how to navigate, integrate, and customize our production-ready UI components in your projects.

---

## Navigation
[Getting Started](getting-started.md) | [Coding Standards](coding-standards.md) | [Accessibility (a11y)](accessibility.md) | [Browser Support](browser-support.md) | [Component Template](COMPONENT_TEMPLATE.md)

---

## 🚀 1. The Copy-Paste Workflow

Our components are designed to be entirely modular and framework-agnostic. To use any component:

1. **Find the Component**: Navigate into the `components/` directory and select the category (e.g., `components/buttons/`).
2. **Copy the HTML**: Copy the semantic HTML5 block into your project.
3. **Copy the CSS**: Copy the modern CSS block into your styles. We recommend keeping them bundled in component-specific stylesheets (e.g., `button.css`) or combining them into your main theme.
4. **Customize via Custom Properties**: Adjust local CSS variables at the root of the component to align perfectly with your design system.

---

## 🛠️ 2. Organizing Your Styles

For optimal performance and maintainability, we recommend organizing your stylesheets following a modular structure:

```text
your-project/
├── index.html
└── css/
    ├── main.css           # Global resets and fonts
    ├── variables.css      # Global color palettes, spacing variables
    └── components/        # Copy-pasted CSS files
        ├── button.css
        ├── card.css
        └── modal.css
```

In your `css/variables.css`, define your global brand guidelines:

```css
:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-text: #1f2937;
  --font-family-base: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --radius-md: 0.375rem;
  --transition-smooth: 0.2s ease-in-out;
}
```

---

## 🎨 3. Example Customization

When you copy a component like our custom button, you will see a `:root` or element-level variable mapping:

```css
.btn {
  /* Local design tokens mapped to global variables or fallbacks */
  --btn-bg: var(--color-primary, #4f46e5);
  --btn-bg-hover: var(--color-primary-hover, #4338ca);
  --btn-text: #ffffff;
  --btn-radius: var(--radius-md, 6px);
  --btn-padding: 0.75rem 1.5rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--btn-padding);
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border-radius: var(--btn-radius);
  border: none;
  cursor: pointer;
  transition: background-color var(--transition-smooth, 0.2s ease);
}

.btn:hover {
  background-color: var(--btn-bg-hover);
}
```

By changing `--btn-bg` locally or overriding `--color-primary` globally, you can easily alter the buttons across your entire platform.

---

## 📖 4. Next Steps

To make the most of this library, we highly encourage you to review our core architectural guidelines:

- **Learn our style conventions** in the [Coding Standards Guide](coding-standards.md).
- **Ensure inclusive components** with the [Accessibility Guide](accessibility.md).
- **Check platform capability matrix** in the [Browser Support Guide](browser-support.md).
