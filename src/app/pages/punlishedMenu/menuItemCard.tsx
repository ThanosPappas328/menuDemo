import React, { useState } from 'react';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';
import styles from '@/app/styles/menuItemCard.module.css';

interface MenuItemCardProps {
  imageSrc: string;
  title: string;
  description: string;
  allergies: string;
  price: number;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  imageSrc,
  title,
  description,
  allergies,
  price,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const formatImageUrl = (url: string) => {
    const formattedUrl = url.startsWith('http') || url.startsWith('/') ? url : `/images/${url}`;
    return formattedUrl;
  };

  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''}`}
      onClick={handleClick}
      role="button"
      aria-expanded={isExpanded}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div
            className={styles.icon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaInfoCircle className="text-gray-500 hover:text-gray-800 cursor-pointer ml-2" />
            <div className={`${styles.tooltip} ${isTooltipVisible ? '' : styles.tooltipHidden}`}>
              <p>{allergies}</p>
            </div>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={hasImageError ? '/default-category-image.jpg' : formatImageUrl(imageSrc)}
          alt={title || 'Menu item image'}
          width={200}
          height={200}
          className={styles.image}
          onError={() => setHasImageError(true)}
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
