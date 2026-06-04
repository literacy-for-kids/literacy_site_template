# Contributing to literacy-site-theme

`literacy-site-theme` is the shared Docusaurus theme package for the [Literacy for Kids](https://literacy-for-kids.github.io/literacy_for_kids/) curriculum ecosystem. It provides shared CSS, navigation components, and ecosystem link data used by all nine curriculum sites.

---

## What's in This Package

| File | Purpose |
|---|---|
| `src/data/ecosystemLinks.js` | Single source of truth for all curriculum URLs and metadata |
| `src/data/footerConfig.js` | Shared Docusaurus footer configuration |
| `src/data/navbarItems.js` | Shared Docusaurus navbar items |
| `src/css/custom.css` | Shared CSS custom properties |
| `src/theme/LiteracyNavbar/` | Secondary ecosystem navigation bar |
| `src/theme/LiteracyFooter/` | Ecosystem footer component |
| `src/theme/EcosystemLinks/` | Card grid linking to all curriculum sites |

---

## How to Contribute

### Adding or updating a curriculum

1. Edit `src/data/ecosystemLinks.js` — this is the canonical list of curricula
2. Bump the `version` in `package.json` (semver: minor for additions, patch for corrections)
3. Submit a PR
4. After merging, open PRs against each curriculum repo to update their dependency to the new version

### Fixing a component or CSS issue

1. Fork this repository
2. Make your change in `src/`
3. Test by linking to a local curriculum repo: `npm install ../literacy_site_template`
4. Open a PR

---

## Standards

- **No tracking or analytics** in shared components
- **No student data collection** in any form
- Components must work on all nine curriculum sites — test in at least one before opening a PR
- Keep CSS changes compatible with both light and dark mode
- Maintain keyboard accessibility in navigation components

---

## Versioning

This package uses [semantic versioning](https://semver.org/):
- **Patch** (`2.0.x`): bug fix, typo, CSS correction
- **Minor** (`2.x.0`): new component, new curriculum added to ecosystemLinks
- **Major** (`x.0.0`): breaking change to exports or component API

---

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and constructive.
