const ORGS = [{ label: "LavaMaeX", href: "https://lavamaex.org/" }];
const email = "bill@radicalgary.ca";

export default function Footer() {
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
              <a href="/calgary-pop-up-care-village">Calgary Pop-Up Care Village</a>
            </li>
            <li>
              <a href="/">Indigenous Pop-Up Care Village</a>
            </li>
            <li>
              <a href="/calgary-pop-up-care-village#get-involved">Get Involved</a>
            </li>
            <li>
              <a href="/calgary-pop-up-care-village#partners">Our Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <span style={{ fontFamily: "GlacialIndifference-B" }}>
            Related Organizations
          </span>
          <ul>
            {ORGS.map((o) => (
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
        ©{new Date().getFullYear()} Calgary Pop-Up Care Village. Web design and
        development by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ronald-jin/"
          style={{ color: "white" }}
        >
          Ronald Jin
        </a>
        .
      </div>
    </>
  );
}
