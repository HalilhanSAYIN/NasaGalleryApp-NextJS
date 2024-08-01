'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './MainComponent.module.css'

export default function MainComponent() {
  const [photos, setPhotos] = useState([]);

  
  useEffect(() => {
    const fetchPhotos = async () => {
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}
&count=6`);
      const data = await res.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.date} className={styles.relative}>
            <div className={styles.relativeWrapper}>
              <img src={photo.url} alt={photo.title} className={styles.image} />
            </div>
            <div className={styles.overlay}>
              <h2 className={styles.title}>{photo.title}</h2>
              <p className={styles.description}>{photo.explanation}</p>
              <p className={styles.date}>{photo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}