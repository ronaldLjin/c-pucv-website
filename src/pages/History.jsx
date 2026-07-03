import { useEffect } from "react";
import BannerCarousel from "../components/BannerCarousel.jsx";

const IMAGES = [
  "/assets/images/history/1.jpg",
  "/assets/images/history/2.jpg",
  "/assets/images/history/3.jpg",
  "/assets/images/history/4.jpg",
];

export default function History() {
  useEffect(() => {
    document.title = "History of the C-PUCV";
  }, []);

  return (
    <>
      <BannerCarousel images={IMAGES} header="Our History" />

      <div className="container" style={{ backgroundColor: "#fafafa" }}>
        <h1>History of the Calgary Pop-Up Care Village</h1>
        <div className="about-flex">
          <div>
            <p>
              In August of 2021, Bill Zheng, then a grade 11 high school student
              and some high school friends stumbled upon LavaMae's Pop-Up Care
              Villages (PUCVs) in the San Francisco Bay Area - designed to bring
              services like showers, health care, clothing, and haircuts to the
              unhoused - and how accessible they were, they planned to launch one
              of their own in Calgary.
            </p>
            <p>
              Unfortunately, given that they were not a non-profit organization
              and not connected to any vulnerable population serving agencies, the
              idea was shelved.
            </p>
            <p>
              Come April of 2022, one of the Team Leads in the Grassroot Outreach
              Collaborative, Kristen Baranieski, brought up the idea of this
              Pop-Up Care Village to the table. Bill and Kristen quickly connected
              with Sam Reardon, Lead Program Consultant from LavaMae, and began
              coordinating the project as a collaborative effort from seven
              grassroot initiatives, including{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.bethechangeyyc.org/"
              >
                BeTheChangeYYC
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="http://www.aawear.org/"
              >
                AAWEAR
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.facebook.com/AngelsInActionAIA/"
              >
                Angels in Action
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.facebook.com/groups/727357457935474/"
              >
                Sobercrew/A.I.M
              </a>
              ,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                className="link"
                href="https://www.facebook.com/HarvestHillsCaresCalgary/"
              >
                Harvest Hill Cares
              </a>
              , and{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://heartsforhumanityltd.com/"
                className="link"
              >
                Hearts for Humanity
              </a>
              .
            </p>
            <p>
              Later on, Hanna Woodward, RSW, BeTheChangeYYC's program coordinator
              began taking over the lead of logistics and planning of the Calgary
              Pop-Up Care Village, alongside Bill Zheng. The two individuals
              formed a planning team and was able to hold the first successful
              event on September 27th, 2022.
            </p>
            <p>
              The Calgary Pop-Up Care Village is really a festival for anyone
              experiencing systemic vulnerabilities such as homelessness,
              addiction, mental health issues, poverty, low-income, and more. The
              festival provides equitable access to basic services such as case
              management, healthcare, clothing, haircuts, food, and more to the
              community. This is a one-day event that upholds guests' inherent
              human dignity, and it bridges the wider Calgarian community with the
              underserved population.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
