import React, {useEffect, useState} from "react";
import s from "./BasicConverter.module.css";
import ConverterInput from "../ConverterInput/ConverterInput";
import ConverterKeyboard from "../ConverterKeyboard/ConverterKeyboard";
import api from "../../api/api";

const BasicConverter = (props) => {
    // console.log(props);
    const [selectedCurrencies, setSelectedCurrencies] = useState(
        [props.currencyOptions[1], props.currencyOptions[1]]
    );

    const [firstInputValue, setFirstInputValue] = useState("");
    const [secondInputValue, setSecondInputValue] = useState("");
    const [activeInput, setActiveInput] = useState("first");
    const [currencyPair, setCurrencyPair] = useState(selectedCurrencies[0] + "/" + selectedCurrencies[1]);

    useEffect(() => {
        setCurrencyPair(selectedCurrencies[0] + "/" + selectedCurrencies[1]);
    }, [selectedCurrencies]);

    return (
        <div className={s.converter}>
            <ConverterInput
                firstInputValue={firstInputValue} secondInputValue={secondInputValue}
                setActiveInput={setActiveInput}
                activeInputValue={activeInput === "first" ? firstInputValue : secondInputValue}
                setInputValue={activeInput === "first" ? setFirstInputValue : setSecondInputValue}
                currencyOptions={props.currencyOptions}
                selectedCurrencies={selectedCurrencies} setSelectedCurrencies={setSelectedCurrencies}
            />
            <ConverterKeyboard
                selectedCurrencies={selectedCurrencies}
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