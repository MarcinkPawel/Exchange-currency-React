import Result from "./Result";
import Clock from "./Clock";
import Loading from "./Loading";
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

import { useRatesData } from "./useRatesData";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const {
    rates,
    toCurrency,
    isExchangeRate,
    date,
    isLoading,
    handleCurrencyChange,
  } = useRatesData();

  
  const onFormSabmit = (event) => {
    event.preventDefault();
    getResult(isExchangeRate, amount);
  };
  const getResult = (isExchangeRate, amount) => {
    setResult(amount * isExchangeRate);
  };
 
  return (
    <Main>
      {isLoading ? (
        <Loading />
      ) : (
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
              onChange={handleCurrencyChange}
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
              Exchange rate for {toCurrency} is{" "}
              {isExchangeRate !== null && isExchangeRate.toFixed(2)}
            </ExchangeSpan>
          </Label>
          <SubmitButton type="submit" value="Convert">
            Convert
          </SubmitButton>
          <TextSpan>
            The currency converter tool allows you to see the conversion of
            currency values based on exchange rates from <strong>{date}</strong>
            .
          </TextSpan>
          <ResultStyled>
            <Result result={result} currency={toCurrency} />
          </ResultStyled>
        </Fieldset>
      </form>
      )}
    </Main>
  );
};

export default Form;
