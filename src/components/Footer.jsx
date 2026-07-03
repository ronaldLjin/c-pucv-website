import { useLocation } from "react-router-dom";

const HOME_ORGS = [{ label: "LavaMaeX", href: "https://lavamaex.org/" }];

const FULL_ORGS = [
  { label: "BeTheChangeYYC", href: "https://www.bethechangeyyc.org/" },
  { label: "SafeLink Alberta", href: "https://safelinkalberta.ca/" },
  { label: "LavaMaeX", href: "https://lavamaex.org/" },
];

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const orgs = isHome ? HOME_ORGS : FULL_ORGS;
  const email = isHome ? "c-pucv@radicalgary.ca" : "billzheng2147@gmail.com";

  return (
    <>
      <footer className="container">
        <p className="footer-desc">
          Modelled after LavaMae’s Pop-Up Care Village in the San Francisco Bay
          Area, the Calgary Pop-Up Care Village is a festival for anyone
          experiencing systemic vulnerabilities such as homelessness and
          addiction.
        </p>
        <div>
          <span style={{ fontFamily: "GlacialIndifference-B" }}>Navigation</span>
          <ul>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#event">The Event</a>
            </li>
            <li>
              <a href="/#get-involved">Get Involved</a>
            </li>
            <li>
              <a href="/#partners">Our Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <span style={{ fontFamily: "GlacialIndifference-B" }}>
            Related Organizations
          </span>
          <ul>
            {orgs.map((o) => (
              <li key={o.href}>
                <a target="_blank" rel="noreferrer" href={o.href}>
                  {o.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span style={{ fontFamily: "GlacialIndifference-B" }}>Contact</span>
          <ul>
            <li>
              <a href={`mailto:${email}`}>
                <i className="fa-solid fa-envelope-circle-check"></i> {email}
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        ©2023 Calgary Pop-Up Care Village. Web design and development by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ronald-jin.vercel.app/"
          style={{ color: "white" }}
        >
          Ronald Jin
        </a>
        .
      </div>
    </>
  );
}
