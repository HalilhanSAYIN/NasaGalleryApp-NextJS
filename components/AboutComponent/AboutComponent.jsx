import React from 'react';
import styles from './AboutComponent.module.css';

export function AboutComponent({ title, description, imageUrl }) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Background" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}