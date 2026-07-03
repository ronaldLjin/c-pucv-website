import { useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";
import Charts from "../components/Charts.jsx";

const BANNER = [
  "/assets/images/01-24-2023/IMG_7434.JPG",
  "/assets/images/01-24-2023/IMG_7436.JPG",
  "/assets/images/01-24-2023/IMG_7445.JPG",
  "/assets/images/01-24-2023/IMG_7453.JPG",
  "/assets/images/01-24-2023/IMG_7462.JPG",
  "/assets/images/01-24-2023/IMG_7466.JPG",
];

const QUOTES = [
  "Everything was non -judgmental",
  "I love the Pop Up Care Village and always get new information and direction",
  "I saw a friend here today and it was great to see that they are still okay",
  "I had no idea there were so many services available",
];

const MEDIA = [
  {
    href: "https://calgary.ctvnews.ca/pop-up-care-village-brings-together-organizations-to-assist-vulnerable-calgarians-1.6245336",
    src: "/assets/images/09-27-2022/ctv.png",
  },
  {
    href: "https://globalnews.ca/news/9434427/calgary-pop-up-care-village-homeless-supports/",
    src: "/assets/images/09-27-2022/globalnews.png",
  },
  {
    href: "https://www.ucalgary.ca/news/student-organized-festival-brings-services-hope-vulnerable-calgarians",
    src: "/assets/images/01-24-2023/UCalgary_gray.svg",
    dim: true,
  },
  {
    href: "https://livewirecalgary.com/2023/01/25/second-pop-up-care-village-provides-services-dignity-to-homeless-calgarians/",
    src: "/assets/images/09-27-2022/imageedit_3_7515340293.png",
  },
];

const PRIMARY = [
  {
    href: "https://calgaryfoundation.org/grantsawards-loans/types-of-grants/grassroots-grants/neighbour-grants-2/",
    src: "/assets/images/01-24-2023/partners/Calgary-Foundation-scaled.jpg",
    fill: true,
  },
];

const SECONDARY = [
  { href: "https://youthcentral.com/", src: "/assets/images/01-24-2023/partners/Youth-Central-Black-PNG-site-icon.png", fill: true },
  { href: "https://www.stoneytrailmazda.com/", src: "/assets/images/01-24-2023/partners/mazda.png", fill: true },
];

const PARTNERS = [
  { href: "https://bostonpizza.com/en/index.html", src: "/assets/images/sponsors/bostonpizza.png" },
  { href: "https://safelinkalberta.ca/", src: "/assets/images/sponsors/SafeLink-Logo_Cropped-01.png" },
  { href: "https://sja.ca/en", src: "/assets/images/sponsors/St._John_Ambulance_Canada_Logo.svg.png", fill: true },
  { href: "https://www.mccollege.ca/", src: "/assets/images/sponsors/MC College Text WINN (Black)_1587139525.png" },
  { href: "https://momentum.org/", src: "/assets/images/sponsors/momentum.png" },
  { href: "https://www.distresscentre.com/", src: "/assets/images/sponsors/DC-logo-medium-transparency.png" },
  { href: "https://iksook.ca/", src: "/assets/images/sponsors/Iksooksipaitapii-Logo-003-1.webp", fill: true },
  { href: "https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1702&serviceAtFacilityID=1035079", src: "/assets/images/sponsors/safeworks.jpg", fill: true },
  { href: "https://www.instagram.com/nanbertmanor/", src: "/assets/images/sponsors/received_1519053658530473.jpeg", fill: true },
  { href: "https://www.facebook.com/AngelsInActionAIA/", src: "/assets/images/01-24-2023/partners/306171343_464691989037082_2234281522987533073_n.jpg", fill: true },
  { href: "https://harvesthillscares.ca/", src: "/assets/images/01-24-2023/partners/index.jpg", fill: true },
  { href: "https://www.calgaryfoodbank.com/", src: "/assets/images/01-24-2023/partners/CalgaryFoodBank_Logo.png" },
  { href: "https://www.facebook.com/yyc.zerowaste/", src: "/assets/images/01-24-2023/partners/zerofoodwaste.png", fill: true },
  { href: "https://www.ucalgary.ca/safer-substance-use/ucrc", src: "/assets/images/01-24-2023/partners/UCalgary.svg", fill: true },
  { href: "https://www.instagram.com/theliamprojectyyc/?hl=en", src: "/assets/images/01-24-2023/partners/dark-blue-logo-1024x1024.png", fill: true },
  { href: "https://immigrant-education.ca/", src: "/assets/images/01-24-2023/partners/TIES-Websafe-Logo.png", fill: true },
  { href: "https://www.immigrantservicescalgary.ca/", src: "/assets/images/01-24-2023/partners/logo.svg", fill: true },
  { href: "https://www.calgary.ca/cps.html", src: "/assets/images/01-24-2023/partners/CPS-logo.svg", fill: true },
  { href: "https://resetcalgary.ca/", src: "/assets/images/01-24-2023/partners/Reset-Formerly-SAS-Logo.jpg", fill: true },
  { href: "https://clg.ab.ca/", src: "/assets/images/01-24-2023/partners/color-logo.svg", fill: true },
  { href: "https://sunridgemall.net/stores/sunridgemall-sunridge-mall-pearle-vision", src: "/assets/images/01-24-2023/partners/Pearle-Vision.png", fill: true },
  { href: "https://medshoppe.ca/", src: "/assets/images/01-24-2023/partners/MedShoppeLogoReverse.png", fill: true },
  { href: "https://www.albertahealthservices.ca/findhealth/Service.aspx?id=1001498", src: "/assets/images/01-24-2023/partners/1200px-Alberta_Health_Services_Logo.svg.png", fill: true },
  { href: "https://www.palspets.com/", src: "/assets/images/01-24-2023/partners/PALS_bwlogo.png", fill: true },
  { href: "https://www.woodshomes.ca/", src: "/assets/images/01-24-2023/partners/Group.svg", fill: true },
  { href: "https://ecssen.ca/", src: "/assets/images/01-24-2023/partners/new_ecssen_logo.png", fill: true },
  { href: "https://www.risecalgary.ca/", src: "/assets/images/01-24-2023/partners/RCRC_Logo_Colour.webp", fill: true },
  { href: "https://www.goodwill.ab.ca/", src: "/assets/images/01-24-2023/partners/goodwill.png" },
  { href: "https://ciwa-online.com/", src: "/assets/images/01-24-2023/partners/ciwa40years.gif" },
  { href: "https://www.prospectnow.ca/", src: "/assets/images/01-24-2023/partners/logo_green.svg" },
  { href: "https://gatewayassociation.ca/", src: "/assets/images/01-24-2023/partners/cropped-logogateweb.png", fill: true },
  { href: "https://www.cjhs.ca/", src: "/assets/images/01-24-2023/partners/CJHSTitleBar.png" },
  { href: "https://www.salvationarmycalgary.org/", src: "/assets/images/01-24-2023/partners/giving-hope-today.webp", fill: true },
  { href: "https://theseed.ca/", src: "/assets/images/01-24-2023/partners/mustard-seed-logo.svg", fill: true },
  { href: "https://alphahousecalgary.com/", src: "/assets/images/01-24-2023/partners/alpha-logo.png", fill: true },
  { href: "https://www.innfromthecold.ca/", src: "/assets/images/01-24-2023/partners/innfromthecold.jpg", fill: true },
  { href: "https://www.bethechangeyyc.org/", src: "/assets/images/01-24-2023/partners/bethechange.png", fill: true },
  { href: "https://www.growwithtrellis.ca/", src: "/assets/images/01-24-2023/partners/trellis-society-logo.jpeg", fill: true },
  { href: "https://actiondignity.org/", src: "/assets/images/01-24-2023/partners/actiondignity.jpg", fill: true },
  { href: "https://caryacalgary.ca/", src: "/assets/images/01-24-2023/partners/carya.png", fill: true },
  { href: "https://malcolmrussell.net/", src: "/assets/images/01-24-2023/partners/malcolm.png", fill: true },
  { href: "http://thelocalbooth.ca/", src: "/assets/images/01-24-2023/partners/localbooth.png", fill: true },
  { href: "https://www.recoveryoncampusalberta.ca/", src: "/assets/images/01-24-2023/partners/roc.png", fill: true },
];

const TEAM = [
  ["Bill Zheng", "Co-event Manager"],
  ["Hanna Woodward", "Co-event Manager"],
  ["Kristen Baranieski", "Site & Equipmenmt coordinator"],
  ["Amanda Geamanu", "Marketing Coordinator"],
  ["Ivy Shi", "Fundraising & Donations Coordinator"],
  ["Robyn Wanner", "Volunteer Co-coordinator"],
  ["Sherry Choma", "Volunteer Co-coordinator"],
  ["Anne Brown", "Safety & Wellness and Medical Team Lead"],
  ["Austin Deck", "Data Collection Coordinator"],
  ["Weilan Zhang", "Branding Specialist"],
  ["Ronald Jin", "Web Developer"],
];

export default function RecapJan2023() {
  useEffect(() => {
    document.title = "January 2023 Calgary Pop-Up Care Village Recap";
  }, []);

  return (
    <>
      <BannerCarousel images={BANNER} header="JANUARY 2023" />

      <div className="container" style={{ backgroundColor: "#fafafa" }}>
        <h1>Impact</h1>
        <p>
          The second Calgary Pop-Up Care Village took place on January 24th, 2023
          at the Kerby Centre. The event was an astounding success!
        </p>
        <ul>
          <li>We served over 450 individuals</li>
          <li>233 individuals received Naloxone education and supply services</li>
          <li>200 individuals accessed clothing donation services</li>
          <li>
            67 individuals received free haircuts and personal hygiene services
          </li>
          <li>We had 65 total vendors and partners for this event</li>
          <li>
            Over 110 volunteers and 475 volunteer hours made this event possible
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>Guest Stories</h1>
        <div className="grid-container">
          {QUOTES.map((q) => (
            <div className="grid-quote" key={q}>
              {q}
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ backgroundColor: "#fafafa" }}>
        <h1>Statistics</h1>
        <Charts />
      </div>

      <div className="container">
        <h1>Event Media</h1>
        <div className="grid-container">
          {MEDIA.map((m) => (
            <a className="grid-logo" href={m.href} key={m.src}>
              <img
                style={{ height: "50px", opacity: m.dim ? 0.5 : undefined }}
                src={m.src}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className="container partners"
        id="partners"
        style={{ backgroundColor: "#fafafa" }}
      >
        <h1>Partners</h1>
        <p>
          This event would not be possible without our generous partners. If you
          are interesting in working with us, please contact us at{" "}
          <a className="link" href="mailto:billzheng2147@gmail.com">
            billzheng2147@gmail.com
          </a>
          .
        </p>
        <h4>Primary Sponsors</h4>
        <LogoCarousel slides={PRIMARY} />
        <h4>Secondary Sponsors</h4>
        <LogoCarousel slides={SECONDARY} />
        <h4>Partners</h4>
        <LogoCarousel slides={PARTNERS} />

        <h4>Collaborators</h4>
        <p>
          The January 24th festival is brought by a partnership between{" "}
          <a className="link" href="https://www.bethechangeyyc.org/">
            BeTheChangeYYC
          </a>{" "}
          X{" "}
          <a className="link" href="https://safelinkalberta.ca/">
            SafeLink Alberta
          </a>
          , with extensive consultation with{" "}
          <a className="link" href="https://lavamaex.org/">
            LavaMaeX
          </a>
          .
        </p>
      </div>

      <div
        className="container youth-leadership"
        id="team"
        style={{ backgroundColor: "white" }}
      >
        <h1>Team</h1>
        <div className="team-flex">
          <div>
            <ul>
              {TEAM.map(([name, role]) => (
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
