import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useState } from "react";
import VisuallyHidden from "@reach/visually-hidden";

export default function VimeoVideoModal({ isOpen, video, onDismiss }) {
  const dialogContentStyles = {
    width: "100%",
    margin: "0px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "1rem 3rem",
    background: "none",
  };

  const iframeString = video?.embed.html;
  const vimeoIframe = iframeString
    ? iframeString
        .replace('width="1920"', 'width="100%"')
        .replace('height="1080"', 'height="100%"')
    : "";

  return (
    <DialogOverlay
      style={{ background: "rgba(0, 0, 0, 0.9)", zIndex: "100" }}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent
        aria-label={`${video?.description}`}
        style={dialogContentStyles}
      >
        <button className="fixed -top-6 right-12" onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <XIcon aria-hidden className="w-6 h-6 text-white" />
        </button>
        <div
          className="aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{ __html: vimeoIframe }}
        ></div>
      </DialogContent>
    </DialogOverlay>
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
