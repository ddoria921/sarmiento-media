import VimeoVideo from "./vimeo-video";

export default function VimeoVideoGallery({ videos }) {
  return (
    <div className="grid gap-1 grid-cols-2">
      {videos &&
        videos.map((video, i) => <VimeoVideo key={i} videoData={video} />)}
    </div>
  );
}
