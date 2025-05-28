import React, {useEffect, useState} from "react";
import s from "./BasicConverter.module.css";
import ConverterInput from "../ConverterInput/ConverterInput";
import ConverterKeyboard from "../ConverterKeyboard/ConverterKeyboard";
import errorIcon from "../../img/error.png";


type Option = {
    title: string;
    code: string;
}

type CurrencyPairs = {
    [pair: string]: number;
};

type Props = {
    testValue: string;
    getCurrencyOptions:  () => Promise<void>;
    currencyOptions: Option[];
    currencyPairs: CurrencyPairs;
}

const BasicConverter = (props: Props) => {
    const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>(
        [props.currencyOptions[1].code, props.currencyOptions[1].code]
    );

    const [firstInputValue, setFirstInputValue] = useState<string>("");
    const [secondInputValue, setSecondInputValue] = useState<string>("");
    const [activeInput, setActiveInput] = useState<"first" | "second">("first");
    const [currencyPair, setCurrencyPair] = useState<string>(selectedCurrencies[0] + "/" + selectedCurrencies[1]);

    const [error, setError] = useState<boolean>(false);
    const [isResultFetching, setIsResultFetching] = useState<boolean>(false);

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