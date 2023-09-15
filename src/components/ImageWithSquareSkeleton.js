import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSquareSkeleton = ({ actualSrc, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div style={{ position: "relative" }}>
      {!imageLoaded && (
        <div className={`top-0 left-0 absolute ${className}`}>
          <Skeleton
            className={className}
            // width="100%"
            containerClassName=""
            // containerClassName="rounded-full"
          />
        </div>
      )}

      <img
        src={actualSrc}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s" }}
        // style={{ display: isLoading ? "none" : undefined }}
        className={className}
      />
    </div>
  );
};

export default ImageWithSquareSkeleton;
