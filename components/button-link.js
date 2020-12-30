export default function ButtonLink({ children, href, className = "" }) {
  return (
    <a
      className={`inline-block bg-gray-900 text-gray-100 px-6 py-3 rounded-sm font-semibold uppercase text-xs tracking-wider cursor-pointer ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
