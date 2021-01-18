import ButtonLink from "../components/button-link";
import Footer from "../components/footer";
import HoneyBookContactForm from "../components/honey-book-contact-form";
import InstagramSection from "../components/instagram-section";
import Nav from "../components/nav";
import { getInstagramImages } from "../lib/api";

export default function Contact({ images, honeyBookId }) {
  return (
    <div>
      <Nav />
      <main>
        <section className="aspect-w-16 aspect-h-7 relative">
          <div className="absolute inset-0 flex">
            <div className="absolute inset-0 bg-gray-900 opacity-70 z-10"></div>
            <p className="text-white z-20 text-6xl tracking-widest uppercase font-thin pl-16 w-5/6 self-center leading-relaxed">
              Let's create your wedding story.
            </p>
          </div>
          <img className="object-cover" src="./goldenhour-4.jpg" alt="" />
        </section>

        <section className="py-12 px-4">
          <p className="px-12 text-center text-gray-500 text-lg leading-tight max-w-3xl mx-auto">
            I'm so excited to capture every moment of your big day! Above all
            else, I'm someone that likes to pour 200% into everything I do, and
            that includes your forever wedding day memory. In order to make sure
            I can give my full creative self to your big day, I limit the number
            of weddings I take on per year. This allows me to bring you an
            impeccable memory, full of love laughter, vibes and something you
            will cherish for years to come.
          </p>
          <div className="w-full max-w-2xl h-px bg-gray-200 mx-auto mt-8"></div>
        </section>

        <section className="py-12 px-4">
          <div className="flex mx-auto max-w-4xl">
            <div className="w-5/12 pr-4">
              <h3 className="uppercase font-semibold text-sm tracking-wider">
                Questions?
              </h3>
              <p className="text-xs text-gray-500 mt-6">
                If you absolutely love my work and would like to work together,
                please contact me today! I love to learn as much as possible
                about my couples and answer any questions you have. If for some
                reason the contact form is giving you issues feel free to email
                me directly instead.
              </p>
              <p className="text-xs text-gray-500 my-6">
                william.sarmiento.ws@gmail.com
              </p>

              <img className="px-4 py-2" src="./william-1.jpg" alt="" />

              <div className="w-full h-px bg-gray-200 mx-auto mt-8"></div>

              <div className="flex justify-center items-center py-8">
                <ButtonLink href="./#films">View Films</ButtonLink>
              </div>

              <div className="w-full h-px bg-gray-200 mx-auto"></div>
            </div>
            <div className="w-7/12 pl-4">
              <HoneyBookContactForm id={honeyBookId} />
            </div>
          </div>
        </section>

        <InstagramSection images={images} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const [images] = await Promise.all([getInstagramImages()]);

  return {
    props: { images, honeyBookId: process.env.HONEY_BOOK_ID },
  };
}
