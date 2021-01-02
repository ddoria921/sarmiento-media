import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useState } from "react";
import VisuallyHidden from "@reach/visually-hidden";

import Button from "../components/button";
import ButtonLink from "../components/button-link";
import ImageGallery from "../components/image-gallery";
import Footer from "../components/footer";
import Nav from "../components/nav";

import {
  getInstagramImages,
  getTestimonialVideos,
  getVimeoVideos,
} from "../lib/api";
import {
  KIM_JOSH_URI,
  KRISTINE_JAMES_URI,
  MACKENZIE_THOMAS_URI,
} from "../lib/constants";
import InstagramSection from "../components/instagram-section";

export default function Home({ images, testimonials, videos }) {
  const dialogContentStyles = {
    width: "100%",
    margin: "0px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "1rem 3rem",
    background: "none",
  };

  const vimeoImages = videos.map((v) => {
    const [videoTitle] = v.name?.split("|");
    return {
      title: videoTitle,
      imageUrl: v.pictures.sizes[5].link,
    };
  });

  const showTestimonial = (id) => {
    const video = testimonials.find((video) => video.uri.includes(id));
    const iframeString = video.embed.html;
    const iframe = iframeString
      .replace('width="1920"', 'width="100%"')
      .replace('height="1080"', 'height="100%"');

    setSelectedVideo(video);
    setVimeoIframe(iframe);
    setShowDialog(true);
  };

  const [showDialog, setShowDialog] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [vimeoIframe, setVimeoIframe] = useState("");
  const openDialogWithVideo = (videoId) => {
    const iframeString = videos[videoId].embed.html;
    const iframe = iframeString
      .replace('width="1920"', 'width="100%"')
      .replace('height="1080"', 'height="100%"');

    setSelectedVideo(videos[videoId]);
    setVimeoIframe(iframe);
    setShowDialog(true);
  };

  const closeDialog = () => setShowDialog(false);

  return (
    <div>
      <Nav />
      <main>
        <section className="aspect-w-16 aspect-h-7">
          <video
            autoPlay={true}
            className="object-cover"
            controls={false}
            loop={true}
            muted={true}
            src="https://secureservercdn.net/198.71.233.138/ypq.139.myftpupload.com/wp-content/uploads/2020/07/Wedding-Intro-For-Web-Optimized.mp4?_=1"
          ></video>
        </section>

        <section className="py-12 px-4">
          <div className="flex max-w-4xl mx-auto lg:max-w-6xl">
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

        {/* Featured Film */}
        <section className="bg-gray-100 py-12 px-4">
          <div className="max-w-4xl mx-auto lg:max-w-6xl">
            <h2 className="uppercase text-3xl font-extralight text-gray-800 tracking-widest text-center">
              Featured Film
            </h2>
            <figure className="flex mt-6">
              <img
                className="object-contain w-2/3 h-96 px-5"
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

        {/* Testimonials */}
        <section className="py-12 px-4" id="testimonials">
          <div className="max-w-4xl mx-auto lg:max-w-6xl">
            <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b">
              + Words from My Couples&#8230;
            </h2>

            <TestimonialBlock
              onClick={() => showTestimonial(MACKENZIE_THOMAS_URI)}
              buttonPosition="right"
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
              onClick={() => showTestimonial(KIM_JOSH_URI)}
              buttonPosition="left"
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
              onClick={() => showTestimonial(KRISTINE_JAMES_URI)}
              buttonPosition="right"
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
          </div>
        </section>

        {/* Why Choose Me? */}
        <section className="py-12 px-4 bg-gray-200">
          <div className="flex max-w-4xl mx-auto lg:max-w-6xl">
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

        {/* Films */}
        <section className="py-12 px-4" id="films">
          <div className="max-w-4xl mx-auto lg:max-w-6xl">
            <h2 className="uppercase text-3xl font-extralight text-gray-800 border-gray-900 border-b border-t w-64 text-center mx-auto tracking-widest py-1">
              More Films
            </h2>
            <div className="mt-12">
              <ImageGallery
                images={vimeoImages}
                onImageClick={openDialogWithVideo}
              />
            </div>

            <div className="mt-12 flex justify-center">
              <span className="border-b border-gray-400 pb-6">
                <ButtonLink href="#">Schedule a consultation</ButtonLink>
              </span>
            </div>
          </div>
        </section>

        <InstagramSection images={images} />
      </main>

      <Footer />

      <DialogOverlay
        style={{ background: "rgba(0, 0, 0, 0.9)", zIndex: "100" }}
        isOpen={showDialog}
        onDismiss={closeDialog}
      >
        <DialogContent
          aria-label={`${selectedVideo?.description}`}
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
    </div>
  );
}

function TestimonialBlock({
  buttonPosition,
  caption,
  imageUrl,
  onClick,
  testimonial,
}) {
  return (
    <figure className="mt-6 bg-gray-700 p-6 flex relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-fixed bg-cover bg-no-repeat bg-center absolute inset-0"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      </div>

      {buttonPosition === "left" && (
        <div className="w-3/12 self-center z-10">
          <Button className="mx-auto block" onClick={onClick}>
            View Film
          </Button>
        </div>
      )}

      <blockquote className="w-9/12 z-10">
        <div className="w-6 h-6 mx-auto text-gray-100">
          <QuoteLeftIcon />
        </div>
        <p className="mt-4 font-serif tracking-tight text-gray-100 text-center">
          {testimonial}
        </p>
        <figcaption className="mt-6 uppercase text-center text-lg text-gray-100 font-extralight">
          {caption}
        </figcaption>
      </blockquote>

      {buttonPosition === "right" && (
        <div className="w-3/12 self-center z-10">
          <Button className="mx-auto block" onClick={onClick}>
            View Film
          </Button>
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

export async function getStaticProps() {
  const [images, testimonials, videos] = await Promise.all([
    getInstagramImages(),
    getTestimonialVideos(),
    getVimeoVideos(),
  ]);

  return {
    props: { images, testimonials, videos },
  };
}
