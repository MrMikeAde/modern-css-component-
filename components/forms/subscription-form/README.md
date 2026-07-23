# Subscription Form

## Overview
A premium SaaS subscription purchase screen featuring tactile plan tier selectors and credit inputs.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Subscription Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Taxonomy grids mapping subscription plan tiers\n- Visually customized checkbox toggles manage terms\n- Modern CSS shadow effects support responsive layouts\n- Logical properties aligning elements cleanly

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-sub">
    <header class="form-sub__header">
      <h2 class="form-sub__title">Confirm Subscription</h2>
      <p class="form-sub__subtitle">Select your active cloud deployment tier below.</p>
    </header>

    <form class="form-sub__body" action="#" method="POST" novalidate>
      <div class="form-sub__plans">
        <label class="form-sub__plan-card">
          <input type="radio" name="plan" value="growth" checked class="form-sub__plan-radio">
          <span class="form-sub__plan-content">
            <span class="form-sub__plan-title">Growth Tier</span>
            <span class="form-sub__plan-desc">For scaling development teams</span>
          </span>
          <span class="form-sub__plan-price">$29/mo</span>
        </label>
        <label class="form-sub__plan-card">
          <input type="radio" name="plan" value="scale" class="form-sub__plan-radio">
          <span class="form-sub__plan-content">
            <span class="form-sub__plan-title">Scale Tier</span>
            <span class="form-sub__plan-desc">For high traffic web applications</span>
          </span>
          <span class="form-sub__plan-price">$99/mo</span>
        </label>
      </div>

      <button class="form-sub__submit" type="submit">Activate Account</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --sub-bg: #ffffff;
  --sub-border: #e2e8f0;
  --sub-text: #334155;
  --sub-text-light: #64748b;
  --sub-title: #0f172a;
  --sub-primary: #4f46e5;
  --sub-primary-hover: #4338ca;
  --sub-primary-light: #e0e7ff;
  --sub-radius: 12px;
}

.form-sub {
  background-color: var(--sub-bg);
  border: 1px solid var(--sub-border);
  border-radius: var(--sub-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-sub__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--sub-title);
  margin-block-end: 0.375rem;
}

.form-sub__subtitle {
  font-size: 0.875rem;
  color: var(--sub-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-sub__plans {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-block-start: 1rem;
}

.form-sub__plan-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  border: 1px solid var(--sub-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-sub__plan-radio {
  margin-inline-end: 1rem;
  accent-color: var(--sub-primary);
}

.form-sub__plan-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.form-sub__plan-title {
  font-size: 0.925rem;
  font-weight: 700;
  color: var(--sub-title);
}

.form-sub__plan-desc {
  font-size: 0.75rem;
  color: var(--sub-text-light);
}

.form-sub__plan-price {
  font-size: 1rem;
  font-weight: 800;
  color: var(--sub-title);
}

.form-sub__plan-card:has(.form-sub__plan-radio:checked) {
  border-color: var(--sub-primary);
  background-color: #f5f3ff;
}

.form-sub__submit {
  padding-block: 0.75rem;
  background-color: var(--sub-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-sub__submit:hover {
  background-color: var(--sub-primary-hover);
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
| `--sub-bg` | `#ffffff` | Background color |\n| `--sub-border` | `#e2e8f0` | Outer borders and line grids |\n| `--sub-primary` | `#4f46e5` | Primary highlight brand color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
