# literacy-site-theme

Reusable Docusaurus v3 theme package for the [Literacy for Kids](https://literacy-for-kids.github.io/literacy_for_kids/) curriculum ecosystem.

---

## What It Provides

- **Shared CSS theme** — consistent colour palette and typography across all curriculum sites
- **EcosystemLinks** — a React component that renders a card grid linking to every curriculum
- **LiteracyNavbar** — a secondary navigation bar with links to all ecosystem sites
- **LiteracyFooter** — a footer component with project and curriculum links
- **Config helpers** — ready-made `navbarItems`, `footerConfig`, and `ecosystemLinks` data exports

---

## Installation

### From GitHub

```bash
npm install literacy-for-kids/literacy-site-theme
```

### From a local path (monorepo / development)

```bash
npm install ../literacy_site_template
```

---

## Usage

### 1. Register the theme

In your site's `docusaurus.config.js`:

```js
module.exports = {
  // ...
  themes: ['literacy-site-theme'],
};
```

This automatically loads the shared CSS and registers the theme components.

### 2. Use the React components

Import any component in your pages or MDX files:

```jsx
import EcosystemLinks from '@theme/EcosystemLinks';
import LiteracyNavbar from '@theme/LiteracyNavbar';
import LiteracyFooter from '@theme/LiteracyFooter';

export default function Home() {
  return (
    <>
      <LiteracyNavbar />
      {/* page content */}
      <EcosystemLinks />
      <LiteracyFooter />
    </>
  );
}
```

### 3. Use the config helpers (optional)

Spread the shared navbar items into your Docusaurus navbar:

```js
const navbarItems = require('literacy-site-theme/navbarItems');

module.exports = {
  themeConfig: {
    navbar: {
      title: 'My Curriculum Site',
      items: [...navbarItems],
    },
  },
};
```

Use the shared footer config:

```js
const footerConfig = require('literacy-site-theme/footerConfig');

module.exports = {
  themeConfig: {
    footer: footerConfig,
  },
};
```

---

## Repository Structure

```
literacy-site-theme/
├── package.json
├── src/
│   ├── index.js                          # Theme plugin entry point
│   ├── css/
│   │   └── custom.css                    # Shared CSS custom properties
│   ├── data/
│   │   ├── ecosystemLinks.js             # Ecosystem link data
│   │   ├── navbarItems.js                # Docusaurus navbar items export
│   │   └── footerConfig.js               # Docusaurus footer config export
│   └── theme/
│       ├── EcosystemLinks/
│       │   ├── index.js                  # EcosystemLinks component
│       │   └── styles.module.css
│       ├── LiteracyNavbar/
│       │   ├── index.js                  # LiteracyNavbar component
│       │   └── styles.module.css
│       └── LiteracyFooter/
│           ├── index.js                  # LiteracyFooter component
│           └── styles.module.css
```

---

## Curriculum Sites

| Curriculum | URL |
|---|---|
| Literacy for Kids Hub | https://literacy-for-kids.github.io/literacy_for_kids/ |
| Decision Literacy | https://literacy-for-kids.github.io/decision_literacy_for_kids/ |
| Computer Literacy | https://literacy-for-kids.github.io/computer_literacy_for_kids/ |
| Media Literacy | https://literacy-for-kids.github.io/media_literacy_for_kids/ |
| Financial Literacy | https://literacy-for-kids.github.io/financial_literacy_for_kids/ |
| Civic Literacy | https://literacy-for-kids.github.io/civic_literacy_for_kids/ |

---

## License

MIT