# literacy-site-theme

Reusable Docusaurus v3 theme package for the [Literacy for Kids](https://www.literacy-for-kids.com/) curriculum ecosystem.

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
npm install literacy-for-kids/literacy_site_template
```

The GitHub repository is `literacy-for-kids/literacy_site_template`; its npm package name is `literacy-site-theme`. Keep `literacy-site-theme` in theme registration and package imports below.

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
literacy_site_template/
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
| Literacy for Kids Hub | https://www.literacy-for-kids.com/ |
| Decision Literacy | https://decision.literacy-for-kids.com/ |
| Computer Literacy | https://computer.literacy-for-kids.com/ |
| Media Literacy | https://media.literacy-for-kids.com/ |
| Financial Literacy | https://financial.literacy-for-kids.com/ |
| Civic Literacy | https://civic.literacy-for-kids.com/ |

---

## Usage in curriculum sites

All curriculum sites import ecosystem data using the canonical pattern:

```js
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
```

**In `docusaurus.config.js`** — build the navbar dropdown:

```js
{
  type: 'dropdown',
  label: 'Literacy for Kids',
  position: 'left',
  items: [
    {label: 'Hub', href: hub.href},
    ...curricula.map((c) => ({
      label: c.label.replace(' Literacy', ''),
      href: c.href,
    })),
  ],
}
```

**In `sidebars.js`** — build the "Explore Other Literacies" sidebar category:

```js
const currentSiteHref = 'https://<subdomain>.literacy-for-kids.com/';

{
  type: 'category',
  label: 'Explore Other Literacies',
  items: [
    {type: 'link', label: hub.label, href: hub.href},
    ...curricula
      .filter((c) => c.href !== currentSiteHref)
      .map((c) => ({type: 'link', label: c.label, href: c.href})),
  ],
}
```

### When you need the configureWebpack plugin

Sites that import React components from the theme (e.g.,
`import EcosystemLinks from '@theme/EcosystemLinks'`) need a custom
configureWebpack plugin to transpile the theme's JSX source. Sites
that only import data (e.g., `const {hub, curricula} =
require('literacy-site-theme/ecosystem')`) do NOT need the plugin.

Reference implementation: see `transpileLiteracyTheme` in
`media_literacy_for_kids/website/docusaurus.config.js`.

---

## License

MIT