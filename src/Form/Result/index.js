import { SumUp } from "./styled";

const Result = ({ result }) => (
  <SumUp>
    <span>{result !== undefined && `You will get ${result.toFixed(2)}`}</span>
  </SumUp>
);

export default Result;
