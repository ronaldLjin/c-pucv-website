import { useEffect, useState } from "react";

// 10:00 AM Mountain Daylight Time (UTC-6) on Aug 21, 2026.
// The explicit offset keeps the countdown correct regardless of the visitor's timezone.
const EVENT_TIME = new Date("2026-08-21T10:00:00-06:00").getTime();
const EVENT_DURATION_MS = 6 * 60 * 60 * 1000; // 10 AM - 4 PM

function getState(eventTime) {
  const distance = eventTime - Date.now();
  if (distance <= 0 && distance > -EVENT_DURATION_MS) {
    return { status: "open" };
  }
  if (distance <= -EVENT_DURATION_MS) {
    return { status: "over" };
  }
  return {
    status: "counting",
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

export default function Countdown({ eventTime = EVENT_TIME, endedMessage = "The event is over. See you next year!" }) {
  const [state, setState] = useState(() => getState(eventTime));

  useEffect(() => {
    setState(getState(eventTime));
    const id = setInterval(() => setState(getState(eventTime)), 1000);
    return () => clearInterval(id);
  }, [eventTime]);

  if (state.status === "open") {
    return <div id="countdown">Come drop by, We are open!</div>;
  }
  if (state.status === "over") {
    return <div id="countdown">{endedMessage}</div>;
  }

  return (
    <div id="countdown">
      <div>
        <h4>{state.days}</h4>
        <p className="time-unit">Days</p>
      </div>
      <div>
        <h4>{state.hours}</h4>
        <p className="time-unit">Hours</p>
      </div>
      <div>
        <h4>{state.minutes}</h4>
        <p className="time-unit">Min</p>
      </div>
      <div>
        <h4>{state.seconds}</h4>
        <p className="time-unit">Sec</p>
      </div>
    </div>
  );
}
