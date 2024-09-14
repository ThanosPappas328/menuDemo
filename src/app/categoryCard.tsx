// components/pages/punlishedMenu/categoryCard.tsx
import React from 'react';

interface CategoryCardProps {
  title: string;
  subtitle?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle }) => {
  return (
    <div className="category-card">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default CategoryCard;
