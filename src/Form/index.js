import Result from "../Result";
import Header from "../Header";
import Footer from "../Footer";
import Clock from "../Clock";
import { useState } from "react";
import { Main, Fieldset, Legend, Label, Paragragh, Span, Input, Select, Submit, ResultStyled } from "./styled"

const Form = () => {
  const currencies = [
    { id: 1, rate: 4.86, name: "EUR" },
    { id: 2, rate: 5.09, name: "USD" },
    { id: 3, rate: 5.53, name: "GBP" },
    { id: 4, rate: 0.04, name: "RUB" },
    { id: 5, rate: 5.02, name: "CHF" },
  ];

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState();

  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(currency, amount);
  };

  const isExchangeRate = currencies.find(
    ({ name }) => name === currency
  ).rate;

  const getResult = (currency, amount) => {
    const chosenRate = currencies.find(({ name }) => name === currency).rate;

    setResult(amount / chosenRate);
  };

  return (
    <Main >
      <Header
        header="Are you going to change your address?"
        subHeader="Exchange your money first!"
      />
      <form >
        <Fieldset>
          <Legend>Currency Exchange</Legend>
          <Clock />
            <Paragragh text
              select
              htmlFor="currencyFrom"
            >
              From PLN
            </Paragragh>
            <Label center
              select
              htmlFor="currencyTo"
            >
              To
              {" "}
              <Select select
                name="currencyTo"
                id="currencyTo"
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.id} value={currency.name}>
                    {currency.name}
                  </option>
                ))}
              </Select>
            </Label>
        </Fieldset>
      </form>
      <div>
        <form onSubmit={onFormSabmit}>
          <Fieldset>
            <Label htmlFor="amount">
              <Span text>Amount:</Span>
              <Input
                type="number"
                name="amount"
                id="amount"
                required
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Label>
            <Label htmlFor="exchangeRate">
              <Span text>
                Exchange rate:
              </Span>
              <Span text>{isExchangeRate}</Span>
            </Label>
            <Submit type="submit" value="Convert" />
            <ResultStyled>
            <Result result={result} />
            </ResultStyled>
          </Fieldset>
        </form>
        <Footer content="Alright I'm not reserved." />
      </div>
    </Main>
  );
};

export default Form;
