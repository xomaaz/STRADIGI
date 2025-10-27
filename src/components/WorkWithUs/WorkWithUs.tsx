import React from 'react';
import styles from './WorkWithUs.module.css';

const WorkWithUs: React.FC = () => {
  const cards = [
    {
      title: 'Cultural Intelligence',
      description: 'Deep insights into diverse consumer behaviors and preferences',
      link: 'Learn more'
    },
    {
      title: 'Inclusive Brand Strategy',
      description: 'Developing authentic brand narratives that resonate across cultures',
      link: 'Learn more'
    },
    {
      title: 'Multichannel Campaigns',
      description: 'Integrated marketing across traditional and digital platforms',
      link: 'Learn more'
    },
    {
      title: 'Data-Driven Optimization',
      description: 'Continuous improvement through analytics and performance tracking',
      link: 'Learn more'
    },
    {
      title: 'Community Engagement',
      description: 'Building genuine connections with diverse audience segments',
      link: 'Learn more'
    },
    {
      title: 'Creative Innovation',
      description: 'Pushing boundaries with culturally relevant creative solutions',
      link: 'Learn more'
    },
    {
      title: 'Global Localization',
      description: 'Adapting global strategies for local cultural contexts',
      link: 'Learn more'
    }
  ];

  return (
    <section className={styles.workWithUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Stereotypes Aren't Strategy</h2>
        </div>
        
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${index === 0 ? styles.featuredCard : ''}`}
            >
              <div className={styles.cardImage}>
                <img 
                  src={`/images/pic${index + 1}.png`} 
                  alt={card.title}
                  className={index === 0 ? styles.rectangularImage : styles.squareImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <a href="#" className={styles.cardLink}>{card.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;