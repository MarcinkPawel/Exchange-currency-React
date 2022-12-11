import "./style.css";

const Result = ({ result, currency }) => (
  <p className="form__result">
    <span>{result !== undefined && `You will get ${result}`}</span>
  </p>
);

export default Result;
