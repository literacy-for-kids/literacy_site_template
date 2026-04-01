/**
 * Shared Docusaurus footer configuration for the Literacy for Kids ecosystem.
 *
 * Usage in docusaurus.config.js:
 *
 *   const footerConfig = require('literacy-site-theme/footerConfig');
 *   // assign to themeConfig.footer
 */
const footerConfig = {
  style: 'dark',
  links: [
    {
      title: 'Literacy for Kids',
      items: [
        {
          label: 'Project Hub',
          href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/literacy-for-kids',
        },
      ],
    },
    {
      title: 'Curricula',
      items: [
        {
          label: 'Decision Literacy',
          href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
        },
        {
          label: 'Computer Literacy',
          href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
        },
        {
          label: 'Media Literacy',
          href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
        },
        {
          label: 'Financial Literacy',
          href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
        },
        {
          label: 'Civic Literacy',
          href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
        },
      ],
    },
  ],
  copyright: 'Literacy for Kids — open-source curricula for children ages 8–12',
};

module.exports = footerConfig;
