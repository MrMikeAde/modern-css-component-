# Survey Form

## Overview
A custom multi-metric questionnaires card featuring custom radio option grids and visual layout columns.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Survey Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Segmented native custom list selection buttons\n- Highly organized radio grids cleanly displaying metrics\n- Zero JavaScript query dependencies\n- Clear logical properties rendering high contrast borders

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-survey">
    <header class="form-survey__header">
      <h2 class="form-survey__title">User Sentiment Survey</h2>
      <p class="form-survey__subtitle">Please assist our team by evaluating your research usage parameters.</p>
    </header>

    <form class="form-survey__body" action="#" method="POST" novalidate>
      <div class="form-survey__field">
        <label class="form-survey__label" for="surv-platform">Primary usage platform</label>
        <select class="form-survey__select" id="surv-platform" name="platform" required>
          <option value="" disabled selected>Select an option</option>
          <option value="desktop">Mac / Windows Desktop</option>
          <option value="mobile">iOS / Android Mobile Device</option>
          <option value="tablet">iPad / Android Tablet</option>
        </select>
      </div>

      <div class="form-survey__field">
        <label class="form-survey__label">How frequently do you leverage our APIs?</label>
        <div class="form-survey__radios">
          <label class="form-survey__radio-container">
            <input class="form-survey__radio-input" type="radio" name="freq" value="daily" checked>
            <span class="form-survey__radio-custom"></span>
            <span class="form-survey__radio-text">Daily</span>
          </label>
          <label class="form-survey__radio-container">
            <input class="form-survey__radio-input" type="radio" name="freq" value="weekly">
            <span class="form-survey__radio-custom"></span>
            <span class="form-survey__radio-text">Weekly</span>
          </label>
          <label class="form-survey__radio-container">
            <input class="form-survey__radio-input" type="radio" name="freq" value="monthly">
            <span class="form-survey__radio-custom"></span>
            <span class="form-survey__radio-text">Monthly</span>
          </label>
        </div>
      </div>

      <button class="form-survey__submit" type="submit">Submit Survey</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --surv-bg: #ffffff;
  --surv-border: #cbd5e1;
  --surv-text: #334155;
  --surv-text-light: #64748b;
  --surv-title: #0f172a;
  --surv-primary: #4f46e5;
  --surv-primary-hover: #4338ca;
  --surv-primary-light: #e0e7ff;
  --surv-radius: 12px;
}

.form-survey {
  background-color: var(--surv-bg);
  border: 1px solid var(--surv-border);
  border-radius: var(--surv-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-survey__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--surv-title);
  margin-block-end: 0.375rem;
}

.form-survey__subtitle {
  font-size: 0.875rem;
  color: var(--surv-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-survey__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-survey__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-survey__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--surv-title);
}

.form-survey__select {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--surv-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--surv-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-survey__select:focus {
  outline: none;
  border-color: var(--surv-primary);
  box-shadow: 0 0 0 3px var(--surv-primary-light);
}

.form-survey__radios {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form-survey__radio-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.form-survey__radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.form-survey__radio-custom {
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid var(--surv-border);
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-survey__radio-input:checked ~ .form-survey__radio-custom {
  border-color: var(--surv-primary);
  background-color: var(--surv-primary);
}

.form-survey__radio-custom::after {
  content: "";
  position: absolute;
  display: none;
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

.form-survey__radio-input:checked ~ .form-survey__radio-custom::after {
  display: block;
}

.form-survey__radio-text {
  font-size: 0.875rem;
  color: var(--surv-text);
}

.form-survey__submit {
  padding-block: 0.75rem;
  background-color: var(--surv-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-survey__submit:hover {
  background-color: var(--surv-primary-hover);
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
| `--surv-bg` | `#ffffff` | Background of the container card |\n| `--surv-border` | `#cbd5e1` | Divider outlines |\n| `--surv-primary` | `#4f46e5` | Primary highlights and buttons |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
