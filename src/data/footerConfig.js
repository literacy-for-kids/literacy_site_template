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
          href: 'https://www.literacy-for-kids.com/',
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
          href: 'https://decision.literacy-for-kids.com/',
        },
        {
          label: 'Computer Literacy',
          href: 'https://computer.literacy-for-kids.com/',
        },
        {
          label: 'Media Literacy',
          href: 'https://media.literacy-for-kids.com/',
        },
        {
          label: 'Financial Literacy',
          href: 'https://financial.literacy-for-kids.com/',
        },
        {
          label: 'Civic Literacy',
          href: 'https://civic.literacy-for-kids.com/',
        },
        {
          label: 'Emotional & Social Literacy',
          href: 'https://emotional.literacy-for-kids.com/',
        },
        {
          label: 'Legal Literacy',
          href: 'https://legal.literacy-for-kids.com/',
        },
        {
          label: 'Environmental Systems Literacy',
          href: 'https://environmental.literacy-for-kids.com/',
        },
        {
          label: 'Health Systems Literacy',
          href: 'https://health.literacy-for-kids.com/',
        },
      ],
    },
  ],
  copyright: 'Literacy for Kids — open-source curricula for children ages 8–12',
};

module.exports = footerConfig;
