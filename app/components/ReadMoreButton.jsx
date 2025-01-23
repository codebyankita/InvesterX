// components/ReadMoreButton.jsx
import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

const ReadMoreButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href="#"
      className={`text-black flex items-center font-semibold group transition-all duration-300 ${isHovered ? 'text-blue-500' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-lg hover:text-blue-500">Read more</span>
      <GoArrowRight
        className={`ml-2 transform transition-all duration-300 ${isHovered ? 'translate-x-2 text-blue-500' : ''}`}
      />
    </a>
  );
};

export default ReadMoreButton;
