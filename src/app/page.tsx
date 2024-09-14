// components/Home.tsx
'use client'
import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Banner from './pages/punlishedMenu/banner';
import Title from './pages/punlishedMenu/headerWithInfo';
import MenuRibbon from './pages/punlishedMenu/menuRibbon';
import CategoryCard from './pages/punlishedMenu/categoryCard';
import MenuItemCard from './pages/punlishedMenu/menuItemCard';
import Footer from './pages/punlishedMenu/footer';
import BannerAd from './pages/punlishedMenu/bannerAd';
import menuDataJson from '../../public/data/menuData.json'; // Ensure the correct path to the JSON file

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [menuData] = useState(menuDataJson);
  const contentRef = useRef<HTMLDivElement | null>(null); // Ref to scroll into view

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to top smoothly
    }
  };

  const handleResetCategories = () => {
    setSelectedCategory(null);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to top on reset
    }
  };

  if (!menuData) {
    return <div>Loading...</div>;
  }

  const categories = menuData.categories || [];
  const itemsByCategory = categories.reduce((acc: any, category: any) => {
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
        categories={categories.map((category: any) => {
          const translation = category.menuItemKategoryTranslations.find(
            (t: any) => t.languageCode === 'gr' // Adjust the language code as needed
          );
          return {
            id: category.id,
            title: translation ? translation.title : category.title,
            subtitle: translation ? translation.subtitle : category.subtitle,
            image: category.image,
          };
        })}
        onSelectCategory={handleSelectCategory}
        onResetCategories={handleResetCategories}
      />
      <div ref={contentRef} className="container mx-auto px-4"> {/* Ref for scrolling */}
        {categories
          .filter((category: any) => selectedCategory === null || category.id === selectedCategory)
          .map((category: any) => {
            const translation = category.menuItemKategoryTranslations.find(
              (t: any) => t.languageCode === 'gr' // Adjust the language code as needed
            );
            return (
              <div key={category.id}>
                <CategoryCard
                  iconName=""
                  title={translation ? translation.title : category.title}
                  subtitle={translation ? translation.subtitle : category.subtitle}
                />
                {itemsByCategory[category.id].length > 0 ? (
                  itemsByCategory[category.id].map((item: any) => {
                    const itemTranslation = item.menuItemTranslation.find(
                      (t: any) => t.languageCode === 'gr' // Adjust the language code as needed
                    );
                    return itemTranslation ? (
                      <MenuItemCard
                        key={item.id}
                        imageSrc={item.image}
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
      <BannerAd
        imageUrl="https://via.placeholder.com/728x90.png?text=Advertisement"
        altText="Sample Advertisement"
      />
    </div>
  );
};

export default function App() {
  return <Home />;
}
