import "./style.css";

const Result = ({ result }) => (
  <p className="form__result">
    {result !== undefined && (
      <span className="result">You will get {result}</span>
    )}
  </p>
);

export default Result;
