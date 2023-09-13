import React, { useState } from "react";
import placeholderImage from "../assets/placeholder/placeholder-image.png";

const ImageWithPlaceholder = ({ actualSrc, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {!imageLoaded && (
        <img
          src={placeholderImage}
          alt="placeholder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          className={className}
        />
      )}

      <img
        src={actualSrc}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s" }}
        className={className}
      />
    </div>
  );
};

export default ImageWithPlaceholder;
