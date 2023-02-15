import { Time } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { dateTimeState } = useCurrentDate();

  const dateFormat = dateTimeState.toLocaleDateString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <Time>
      Today is {dateFormat}, {dateTimeState.toLocaleTimeString()}
    </Time>
  );
};

export default Clock;
