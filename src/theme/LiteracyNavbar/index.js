import React from 'react';
import styles from './styles.module.css';

const navbarLinks = [
  {
    label: 'Literacy for Kids',
    href: 'https://www.literacy-for-kids.com/',
  },
  {
    label: 'Decision',
    href: 'https://decision.literacy-for-kids.com/',
  },
  {
    label: 'Computer',
    href: 'https://computer.literacy-for-kids.com/',
  },
  {
    label: 'Media',
    href: 'https://media.literacy-for-kids.com/',
  },
  {
    label: 'Financial',
    href: 'https://financial.literacy-for-kids.com/',
  },
  {
    label: 'Civic',
    href: 'https://civic.literacy-for-kids.com/',
  },
];

export default function LiteracyNavbar() {
  return (
    <nav className={styles.literacyNavbar}>
      <div className="container">
        <ul className={styles.navList}>
          {navbarLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
