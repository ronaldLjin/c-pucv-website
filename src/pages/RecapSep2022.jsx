import { useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";

const BANNER = [
  "/assets/images/09-27-2022/308829430_10158770253766615_1703859626623215750_n.jpg",
  "/assets/images/09-27-2022/308671175_10158770252306615_3706069851201341318_n.jpg",
  "/assets/images/09-27-2022/308835799_10158770252236615_6221633471048074224_n.jpg",
  "/assets/images/09-27-2022/309036005_10158770249116615_3735357950179071846_n.jpg",
  "/assets/images/09-27-2022/309090388_10158770250611615_1649340103619324762_n.jpg",
  "/assets/images/09-27-2022/309198681_10158770256871615_5140527795389043_n.jpg",
];

const MEDIA = [
  {
    href: "https://calgary.ctvnews.ca/first-ever-calgary-pop-up-care-village-helps-the-homeless-1.6086768",
    src: "/assets/images/09-27-2022/ctv.png",
  },
  {
    href: "https://globalnews.ca/news/9160555/pop-up-care-village-calgary-city-most-vulnerable/",
    src: "/assets/images/09-27-2022/globalnews.png",
  },
  {
    href: "https://thegauntlet.ca/2022/09/22/calgary-pop-up-care-village-to-provide-services-for-vulnerable-people-in-the-city/",
    src: "/assets/images/09-27-2022/imageedit_2_2267346207.png",
  },
  {
    href: "https://cjsw.com/program/students-union-weekly/episode/20220922/",
    src: "/assets/images/09-27-2022/imageedit_4_5687353754_preview_rev_1.png",
  },
  {
    href: "https://livewirecalgary.com/2022/09/27/pop-up-care-festival-about-dignity-compassion-for-homeless-calgarians/",
    src: "/assets/images/09-27-2022/imageedit_3_7515340293.png",
  },
];

const FUNDERS = [
  { href: "https://www.calgary.ca/home.html", src: "/assets/images/sponsors/download.png", fill: true },
  { href: "https://www.arusha.org/", src: "/assets/images/sponsors/Arusha+Side+by+Side.png", fill: true },
  { href: "https://www.parksfdn.com/", src: "/assets/images/sponsors/PFC+Logo+2015_COLOR+EDIT-Web.jpg", fill: true },
  { href: "https://m.facebook.com/BriansDisposal", src: "/assets/images/sponsors/brian.jpg", fill: true },
  { href: "https://www.girlguides.ca/web/", src: "/assets/images/sponsors/New Logo.jpg" },
  { href: "https://communitywise.net/", src: "/assets/images/sponsors/communitywise-resource-centre-logo_thumbnail_en.png", fill: true },
  { href: "https://therentalbrothers.com/", src: "/assets/images/sponsors/rental-brothers-logo.png", fill: true },
];

const PARTNERS = [
  { href: "https://bostonpizza.com/en/index.html", src: "/assets/images/sponsors/bostonpizza.png" },
  { href: "https://www.albertahealthservices.ca/services/page13737.aspx", src: "/assets/images/sponsors/Alberta_Health_Services_Logo.png", fill: true },
  { href: "https://safelinkalberta.ca/", src: "/assets/images/sponsors/SafeLink-Logo_Cropped-01.png" },
  { href: "https://sja.ca/en", src: "/assets/images/sponsors/St._John_Ambulance_Canada_Logo.svg.png", fill: true },
  { href: "https://calgarydropin.ca/", src: "/assets/images/sponsors/DI-Logo-Orange-reduced.png", fill: true },
  { href: "https://www.calgarytransit.com/home.html", src: "/assets/images/sponsors/Calgary-Transit-Logo (1).svg", fill: true },
  { href: "https://www.mccollege.ca/", src: "/assets/images/sponsors/MC College Text WINN (Black)_1587139525.png" },
  { href: "https://www.cupscalgary.com/", src: "/assets/images/sponsors/cups-logo.png", fill: true },
  { href: "https://momentum.org/", src: "/assets/images/sponsors/momentum.png" },
  { href: "https://sorcecalgary.ca/", src: "/assets/images/sponsors/SCE_logo.png" },
  { href: "https://www.prospectnow.ca/", src: "/assets/images/sponsors/prospect-logo.jpg" },
  { href: "https://www.distresscentre.com/", src: "/assets/images/sponsors/DC-logo-medium-transparency.png" },
  { href: "https://alphahousecalgary.com/", src: "/assets/images/sponsors/alpha-logo.png", fill: true },
  { href: "https://citcm.com/", src: "/assets/images/sponsors/cropped-small2-CITCM_WE.png", fill: true },
  { href: "https://www.albertahealthservices.ca/info/page12630.aspx", src: "/assets/images/sponsors/healthlink-logo.png", fill: true },
  { href: "https://tribeartistsociety.com/", src: "/assets/images/sponsors/image02.png", fill: true },
  { href: "https://iksook.ca/", src: "/assets/images/sponsors/Iksooksipaitapii-Logo-003-1.webp", fill: true },
  { href: "https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1702&serviceAtFacilityID=1035079", src: "/assets/images/sponsors/safeworks.jpg", fill: true },
  { href: "https://www.instagram.com/nanbertmanor/", src: "/assets/images/sponsors/received_1519053658530473.jpeg", fill: true },
  { href: "https://www.facebook.com/independentwrestling2021/", src: "/assets/images/sponsors/canam.png", fill: true },
];

const LEADERSHIP = [
  ["Bill Zheng", "Coordinator, Assistant Team Lead at BeTheChangeYYC"],
  ["Hanna Woodward", "Program Coordinator at BeTheChangeYYC"],
  ["Chaz Smith", "CEO and Founder of BeTheChangeYYC"],
  ["Kristen Baranieski", "Wayfinders and intake specialist team lead, senior team lead at BeTheChangeYYC"],
  ["Olivia Levy", "Medical first responder central team lead, team lead at BeTheChangeYYC"],
  ["Jojo Marie", "Safety and wellness ambassadors team lead, outreach coordinator at AAWEAR"],
];

const YOUTH = [
  ["Weilan Zhang", "Graphic design team lead"],
  ["Allison Yang", "Graphic designer"],
  ["Grace Song", "Graphic designer"],
  ["Grace Liu", "Graphic designer"],
  ["Alvi Zaman", "Graphic designer"],
  ["Ronald Jin", "Web developer/designer"],
];

export default function RecapSep2022() {
  useEffect(() => {
    document.title = "September 2022 Calgary Pop-Up Care Village Recap";
  }, []);

  return (
    <>
      <BannerCarousel images={BANNER} header="SEPTEMBER 2022" />

      <div className="container" style={{ backgroundColor: "#faf7f8" }}>
        <h1>Impact</h1>
        <p>
          The first Calgary Pop-Up Care Village took place on September 27th,
          2022 at the Olympic Plaza. The event was an astounding success! Below
          are some of our achievements:
        </p>
        <ul>
          <li>We were able to administer 40 massages</li>
          <li>
            Our vendors reported serving anywhere from 20 - 400 individual
            contacts alone
          </li>
          <li>82 haircuts and 20 mini manicures provided to guests</li>
          <li>
            Our housing and employment partners engaged in 110+ individual
            housing, finance, and employment discussions
          </li>
          <li>400+ indigenous cultural related crafts given and made</li>
          <li>
            150+ STBBI testing, vaccination, and other healthcare needs addressed
          </li>
          <li>
            10+ individual crisis intervention and mental health first aid
            sessions performed by trained staff and volunteers onsite
          </li>
          <li>8 low income transit pass forms completed</li>
          <li>80 large pizzas delivered</li>
          <li>600+ guests</li>
        </ul>
      </div>

      <div className="container">
        <h1>Event Media</h1>
        Special thanks to Albert Woo for the event photography. Over 150 images
        of the event can be found{" "}
        <a
          className="link"
          href="https://www.facebook.com/media/set/?set=a.10158770265331615&type=3"
        >
          here
        </a>
        .
        <div className="media-features" style={{ marginTop: "1em" }}>
          <h1 style={{ color: "#999999", textAlign: "center" }}>Featured on</h1>
          <div className="media-feature-logos">
            {MEDIA.map((m) => (
              <a key={m.src} href={m.href}>
                <img src={m.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container partners"
        id="partners"
        style={{ backgroundColor: "#faf7f8" }}
      >
        <h1>September 2022 Partners</h1>
        <p>
          This event would not have been possible without our generous partners.
          If you are interesting in working with us in the future, please contact
          us at{" "}
          <a className="link" href="mailto:billzheng2147@gmail.com">
            billzheng2147@gmail.com
          </a>
          .
        </p>
        <h4>Donators and Funders</h4>
        <LogoCarousel slides={FUNDERS} />
        <h4>Partners</h4>
        <LogoCarousel slides={PARTNERS} />
      </div>

      <div
        className="container youth-leadership"
        id="team"
        style={{ backgroundColor: "white" }}
      >
        <h1>Team</h1>
        <div className="team-flex">
          <div>
            <h4>Leadership Team</h4>
            <ul>
              {LEADERSHIP.map(([name, role]) => (
                <li key={name}>
                  <h5>{name}</h5>
                  <p>{role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Youth Involvement</h4>
            <ul>
              {YOUTH.map(([name, role]) => (
                <li key={name}>
                  <h5>{name}</h5>
                  <p>{role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
