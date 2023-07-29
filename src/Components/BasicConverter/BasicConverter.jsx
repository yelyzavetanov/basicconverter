import React, {useEffect, useState} from "react";
import s from "./BasicConverter.module.css";
import ConverterInput from "../ConverterInput/ConverterInput";
import ConverterKeyboard from "../ConverterKeyboard/ConverterKeyboard";

const BasicConverter = () => {
    const currencyOptions = ["EUR", "USD", "UAH"];
    const [selectedCurrencies, setSelectedCurrencies] = useState([currencyOptions[1], currencyOptions[1]]);

    const [firstInputValue, setFirstInputValue] = useState("");
    const [secondInputValue, setSecondInputValue] = useState("");
    const [activeInput, setActiveInput] = useState("first");
    const [currencyPair, setCurrencyPair] = useState(selectedCurrencies[0] + "/" + selectedCurrencies[1]);

    const currencyPairs = {
        "USD/USD": 1,
        "EUR/EUR": 1,
        "UAH/UAH": 1,
        "EUR/USD": 1.10,
        "EUR/UAH": 40.6,
        "USD/EUR": 0.91,
        "USD/UAH": 36.79,
        "UAH/EUR": 0.025,
        "UAH/USD": 0.027,
    }

    useEffect(() => {
        setCurrencyPair(selectedCurrencies[0] + "/" + selectedCurrencies[1]);
    }, [selectedCurrencies]);

    // console.log(selectedCurrencies, currencyPair, selectedCurrencies[0] + "/" + selectedCurrencies[1]);


    return (
        <div className={s.converter}>
            <ConverterInput
                firstInputValue={firstInputValue} secondInputValue={secondInputValue}
                setActiveInput={setActiveInput}
                activeInputValue={activeInput === "first" ? firstInputValue : secondInputValue}
                setInputValue={activeInput === "first" ? setFirstInputValue : setSecondInputValue}
                currencyOptions={currencyOptions}
                selectedCurrencies={selectedCurrencies} setSelectedCurrencies={setSelectedCurrencies}
            />
            <ConverterKeyboard
                firstInputValue={firstInputValue} secondInputValue={secondInputValue}
                currencyPairs={currencyPairs} currentCurrencyPair={currencyPair}
                setFirstValue={setFirstInputValue} setSecondValue={setSecondInputValue}
                activeInputValue={activeInput === "first" ? firstInputValue : secondInputValue}
                setActiveInputValue={activeInput === "first" ? setFirstInputValue : setSecondInputValue}
            />
        </div>
    )
}

export default BasicConverter;