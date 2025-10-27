import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import styles from './CaseStudies.module.css';

const CaseStudies: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const thumbnailRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const videos = Array.from({ length: 6 }, (_, i) => ({
    src: `/videos/vid${i + 1}.mp4`,
  }));

  const caseStudies = Array.from({ length: 8 }, (_, i) => ({
    category: ['FINANCIAL SERVICES', 'RETAIL', 'TECHNOLOGY', 'HEALTHCARE', 'EDUCATION', 'AUTOMOTIVE', 'FOOD & BEVERAGE', 'TRAVEL'][i],
    title: ['H&R Block Taxes for newcomers', 'Global Retail Expansion', 'Tech Innovation Summit', 'Healthcare Access Program', 'Education Platform Launch', 'Automotive Campaign', 'Food Brand Revival', 'Travel Experience'][i],
    description: 'Innovative marketing solution driving measurable results and brand growth through targeted multicultural campaigns.'
  }));

  const changeVideo = (index: number) => {
    if (index === activeVideo || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveVideo(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const scrollLeft = () => {
    const newIndex = activeVideo > 0 ? activeVideo - 1 : videos.length - 1;
    changeVideo(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeVideo < videos.length - 1 ? activeVideo + 1 : 0;
    changeVideo(newIndex);
  };

  const toggleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play main video when changed
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = 0;
      const playPromise = mainVideoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, [activeVideo]);

  // Initialize thumbnail videos to show first frame
  useEffect(() => {
    thumbnailRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 1; // Show frame at 1 second
      }
    });
  }, []);

  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>
              <span className={styles.blackText}>GENERIC ADS TALK.</span>
              <span className={styles.redText}> OURS CONNECT.</span>
            </h2>
          </div>
          <button className={styles.seeAllBtn}>
            See All Case Studies
          </button>
        </div>

        <div className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <div className={styles.mainVideoWrapper}>
              <div className={`${styles.mainVideo} ${isTransitioning ? styles.transitioning : ''}`}>
                <video
                  ref={mainVideoRef}
                  src={videos[activeVideo].src}
                  className={styles.video}
                  muted={isMuted}
                  loop
                  playsInline
                  autoPlay
                />
                <button 
                  className={styles.muteBtn}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <div className={styles.videoProgress}>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.videoCarousel}>
              <button 
                className={styles.carouselBtn} 
                onClick={scrollLeft}
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className={styles.carouselTrack}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`${styles.carouselItem} ${index === activeVideo ? styles.active : ''}`}
                    onClick={() => changeVideo(index)}
                  >
                    <div className={styles.thumbnail}>
                      <video
                        ref={(el: HTMLVideoElement | null) => {
                        // This function body now explicitly returns 'void'
                        thumbnailRefs.current[index] = el;
                        }}
                        src={video.src}
                        preload="metadata"
                        muted
                        playsInline
                        className={styles.thumbnailVideo}
                      />
                      <div className={styles.thumbnailOverlay}>
                        <div className={styles.playIndicator}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className={styles.carouselBtn} 
                onClick={scrollRight}
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.caseStudyCard}>
              <div className={styles.cardImage}>
                <img src={`/images/img${index + 1}.png`} alt={study.title} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.category}>{study.category}</p>
                <h3 className={styles.studyTitle}>{study.title}</h3>
                <p className={styles.studyDescription}>{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;