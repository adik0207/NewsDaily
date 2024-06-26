import React, { useState, useEffect } from 'react';
import './BackgroundChanger.css';

const images = [
  require('../../backgrounds/image1.jpg'),
  require('../../backgrounds/image2.jpg'),
  require('../../backgrounds/image3.jpg'),
  require('../../backgrounds/image4.jpg'),
  require('../../backgrounds/image5.jpg')
];

const BackgroundChanger = ({ children }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-changer" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      {children}
    </div>
  );
};

export default BackgroundChanger;
