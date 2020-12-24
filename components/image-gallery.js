import { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function ImageGallery({ images }) {
  const [showImages, setShowImages] = useState(false);
  const [showImageAtIndex, setShowImageAtIndex] = useState(
    Array(10).fill(false)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setShowImageAtIndex((imageAtIndex) => {
        imageAtIndex[index] = isVisible;
        return [...imageAtIndex];
      });
    }

    console.log({ index, isVisible, showImageAtIndex });
  };

  return (
    <div className="grid gap-1 grid-cols-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, i) => (
        <VisibilitySensor
          key={i}
          offset={{ bottom: 80 }}
          partialVisibility={true}
          onChange={(isVisible) => handleVisibleChange(i, isVisible)}
        >
          <ImageGalleryCard index={i} show={showImageAtIndex[i]} />
        </VisibilitySensor>
      ))}
    </div>
  );
}

function ImageGalleryCard({ show, index }) {
  console.log({ show, index });
  const containerStyle = {
    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
    // transitionDelay: `${index * 0.2}s`,
  };

  return (
    <div
      className={`relative transition duration-500 transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={containerStyle}
    >
      <div className="absolute w-full h-full flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute radial-gradient w-full h-full"></div>
        <span className="text-white self-center mx-auto uppercase tracking-widest font-light z-10">
          Joe + Sarah
        </span>
      </div>
      <img className="w-full h-full object-cover" src="/wedding-vibes.jpg" />
    </div>
  );
}
