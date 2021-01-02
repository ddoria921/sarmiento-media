import ButtonLink from "../components/button-link";
import Footer from "../components/footer";
import InstagramSection from "../components/instagram-section";
import Nav from "../components/nav";
import { getInstagramImages } from "../lib/api";

export default function MeetWill({ images }) {
  return (
    <div>
      <Nav />
      <main>
        {/* Hero Image */}
        <section className="relative hero-container">
          <div className="absolute inset-0 z-10 flex">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="uppercase text-gray-100 z-10 self-center mx-auto text-4xl font-thin tracking-widest">
              Filmmaker, Engineer &{" "}
              <span className="font-bold">Storyteller</span>
            </h1>
          </div>
          <img
            className="w-full h-full object-cover"
            src="./goldenhour-2.jpg"
            alt=""
            role="presentation"
          />
        </section>

        <section className="py-12 px-4">
          <h2 className="uppercase text-4xl font-extralight text-gray-700 tracking-widest text-center">
            I Take a Different Approach...
          </h2>
          <div className="flex max-w-4xl mx-auto mt-12 lg:max-w-6xl">
            <div className="w-1/2">
              <p className="py-2 text-gray-500 leading-7">
                Hey there! I’m Will – a videographer & creative based in the
                heart of D.C. – and I am so pumped for you to be here! This is
                the story of how a little thing called “passion” took my ‘life
                plans’ on a, well, not-so-planned out adventure.
              </p>
              <p className="py-2 text-gray-500 text-sm leading-6">
                So get this, I went to engineering school because I really
                wanted to learn how airplanes worked, so I got my degree is
                aerospace engineering and then I picked up a camera during my
                senior year of college and my life took a complete 180! Because
                now I film weddings… wait, say that again?
              </p>
              <p className="py-2 text-gray-500 text-sm leading-6">
                See I fell in love with the editing and filmmaking process so
                much that I bought my first professional camera right after
                college and at that very moment I knew… I had just proposed to
                the love – sorry, passion – of my life! I like to think I take a
                different approach… Good videographers come into a project
                knowing the type of shots they want. While this is definitely
                important, I’ve learned to take what we’ve discussed and
                creatively develop a story to work in harmony with your special
                vision. I tackle each project with impeccable care and a
                meticulous eye for detail (maybe that’s the engineer in me!) to
                make sure that each dimension of your vision, dream and special
                day is brought to life… I’m lucky to have something that brings
                so much happiness into my life and this is my small way of
                sharing that happiness back with the world.
              </p>
            </div>
            <div className="pl-12 w-1/2">
              <img src="./meet-will.jpg" />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-300">
          <h2 className="font-cursive text-7xl pl-8 lowercase text-gray-600">
            When I'm not behind my editing screen...
          </h2>
          <div className="flex px-12 mt-12 flex-col lg:flex-row">
            <div className="relative lg:w-1/2">
              <img
                className="w-full h-full object-contain pl-12"
                src="./meet-will-2.jpg"
                alt=""
                role="presentation"
              />

              <img
                className="absolute w-1/2 top-1/4 -left-6"
                src="./meet-will-3.jpg"
                alt=""
                role="presentation"
              />
            </div>
            <div className="flex flex-col px-12 pt-16 space-y-16 lg:pt-8 lg:w-1/2">
              <div>
                <h4 className="font-cursive text-center text-6xl text-gray-600">
                  #1
                </h4>
                <p className="text-center text-gray-600">
                  You can find me dancing along to my go-to latin and pop
                  playlists on Spotify! I love bringing positive vibes and
                  energy anywhere I go and music and my latin culture are a big
                  part of that.
                </p>
              </div>
              <div>
                <h4 className="font-cursive text-center text-6xl text-gray-600">
                  #2
                </h4>
                <p className="text-center text-gray-600">
                  Exploring somewhere on the other side of the world! I love
                  traveling and it's a major reason why I became a destination
                  wedding filmmaker. Colombia and Thailand are my next two
                  wedding destinations!
                </p>
              </div>
              <div>
                <h4 className="font-cursive text-center text-6xl text-gray-600">
                  #3
                </h4>
                <p className="text-center text-gray-600">
                  Being a puppy dad! I love taking in foster pups to and helping
                  them find a forever home whenever I know I'll have some down
                  time. I have yet to get my own dog because of time and
                  commitment, but when I do, I would love to have an Aussie or
                  Siberian Husky!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 max-w-3xl mx-auto">
          <h2 className="uppercase text-4xl font-light tracking-widest text-gray-700 text-center">
            Focus on quality
          </h2>
          <p className="text-center uppercase text-gray-500 mt-8">
            Will studied aeronautical engineering at purdue university and works
            full time in washington d.c. during his time at purdue, he developed
            his creative design process and taught himself the art of video
            production & photography through online inspiration,
            experimentation, and passion.
          </p>

          <div className="w-48 bg-gray-800 h-px mx-auto my-8"></div>

          <div className="text-center">
            <ButtonLink href="/#testimonials">Testimonials</ButtonLink>
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
    props: { images },
  };
}
