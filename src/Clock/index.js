import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [dateTimeState, setDateTimeState] = useState(new Date());

  function time() {
    setDateTimeState(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(time, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const dateFormat = dateTimeState.toLocaleDateString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="clock">
      Today is {dateFormat}, {dateTimeState.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
