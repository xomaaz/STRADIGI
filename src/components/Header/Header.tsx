import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const navItems = ['Work', 'Markets', 'Media', 'Innovations', 'Insights', 'Founders POV', 'Contact'];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>STRADIGI</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a href="#" className={styles.navLink}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;