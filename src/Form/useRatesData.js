import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [rates, setRates] = useState([]);
  const [toCurrency, setToCurrency] = useState();
  const [isExchangeRate, setIsExchangeRate] = useState(null);
  const [date, setDate] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        async function fetchRates() {
        try {
            const response = await axios.get(url);
            setRates(response.data.rates);
            setDate(response.data.date);
            setIsLoading(true);
            setToCurrency("EUR");
        } catch (error) {
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
        handleCurrencyChange,
    };
};
