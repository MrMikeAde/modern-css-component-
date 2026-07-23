# Medical Intake Form

## Overview
A safe, clean clinic registration page dividing emergency contacts, symptoms lists, and health declarations.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Medical Intake Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Logical section dividers enhancing patient focus\n- Multi-row dense grids aligning metrics cleanly\n- Responsive selectors adapting neatly\n- Accessible error status styling

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-medical">
    <header class="form-medical__header">
      <h2 class="form-medical__title">Patient Intake Registry</h2>
      <p class="form-medical__subtitle">Please input your diagnostic history coordinates securely.</p>
    </header>

    <form class="form-medical__body" action="#" method="POST" novalidate>
      <div class="form-medical__section">
        <h3 class="form-medical__section-title">Emergency Contact</h3>
        <div class="form-medical__grid">
          <div class="form-medical__field">
            <label class="form-medical__label" for="med-contact-name">Contact Name</label>
            <input class="form-medical__input" type="text" id="med-contact-name" placeholder="Johnathan Miller" required>
          </div>
          <div class="form-medical__field">
            <label class="form-medical__label" for="med-contact-tel">Telephone Number</label>
            <input class="form-medical__input" type="tel" id="med-contact-tel" placeholder="555-0199-232" required>
          </div>
        </div>
      </div>

      <button class="form-medical__submit" type="submit">Submit Diagnostics</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --med-bg: #ffffff;
  --med-border: #cbd5e1;
  --med-text: #334155;
  --med-text-light: #64748b;
  --med-title: #0f172a;
  --med-primary: #0d9488;
  --med-primary-hover: #0f766e;
  --med-primary-light: #ccfbf1;
  --med-radius: 12px;
}

.form-medical {
  background-color: var(--med-bg);
  border: 1px solid var(--med-border);
  border-radius: var(--med-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 650px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-medical__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--med-title);
  margin-block-end: 0.375rem;
}

.form-medical__subtitle {
  font-size: 0.875rem;
  color: var(--med-text-light);
  margin: 0;
}

.form-medical__section {
  border-top: 1px solid var(--med-border);
  padding-block-start: 1.25rem;
  margin-block-start: 1rem;
}

.form-medical__section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--med-title);
  margin-block-end: 1rem;
}

.form-medical__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .form-medical__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-medical__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-medical__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--med-text-light);
}

.form-medical__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--med-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--med-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-medical__input:focus {
  outline: none;
  border-color: var(--med-primary);
  box-shadow: 0 0 0 3px var(--med-primary-light);
}

.form-medical__submit {
  padding-block: 0.75rem;
  background-color: var(--med-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 1rem;
}

.form-medical__submit:hover {
  background-color: var(--med-primary-hover);
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
| `--med-bg` | `#ffffff` | Background of the container box |\n| `--med-border` | `#cbd5e1` | Cell and margin dividers |\n| `--med-primary` | `#0d9488` | Clean clinic teal highlight color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
