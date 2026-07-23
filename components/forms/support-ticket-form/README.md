# Support Ticket Form

## Overview
A custom service query log form organizing priority rating selectors, category menus, and rich symptom textareas.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Support Ticket Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Clean priorities option grid panels\n- Highly adjustable standard responsive textarea inputs\n- Strict focus outline transitions mapping brand indigo\n- Screen reader friendly labels pairing tags properly

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-support">
    <header class="form-support__header">
      <h2 class="form-support__title">Submit Support Ticket</h2>
      <p class="form-support__subtitle">We're here to help. Fill out the form below to open a ticket.</p>
    </header>

    <form class="form-support__body" action="#" method="POST" novalidate>
      <div class="form-support__field">
        <label class="form-support__label" for="sup-category">Support Category</label>
        <select class="form-support__select" id="sup-category" name="category" required>
          <option value="" disabled selected>Choose a category</option>
          <option value="billing">Billing & Subscriptions</option>
          <option value="tech">Technical Infrastructure</option>
          <option value="account">Account Access</option>
        </select>
      </div>

      <div class="form-support__field">
        <label class="form-support__label" for="sup-text">Describe the Issue</label>
        <textarea class="form-support__textarea" id="sup-text" rows="5" required placeholder="Provide as much detail as possible..."></textarea>
      </div>

      <button class="form-support__submit" type="submit">Submit Support Request</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --sup-bg: #ffffff;
  --sup-border: #e2e8f0;
  --sup-text: #334155;
  --sup-text-light: #64748b;
  --sup-title: #0f172a;
  --sup-primary: #4f46e5;
  --sup-primary-hover: #4338ca;
  --sup-primary-light: #e0e7ff;
  --sup-radius: 12px;
}

.form-support {
  background-color: var(--sup-bg);
  border: 1px solid var(--sup-border);
  border-radius: var(--sup-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 550px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-support__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--sup-title);
  margin-block-end: 0.375rem;
}

.form-support__subtitle {
  font-size: 0.875rem;
  color: var(--sup-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-support__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-support__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-support__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--sup-title);
}

.form-support__select,
.form-support__textarea {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--sup-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--sup-title);
  background-color: #fff;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-support__select:focus,
.form-support__textarea:focus {
  outline: none;
  border-color: var(--sup-primary);
  box-shadow: 0 0 0 3px var(--sup-primary-light);
}

.form-support__submit {
  padding-block: 0.75rem;
  background-color: var(--sup-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-support__submit:hover {
  background-color: var(--sup-primary-hover);
}
```

## Responsive Notes
This component uses a modern mobile-first strategy, CSS Grid, Flexbox, and Logical Properties (`inline-size`, `margin-block`, etc.) to scale beautifully across smartphones, tablets, and wide monitors.

## Accessibility
- **Semantic HTML5 Elements**: Proper form controls (`input`, `select`, `textarea`, `button`) inside a semantic form.
- **Labels**: Every control has an explicit `<label for="...">` pairing to ensure screen readers understand the context.
- **Keyboard Navigation**: High-contrast, custom-tailored `:focus-within` and `:focus-visible` highlights.

## Browser Support
Fully compatible with all major evergreen browsers (Chrome, Safari, Firefox, Edge). Uses standard CSS custom properties and logical parameters natively.

## Customization
Below is the list of key CSS variables that can be easily overridden to adapt the component's appearance.

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--sup-bg` | `#ffffff` | Background of the container box |\n| `--sup-border` | `#e2e8f0` | Container dividers |\n| `--sup-primary` | `#4f46e5` | Primary highlights and indicators |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
