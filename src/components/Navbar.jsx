import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=277LGX498TX36";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setMobileClosing(false);
    setMobileOpen(true);
  };

  const closeMenu = () => {
    setMobileClosing(true);
    closeTimer.current = setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
      setAboutOpen(false);
      setEventOpen(false);
    }, 500);
  };

  // Transparent over the hero at the top; solid white once scrolled.
  const navStyle = scrolled
    ? {
        backgroundColor: "white",
        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
        transition: "all 0.2s",
      }
    : { backgroundColor: "transparent", boxShadow: "none" };
  const menuColor = scrolled ? "rgba(199, 16, 46)" : "white";
  const logoSrc = scrolled
    ? "/assets/images/logo.png"
    : "/assets/images/logo-white.png";

  return (
    <>
      <div className="nav-bar" style={navStyle}>
        <Link to="/#banner">
          <img
            src={logoSrc}
            alt="Calgary Pop-Up Care Village Logo"
            className="logo"
          />
        </Link>
        <div className="nav-bar-links">
          <div>
            <Link className="menu-item" style={{ color: menuColor }} to="/#about">
              About <i className="fa-solid fa-chevron-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/history">History</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="menu-item" style={{ color: menuColor }} to="/#event">
              The Event <i className="fa-solid fa-chevron-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/01-24-2023">01/24/2023 Recap</Link>
              </li>
              <li>
                <Link to="/09-27-2022">09/27/2022 Recap</Link>
              </li>
            </ul>
          </div>
          <Link className="menu-item" style={{ color: menuColor }} to="/#get-involved">
            Get Involved
          </Link>
          <Link className="menu-item" style={{ color: menuColor }} to="/#partners">
            Our Partners
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href={DONATE_URL}
            className={`donate-button${scrolled ? " red-button" : ""}`}
          >
            Donate
          </a>
        </div>
        <a className="menu-item" id="menu" onClick={openMenu} style={{ color: menuColor }}>
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>

      {(mobileOpen || mobileClosing) && (
        <>
          <div
            className={`nav-bar-links-mobile animate__animated ${
              mobileClosing ? "animate__slideOutRight" : "animate__slideInRight"
            } animate__faster`}
            style={{ display: "flex" }}
          >
            <button id="close-nav" onClick={closeMenu}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="mobile-parent">
              <span>
                <Link to="/#about" onClick={closeMenu}>
                  About
                </Link>
                <button onClick={() => setAboutOpen((v) => !v)}>
                  <i className={`fa-solid ${aboutOpen ? "fa-xmark" : "fa-plus"}`}></i>
                </button>
              </span>
              <ul
                className={`mobile-dropdown-content${
                  aboutOpen ? " mobile-dropdown-content-active" : ""
                }`}
              >
                <li>
                  <Link to="/history" onClick={closeMenu}>
                    History
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile-parent">
              <span>
                <Link to="/#event" onClick={closeMenu}>
                  The Event
                </Link>
                <button onClick={() => setEventOpen((v) => !v)}>
                  <i className={`fa-solid ${eventOpen ? "fa-xmark" : "fa-plus"}`}></i>
                </button>
              </span>
              <ul
                className={`mobile-dropdown-content${
                  eventOpen ? " mobile-dropdown-content-active" : ""
                }`}
              >
                <li>
                  <Link to="/01-24-2023" onClick={closeMenu}>
                    01/24/2023 Recap
                  </Link>
                </li>
                <li>
                  <Link to="/09-27-2022" onClick={closeMenu}>
                    09/27/2022 Recap
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/#get-involved" onClick={closeMenu}>
              Get Involved
            </Link>
            <Link to="/#partners" onClick={closeMenu}>
              Our Partners
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href={DONATE_URL}
              className="donate-button"
            >
              Donate
            </a>
          </div>
          <div
            id="mask2"
            onClick={closeMenu}
            className={`animate__animated ${
              mobileClosing ? "animate__fadeOut" : "animate__fadeIn"
            } animate__faster`}
            style={{ display: "block" }}
          ></div>
        </>
      )}
    </>
  );
}
