import "./style.css";

const Result = ({ result }) => (
  <p className="form__result">
    <span>{result !== undefined && `You will get ${result.toFixed(2)}`}</span>

  </p>
);

export default Result;
