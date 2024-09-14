// components/Home.tsx
'use client';
import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Title from './components/headerWithInfo';
import MenuRibbon from './components/menuRibbon';
import CategoryCard from './components/categoryCard';
import MenuItemCard from './components/menuItemCard';
import BannerAd from './components/bannerAd';
import menuDataJson from '../../public/data/menuData.json';

// Define types for categories and menu items
interface MenuItemTranslation {
  languageCode: string;
  title: string;
  description: string;
  allergies: string;
  price: string;
}

interface MenuItem {
  id: string;
  image: string;
  menuItemTranslation: MenuItemTranslation[];
}

interface Category {
  id: string;
  title: string;
  menuItemKategoryTranslations: { languageCode: string; title: string; subtitle: string }[];
  menuItems: MenuItem[];
}

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [menuData] = useState<{ categories: Category[] }>(menuDataJson);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetCategories = () => {
    setSelectedCategory(null);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!menuData) {
    return <div>Loading...</div>;
  }

  const categories = menuData.categories || [];
  const itemsByCategory = categories.reduce<Record<string, MenuItem[]>>((acc, category) => {
    acc[category.id] = category.menuItems || [];
    return acc;
  }, {});

  return (
    <div>
      <Head>
        <title>Restaurant Menu</title>
        <meta name="description" content="Welcome to our restaurant menu page." />
      </Head>
      <Title />
      <MenuRibbon
        categories={categories.map((category) => {
          const translation = category.menuItemKategoryTranslations.find(
            (t) => t.languageCode === 'gr' // Adjust the language code as needed
          );
          return {
            id: category.id,
            title: translation ? translation.title : category.title,
            subtitle: translation ? translation.subtitle : category.title,
          };
        })}
        onSelectCategory={handleSelectCategory}
        onResetCategories={handleResetCategories}
      />
      <div ref={contentRef} className="container mx-auto px-4">
        {categories
          .filter((category) => selectedCategory === null || category.id === selectedCategory)
          .map((category) => {
            const translation = category.menuItemKategoryTranslations.find(
              (t) => t.languageCode === 'gr' // Adjust the language code as needed
            );
            return (
              <div key={category.id}>
                <CategoryCard
                  title={translation ? translation.title : category.title}
                  subtitle={translation ? translation.subtitle : category.title}
                />
                {itemsByCategory[category.id]?.length > 0 ? (
                  itemsByCategory[category.id].map((item) => {
                    const itemTranslation = item.menuItemTranslation.find(
                      (t) => t.languageCode === 'gr' // Adjust the language code as needed
                    );
                    return itemTranslation ? (
                      <MenuItemCard
                        key={item.id}
                        imageSrc={'/menudemo/'+item.image}
                        title={itemTranslation.title}
                        description={itemTranslation.description}
                        allergies={itemTranslation.allergies}
                        price={parseFloat(itemTranslation.price) || 0}
                      />
                    ) : null;
                  })
                ) : (
                  <div>No menu items available</div>
                )}
              </div>
            );
          })}
      </div>
      <BannerAd imageUrl="https://via.placeholder.com/728x90.png?text=Advertisement" altText="Sample Advertisement" />
    </div>
  );
};

export default function App() {
  return <Home />;
}
