import Footer from "../components/footer";
import InstagramSection from "../components/instagram-section";
import Nav from "../components/nav";
import { getInstagramImages } from "../lib/api";

export default function Contact({ images }) {
  return (
    <div>
      <Nav />
      <main>
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
