'use client';
import Banner from './banner';
import Footer from './footer';
import styles from  './publicMenuLayout.module.css'; // Optional: Include styles specific to this layout

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.publicMenuLayout}>
        <header className={styles.header}>
          <Banner />
        </header>
        <main className={styles.mainContent}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
