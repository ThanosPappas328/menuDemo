import React from 'react';
import { getIcon } from './iconLoader'; // Ensure the path is correct
import styles from '@/app/styles/categoryCard.module.css';
import stylesIcons from '@/app/styles/icons.module.css';

interface CategoryCardProps {
  iconName: string;
  title: string;
  subtitle: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ iconName, title, subtitle }) => {
  const Icon = getIcon(iconName); // Fetch the icon component

  return (
    <div className={`relative ${styles.categoryCard}`}>
      <div className={styles.categoryContent}>
        <div className={stylesIcons.icon}>
          {Icon ? <Icon /> : null} {/* Render the icon component */}
        </div>
        <h3 className={styles.categoryTitle}>{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
