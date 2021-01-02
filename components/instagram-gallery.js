export default function InstagramGallery({ className, images }) {
  return (
    <div className={`w-full ${className}`.trim()}>
      <a
        className="flex w-56 group"
        href="https://www.instagram.com/bywillsarmiento/"
        rel="noopener nofollow"
        target="_blank"
        title="@bywillsarmiento"
      >
        <div className="w-12 h-12 p-0.5 box-content rounded-full overflow-hidden relative">
          <img
            className="absolute inset-0"
            src="https://secureservercdn.net/198.71.233.138/ypq.139.myftpupload.com/wp-content/uploads/sb-instagram-feed-images/bywillsarmiento.jpg"
            alt=""
          />
          <div className="absolute inset-0 z-10 flex justify-center">
            <div className="absolute inset-0 bg-black opacity-0 z-0 group-hover:opacity-70 transition-opacity ease-in-out"></div>
            <InstagramIcon className="z-10 w-6 h-6 self-center opacity-0 group-hover:opacity-100 transition-opacity ease-in-out" />
          </div>
        </div>
        <div className="pl-4 font-semibold self-center text-gray-100">
          bywillsarmiento
        </div>
      </a>
      <div className="grid grid-cols-4 gap-2 mt-6">
        {images &&
          images.slice(0, 8).map((imageUrl, i) => {
            return (
              <div className="" key={i}>
                <img className="w-full h-full object-cover" src={imageUrl} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      aria-label="Instagram"
      className={className}
      role="img"
      viewBox="0 0 450 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M225.1 110c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7h0zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0C96.8 4.1 65 12.3 38.7 38.5c-26.3 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399.8 357c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9-32.6 0-102.7 2.6-132.1-9-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1 0-32.6-2.6-102.7 9-132.1C58.2 73.2 73.3 58.1 93 50.2c29.5-11.7 99.5-9 132.1-9 32.6 0 102.7-2.6 132.1 9 19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1 0 32.6 2.7 102.7-9 132.1z"
        fill="#FFF"
        fillRule="nonzero"
        stroke="#FFF"
      />
    </svg>
  );
}
