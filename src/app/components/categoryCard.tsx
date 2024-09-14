// components/pages/punlishedMenu/categoryCard.tsx
import React from 'react';
import styles from '../styles/categoryCard.module.css'

interface CategoryCardProps {
  title: string;
  subtitle?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.categoryCard}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default CategoryCard;
