import React, {useEffect, useState} from "react";
import s from "./BasicConverter.module.css";
import ConverterInput from "../ConverterInput/ConverterInput";
import ConverterKeyboard from "../ConverterKeyboard/ConverterKeyboard";
import errorIcon from "../../img/error.png";

const BasicConverter = (props) => {
    const [selectedCurrencies, setSelectedCurrencies] = useState(
        [props.currencyOptions[1], props.currencyOptions[1]]
    );

    const [firstInputValue, setFirstInputValue] = useState("");
    const [secondInputValue, setSecondInputValue] = useState("");
    const [activeInput, setActiveInput] = useState("first");
    const [currencyPair, setCurrencyPair] = useState(selectedCurrencies[0] + "/" + selectedCurrencies[1]);

    const [error, setError] = useState(false);
    const [isResultFetching, setIsResultFetching] = useState(false);

    useEffect(() => {
        setCurrencyPair(selectedCurrencies[0] + "/" + selectedCurrencies[1]);
    }, [selectedCurrencies]);

    return (
        <div className={s.converter}>
            {error &&
            <div className={s.errorMessage}>
                <img src={errorIcon} alt={""} className={s.error}/>
                <div>Cannon convert currency. Please, try later.</div>
            </div>}
            <ConverterInput
                isResultFetching={isResultFetching}
                firstInputValue={firstInputValue} secondInputValue={secondInputValue}
                setActiveInput={setActiveInput}
                activeInputValue={activeInput === "first" ? firstInputValue : secondInputValue}
                setInputValue={activeInput === "first" ? setFirstInputValue : setSecondInputValue}
                currencyOptions={props.currencyOptions}
                selectedCurrencies={selectedCurrencies} setSelectedCurrencies={setSelectedCurrencies}
            />
            <ConverterKeyboard
                setIsResultFetching={setIsResultFetching}
                selectedCurrencies={selectedCurrencies} setError={setError}
                firstInputValue={firstInputValue} secondInputValue={secondInputValue}
                currencyPairs={props.currencyPairs} currentCurrencyPair={currencyPair}
                setFirstValue={setFirstInputValue} setSecondValue={setSecondInputValue}
                activeInputValue={activeInput === "first" ? firstInputValue : secondInputValue}
                setActiveInputValue={activeInput === "first" ? setFirstInputValue : setSecondInputValue}
            />
        </div>
    )
}

export default BasicConverter;