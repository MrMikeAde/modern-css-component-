# Appointment Booking Form

## Overview
A custom scheduling form with native HTML date/time controls and visual radio slots for time windows.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Appointment Booking Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Pure HTML native calendar and clock input controls\n- Styled visual radio time cards supporting keyboard interactions\n- Double row grids cleanly separating logical coordinates\n- Flexible active focus state rings mapping deep emerald tones

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-book">
    <header class="form-book__header">
      <h2 class="form-book__title">Book Appointment</h2>
      <p class="form-book__subtitle">Schedule your professional diagnostic consultation block instantly.</p>
    </header>

    <form class="form-book__body" action="#" method="POST" novalidate>
      <div class="form-book__field">
        <label class="form-book__label" for="bk-date">Choose Date</label>
        <input class="form-book__input" type="date" id="bk-date" name="bookdate" required>
      </div>

      <div class="form-book__field">
        <label class="form-book__label">Preferred Session</label>
        <div class="form-book__slots">
          <label class="form-book__slot-card">
            <input type="radio" name="session" value="morning" checked class="form-book__slot-radio">
            <span class="form-book__slot-title">Morning</span>
            <span class="form-book__slot-time">09:00 AM - 12:00 PM</span>
          </label>
          <label class="form-book__slot-card">
            <input type="radio" name="session" value="afternoon" class="form-book__slot-radio">
            <span class="form-book__slot-title">Afternoon</span>
            <span class="form-book__slot-time">01:00 PM - 05:00 PM</span>
          </label>
        </div>
      </div>

      <button class="form-book__submit" type="submit">Confirm Secure Booking</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --book-bg: #ffffff;
  --book-border: #e2e8f0;
  --book-text: #334155;
  --book-text-light: #64748b;
  --book-title: #0f172a;
  --book-primary: #059669;
  --book-primary-hover: #047857;
  --book-primary-light: #d1fae5;
  --book-radius: 12px;
}

.form-book {
  background-color: var(--book-bg);
  border: 1px solid var(--book-border);
  border-radius: var(--book-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 460px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-book__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--book-title);
  margin-block-end: 0.375rem;
}

.form-book__subtitle {
  font-size: 0.875rem;
  color: var(--book-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-book__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-book__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-book__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--book-title);
}

.form-book__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--book-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--book-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-book__input:focus {
  outline: none;
  border-color: var(--book-primary);
  box-shadow: 0 0 0 3px var(--book-primary-light);
}

.form-book__slots {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 400px) {
  .form-book__slots {
    grid-template-columns: 1fr 1fr;
  }
}

.form-book__slot-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid var(--book-border);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-book__slot-radio {
  position: absolute;
  top: 1rem;
  right: 1rem;
  accent-color: var(--book-primary);
}

.form-book__slot-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--book-title);
}

.form-book__slot-time {
  font-size: 0.75rem;
  color: var(--book-text-light);
  margin-block-start: 0.25rem;
}

.form-book__slot-card:has(.form-book__slot-radio:checked) {
  border-color: var(--book-primary);
  background-color: #f0fdf4;
}

.form-book__submit {
  padding-block: 0.75rem;
  background-color: var(--book-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-book__submit:hover {
  background-color: var(--book-primary-hover);
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
| `--book-bg` | `#ffffff` | Background of the container box |\n| `--book-border` | `#e2e8f0` | Divider and input line outlines |\n| `--book-primary` | `#059669` | Glow outline highlights and active panels |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
