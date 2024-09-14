// app/layout.tsx
'use client';
import React from 'react';
import Banner from './components/banner';
import Footer from './components/footer';
import styles from './styles/publicMenuLayout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
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
