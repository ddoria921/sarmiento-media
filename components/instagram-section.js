import InstagramGallery from "./instagram-gallery";

export default function InstagramSection({ images }) {
  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-xl mx-auto lg:max-w-3xl">
        <h3 className="lowercase text-3xl text-gray-100 text-center font-thin italic">
          Find me on Instagram
        </h3>
        <h4 className="uppercase text-lg text-gray-400 text-center my-4">
          @bywillsarmiento
        </h4>
        <InstagramGallery images={images} />
      </div>
    </section>
  );
}
