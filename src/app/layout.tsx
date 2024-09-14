'use client';
import Banner from './pages/punlishedMenu/banner';
import Footer from './pages/punlishedMenu/footer';
import styles from  '@/app/styles/publicMenuLayout.module.css'; // Optional: Include styles specific to this layout

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
