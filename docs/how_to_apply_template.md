# How to Apply the Literacy for Kids Site Template

This guide explains how to apply the shared site template to a Literacy for Kids curriculum repository.

The template keeps all curriculum sites visually connected and consistently linked to one another.

---

## Overview

The `literacy_site_template` repository contains shared UI and structural configuration for every curriculum site in the Literacy for Kids ecosystem. When you apply it, your site will automatically share a common navbar, footer, and ecosystem description with all other curricula.

---

## Steps

### 1. Copy the Navbar Config

Copy `navbar/navbar.js` into your curriculum repository.

If you are using **Docusaurus**, use `docusaurus/docusaurus-navbar-config.js` instead.

In your `docusaurus.config.js`:

```js
const navbarItems = require('./docusaurus-navbar-config');

module.exports = {
  themeConfig: {
    navbar: {
      title: 'Your Curriculum Title',
      items: [...navbarItems],
    },
  },
};
```

For non-Docusaurus sites, import `navbar.js` directly and render each item as a navigation link.

---

### 2. Copy the Footer Config

Copy `footer/footer.js` into your curriculum repository.

If you are using **Docusaurus**, use `docusaurus/docusaurus-footer-config.js` instead.

In your `docusaurus.config.js`:

```js
const footerConfig = require('./docusaurus-footer-config');

module.exports = {
  themeConfig: {
    footer: footerConfig,
  },
};
```

For non-Docusaurus sites, import `footer.js` and render the title and links in your site footer.

---

### 3. Add the Ecosystem Section to Your Homepage

Copy the contents of `homepage_blocks/ecosystem_section.md` and paste it into your curriculum's homepage (for example, `docs/intro.md` or `src/pages/index.md`).

This block describes the full Literacy for Kids ecosystem and links to all curricula. It helps visitors discover other subjects and reinforces the shared identity of the project.

---

### 4. Add Sidebar Links to Other Literacies (optional)

To add cross-curriculum links in your sidebar, reference the URLs in `literacy_links/literacy_links.json`.

Example sidebar entry for Docusaurus:

```js
{
  type: 'link',
  label: 'Decision Literacy',
  href: 'https://zcohen-nerd.github.io/decision_literacy_for_kids/',
}
```

Repeat for each curriculum you want to reference.

---

## Why This Matters

Applying this template ensures that:

- Every curriculum shares the same navigation bar, making it easy for learners to move between subjects.
- Every curriculum is discoverable from every other curriculum.
- The Literacy for Kids hub is always one click away.
- Visual and structural consistency is maintained without requiring complicated tooling.

---

## Keeping the Template Up to Date

When the template is updated (for example, when a new curriculum is added), re-copy the relevant files into your curriculum repository. No build system or dependency management is required — everything is plain JavaScript, JSON, and Markdown.

---

## Curriculum Links Reference

| Curriculum | URL |
|---|---|
| Literacy for Kids Hub | https://zcohen-nerd.github.io/literacy_for_kids/ |
| Decision Literacy | https://zcohen-nerd.github.io/decision_literacy_for_kids/ |
| Computer Literacy | https://zcohen-nerd.github.io/computer_literacy_for_kids/ |
| Media Literacy | https://zcohen-nerd.github.io/media_literacy_for_kids/ |
| Financial Literacy | https://zcohen-nerd.github.io/financial_literacy_for_kids/ |
| Civic Literacy | https://zcohen-nerd.github.io/civic_literacy_for_kids/ |
