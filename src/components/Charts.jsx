import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RED = "rgba(199, 16, 46, 1)";
const RED_25 = "rgba(199, 16, 46, 0.25)";

const CONFIGS = [
  {
    type: "bar",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: "Number of Ratings Given",
          data: [0, 0, 0, 0, 2, 3, 3, 8, 8, 36],
          borderWidth: 1,
          backgroundColor: RED_25,
        },
      ],
    },
    options: {
      aspectRatio: 1.5,
      plugins: {
        title: {
          display: true,
          text: "Distribution of Experience Ratings Out of Ten (Guests)",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Number of Respondents" },
        },
        x: { title: { display: true, text: "Rating Out of 10" } },
      },
    },
  },
  {
    type: "doughnut",
    data: {
      labels: ["Yes", "No", "Somewhat"],
      datasets: [
        {
          data: [59, 0, 3],
          backgroundColor: [RED, "rgba(199, 16, 46, 0.2)", "rgba(199, 16, 46, 0.6)"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Did you feel safe and welcomed during the event?",
        },
      },
    },
  },
  {
    type: "bar",
    data: {
      labels: [
        "0-24",
        "25-49",
        "50-74",
        "75-99",
        "100-124",
        "125-149",
        "150-174",
        "175-199",
        "200-224",
        "225-249",
      ],
      datasets: [
        {
          label: "Number of Boths",
          data: [7, 11, 6, 4, 2, 1, 0, 0, 0, 1],
          borderWidth: 1,
          backgroundColor: RED_25,
        },
      ],
    },
    options: {
      aspectRatio: 1.5,
      plugins: {
        title: { display: true, text: "Distribution of Attendees Per Booth" },
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Frequency" } },
        x: { title: { display: true, text: "Number of Attendees" } },
      },
    },
  },
];

export default function Charts() {
  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    Chart.defaults.font.family = "GlacialIndifference";
    Chart.defaults.font.size = 14;
    const charts = CONFIGS.map((cfg, i) => new Chart(refs[i].current, cfg));
    return () => charts.forEach((c) => c.destroy());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="chart-container">
        <canvas ref={refs[0]}></canvas>
        <canvas ref={refs[1]}></canvas>
        <canvas ref={refs[2]}></canvas>
      </div>
    </div>
  );
}
