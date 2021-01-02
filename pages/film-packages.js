import ButtonLink from "../components/button-link";
import Footer from "../components/footer";
import InstagramSection from "../components/instagram-section";
import Nav from "../components/nav";
import { getInstagramImages } from "../lib/api";

export default function FilmPackages({ images }) {
  return (
    <div>
      <Nav />
      <main>
        {/* Hero Image */}
        <section className="relative hero-container">
          <div className="absolute inset-0 z-10 flex">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="uppercase text-gray-100 z-10 self-center mx-auto text-4xl font-thin tracking-widest">
              Film Packages
            </h1>
          </div>
          <img
            className="w-full h-full object-cover"
            src="./MK-1.jpg"
            alt=""
            role="presentation"
          />
        </section>

        {/* Starting packages */}
        <section className="py-12 px-4">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-1/2 flex flex-col justify-center">
              <h2 className="uppercase text-3xl font-extralight text-gray-700 text-center">
                Wedding
              </h2>
              <h3 className="uppercase italic text-gray-600 text-center">
                Packages starting at $2500
              </h3>
              <div className="mt-8">
                {/* <ButtonLink href="#">Let's Chat!</ButtonLink> */}
              </div>
            </div>
            <div className="pl-12 w-1/2">
              <img src="./william-2.jpg" />
            </div>
          </div>
        </section>

        {/* Schedule consultation */}
        <section className="py-12 px-4 bg-gray-200">
          <h2 className="text-center text-gray-900 text-2xl font-thin">
            Schedule your wedding consultation with Will.
          </h2>
          <div className="text-center mt-4">
            <ButtonLink href="/wedding-contact">Schedule now</ButtonLink>
          </div>
        </section>

        {/* Film packages */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-center uppercase text-3xl font-thin text-gray-700">
            Film Packages
          </h2>
          <div className="bg-gray-200 w-64 mt-2 h-px mx-auto mb-12"></div>

          <FilmPackage name="Blanc" imageUrl="./blanc.jpg">
            <li>Up to eight hours of wedding day coverage</li>
            <li>3-5 minute highlight film</li>
            <li>Recorded letter by bride/groom</li>
            <li>Custom USB delivery</li>
          </FilmPackage>

          <div className="w-2/3 mx-auto my-12 h-px bg-gray-200"></div>

          <FilmPackage name="Meslier" imageUrl="./Meslier.jpg">
            <li>Up to twelve hours of wedding day coverage</li>
            <li>7-9 minute highlight film </li>
            <li>Recorded letters by bride/groom </li>
            <li>Custom USB delivery</li>
            <li>Full edit of ceremony & speeches</li>
            <li>Instagram teaser film (~45 sec)</li>
            <li>Unique aerial drone footage*</li>
          </FilmPackage>

          <div className="w-2/3 mx-auto my-12 h-px bg-gray-200"></div>

          <FilmPackage name="Juillet" imageUrl="./juillet.jpg">
            <li>Weekend coverage available (two days)</li>
            <li>7-12 minute highlight film</li>
            <li>Two cinematographers on wedding day</li>
            <li>Recorded letters by bride/groom</li>
            <li>Custom USB delivery</li>
            <li>All RAW footage</li>
            <li>Rehearsal dinner & pre/post events (4 hours max)</li>
            <li>Full edit of ceremony & speeches</li>
            <li>Instagram teaser film (~60 sec)</li>
            <li>Unique aerial drone footage*</li>
            <li>1 hour sunrise/sunset shoot</li>
          </FilmPackage>
        </section>

        {/* PDF Download */}
        <section className="py-24 px-4">
          <h2 className="text-center uppercase text-gray-700 text-2xl font-thin">
            Download my full wedding guide!
          </h2>
          <div className="text-center mt-4">
            <ButtonLink href="/SM-Wedding-Guide.pdf" target="_blank">
              PDF Download
            </ButtonLink>
          </div>
        </section>

        <InstagramSection images={images} />
      </main>
      <Footer />
    </div>
  );
}

function FilmPackage({ children, imageUrl, name }) {
  return (
    <div>
      <h3 className="pl-8 font-cursive text-5xl">{name}</h3>
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <div className="flex-none px-6 md:px-2 lg:px-8">
          <ul className="list-inside list-disc font-light tracking-tight text-gray-700 text-lg md:mt-8 md:text-normal">
            {children}
          </ul>
        </div>
        <div className="flex-shrink flex p-6">
          <img
            className="w-full object-contain"
            src={imageUrl}
            alt=""
            role="presentation"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [images] = await Promise.all([getInstagramImages()]);

  return {
    props: { images },
  };
}
