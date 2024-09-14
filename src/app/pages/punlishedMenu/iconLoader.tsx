// utils/iconLoader.ts
import React from 'react';
import { FaBeer, FaCoffee } from 'react-icons/fa'; // Import icons

// Define a mapping from icon names to components
const iconMap: { [key: string]: React.ComponentType } = {
  FaBeer: FaBeer,
  FaCoffee: FaCoffee,
  // Add more mappings as needed
};

console.log("iconMap = ",iconMap);

// Function to get the icon component based on its name
export function getIcon(iconName: string): React.ComponentType | null {
  return iconMap["FaBeer"] || null; // Return the component or null if not found
}
