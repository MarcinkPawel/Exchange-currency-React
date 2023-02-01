import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [clockState, setClockState] = useState();
  const [presentDate, setPresentDate] = useState();

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      let date = new Date();  
      setPresentDate(date = date.toLocaleDateString
        ("en-EN", 
        {weekday: "long", month: "long", day: "numeric"}
        ));
      setClockState(time.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clock">Today is {presentDate}, {clockState}</div>;
};

export default Clock;
