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

  const fetchData = () => {
    return axios
      .get(url)
      .then((response) => setRates(response.data.rates));}

useEffect(()=> {
  fetchData();
  const firstCurrency = Object.keys(rates)[46];
  setToCurreny(firstCurrency)
}, []);

const firstCurrency = Object.keys(rates)[46];
const isExchangeRate = rates[toCurrency];

console.log(isExchangeRate)

  // useEffect(() => {
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data =>  {
  //     const firstCurrency = Object.keys(data.rates)[0]
  //     setRates(data.rates);
  //     setEchangeRate(data.rates[firstCurrency]);
  //     setToCurreny(firstCurrency)
  //   });
  // }, []);

// function handleExchangeRates(toCurrency) {
// }



// const firstCurrency = Object.keys(rates)[0];


// console.log(exchangeRate)

  // const currencies = [
  //   { id: 1, rate: 4.86, name: "EUR" },
  //   { id: 2, rate: 5.09, name: "USD" },
  //   { id: 3, rate: 5.53, name: "GBP" },
  //   { id: 4, rate: 0.04, name: "RUB" },
  //   { id: 5, rate: 5.02, name: "CHF" },
  // ];

  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(isExchangeRate, amount);
  };
  const getResult = (isExchangeRate, amount) => {
    setResult(amount * isExchangeRate);
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
              {Object.keys(rates).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>               
              ))}
            </Select>
          </Label>
          <Label htmlFor="exchangeRate">
            <ExchangeSpan>
              Exchange rate for {toCurrency} is {isExchangeRate}</ExchangeSpan>
          </Label>
          <SubmitButton type="submit" value="Convert">
            Convert
          </SubmitButton>
          <TextSpan>
            The currency converter tool allows you to see the conversion of
            currency values based on exchange rates from DATA.
          </TextSpan>
          <ResultStyled>
            <Result 
            result={result}
            currency={toCurrency} />
          </ResultStyled>
        </Fieldset>
      </form>
    </Main>
  );
};

export default Form;
