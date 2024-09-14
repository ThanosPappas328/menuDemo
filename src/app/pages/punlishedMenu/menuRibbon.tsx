// components/MenuRibbon.tsx
import React from 'react';
import { FaRedo } from 'react-icons/fa'; // Use any refresh icon, here using Font Awesome
import styles from '@/app/styles/menuRibbon.module.css';

interface MenuRibbonProps {
  categories: Array<{ id: string; title: string; subtitle: string; image?: string }>;
  onSelectCategory: (categoryId: string) => void;
  onResetCategories: () => void;
}

const MenuRibbon: React.FC<MenuRibbonProps> = ({ categories, onSelectCategory, onResetCategories }) => {
  return (
    <div className={styles.menuRibbon}>
      {/* Refresh button positioned at the start */}
      <button onClick={onResetCategories} className={styles.refreshButton} title="Refresh">
        <FaRedo />
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={styles.categoryButton}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default MenuRibbon;
