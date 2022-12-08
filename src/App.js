import "./App.css";
import { useState } from "react";

function App() {
  const currencies = [
    { id: 1, value: 1, name: "PLN" },
    { id: 2, value: 4.86, name: "EUR" },
    { id: 3, value: 5.09, name: "USD" },
    { id: 4, value: 5.53, name: "GBP" },
    { id: 5, value: 0.04, name: "RUB" },
    { id: 6, value: 5.02, name: "CHF" },
  ];

  const [amount, setAmount] = useState(+"");
  const [currency, setRate] = useState("--");


  const [result, setResult] = useState();

  const getResult = (currency, amount) => {
    const howMuch = currencies
    .find(({ value }) => value === currency)
    .value;

    setResult({
      getAmount: +amount,
      rightAmount: amount / howMuch,
    });
  };


  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(currency, amount);
  };

  return (
    <div className="App">
      <div className="main">
        <header className="header">
          <h1 className="header__text">
            Are you going to change your address?
          </h1>
          <h2 className="header__text">Exchange your money first!</h2>
        </header>
        <form className="form ">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Currency Exchange</legend>
            <div className="form__currencySelect">
              <p
                htmlFor="currencyFrom"
                className="form__label form__label--select"
              >
                From PLN
              </p>

              <label
                htmlFor="currencyTo"
                className="form__label form__label--select"
              >
                To
                <select
                  name="currencyTo"
                  id="currencyTo"
                  className="js-currnecyTo"
                  value={currency}
                  onChange={({ target }) => setRate(target.value)}
                >
                  <option>--</option>
                  {currencies.map((currency) => (
                    <option key={currency.id} value={currency.value}>
                      {currency.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
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
                <span className="rate">{currency}</span>
              </label>
              <input type="submit" value="Convert" className="form__submit" />
              <p className="form__result">
                <span className="result">{result}</span>
              </p>
            </fieldset>
          </form>
          <footer className="footer">
            <p>Alright I'm not reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
