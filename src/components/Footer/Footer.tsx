import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const quickLinks = ['Work', 'Markets', 'Media Innovations', 'Insights', 'Founders POV'];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>STRADIGI</div>
            <p className={styles.description}>
              We execute best-in-class strategies, leveraging big data, AI and multicultural insights 
              to drive meaningful brand growth and audience engagement.
            </p>
          </div>
          
          <div className={styles.linksSection}>
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link} className={styles.linkItem}>
                  <a href="#" className={styles.link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contactSection}>
            <h3 className={styles.contactTitle}>Contact Us</h3>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactHighlight}>30-minute meeting/call</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactHighlight}>15-minute Phone/Zoom Call</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2025 Stradigi Marketing. All rights reserved
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;