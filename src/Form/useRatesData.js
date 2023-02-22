import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [rates, setRates] = useState([]);
  const [toCurrency, setToCurrency] = useState(Number);
  const [isExchangeRate, setIsExchangeRate] = useState(null);
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  const url = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    async function fetchRates() {
        try {
            const { data } = await axios.get(url);
            setRates(data.rates);
            setDate(data.date);
            setIsLoading(true);
            setToCurrency("EUR");
        } catch (error) {
            setIsError(true)
            console.error(
                "All that money might have got clogged up, be patient!",
                error 
            );
        }
    }
    fetchRates();
  }, [url]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setIsExchangeRate(rates[toCurrency]);
    }
  }, [toCurrency, rates]);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setIsError(true)
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return {
    rates,
    toCurrency,
    isExchangeRate,
    date,
    isLoading,
    isError,
    handleCurrencyChange,
  };
};
