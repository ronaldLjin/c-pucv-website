import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./IndigenousCareVillage.css";
import Countdown from "../components/Countdown.jsx";
import EventInfo, { EventInfoItem } from "../components/EventInfo.jsx";

const SERVICES = [
  ["Healthcare and wellbeing", "Free healthcare and connections to physical health, mental health, and wellbeing supports."],
  ["Food and drinks", "Free food and refreshments to enjoy during the day."],
  ["Clothing and hygiene", "Access to free clothing, hygiene products, and everyday essentials."],
  ["Personal care", "Dignifying personal care services, consistent with our Pop-Up Care Village approach."],
  ["Social services and practical support", "Connections to housing, employment, identification, and low-income transit application supports."],
  ["Youth and community connections", "Connections to youth supports and community services, with space to spend time together."],
];

export default function IndigenousCareVillage() {
  useEffect(() => {
    document.title = "Indigenous Pop-Up Care Village | September 30, 2026";
  }, []);

  return (
    <main className="indigenous-event">
      <section className="container indigenous-hero">
        <div className="indigenous-hero-copy">
          <p className="indigenous-eyebrow">September 30, 2026 · Calgary</p>
          <h1>Indigenous<br />Pop-Up Care Village</h1>
          <p className="indigenous-intro">A day of care, culture, and connection.</p>
          <p>Free healthcare, food, clothing, social services, and Indigenous cultural supports for Indigenous people experiencing homelessness and poverty.</p>
          <a className="button" href="#visit">Plan your visit <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          <p className="indigenous-other-events">Learn about our other events at the <Link to="/calgary-pop-up-care-village">Calgary Pop-Up Care Village <span aria-hidden="true">→</span></Link></p>
        </div>
        <div className="indigenous-day">
          <span>September</span>
          <strong>30</strong>
          <span>2026</span>
          <p>National Day for<br />Truth and Reconciliation</p>
        </div>
      </section>

      <section className="container indigenous-visit" id="visit" aria-label="Join us at Sunalta">
        <EventInfo>
          <EventInfoItem>
            <Countdown
              eventTime={new Date("2026-09-30T10:00:00-06:00").getTime()}
              endedMessage="This event has ended. Thank you for being part of the day!"
            />
          </EventInfoItem>
          <EventInfoItem icon="fa-location-dot">
            <h3 style={{ fontSize: "12pt" }}>Sunalta Community Association</h3>
            <address>1627 10th Ave SW<br />Calgary, AB T3C 0J7</address>
            <a href="https://www.google.com/maps/search/?api=1&query=Sunalta%20Community%20Association%201627%2010th%20Ave%20SW%20Calgary%20AB%20T3C%200J7" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </EventInfoItem>
          <EventInfoItem icon="fa-calendar-days">
            <h3><time dateTime="2026-09-30">September 30, 2026</time></h3>
            <p>10:00 a.m. – 4:00 p.m.</p>
          </EventInfoItem>
          <EventInfoItem icon="fa-users">
            <h3>Co-hosted by</h3>
            <p>Siksika Nation Outreach Team – Walking Wolf Trail</p>
            <p>Calgary Pop-Up Care Village</p>
          </EventInfoItem>
        </EventInfo>

      </section>

      <section className="container indigenous-culture" aria-labelledby="culture-title">
        <div>
          <p className="indigenous-eyebrow">Care rooted in connection</p>
          <h2 id="culture-title">Indigenous cultural supports &amp; storytelling from Elders</h2>
          <p>This one-day event brings the care and practical services of the Pop-Up Care Village together with a greater emphasis on Indigenous cultural supports and connection.</p>
          <p>Storytelling from Elders will be a central part of the day, offering space to listen, share, and connect with community.</p>
          <p>Join us on September 30, the National Day for Truth and Reconciliation, for a day centred on care and community.</p>
        </div>
        <figure>
          <img src="/assets/images/ezgif.com-gif-maker (1).jpg" alt="A community member at a previous outdoor Calgary Pop-Up Care Village, with service tents in the background." loading="lazy" width="1200" height="800" />
          <figcaption>A moment from a previous Calgary Pop-Up Care Village.</figcaption>
        </figure>
      </section>

      <section className="container indigenous-services" aria-labelledby="services-title">
        <h2 id="services-title">Free care &amp; everyday essentials</h2>
        <p>Alongside Indigenous cultural supports and connection, the day continues the Pop-Up Care Village’s focus on accessible services and each guest’s inherent dignity.</p>
        <div className="indigenous-service-grid">
          {SERVICES.map(([title, body]) => <article className="care-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
    </main>
  );
}
