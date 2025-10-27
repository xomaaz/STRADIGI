import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.subtitle}>Canada's Challenger Multicultural Agency</p>
          <h1 className={styles.title}>
            Your Market Is Changing. <span className={styles.highlight}>Is Your Agency?</span>
          </h1>
          <p className={styles.description}>
            Over 80% of Canada's new consumers are newcomers. If your plan ignores them, it's incomplete.
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
      </div>
    </section>
  );
};

export default Hero;