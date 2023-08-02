import React from "react";
import s from "./ConverterInput.module.css";
import CurrencySelect from "../CurrencySelect/CurrencySelect";

const ConverterInput = (props) => {
    const onInputChange = (event) => {
        const keyboardButtonKeys = ["/", "*", "-", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+"];
        const newChar = event.nativeEvent.data;

        if (keyboardButtonKeys.some(k => k === newChar)) {
             props.setInputValue(props.activeInputValue + newChar);
        }
    }

    const changeActiveInput = (activeInput) => {
        props.setActiveInput(activeInput);
    }

    return (
        <div className={s.converterInputContainer}>
            <div className={s.converterInput}>
                <div className={s.inputContainer}>
                    <CurrencySelect
                        currencyOptions={props.currencyOptions}
                        selectedCurrencies={props.selectedCurrencies}
                        currencyIndex={0}
                        setSelectedCurrencies={props.setSelectedCurrencies}
                    />
                    <input
                        placeholder={"0.00"}
                        onClick={() => changeActiveInput("first")}
                        value={props.firstInputValue} onChange={(event) => onInputChange(event)}
                    />
                </div>
                <div className={s.inputContainer}>
                    <CurrencySelect
                        currencyOptions={props.currencyOptions}
                        selectedCurrencies={props.selectedCurrencies}
                        currencyIndex={1}
                        setSelectedCurrencies={props.setSelectedCurrencies}
                    />
                    <input
                        onClick={() => changeActiveInput("second")}
                        value={props.secondInputValue} onChange={(event) => onInputChange(event)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ConverterInput;