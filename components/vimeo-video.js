import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import VimeoVideoModal from "./vimeo-video-modal";

function getTitleFromVideo(video) {
  const [videoTitle] = video.name?.split("|");
  return videoTitle;
}

function getImagePreviewFromVideo(video) {
  return video.pictures?.sizes[5].link;
}

export default function VimeoVideo({ imageUrl, title, videoData }) {
  const [showImage, setShowImage] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  const animateImagePreview = (isVisible) => isVisible && setShowImage(true);

  const containerStyle = {
    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
  };

  const previewTitle = title || getTitleFromVideo(videoData);
  const previewImageUrl = imageUrl || getImagePreviewFromVideo(videoData);

  return (
    <>
      <VisibilitySensor
        offset={{ bottom: 80 }}
        partialVisibility={true}
        onChange={animateImagePreview}
      >
        <button className="block" onClick={openDialog}>
          <div
            className={`w-full h-full relative transition duration-500 transform ${
              showImage
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
            style={containerStyle}
          >
            <div className="absolute inset-0 flex transition duration-200 ease-in hover:opacity-0">
              <div className="absolute radial-gradient w-full h-full"></div>
              <span className="text-white self-center mx-auto uppercase tracking-widest font-light z-10">
                {previewTitle}
              </span>
            </div>
            <img
              className="w-full h-full object-cover"
              src={previewImageUrl}
              alt=""
              role="presentation"
            />
          </div>
        </button>
      </VisibilitySensor>

      <VimeoVideoModal
        isOpen={showDialog}
        onDismiss={closeDialog}
        video={videoData}
      />
    </>
  );
}
