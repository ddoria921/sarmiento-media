import { useEffect } from "react";

export default function HoneyBookContactForm({ id }) {
  function maybeInitHoneyBook() {
    window._HB_ = window._HB_ || {};
    window._HB_.pid = id;
  }

  useEffect(() => {
    maybeInitHoneyBook();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    document.body.append(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <div className={`hb-p-${id}-1`}></div>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.honeybook.com/p.png?pid=${id}`}
      />
    </>
  );
}
