// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container mx-auto ${styles.footerGrid}`}>
        <div>
          <h4 className={styles.footerTitle}>About Us</h4>
          <p className={styles.footerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
        </div>
        <div>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
            <li><a href="#" className={styles.footerLink}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <p className={styles.footerText}>Email: contact@restaurant.com</p>
          <p className={styles.footerText}>Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
