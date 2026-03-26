// Docusaurus footer configuration helper for Literacy for Kids curriculum sites.
//
// Usage: Copy the `footerConfig` object into the `themeConfig.footer`
// section of your docusaurus.config.js file.
//
// Example:
//
//   module.exports = {
//     themeConfig: {
//       footer: footerConfig,
//     },
//   };

const footerConfig = {
  style: "dark",
  links: [
    {
      title: "Literacy for Kids",
      items: [
        {
          label: "Project Hub",
          href: "https://zcohen-nerd.github.io/literacy_for_kids/"
        },
        {
          label: "GitHub",
          href: "https://github.com/zcohen-nerd"
        }
      ]
    }
  ],
  copyright: `Literacy for Kids — open-source curricula for children ages 8–12`
};

module.exports = footerConfig;
