import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown.jsx";
import Accordion from "../components/Accordion.jsx";
import Modal from "../components/Modal.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";

const VOLUNTEER_FORM = "https://forms.gle/pEM8Vg4ToNxGXfb48";
const DONATE_URL =
  "https://www.paypal.com/donate/?hosted_button_id=49EYE3U5C8TPW";

const PRIMARY_SPONSORS = [
  {
    href: "https://www.calgary.ca/home.html",
    src: "/assets/images/sponsors/download.png",
    fill: true,
  },
  {
    href: "https://www.bloxbia.ca/",
    src: "/assets/images/sponsors/beltline-bia.png",
    fill: true,
  },
  {
    href: "https://www.radicareventures.ca/",
    src: "/assets/images/sponsors/radicare.svg",
    fill: true,
  },
];

const SERVICES = [
  {
    title: "Equitable clothing and hygiene access",
    body: "Our partners will provide clothing free of charge donated by local Calgarians, as well as free hygiene products such as razors, shaving cream, toothpaste, toothbrush, and other oral hygiene and hair hygiene products. We also have access to handwashing stations and porta potties on top of the city's pre-existing washroom system which will help alleviate the stress of guest flow.",
  },
  {
    title: "Dignifying haircuts, manicures, massage therapy",
    body: "Our partners from MC College, a group of Calgary based Registered Massage Therapists, and nursing instructors from the University of Calgary will be employing students and qualified professionals to perform dignifying haircuts, manicures, massage therapy services, as well as leading sessions of meditation practices free of charge. Guests will have the opportunity to enjoy a refreshing hairstyle change, a relaxing massage therapy, a beautifying manicure, as well as a stress-relieving meditation session.",
  },
  {
    title: "Refreshing food and drinks",
    body: "Location TBD will be kindly providing delicious food menu options including the Traditional Three Sisters soup, Pea and Ham soup served with Garlic Toast, Kerby Burger, and more. Moreover, we have partnered up with Boston Pizza to bring delicious, freshly prepared pizzas of various toppings to the event. Zero Food Waste Foundation and several of our partners will also be offering non-perishable food items during the festival for guests to access. Furthermore, guests have the opportunity to complete anonymous guest surveys and enter random prize draws to obtain pre-packaged take-to-go food items as well. Lastly, our partners have brought gift cards from various restaurants across Calgary as an incentive for guests to interact with their booth.",
  },
  {
    title: "Professional physical health checkups",
    body: "Our professional healthcare team will be able to assist guests with woundcares and other healthcare needs with paramedics onsite, full-range STBBI testing with gift card incentives. The STI Health Clinic can also administer STBBI treatment on-site as well as referrals to other professional health clinics in the city of Calgary for follow ups. We are fortunate to have Medicine Shoppe Pharmacy pharmacy who will be able to answer any questions regarding medication as well for newcomers, and AHS Safeworks will be bringing their iconic van for anyone wanting to access harm reduction safer consumption supplies. Additionally, we have nurses available on-site for vaccination administration, including COVID-19 booster shots, as well as public health nurses representing 811 Healthlink informing the guests of what services one can find by accessing 811. In addition, we have partnered up with Pearle Vision from Sunridge Mall to bring accessible eye care to the festival. Moreover, St. John Ambulance Canada will be giving out nasal naloxone and offering training on opioid poisoning response at the event. Lastly, SafeLink Alberta will be bringing case managers and outreach workers representing the agency with on-site support of safer-sex supplies and HIV/HCV services.",
  },
  {
    title:
      "Low barrier access to housing, employment, and low-income transit applications",
    body: "Our partners will provide on-site housing waitlist check-ins for guests who have completed the Calgary Homeless Foundation Needs and Assessment Questionnaires (NSQ) documents, or complete one if the guest has not done so previously. They will provide professional assistance in terms of providing financial literacy course information and employment opportunities. As well, our City of Calgary Transit Community Outreach Team will be able to complete Low-Income Transit Applications on-site with guests who need to apply for such documents. Lastly, per request of our guests, Calgary Legal Guidance and Mustard Seed will be bringing their ID clinic to the festival for any guests to access.",
  },
  {
    title: "On-site wellbeing and mental health checkups",
    body: "We have fully trained crisis intervention responders and addiction support specialists who are on-site with Distress Centre Calgary, ECSSEN Career School, and Wood's Home available as a listening ear for anyone experiencing challenges and wanting to talk to someone. They will also offer referrals to professional counselling services if guests need. Our indigeneous-based partners will be performing drumming sessions as well as fostering cultural connections at the event.",
  },
  {
    title: "Youth and immigration support services",
    body: "As a brand new addition to our festival, we have invited several youth serving and immigrant serving agencies to provide services at our festival. Newcomers and refugees who are facing challenges navigating the social service system in Canada can access our professional immigration services professionals for further information and support. Lastly, Trellis and Calgary John Howard Society Youth Service branch will be able to better assist youths who are in-need of wrap-around services, anti-bullying support, and more.",
  },
  {
    title: "Amazing entertainment and fun activities",
    body: "Our festival strives to provide numerous entertainment opportunities for our guests to interact with. We have partnered up with PALS to have therapy dogs on-site for guests to pet and interact with well-trained professional therapy dogs. As well, we will be bringing photo booths, free-style rapping, indigeneous culture, and just plain fun to the event.",
  },
];

const VENDORS = [
  "The Doorway",
  "Alberta Adolescent Recovery",
  "Registered Massage Therapists",
  "Sidewalk Talk YYC",
  "PALS Pet Therapy",
  "Canadian Mental Health Assn.",
  "CUPS",
  "STI Services",
  "UofC Dermatology Interest Group",
  "Healthy Generations Lab",
  "Aborginal Friendship Calgary",
  "Samson Community Wellness",
  "ECSSEN Career School",
  "The Alex Street Outreach",
  "Safeworks Outreach",
  "Rise Calgary",
  "Sham's CupCakes",
  "Soup Sisters",
  "RESET",
  "Calgary Drop-In Centre",
  "SeedReach",
  "Salvation Army",
  "TREC Dental",
  "SORCe - Distress Center",
  "Trellis",
  "Covenant Health Palliative",
  "Action Dignity",
  "Anti-Racism Action Committee",
  "Angels in Action",
  "Empower Calgarty",
  "McMan Calgary",
  "Islamic Relief Calgary",
  "FYi Doctors",
  "Michelle Dias (Hair Cuts)",
  "Alpha House Society",
  "My Friend Dave",
  "Fancy Faces",
  "NanoTess",
];

export default function Home() {
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);

  useEffect(() => {
    document.title = "Calgary Pop-Up Care Village";
  }, []);

  return (
    <>
      <div className="container banner" id="banner">
        <div className="banner-text">
          <h1
            style={{
              textTransform: "uppercase",
              color: "white",
              textShadow: "0px 0px 20px #000000",
            }}
          >
            5th Calgary <span>Pop-Up</span> Care Village
          </h1>
          <p style={{ textShadow: "0px 0px 20px #000000" }}>
            The Calgary Pop-Up Care Village is a festival for anyone experiencing
            systemic vulnerabilities such as homelessness and addiction.
          </p>
          <Link
            className="button"
            style={{ marginTop: "15px", boxShadow: "0px 0px 20px #000000" }}
            to="/01-24-2023"
          >
            Latest Event Recap <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="container about" id="about">
        <div className="event-info">
          <div className="event-info-item">
            <Countdown />
          </div>
          <div className="event-info-item">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "rgba(199, 16, 46, 0.5)" }}
            ></i>
            <div>
              <h3 style={{ fontSize: "12pt" }}>Central Memorial Park</h3>
              <p>1221 2 St SW</p>
            </div>
          </div>
          <div className="event-info-item">
            <i
              className="fa-solid fa-calendar-days"
              style={{ color: "rgba(199, 16, 46, 0.5)" }}
            ></i>
            <div>
              <h3>August 21, 2026</h3>
              <p>10 AM - 4 PM (MT)</p>
            </div>
          </div>
          <div className="event-info-item">
            <i
              className="fa-solid fa-users"
              style={{ color: "rgba(199, 16, 46, 0.5)" }}
            ></i>
            <div>
              <h3>600+ guests</h3>
              <p>At each event</p>
            </div>
          </div>
        </div>
        <div className="about-flex">
          <video className="about-video" controls>
            <source
              src="/assets/ videos/Calgary Pop Up Care Village -- UCalgary Student Entrepreneurial Spirit.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="about-text">
            <h1>About The C-PUCV</h1>
            <p>
              The Calgary Pop-Up Care Village is a festival for anyone
              experiencing systemic vulnerabilities such as homelessness,
              addiction, mental health issues, poverty, language and cultural
              barriers, and more. The festival provides equitable access to basic
              services such as case management, healthcare, clothing, haircuts,
              food, and more to the community. This is a one-day event that
              upholds guests' inherent human dignity, and it bridges the wider
              Calgarian community with the underserved population.
            </p>
            <Link className="button" to="/history">
              Our History <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container event" id="event">
        <h1>The Event</h1>
        <p>
          Our 5th C-PUCV will take place on{" "}
          <span className="attention">August 21, 2026</span>, and will be hosted
          at <span className="attention">Central Memorial Park</span> (1221 2 St
          SW, Calgary, AB). The festival will begin at{" "}
          <span className="attention">10 AM</span> and end at{" "}
          <span className="attention">4 PM</span>.
        </p>
        <h4>
          We will provide <span className="attention">FREE</span>
        </h4>
        {SERVICES.map((s) => (
          <Accordion key={s.title} title={s.title}>
            {s.body}
          </Accordion>
        ))}
      </div>

      <div className="container get-involved" id="get-involved">
        <h1>Get Involved</h1>
        <div className="get-involved-flex">
          <div className="info-wrapper">
            <img src="/assets/images/volunteer.jpg" alt="Volunteers" />
            <div className="opportunity">
              <h4>VOLUNTEER</h4>
              <p>
                We are in need of volunteers who are willing to dedicate their
                time to contribute to this event. Please click "View Open
                Positions" for further details.
              </p>
            </div>
            <button
              className="button get-involved-button"
              onClick={() => setVolunteerOpen(true)}
            >
              View Open Positions
            </button>
          </div>

          <div className="info-wrapper">
            <img src="/assets/images/partner.jpg" alt="Partner with us" />
            <div className="opportunity">
              <h4>PARTNER WITH US</h4>
              <p>
                If you are a local service provider such as a homeless shelter,
                food bank, barber shop, clothing store, etc. please consider
                joining this event and show your interest!
              </p>
            </div>
            <button
              className="button get-involved-button"
              onClick={() => setPartnerOpen(true)}
            >
              Contact Us
            </button>
          </div>

          <div className="info-wrapper">
            <img src="/assets/images/donate.jpg" alt="Donate" />
            <div className="opportunity">
              <h4>DONATE</h4>
              <p>
                We would not be able to host this event free of charge without
                the generous help of our partners and donators. All donations are
                highly appreciated.
              </p>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={DONATE_URL}
              className="button get-involved-button"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      <Modal
        open={volunteerOpen}
        onClose={() => setVolunteerOpen(false)}
        title="Current Openings"
      >
        <a href={VOLUNTEER_FORM} className="link" target="_blank" rel="noreferrer">
          Please apply from this link
        </a>
      </Modal>

      <Modal
        open={partnerOpen}
        onClose={() => setPartnerOpen(false)}
        title="Contact Us"
      >
        <p>You can contact us with any of the methods below.</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            className="job-button"
            style={{ marginBottom: "30px" }}
            href="mailto:c-pucv@radicalgary.ca"
          >
            <i className="fa-solid fa-envelope-circle-check"></i>{" "}
            c-pucv@radicalgary.ca
          </a>
        </div>
      </Modal>

      <div className="container partners" id="partners">
        <h1>Partners</h1>
        <p>
          This event would not be possible without our generous partners. If you
          are interesting in working with us, please contact us at{" "}
          <a className="link" href="mailto:c-pucv@radicalgary.ca">
            c-pucv@radicalgary.ca
          </a>
          .
        </p>
        <h4>Primary Sponsors</h4>
        <LogoCarousel slides={PRIMARY_SPONSORS} />
        <h4>Vendors</h4>
        <ul className="vendor-list">
          {VENDORS.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>

      <div className="container youth-leadership" id="team">
        <h1>Team</h1>
        <div className="team-flex">
          <div>
            <ul>
              <li>
                <h5>Bill Zheng</h5>
                <p>Co-event Manager</p>
              </li>
              <li>
                <h5>Hanna Woodward</h5>
                <p>Co-event Manager</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
