import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Button from "../components/button";
import ButtonLink from "../components/button-link";
import ImageGallery from "../components/image-gallery";
import styles from "../styles/Home.module.css";

export default function Home() {
  const getInstagramImages = () => {
    const response = fetch("https://www.instagram.com/bywillsarmiento/");
    console.log({ response });

    response
      .then((r) => r.text())
      .then((html) => {
        console.log({ html });

        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Get the image file
        const images = doc
          .querySelectorAll("main article a img")
          .forEach((el) => console.log(el.getAttribute("src")));
        const imageUrls = [];

        console.log({ images, doc });

        for (let img of images) {
          imageUrls.push(img.getAttribute("src"));
        }

        console.log({ imageUrls });
      });
  };

  return (
    <div>
      <header className="flex h-36 bg-white">
        <img
          className="h-full p-10 object-contain box-border"
          src="./sarmiento-media-logo.png"
        />
        <nav className="flex-grow">
          <ul className="flex justify-end h-full">
            <li className="pr-4 self-center uppercase text-xs font-semibold">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="pr-4 self-center uppercase text-xs font-semibold">
              <Link href="/film-packages">
                <a>Film Packages</a>
              </Link>
            </li>
            <li className="pr-4 self-center uppercase text-xs font-semibold">
              <Link href="/meet-will">
                <a>Meet Will</a>
              </Link>
            </li>
            <li className="pr-4 self-center uppercase text-xs font-semibold">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="pr-4 self-center uppercase text-xs font-semibold">
              <Link href="/film-packages">
                <a>Commercial</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* <iframe
          src="https://player.vimeo.com/video/286898202?app_id=122963"
          width="480"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          title="My video"
        ></iframe> */}
        {/* <iframe
          src="https://vimeo.com/album/5376202/embed"
          width="480"
          height="360"
          allowfullscreen
          frameborder="0"
        ></iframe> */}
        <section className="aspect-w-16 aspect-h-9">
          <video
            autoPlay={true}
            className="object-cover"
            controls={false}
            loop={true}
            muted={true}
            src="./wedding-intro-video.mp4"
          ></video>
        </section>

        <section className="py-12 px-4">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-1/2">
              <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b">
                + Destination Wedding Filmmaker
              </h2>
              <p className="py-2 text-gray-600 leading-7">
                DC, Maryland and Virginia based storyteller with a passion for
                filmmaking, travel, spreading positive energy, and capturing the
                unordinary – because <em>true love</em> isn’t ordinary.
              </p>
              <p className="py-2 text-gray-600 text-sm leading-6">
                My name is Will and as your wedding day videographer, I want to
                journey with you to create your forever memory, so you don’t
                miss a single moment.
              </p>
              <p className="py-2 text-gray-600 text-sm leading-6">
                I remember the energy when I filmed my first wedding. Joy,
                laughter, and tears pulsing around me as I captured some of the
                most pure and raw moments of the day, and night! It stays with
                you. This is why I’m so passionate for wedding filmmaking. I
                love being fully present in every moment of the day, and I’m
                excited for you to be here now.
              </p>

              <div className="mt-8">
                <ButtonLink href="#">Meet Will</ButtonLink>
              </div>
            </div>
            <div className="pl-12 w-1/2">
              <img src="./william-1.jpg" />
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="uppercase text-3xl font-extralight text-gray-800 tracking-widest text-center">
              Featured Film
            </h2>
            <figure className="flex">
              <img
                className="object-contain w-2/3 px-5"
                src="./matt-krissy.jpg"
              />
              <blockquote className="w-1/3 px-5">
                <div className="w-6 h-6 mx-auto text-gray-500 md:mx-0">
                  <QuoteLeftIcon />
                </div>
                <p className="mt-4 font-serif tracking-tight text-gray-900">
                  I HIGHLY recommend Will! Out of all the many things we spent
                  money on, I can honestly say, hiring Will was THE BEST and
                  most rewarding decision we made. His work speaks for itself,
                  but in addition, he makes it feel like he is part of the group
                  without ever interrupting the vibe or the moment (actually
                  adding to it). Will had a way of understanding what I wanted
                  to see and transforming my vision into a real, tangible piece
                  of art. My husband and I will cherish our wedding video for
                  the rest of our lives.
                </p>
                <figcaption className="mt-6 uppercase text-lg text-gray-600 font-extralight">
                  Krissy + Matt
                </figcaption>
              </blockquote>
            </figure>
          </div>
        </section>

        <section className="py-12 px-4">
          <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b">
            + Words from My Couples&#8230;
          </h2>

          <TestimonialBlock
            linkPosition="right"
            caption="Mackenzie + Thomas"
            imageUrl="./MT-4.jpg"
            testimonial="Will is so talented. We found him through a wedding venue, and
            we were so drawn in by the story he was able to tell in just 6
            minutes. Everything from his ability to read people to his
            thoughtfulness to his editing style (his videos are such a nice
            switch from what we were used to). If you are looking for a
            videographer for a wedding, a party, and anything in between,
            Will will make sure what you care about MOST is in the final
            product. We are so pleased and impressed with our wedding video.
            So happy we found him!"
          />

          <TestimonialBlock
            linkPosition="left"
            caption="Kim + Josh"
            imageUrl="./KJ-2.jpg"
            testimonial="Will was SO amazing to work with. He showed up to the venue
                before anyone else to get some amazing drone shots. He stayed
                all day and captured every moment perfectly!! My husband and I
                now have something to remember our wedding day for years to
                come. If you are looking for a trustworthy, amazing videographer
                go with Will! I promise you won’t regret it!"
          />

          <TestimonialBlock
            linkPosition="right"
            caption="Kristine + James"
            imageUrl="./KJ-4.jpg"
            testimonial="Will thank you a million times. Every time I watch this
                beautiful masterpiece, I am transported right back to Mortgage
                Hall and I get to relive marrying the man of my dreams. You
                captured our love perfectly, made me cry, made me laugh, and
                made me smile 'til my cheeks hurt all in the span of 7 minutes.
                Will, you are so incredibly talented and I am so thankful James
                and I found you to capture our day."
          />
        </section>

        <section className="py-12 px-4">
          <div className="flex max-w-4xl mx-auto">
            <div className="w-1/2">
              <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b">
                + Why Choose Me?
              </h2>
              <p className="py-2 text-gray-600 text-sm leading-6">
                Each love story is unique and this is the reason why every raw
                moment of your wedding day is so important to me. You don’t want
                a videographer with a ‘cookie-cutter’ mentality… a true
                videographer is able to listen, observe & create your story as
                your wedding day unfolds, because there are no rules to a love
                story. My couples choose me, not because I can deliver a wedding
                video (any videographer can do this), but because they believe
                in my passion for story-telling, which fosters my mind in a way
                that allows my creativity to grow and tell your story in the
                best way possible.
                <span>- Will</span>
              </p>

              <div className="mt-8">
                <ButtonLink href="#">Let's Chat!</ButtonLink>
              </div>
            </div>
            <div className="pl-12 w-1/2">
              <img src="./william-2.jpg" />
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b border-t w-64 text-center mx-auto tracking-widest py-1">
            More Films
          </h2>
          {/* Instagram Section (TODO: Make this a component) */}
          <div className="mt-12">
            <ImageGallery />
          </div>

          <div className="mt-12 flex justify-center">
            <span className="border-b border-gray-400 pb-6">
              <ButtonLink>Schedule a consultation</ButtonLink>
            </span>
          </div>
        </section>
      </main>

      <footer className="h-16 bg-black ">
        <div className="flex h-full max-w-4xl mx-auto">
          <p className="text-xs text-gray-100 self-center">
            © 2020 Sarmiento Media. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

function TestimonialBlock({ caption, imageUrl, testimonial, linkPosition }) {
  return (
    <figure className="mt-6 bg-gray-700 p-6 flex relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-fixed bg-cover bg-no-repeat bg-center absolute inset-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      </div>

      {linkPosition === "left" && (
        <div className="w-3/12 self-center z-10">
          <Button className="mx-auto block">View Film</Button>
        </div>
      )}

      <blockquote className="w-9/12 z-10">
        <div className="w-6 h-6 mx-auto text-gray-100">
          <QuoteLeftIcon />
        </div>
        <p className="mt-4 font-serif tracking-tight text-gray-100">
          {testimonial}
        </p>
        <figcaption className="mt-6 uppercase text-center text-lg text-gray-100 font-extralight">
          {caption}
        </figcaption>
      </blockquote>

      {linkPosition === "right" && (
        <div className="w-3/12 self-center z-10">
          <Button className="mx-auto block">View Film</Button>
        </div>
      )}
    </figure>
  );
}

function QuoteLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      className="svg-inline--fa fa-quote-left fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M464 256h-80v-64a64 64 0 0164-64h8a24 24 0 0024-24V56a24 24 0 00-24-24h-8a160 160 0 00-160 160v240a48 48 0 0048 48h128a48 48 0 0048-48V304a48 48 0 00-48-48zm-288 0H96v-64a64 64 0 0164-64h8a24 24 0 0024-24V56a24 24 0 00-24-24h-8A160 160 0 000 192v240a48 48 0 0048 48h128a48 48 0 0048-48V304a48 48 0 00-48-48z"
      />
    </svg>
  );
}
