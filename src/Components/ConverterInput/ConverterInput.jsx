import React, {useEffect, useState} from "react";
import s from "./ConverterInput.module.css";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import api from "../../api/api";
import loader from "../../img/autorenew.gif";

const ConverterInput = (props) => {
    const [optionsArray, setOptionsArray] = useState(props.currencyOptions);
    const [isSymbolsFetching, setIsSymbolsFetching] = useState(false);
    const count = 0;

    useEffect(() => {
        const getResult = async () => {
            setIsSymbolsFetching(true);
            await api.fetchSymbols().then((r) => {
                const symbolsArray = Object.entries(r.data.symbols).map(
                    entry => ({
                        code: entry[0],
                        title: entry[1],
                    })
                );
                setOptionsArray(symbolsArray);
                setIsSymbolsFetching(false);
            });
        };

        getResult().then(r => r);
    }, [count]);

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
                        isSymbolsFetching={isSymbolsFetching}
                        currencyOptions={props.currencyOptions}
                        selectedCurrencies={props.selectedCurrencies}
                        currencyIndex={0}
                        setSelectedCurrencies={props.setSelectedCurrencies}
                        optionsArray={optionsArray}
                    />
                    <input
                        placeholder={"0.00"}
                        onClick={() => changeActiveInput("first")}
                        value={props.firstInputValue} onChange={(event) => onInputChange(event)}
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
                        onClick={() => changeActiveInput("second")}
                        value={props.secondInputValue} onChange={(event) => onInputChange(event)}
                    />
                    {props.isResultFetching && <img alt={""} src={loader} className={s.loader}/>}
                </div>
            </div>
        </div>
    )
}

export default ConverterInput;