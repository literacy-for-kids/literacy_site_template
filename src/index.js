const path = require('path');

/**
 * Docusaurus v3 theme plugin for Literacy for Kids.
 *
 * Usage in docusaurus.config.js:
 *
 *   module.exports = {
 *     themes: ['literacy-site-theme'],
 *   };
 *
 * This automatically registers the shared theme components
 * (EcosystemLinks, LiteracyNavbar, LiteracyFooter) and loads
 * the shared CSS custom properties.
 */
function literacySiteTheme(context, options) {
  return {
    name: 'literacy-site-theme',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getClientModules() {
      return [path.resolve(__dirname, './css/custom.css')];
    },
  };
}

literacySiteTheme.validateOptions = function ({ options }) {
  return options;
};

module.exports = literacySiteTheme;
