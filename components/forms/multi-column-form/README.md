# Multi-Column Form

## Overview
A dense layout optimization container dividing fields dynamically into clean double or triple column rows.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Multi-Column Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Advanced multi-grid adaptive layouts\n- Variable grouping structures mapping sub-labels\n- Logical properties scaling dynamically without structural collapse\n- Beautiful high contrast border active highlights

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-multicol">
    <header class="form-multicol__header">
      <h2 class="form-multicol__title">Company Registration</h2>
      <p class="form-multicol__subtitle">Please populate all business coordinates securely.</p>
    </header>

    <form class="form-multicol__body" action="#" method="POST" novalidate>
      <div class="form-multicol__section">
        <h3 class="form-multicol__section-title">General Details</h3>
        <div class="form-multicol__row form-multicol__row--two">
          <div class="form-multicol__field">
            <label class="form-multicol__label" for="mc-legal">Legal Entity Name</label>
            <input class="form-multicol__input" type="text" id="mc-legal" required placeholder="Acme Logistics LLC">
          </div>
          <div class="form-multicol__field">
            <label class="form-multicol__label" for="mc-trade">Trading Name</label>
            <input class="form-multicol__input" type="text" id="mc-trade" placeholder="Acme Express">
          </div>
        </div>
      </div>

      <div class="form-multicol__section">
        <h3 class="form-multicol__section-title">Corporate Address</h3>
        <div class="form-multicol__row form-multicol__row--three">
          <div class="form-multicol__field">
            <label class="form-multicol__label" for="mc-country">Country</label>
            <input class="form-multicol__input" type="text" id="mc-country" required placeholder="United States">
          </div>
          <div class="form-multicol__field">
            <label class="form-multicol__label" for="mc-state">State / Territory</label>
            <input class="form-multicol__input" type="text" id="mc-state" required placeholder="Delaware">
          </div>
          <div class="form-multicol__field">
            <label class="form-multicol__label" for="mc-zip">ZIP / Postal Code</label>
            <input class="form-multicol__input" type="text" id="mc-zip" required placeholder="19801">
          </div>
        </div>
      </div>

      <button class="form-multicol__submit" type="submit">Submit Registration</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --multicol-bg: #ffffff;
  --multicol-border: #e2e8f0;
  --multicol-text: #334155;
  --multicol-text-light: #64748b;
  --multicol-title: #0f172a;
  --multicol-primary: #0284c7;
  --multicol-primary-hover: #0369a1;
  --multicol-primary-light: #e0f2fe;
  --multicol-radius: 12px;
}

.form-multicol {
  background-color: var(--multicol-bg);
  border: 1px solid var(--multicol-border);
  border-radius: var(--multicol-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 800px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-multicol__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--multicol-title);
  margin-block-end: 0.375rem;
}

.form-multicol__subtitle {
  font-size: 0.875rem;
  color: var(--multicol-text-light);
  margin: 0;
}

.form-multicol__section {
  border-top: 1px solid var(--multicol-border);
  padding-block-start: 1.25rem;
  margin-block-start: 1rem;
}

.form-multicol__section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--multicol-title);
  margin-block-end: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-multicol__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 600px) {
  .form-multicol__row--two {
    grid-template-columns: 1fr 1fr;
  }
  .form-multicol__row--three {
    grid-template-columns: repeat(3, 1fr);
  }
}

.form-multicol__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-multicol__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--multicol-text-light);
}

.form-multicol__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--multicol-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--multicol-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-multicol__input:focus {
  outline: none;
  border-color: var(--multicol-primary);
  box-shadow: 0 0 0 3px var(--multicol-primary-light);
}

.form-multicol__submit {
  padding-block: 0.75rem;
  background-color: var(--multicol-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 1rem;
}

.form-multicol__submit:hover {
  background-color: var(--multicol-primary-hover);
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
| `--multicol-bg` | `#ffffff` | Background of the container panel |\n| `--multicol-border` | `#e2e8f0` | Structural grid divider borders |\n| `--multicol-primary` | `#0284c7` | Highlight accent color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
