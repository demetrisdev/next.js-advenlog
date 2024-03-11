'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import lisbonImg from '@/assets/lisbon.webp';
import romeImg from '@/assets/rome.webp';
import athensImg from '@/assets/athens.jpg';
import budapestImg from '@/assets/budapest.jpg';
import madridImg from '@/assets/madrid.jpg';
import parisImg from '@/assets/paris.jpg';
import berlinImg from '@/assets/berlin.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: lisbonImg, alt: 'Image of Lisbon' },
  { image: romeImg, alt: 'Image of Rome' },
  { image: athensImg, alt: 'Image of Athens' },
  { image: budapestImg, alt: 'Image of Budapest' },
  { image: madridImg, alt: 'Image of Madrid' },
  { image: parisImg, alt: 'Image of Paris' },
  { image: berlinImg, alt: 'Image of Berlin' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
