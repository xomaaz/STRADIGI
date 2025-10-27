import React from 'react';
import styles from './ValueProposition.module.css';

const ValueProposition: React.FC = () => {
  return (
    <section className={styles.valueProp}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.blackText}>We don't just do multicultural.</span>
            <span className={styles.redText}> We make you visible.</span>
          </h2>
          <p className={styles.description}>
            We connect brands with diverse audiences through authentic and impactful creative solutions. 
            Discover how our expertise can elevate your reach and resonance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;