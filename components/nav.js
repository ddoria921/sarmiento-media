import Link from "next/link";

export default function Nav() {
  return (
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
  );
}
