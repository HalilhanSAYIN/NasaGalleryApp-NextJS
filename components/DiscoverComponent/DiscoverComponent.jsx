'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './DiscoverComponent.module.css';

function DiscoverComponent({ searchQuery }) {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(true); 
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`);
      const data = await res.json();
      
      if (data.collection.items.length === 0) {
        setError(true); // No results found
      } else {
        setPhotos(data.collection.items);
        setError(false); // Results found
      }
      console.log(data);
    };

    if (searchQuery && searchQuery.length > 3) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fetchPhotos();
      }, 1000);
    } else {
      setPhotos([]); // Clear photos when searchQuery is empty
      setError(true); // Show no results message
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchQuery]);

  if (error) {
    return (
      <div className={styles.container}>
        {photos.length === 0 ? 'No Results Found' : 'The Results You Are Looking For Will Appear Here'}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {photos.map(photo => (
          <div key={photo.data[0].nasa_id} className={styles.relative}>
            <div className={styles.relativeWrapper}>
              <img src={photo.links[0].href} alt={photo.data[0].title} className={styles.image} />
              <div className={styles.overlay}>
                <p className={styles.title}>{photo.data[0].title}</p>
                <p className={styles.description}>{photo.data[0].description}</p>
                <p className={styles.date}>{photo.data[0].date_created}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscoverComponent;