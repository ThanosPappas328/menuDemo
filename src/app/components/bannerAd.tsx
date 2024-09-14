// components/pages/punlishedMenu/bannerAd.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import styles from '../styles/bannerAd.module.css';

interface BannerAdProps {
  imageUrl: string;
  altText: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ imageUrl, altText }) => {
  return (
    <div className={styles.bannerad}>
      {/* Use Next.js Image component for optimization */}
      <Image src={imageUrl} alt={altText} width={728} height={90} />
    </div>
  );
};

export default BannerAd;
