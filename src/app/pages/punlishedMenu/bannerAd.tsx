// components/publishedMenu/BannerAd.tsx
import React from 'react';

interface BannerAdProps {
  imageUrl?: string;
  altText?: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ imageUrl, altText }) => {
  return (
    <div className="banner-ad my-4 p-4 bg-gray-100 border-t border-gray-200 flex justify-center items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText || 'Advertisement'}
          className="w-full h-auto max-h-48 object-contain"
          style={{ maxWidth: '100%', maxHeight: '192px' }} // Ensures it fits within mobile screen size
        />
      ) : (
        <div className="text-center text-gray-500 w-full">
          <p className="text-lg">Advertisement Space Available</p>
          <p>Add your image here</p>
        </div>
      )}
    </div>
  );
};

export default BannerAd;
