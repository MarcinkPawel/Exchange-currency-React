import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [clockState, setClockState] = useState(new Date());

  function time() {
    setClockState(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(time, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="clock">
      Today is{" "}
      {clockState.toLocaleDateString("en-EN", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })}
      , {clockState.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
