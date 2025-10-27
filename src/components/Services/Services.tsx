import React from 'react';
import { Target, Users, BarChart3, Palette, Megaphone, Lightbulb } from 'lucide-react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Target size={48} />,
      title: 'Strategy & Planning',
      description: 'Data-driven goals and roadmaps for measurable growth'
    },
    {
      icon: <Users size={48} />,
      title: 'Audience Insights',
      description: 'Deep cultural understanding and consumer behavior analysis'
    },
    {
      icon: <Palette size={48} />,
      title: 'Creative Development',
      description: 'Authentic storytelling and culturally resonant creative'
    },
    {
      icon: <Megaphone size={48} />,
      title: 'Media Planning',
      description: 'Strategic media placement across diverse channels'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Performance Analytics',
      description: 'ROI tracking and optimization for maximum impact'
    },
    {
      icon: <Lightbulb size={48} />,
      title: 'Innovation Labs',
      description: 'Cutting-edge solutions using AI and emerging technologies'
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton}>
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;