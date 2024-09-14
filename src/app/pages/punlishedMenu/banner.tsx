// components/Banner.tsx
import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/banner.module.css';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.bannerTitle}>Καλώς ήρθατε στο Εστιατόριό μας</h1> {/* Greek title */}
      <p className={styles.bannerSubtitle}>Ζήστε τη γεύση της κομψότητας</p> {/* Greek subtitle */}
      <div className={styles.logoContainer}>
        <Image
          src="/images/CompanyLogo.webp"
          alt="Company Logo"
          width={100} // Adjust width as needed
          height={100} // Adjust height as needed
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default Banner;
