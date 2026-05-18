/**
 * Single source of truth for all Literacy for Kids curriculum
 * metadata. Consumed by the hub homepage, curriculum site
 * sidebars/navbars, and the theme components.
 */
const hub = {
  label: 'Literacy for Kids',
  title: 'Literacy for Kids Hub',
  href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
  githubHref: 'https://github.com/literacy-for-kids',
};

const curricula = [
  {
    slug: 'decision',
    icon: '🧠',
    label: 'Decision Literacy',
    title: '🧠 Decision Literacy',
    href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
    tagline: 'Build the skills to think clearly, weigh options, and understand consequences.',
    description: 'How to think clearly, evaluate choices, and understand consequences.',
    shortDescription: 'Reasoning and choices',
    topicLabel: 'Choices & judgment',
    bestFor: 'Kids learning to make independent choices or navigate peer pressure.',
    firstUse: 'A dinner-table conversation about a real choice your child is facing.',
    setting: 'Anywhere — works well at home or in a group',
    style: 'Scenario-based reasoning and reflection',
    frameworkCovers: 'How to think clearly and weigh choices',
  },
  {
    slug: 'computer',
    icon: '💻',
    label: 'Computer Literacy',
    title: '💻 Computer Literacy',
    href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
    tagline: 'Understand how computers and the internet work — and how to use technology responsibly.',
    description: 'How computers work and how to use technology responsibly.',
    shortDescription: 'Understanding technology',
    topicLabel: 'Technology & online safety',
    bestFor: 'Kids curious about how tech works, or who need guidance on online safety.',
    firstUse: 'A family conversation about screen time or staying safe online.',
    setting: 'Home, classroom, or after-school program',
    style: 'Exploration and guided conversation',
    frameworkCovers: 'How technology and the internet work',
  },
  {
    slug: 'media',
    icon: '📰',
    label: 'Media Literacy',
    title: '📰 Media Literacy',
    href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
    tagline: 'Learn how information spreads and how to evaluate what you see and read.',
    description: 'How to find, interpret, and evaluate information.',
    shortDescription: 'Understanding information',
    topicLabel: 'Information & online content',
    bestFor: 'Kids exposed to news, social media, or advertising.',
    firstUse: 'A classroom chat about ads, clickbait, or "Is this real?"',
    setting: 'Classroom, homeschool, or library group',
    style: 'Source analysis and group discussion',
    frameworkCovers: 'How information spreads and how to evaluate it',
  },
  {
    slug: 'financial',
    icon: '💰',
    label: 'Financial Literacy',
    title: '💰 Financial Literacy',
    href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
    tagline: 'Learn how money works — earning, saving, spending, and understanding value.',
    description: 'How money and financial systems affect everyday life.',
    shortDescription: 'Understanding money',
    topicLabel: 'Money & spending',
    bestFor: 'Kids starting to handle money or asking about prices and ads.',
    firstUse: 'A lesson on saving vs. spending around allowance time.',
    setting: 'Home, classroom, or enrichment program',
    style: 'Real-world examples and hands-on practice',
    frameworkCovers: 'How money, value, and trade work',
  },
  {
    slug: 'civic',
    icon: '🏛',
    label: 'Civic Literacy',
    title: '🏛 Civic Literacy',
    href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
    tagline: 'Understand how communities organize, make rules, and share decisions.',
    description: 'How societies organize themselves and how citizens shape communities.',
    shortDescription: 'Understanding governance',
    topicLabel: 'Community & participation',
    bestFor: 'Kids interested in fairness, rules, or how groups make decisions.',
    firstUse: 'A group discussion about school rules or community decisions.',
    setting: 'Classroom, club, or community group',
    style: 'Role-play and deliberation',
    frameworkCovers: 'How communities organize and make rules',
  },
];

const ecosystemLinks = [
  { label: hub.label, description: 'Project Hub', href: hub.href },
  ...curricula.map((curriculum) => ({
    label: curriculum.label,
    description: curriculum.shortDescription,
    href: curriculum.href,
  })),
];

module.exports = ecosystemLinks;
module.exports.hub = hub;
module.exports.curricula = curricula;
module.exports.ecosystemLinks = ecosystemLinks;
