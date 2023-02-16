import Result from "./Result";
import Clock from "./Clock";
import { useState } from "react";
import {
  Main,
  Fieldset,
  Title,
  Label,
  Span,
  Input,
  Select,
  SubmitButton,
  ResultStyled,
  TextSpan,
  ExchangeSpan,
} from "./styled";

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

  const isExchangeRate = currencies.find(({ name }) => name === currency).rate;

  const getResult = (currency, amount) => {
    const chosenRate = currencies.find(({ name }) => name === currency).rate;

    setResult(amount / chosenRate);
  };

  return (
    <Main>
      <form onSubmit={onFormSabmit}>
        <Fieldset>
          <Clock />
          <Title>Currency Exchange</Title>
          <Label htmlFor="amount">
            <Span limit>Amount*:</Span>
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
          <Label htmlFor="currencyTo">
            <Span limit>Currency:</Span>{" "}
            <Select
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
          <Label htmlFor="exchangeRate">
            <ExchangeSpan>
              Exchange rate for CURRENCY is {isExchangeRate}.
            </ExchangeSpan>
          </Label>
          <SubmitButton type="submit" value="Convert">
            Convert
          </SubmitButton>
          <TextSpan>
            The currency converter tool allows you to see the conversion of
            currency values based on exchange rates from DATA.
          </TextSpan>
          <ResultStyled>
            <Result result={result} />
          </ResultStyled>
        </Fieldset>
      </form>
    </Main>
  );
};

export default Form;
