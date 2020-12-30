import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function ImageGallery({ images, onImageClick }) {
  const [showImageAtIndex, setShowImageAtIndex] = useState(
    Array(images.length).fill(false)
  );

  const handleVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setShowImageAtIndex((imageAtIndex) => {
        imageAtIndex[index] = isVisible;
        return [...imageAtIndex];
      });
    }
  };

  return (
    <div className="grid gap-1 grid-cols-2">
      {images &&
        images.map(({ imageUrl, title }, i) => (
          <VisibilitySensor
            key={i}
            offset={{ bottom: 80 }}
            partialVisibility={true}
            onChange={(isVisible) => handleVisibleChange(i, isVisible)}
          >
            <button className="block" onClick={() => onImageClick(i)}>
              <ImageGalleryCard
                index={i}
                show={showImageAtIndex[i]}
                src={imageUrl}
                title={title}
              />
            </button>
          </VisibilitySensor>
        ))}
    </div>
  );
}

function ImageGalleryCard({ show, src, title }) {
  const containerStyle = {
    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
  };

  return (
    <div
      className={`w-full h-full relative transition duration-500 transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={containerStyle}
    >
      <div className="absolute inset-0 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute radial-gradient w-full h-full"></div>
        <span className="text-white self-center mx-auto uppercase tracking-widest font-light z-10">
          {title}
        </span>
      </div>
      <img className="w-full h-full object-cover" src={src} />
    </div>
  );
}
