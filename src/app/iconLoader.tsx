// components/pages/punlishedMenu/iconLoader.tsx
import React from 'react';

interface IconLoaderProps {
  iconName?: string; // Keep iconName if needed in future updates
}

const IconLoader: React.FC<IconLoaderProps> = ({ iconName }) => {
  // Example logic: use iconName if necessary
  return <div>{iconName && <span>Icon: {iconName}</span>}</div>;
};

export default IconLoader;
