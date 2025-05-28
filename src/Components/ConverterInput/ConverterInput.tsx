import React from "react";
import s from "./ConverterInput.module.css";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import loader from "../../img/autorenew.gif";
import { useCurrencySymbols } from "./useCurrencySymbols";


type Option = {
    title: string;
    code: string;
}

type Props = {
    currencyOptions: Option[];
    selectedCurrencies: string[];
    setSelectedCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
    firstInputValue: string;
    secondInputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    activeInputValue: string;
    setActiveInput: React.Dispatch<React.SetStateAction<"first" | "second">>;
    isResultFetching: boolean;
};

const ConverterInput = (props: Props) => {
    const { symbols: optionsArray, isFetching: isSymbolsFetching } = useCurrencySymbols();

    const keyboardButtonKeys = ["/", "*", "-", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+"];

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const nativeEvent = event.nativeEvent as InputEvent;
        const newChar = nativeEvent.data;

        if (newChar && keyboardButtonKeys.includes(newChar)) {
            props.setInputValue(props.activeInputValue + newChar);
        }
    };

    return (
        <div className={s.converterInputContainer}>
            <div className={s.converterInput}>
                <div className={s.inputContainer}>
                    <CurrencySelect
                        isSymbolsFetching={isSymbolsFetching}
                        currencyOptions={props.currencyOptions}
                        selectedCurrencies={props.selectedCurrencies}
                        currencyIndex={0}
                        setSelectedCurrencies={props.setSelectedCurrencies}
                        optionsArray={optionsArray}
                    />
                    <input
                        placeholder="0.00"
                        onClick={() => props.setActiveInput("first")}
                        value={props.firstInputValue}
                        onChange={onInputChange}
                    />
                </div>

                <div className={s.inputContainer}>
                    <CurrencySelect
                        isSymbolsFetching={isSymbolsFetching}
                        currencyOptions={props.currencyOptions}
                        selectedCurrencies={props.selectedCurrencies}
                        currencyIndex={1}
                        setSelectedCurrencies={props.setSelectedCurrencies}
                        optionsArray={optionsArray}
                    />
                    <input
                        onClick={() => props.setActiveInput("second")}
                        value={props.secondInputValue}
                        onChange={onInputChange}
                    />
                    {props.isResultFetching && <img alt="" src={loader} className={s.loader} />}
                </div>
            </div>
        </div>
    );
};

export default ConverterInput;
