import React, { useRef } from 'react';
import styles from './ImageScroller.module.css';
import { Image, ImageScrollerProps } from '../../utils/interfaces';

const ImageScroller: React.FC<ImageScrollerProps> = ({ imagesArray }) => {
  const imageScrollerRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll images container horizontally on mouse wheel event
   * 
   * @param e scroll event as a React.WheelEvent object
   */
  const handleScroll: (e: React.WheelEvent) => void = (e: React.WheelEvent) => {
    if (imageScrollerRef.current) {
      const container = imageScrollerRef.current;
      container.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className={styles.imageScroller} ref={imageScrollerRef} onWheel={handleScroll}>
      {imagesArray.map((image: Image) => (
        <div className={styles.imageContainer} key={image.id}>
          <img src={image.url} alt={image.title} className={styles.imageBlock} />
          <p className={styles.imageTitle}>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
