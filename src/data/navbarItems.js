/**
 * Shared Docusaurus navbar items for the Literacy for Kids ecosystem.
 *
 * Usage in docusaurus.config.js:
 *
 *   const { navbarItems } = require('literacy-site-theme/navbarItems');
 *   // or spread into themeConfig.navbar.items
 */
const ecosystemLinks = require('./ecosystemLinks');

const navbarItems = ecosystemLinks.map((link) => ({
  label: link.label,
  href: link.href,
  position: 'left',
}));

module.exports = navbarItems;
