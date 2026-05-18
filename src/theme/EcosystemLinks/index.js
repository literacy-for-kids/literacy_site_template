import React from 'react';
import styles from './styles.module.css';

const ecosystemData = require('../../data/ecosystemLinks');

const ecosystemLinks = [
  ...(ecosystemData.hub
    ? [
        {
          label: ecosystemData.hub.label,
          description: 'Project Hub',
          href: ecosystemData.hub.href,
        },
      ]
    : []),
  ...((ecosystemData.curricula || []).map((curriculum) => ({
    label: curriculum.label,
    description: curriculum.shortDescription || curriculum.description,
    href: curriculum.href,
  }))),
];

const displayLinks = ecosystemLinks.length > 0
  ? ecosystemLinks
  : (ecosystemData.ecosystemLinks || ecosystemData);

export default function EcosystemLinks() {
  return (
    <section className={styles.ecosystem}>
      <div className="container">
        <h2 className={styles.ecosystemTitle}>Part of the Literacy for Kids Ecosystem</h2>
        <p className={styles.ecosystemSubtitle}>
          Open-source curricula for children ages 8–12, designed to help kids
          understand the systems that shape modern life.
        </p>
        <div className={styles.ecosystemGrid}>
          {displayLinks.map((link) => (
            <a
              key={link.href}
              className={styles.ecosystemCard}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
