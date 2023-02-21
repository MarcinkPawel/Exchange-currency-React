import { SumUp } from "./styled";

const Result = ({ result, currency }) => (
  <SumUp>
    <span>{result !== undefined && `You will get ${result.toFixed(2)} ${currency}`}</span>
  </SumUp>
);

export default Result;
