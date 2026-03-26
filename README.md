# literacy_site_template

Shared site infrastructure for the [Literacy for Kids](https://zcohen-nerd.github.io/literacy_for_kids/) curriculum ecosystem.

This repository contains no curriculum content. It provides shared UI and structural configuration so all Literacy for Kids curriculum sites remain consistent.

---

## Purpose

The template standardises:

- Navigation bars
- Footer links
- Cross-curriculum navigation
- Hub references
- Ecosystem descriptions

When a new literacy curriculum is created, the developer copies or syncs from this template to instantly inherit a consistent look and feel.

---

## Repository Structure

```
literacy_site_template/
├── navbar/
│   └── navbar.js                      # Shared navbar config (all curriculum links)
├── footer/
│   └── footer.js                      # Shared footer config
├── literacy_links/
│   └── literacy_links.json            # Central JSON of all curriculum URLs
├── homepage_blocks/
│   └── ecosystem_section.md           # Reusable ecosystem description block
├── docusaurus/
│   ├── docusaurus-navbar-config.js    # Docusaurus-ready navbar export
│   └── docusaurus-footer-config.js    # Docusaurus-ready footer export
└── docs/
    └── how_to_apply_template.md       # Developer guide
```

---

## Curriculum Sites

| Curriculum | URL |
|---|---|
| Literacy for Kids Hub | https://zcohen-nerd.github.io/literacy_for_kids/ |
| Decision Literacy | https://zcohen-nerd.github.io/decision_literacy_for_kids/ |
| Computer Literacy | https://zcohen-nerd.github.io/computer_literacy_for_kids/ |
| Media Literacy | https://zcohen-nerd.github.io/media_literacy_for_kids/ |
| Financial Literacy | https://zcohen-nerd.github.io/financial_literacy_for_kids/ |
| Civic Literacy | https://zcohen-nerd.github.io/civic_literacy_for_kids/ |

---

## How to Apply

See [docs/how_to_apply_template.md](docs/how_to_apply_template.md) for full instructions.

---

## Design Philosophy

Everything here is intentionally simple:

- Plain JavaScript, JSON, and Markdown
- No build systems
- No dependencies
- No complicated frameworks

The template should be easy to copy into any repository.