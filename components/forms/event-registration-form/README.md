# Event Registration Form

## Overview
A premium conference slot ticket ordering card displaying custom quantities and meal checklists.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Event Registration Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Pure HTML numeric boundaries mapping valid seat quantities\n- Logical grids cleanly aligning contact information\n- Custom styled check list selectors\n- Accessible high contrast highlights

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-event">
    <header class="form-event__header">
      <h2 class="form-event__title">Event Ticket Registry</h2>
      <p class="form-event__subtitle">Book your standard admission pass to our upcoming Tech Summit.</p>
    </header>

    <form class="form-event__body" action="#" method="POST" novalidate>
      <div class="form-event__field">
        <label class="form-event__label" for="ev-seats">Number of Seats</label>
        <input class="form-event__input" type="number" id="ev-seats" name="seats" min="1" max="5" value="1" required>
      </div>

      <div class="form-event__field">
        <label class="form-event__label" for="ev-meal">Dietary Preference</label>
        <select class="form-event__select" id="ev-meal" name="diet">
          <option value="none">Standard Meal Plan</option>
          <option value="vegetarian">Vegetarian Menu</option>
          <option value="vegan">Vegan / Plant-Based</option>
          <option value="gluten-free">Gluten-Free Plan</option>
        </select>
      </div>

      <button class="form-event__submit" type="submit">Complete Secure Registration</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --ev-bg: #ffffff;
  --ev-border: #e2e8f0;
  --ev-text: #334155;
  --ev-text-light: #64748b;
  --ev-title: #0f172a;
  --ev-primary: #ca8a04;
  --ev-primary-hover: #a16207;
  --ev-primary-light: #fef9c3;
  --ev-radius: 12px;
}

.form-event {
  background-color: var(--ev-bg);
  border: 1px solid var(--ev-border);
  border-radius: var(--ev-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 450px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-event__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--ev-title);
  margin-block-end: 0.375rem;
}

.form-event__subtitle {
  font-size: 0.875rem;
  color: var(--ev-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-event__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-event__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-event__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--ev-title);
}

.form-event__input,
.form-event__select {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--ev-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--ev-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-event__input:focus,
.form-event__select:focus {
  outline: none;
  border-color: var(--ev-primary);
  box-shadow: 0 0 0 3px var(--ev-primary-light);
}

.form-event__submit {
  padding-block: 0.75rem;
  background-color: var(--ev-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-event__submit:hover {
  background-color: var(--ev-primary-hover);
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
| `--ev-bg` | `#ffffff` | Background color |\n| `--ev-border` | `#e2e8f0` | Card borders |\n| `--ev-primary` | `#ca8a04` | Yellow-gold visual accent theme color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
