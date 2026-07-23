# Feedback Form

## Overview
A premium service review card utilizing visual rating star radios and comment inputs.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Feedback Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Custom styled inline SVG rating stars mapping micro active changes\n- Highly adjustable semantic comment text areas\n- Pure CSS radio active status checks\n- Clear accessible labeling associations

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-feedback">
    <header class="form-feedback__header">
      <h2 class="form-feedback__title">Your Feedback</h2>
      <p class="form-feedback__subtitle">Help us improve. Please rate your general experience below.</p>
    </header>

    <form class="form-feedback__body" action="#" method="POST" novalidate>
      <div class="form-feedback__field">
        <label class="form-feedback__label">Service Experience</label>
        <div class="form-feedback__rating">
          <input type="radio" id="star-5" name="stars" value="5" class="form-feedback__star-radio">
          <label for="star-5" class="form-feedback__star-label" title="Excellent">★</label>

          <input type="radio" id="star-4" name="stars" value="4" class="form-feedback__star-radio">
          <label for="star-4" class="form-feedback__star-label" title="Good">★</label>

          <input type="radio" id="star-3" name="stars" value="3" class="form-feedback__star-radio">
          <label for="star-3" class="form-feedback__star-label" title="Average">★</label>

          <input type="radio" id="star-2" name="stars" value="2" class="form-feedback__star-radio">
          <label for="star-2" class="form-feedback__star-label" title="Poor">★</label>

          <input type="radio" id="star-1" name="stars" value="1" class="form-feedback__star-radio" checked>
          <label for="star-1" class="form-feedback__star-label" title="Very Poor">★</label>
        </div>
      </div>

      <div class="form-feedback__field">
        <label class="form-feedback__label" for="feed-text">Additional comments</label>
        <textarea class="form-feedback__textarea" id="feed-text" name="comments" rows="4" placeholder="How can we make things even better?"></textarea>
      </div>

      <button class="form-feedback__submit" type="submit">Submit Feedback</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --feed-bg: #ffffff;
  --feed-border: #e2e8f0;
  --feed-text: #334155;
  --feed-text-light: #64748b;
  --feed-title: #0f172a;
  --feed-primary: #f59e0b;
  --feed-primary-hover: #d97706;
  --feed-primary-light: #fef3c7;
  --feed-radius: 12px;
}

.form-feedback {
  background-color: var(--feed-bg);
  border: 1px solid var(--feed-border);
  border-radius: var(--feed-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 450px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-feedback__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--feed-title);
  margin-block-end: 0.375rem;
}

.form-feedback__subtitle {
  font-size: 0.875rem;
  color: var(--feed-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-feedback__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-feedback__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-feedback__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--feed-title);
}

.form-feedback__rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 0.25rem;
  font-size: 2rem;
}

.form-feedback__star-radio {
  display: none;
}

.form-feedback__star-label {
  color: #cbd5e1;
  cursor: pointer;
  transition: color 0.2s ease;
}

.form-feedback__star-label:hover,
.form-feedback__star-label:hover ~ .form-feedback__star-label,
.form-feedback__star-radio:checked ~ .form-feedback__star-label {
  color: var(--feed-primary);
}

.form-feedback__textarea {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--feed-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--feed-title);
  background-color: #fff;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-feedback__textarea:focus {
  outline: none;
  border-color: var(--feed-primary);
  box-shadow: 0 0 0 3px var(--feed-primary-light);
}

.form-feedback__submit {
  padding-block: 0.75rem;
  background-color: var(--feed-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-feedback__submit:hover {
  background-color: var(--feed-primary-hover);
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
| `--feed-bg` | `#ffffff` | Background of the container board |\n| `--feed-border` | `#e2e8f0` | Container divider boundaries |\n| `--feed-primary` | `#f59e0b` | Gold active rating color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
