import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// Scrolls to a #hash target when present, otherwise to the top on route change.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted/laid out.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
