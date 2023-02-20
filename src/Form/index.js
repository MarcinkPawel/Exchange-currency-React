import Result from "./Result";
import Clock from "./Clock";
import { useState, useEffect } from "react";
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
import axios from "axios";

const Form = () => {
  const [rates, setRates] = useState([]);
  const [toCurrency, setToCurreny] = useState();
  const [amount, setAmount] = useState("");
  const [exchangeRate, setEchangeRate] = useState();
  const [result, setResult] = useState();


  const url = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    axios.get(url).then((response) => {
      const firstCurrency = Object.keys(response.data.rates)[0];
      setRates([
        ...Object.keys(response.data.rates),
      ]);
      
      setToCurreny(firstCurrency);
      setEchangeRate(response.data.rates[firstCurrency]);
    });
  }, []);

console.log(exchangeRate)

  // const currencies = [
  //   { id: 1, rate: 4.86, name: "EUR" },
  //   { id: 2, rate: 5.09, name: "USD" },
  //   { id: 3, rate: 5.53, name: "GBP" },
  //   { id: 4, rate: 0.04, name: "RUB" },
  //   { id: 5, rate: 5.02, name: "CHF" },
  // ];

  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(exchangeRate, amount);
  };
  const getResult = (exchangeRate, amount) => {
    setResult(amount * exchangeRate);
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
              placeholder="PLN"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Label>
          <Label htmlFor="currencyTo">
            <Span limit>Currency:</Span>{" "}
            <Select
              name="currencyTo"
              id="currencyTo"
              value={toCurrency}
              onChange={({ target }) => setToCurreny(target.value)}
            >
              {rates.map((option) => (
                <option key={option} value={option}>
                  {option} - {exchangeRate}
                </option>
              ))}
            </Select>
          </Label>
          <Label htmlFor="exchangeRate">
            <ExchangeSpan>
              {"Exchange rate for"} {toCurrency} {"is"} {exchangeRate}            </ExchangeSpan>
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
