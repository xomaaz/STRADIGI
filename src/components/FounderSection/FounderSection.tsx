import React from 'react';
import styles from './FounderSection.module.css';

const FounderSection: React.FC = () => {
  return (
    <section className={styles.founderSection}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageSection}>
              <img src="/images/ceo.png" alt="CEO" className={styles.ceoImage} />
            </div>
            <div className={styles.textSection}>
              <h2 className={styles.title}>
                Leading the Conversation on Multicultural Growth.
              </h2>
              <p className={styles.experience}>30+ Years of Global Experience</p>
              <p className={styles.description}>
                Our founder, a seasoned professional with over three decades of global experience, 
                actively mentors at the American Marketing Association, shaping the next generation of leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.textContent}>
              <p className={styles.tagline}>
                Let's design for resonance: strategy, creative, media - integrated.
              </p>
              <div className={styles.buttons}>
                <button className={styles.primaryBtn}>
                  Book a Strategy Session →
                </button>
                <button className={styles.secondaryBtn}>
                  See the Work
                </button>
              </div>
            </div>
            <div className={styles.awardImage}>
              <img src="/images/marketingAwards.png" alt="Marketing Awards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;