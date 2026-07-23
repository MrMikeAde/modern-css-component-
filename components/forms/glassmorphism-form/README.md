# Glassmorphism Form

## Overview
A beautifully frosted multi-field card that adapts seamlessly to vivid background images.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Glassmorphism Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Frosted backdrop filter glass pane layers\n- Translucent borders supporting modern styling guidelines\n- Clear readable contrast margins over varied graphics\n- Keyboard friendly outline indicator styles

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-glass">
    <header class="form-glass__header">
      <h2 class="form-glass__title">Glassmorphism</h2>
      <p class="form-glass__subtitle">Experience hardware accelerated frosted glass effects.</p>
    </header>

    <form class="form-glass__body" action="#" method="POST" novalidate>
      <div class="form-glass__field">
        <label class="form-glass__label" for="gl-email">Email Address</label>
        <input class="form-glass__input" type="email" id="gl-email" required placeholder="name@domain.com">
      </div>

      <button class="form-glass__submit" type="submit">Submit Glass Action</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.15);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-text: #ffffff;
  --glass-text-light: #e2e8f0;
  --glass-title: #ffffff;
  --glass-primary: #ffffff;
  --glass-primary-hover: #f1f5f9;
  --glass-radius: 16px;
}

.form-glass {
  background-color: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: var(--glass-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 420px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-glass__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--glass-title);
  margin-block-end: 0.375rem;
}

.form-glass__subtitle {
  font-size: 0.875rem;
  color: var(--glass-text-light);
  margin: 0;
  line-height: 1.5;
}

.form-glass__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-glass__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-glass__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--glass-title);
}

.form-glass__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--glass-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--glass-title);
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.form-glass__input::placeholder {
  color: var(--glass-text-light);
  opacity: 0.6;
}

.form-glass__input:focus {
  outline: none;
  border-color: var(--glass-primary);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.form-glass__submit {
  padding-block: 0.75rem;
  background-color: var(--glass-primary);
  color: #1e1b4b;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 0.5rem;
}

.form-glass__submit:hover {
  background-color: var(--glass-primary-hover);
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
| `--glass-bg` | `rgba(255, 255, 255, 0.45)` | Background color with opacity |\n| `--glass-border` | `rgba(255, 255, 255, 0.3)` | White translucent border line |\n| `--glass-primary` | `#ffffff` | Contrast highlight color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
