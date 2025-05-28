import React from "react";
import s from "./ConverterKeyboard.module.css";
import DefaultButton from "../DefaultButton/DefaultButton";
import CButton from "../CButton/CButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ConvertButton from "../ConvertButton/ConvertButton";

type CurrencyPairs = {
    [pair: string]: number;
}

type Props = {
    setIsResultFetching: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCurrencies: string[];
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    firstInputValue: string;
    secondInputValue: string;
    currencyPairs: CurrencyPairs;
    currentCurrencyPair: string;
    setFirstValue: React.Dispatch<React.SetStateAction<string>>;
    setSecondValue: React.Dispatch<React.SetStateAction<string>>;
    activeInputValue: string;
    setActiveInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const ConverterKeyboard = (props: Props) => {
    const converterKeys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

    return (
        <div className={s.converterKeyboard}>
            <CButton setFirstValue={props.setFirstValue} setSecondValue={props.setSecondValue}/>
            <DeleteButton setInputValue={props.setActiveInputValue} inputValue={props.activeInputValue}/>
            {converterKeys.map(k =>
                <DefaultButton key={k} inputValue={props.activeInputValue} setInputValue={props.setActiveInputValue}>
                    {k}
                </DefaultButton>
            )}
            <ConvertButton
                setError={props.setError} setIsResultFetching={props.setIsResultFetching}
                selectedCurrencies={props.selectedCurrencies}
                currencyPairs={props.currencyPairs} currentCurrencyPair={props.currentCurrencyPair}
                firstInputValue={props.firstInputValue} secondInputValue={props.secondInputValue}
                setFirstValue={props.setFirstValue} setSecondValue={props.setSecondValue}
            />
        </div>
    )
}

export default ConverterKeyboard;