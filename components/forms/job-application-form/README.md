# Job Application Form

## Overview
A heavy candidate profile submit card organizing text files, personal fields, and resume upload zones cleanly.

## Preview Image Placeholder
```text
┌──────────────────────────────────────────────────────────┐
│                      [Job Application Form Mockup]                 │
│                                                          │
│                     (Visual Representation)              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## Features
- Dense layout dividers optimizing readability parameters\n- Responsive input alignments adapting cleanly to viewports\n- Hidden labels mapped using accessible `.sr-only` guidelines\n- Robust focus indicators mapping deep violet tones

## HTML
Provide clean, semantic, and commented HTML5 markup.
```html
  <div class="form-job">
    <header class="form-job__header">
      <h2 class="form-job__title">Apply for Position</h2>
      <p class="form-job__subtitle">Join our engineering department. Please fill out your details.</p>
    </header>

    <form class="form-job__body" action="#" method="POST" enctype="multipart/form-file" novalidate>
      <div class="form-job__section">
        <h3 class="form-job__section-title">Personal Details</h3>
        <div class="form-job__row">
          <div class="form-job__field">
            <label class="form-job__label" for="jb-name">Full Name</label>
            <input class="form-job__input" type="text" id="jb-name" required placeholder="Alex Mercer">
          </div>
          <div class="form-job__field">
            <label class="form-job__label" for="jb-email">Email Address</label>
            <input class="form-job__input" type="email" id="jb-email" required placeholder="alex@gmail.com">
          </div>
        </div>
      </div>

      <div class="form-job__section">
        <h3 class="form-job__section-title">Documents</h3>
        <div class="form-job__field">
          <label class="form-job__label" for="jb-resume">Upload CV / Resume</label>
          <input class="form-job__input" type="file" id="jb-resume" required accept=".pdf,.docx">
        </div>
      </div>

      <button class="form-job__submit" type="submit">Submit Candidate Profile</button>
    </form>
  </div>
```

## CSS
Provide organized, modern CSS utilizing custom properties.
```css
:root {
  --job-bg: #ffffff;
  --job-border: #e2e8f0;
  --job-text: #334155;
  --job-text-light: #64748b;
  --job-title: #0f172a;
  --job-primary: #6d28d9;
  --job-primary-hover: #5b21b6;
  --job-primary-light: #f5f3ff;
  --job-radius: 12px;
}

.form-job {
  background-color: var(--job-bg);
  border: 1px solid var(--job-border);
  border-radius: var(--job-radius);
  padding: 2.5rem;
  inline-size: 100%;
  max-inline-size: 650px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-job__title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--job-title);
  margin-block-end: 0.375rem;
}

.form-job__subtitle {
  font-size: 0.875rem;
  color: var(--job-text-light);
  margin: 0;
}

.form-job__section {
  border-top: 1px solid var(--job-border);
  padding-block-start: 1.25rem;
  margin-block-start: 1rem;
}

.form-job__section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--job-title);
  margin-block-end: 1rem;
}

.form-job__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .form-job__row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-job__field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-job__label {
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--job-text-light);
}

.form-job__input {
  padding-block: 0.625rem;
  padding-inline: 0.875rem;
  border: 1px solid var(--job-border);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--job-title);
  background-color: #fff;
  transition: all 0.2s ease;
}

.form-job__input:focus {
  outline: none;
  border-color: var(--job-primary);
  box-shadow: 0 0 0 3px var(--job-primary-light);
}

.form-job__submit {
  padding-block: 0.75rem;
  background-color: var(--job-primary);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-block-start: 1rem;
}

.form-job__submit:hover {
  background-color: var(--job-primary-hover);
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
| `--job-bg` | `#ffffff` | Background of the container box |\n| `--job-border` | `#e2e8f0` | Container outlines |\n| `--job-primary` | `#6d28d9` | Primary highlight brand color |

## Usage Example
Copy the HTML code block into your page structure, link the local stylesheet, and customize the exposed variables at the top of your custom CSS.

## License
MIT License.
