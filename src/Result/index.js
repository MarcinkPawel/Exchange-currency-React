import "./style.css";

const Result = ({ result }) => (
  <p className="form__result">
<<<<<<< HEAD
    {result !== undefined && (
      <span className="result">You will get {result}</span>
    )}
=======
    <span>{result !== undefined && `You will get ${result.toFixed(2)}`}</span>
>>>>>>> ce7f5ab44a64952bccd5087abe0004ebcc819153
  </p>
);

export default Result;
