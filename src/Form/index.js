import "./style.css";
import Result from "../Result";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

const Form = () => {
  const currencies = [
    { id: 1, rate: 1, name: "PLN" },
    { id: 2, rate: 4.86, name: "EUR" },
    { id: 3, rate: 5.09, name: "USD" },
    { id: 4, rate: 5.53, name: "GBP" },
    { id: 5, rate: 0.04, name: "RUB" },
    { id: 6, rate: 5.02, name: "CHF" },
  ];

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState();

  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(currency, amount);
  };

  const isExchangeRate = currencies.find(({ name }) => name === currency).rate;

  const getResult = (currency, amount) => {
    const chosenRate = currencies.find(({ name }) => name === currency).rate;

    setResult(amount / chosenRate);
  };

  return (
    <div className="main">
      <Header
        header="Are you going to change your address?"
        subHeader="Exchange your money first!"
      />
      <form className="form ">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Currency Exchange</legend>
          <p htmlFor="currencyFrom" className="form__label form__label--select">
            From PLN
          </p>

          <label
            htmlFor="currencyTo"
            className="form__label form__label--select"
          >
            To{" "}
            <select
              name="currencyTo"
              id="currencyTo"
              className="form__select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.id} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </form>
      <div>
        <form className="form" onSubmit={onFormSabmit}>
          <fieldset className="form__fieldset">
            <label htmlFor="amount" className="form__label">
              <span className="form__label form__label--text">Amount:</span>
              <input
                type="number"
                name="amount"
                id="amount"
                required
                step="0.01"
                min="0"
                className="form__input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label htmlFor="exchangeRate" className="form__label">
              <span className="form__label form__label--text">
                Exchange rate:
              </span>
              <span className="rate">{isExchangeRate}</span>
            </label>
            <input type="submit" value="Convert" className="form__submit" />
            <Result result={result} />
          </fieldset>
        </form>
        <Footer content="Alright I'm not reserved." />
      </div>
    </div>
  );
};

export default Form;
