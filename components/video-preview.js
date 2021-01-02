import VisibilitySensor from "react-visibility-sensor";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useState } from "react";
import VisuallyHidden from "@reach/visually-hidden";

export default function VideoPreview({ imageUrl, title, videoData }) {
  const dialogContentStyles = {
    width: "100%",
    margin: "0px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "1rem 3rem",
    background: "none",
  };

  const [showImage, setShowImage] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  const animateImagePreview = (isVisible) => isVisible && setShowImage(true);

  const iframeString = videoData?.embed.html;
  const vimeoIframe = iframeString
    ? iframeString
        .replace('width="1920"', 'width="100%"')
        .replace('height="1080"', 'height="100%"')
    : "";

  const containerStyle = {
    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
  };

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
                {title}
              </span>
            </div>
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt=""
              role="presentation"
            />
          </div>
        </button>
      </VisibilitySensor>

      <DialogOverlay
        style={{ background: "rgba(0, 0, 0, 0.9)", zIndex: "100" }}
        isOpen={showDialog}
        onDismiss={closeDialog}
      >
        <DialogContent
          aria-label={`${videoData?.description}`}
          style={dialogContentStyles}
        >
          <button className="fixed -top-6 right-12" onClick={closeDialog}>
            <VisuallyHidden>Close</VisuallyHidden>
            <XIcon aria-hidden className="w-6 h-6 text-white" />
          </button>
          <div
            className="aspect-w-16 aspect-h-9"
            dangerouslySetInnerHTML={{ __html: vimeoIframe }}
          ></div>
        </DialogContent>
      </DialogOverlay>
    </>
  );
}

function XIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
