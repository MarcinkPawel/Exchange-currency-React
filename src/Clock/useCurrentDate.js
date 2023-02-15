import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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

  return {
    dateTimeState,
  };
};
