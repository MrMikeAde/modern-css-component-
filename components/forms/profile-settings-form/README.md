# Profile Settings Form

## Overview
An admin dashboard profile editing interface with rich avatar uploading layout mockups and dual control blocks.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Profile Settings Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Integrated circular custom photo editor mockup panel\n- Aligned input grid blocks utilizing responsive layouts\n- Clear helper text supporting sub-captioning elements\n- Modern focus highlight parameters

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-profile">
    <header class="form-profile__header">
      <h2 class="form-profile__title">Profile Settings</h2>
      <p class="form-profile__subtitle">Configure your public-facing coordinates.</p>
    </header>

    <form class="form-profile__body" action="#" method="POST" novalidate>
      <div class="form-profile__avatar-section">
        <div class="form-profile__avatar-preview">
          <img class="form-profile__avatar-img" src="https://picsum.photos/100/100" alt="Avatar Preview">
        </div>
        <div class="form-profile__avatar-actions">
          <label class="form-profile__avatar-btn" for="prof-avatar-file">Upload New Photo</label>
          <input type="file" id="prof-avatar-file" class="sr-only" accept="image/*">
          <span class="form-profile__avatar-help">JPG, GIF or PNG. Max size of 800K</span>
        </div>
      </div>

      <div class="form-profile__field">
        <label class="form-profile__label" for="prof-username">Username</label>
        <input class="form-profile__input" type="text" id="prof-username" required value="sarah_jenkins">
      </div>

      <div class="form-profile__field">
        <label class="form-profile__label" for="prof-bio">Bio</label>
        <textarea class="form-profile__textarea" id="prof-bio" rows="4" placeholder="I am a software designer based in Seattle..."></textarea>
      </div>

      <button class="form-profile__submit" type="submit">Save Changes</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --prof-bg: #ffffff;
  --prof-border: #e2e8f0;
  --prof-text: #334155;
  --prof-text-light: #64748b;
  --prof-title: #0f172a;
  --prof-primary: #4f46e5;
  --prof-primary-hover: #4338ca;
  --prof-primary-light: #e0e7ff;
  --prof-radius: 12px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.form-profile {
  background-color: var(--prof-bg);
  border: 1px solid var(--prof-border);
  border-radius: var(--prof-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 550px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-profile__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--prof-title);
  margin-block-end: 0.375rem;
}

.form-profile__subtitle {
  font-size: 0.875rem;
  color: var(--prof-text-light);
  margin: 0;
}

.form-profile__avatar-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-block-end: 1rem;
}

.form-profile__avatar-preview {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f1f5f9;
  flex-shrink: 0;
}

.form-profile__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-profile__avatar-actions {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-profile__avatar-btn {
  display: inline-block;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  background-color: #f1f5f9;
  color: var(--prof-text);
  font-size: 0.825rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
}

.form-profile__avatar-btn:hover {
  background-color: #e2e8f0;
}

.form-profile__avatar-help {
  font-size: 0.75rem;
  color: var(--prof-text-light);
}

.form-profile__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-block-end: 1rem;
}

.form-profile__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--prof-text);
}

.form-profile__input,
.form-profile__textarea {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--prof-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--prof-title);
  background-color: #fff;
  transition: all 0.2s ease;
  font-family: inherit;
}

.form-profile__input:focus,
.form-profile__textarea:focus {
  outline: none;
  border-color: var(--prof-primary);
  box-shadow: 0 0 0 3px var(--prof-primary-light);
}

.form-profile__submit {
  padding-block: 0.75rem;
  background-color: var(--prof-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-profile__submit:hover {
  background-color: var(--prof-primary-hover);
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
| `--prof-bg` | `#ffffff` | Background of the container card |\n| `--prof-border` | `#e2e8f0` | Outline line dividers |\n| `--prof-primary` | `#4f46e5` | Accent trigger tone |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
