import { Time } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const { dateFormat, dateTimeState } = useCurrentDate();

  return (
    <Time>
      Today is {dateFormat}, {dateTimeState.toLocaleTimeString()}
    </Time>
  );
};

export default Clock;
