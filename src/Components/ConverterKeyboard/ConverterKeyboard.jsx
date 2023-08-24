import React from "react";
import s from "./ConverterKeyboard.module.css";
import DefaultButton from "../DefaultButton/DefaultButton";
import CButton from "../CButton/CButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import ConvertButton from "../ConvertButton/ConvertButtonl";

const ConverterKeyboard = (props) => {
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
                selectedCurrencies={props.selectedCurrencies}
                currencyPairs={props.currencyPairs} currentCurrencyPair={props.currentCurrencyPair}
                firstInputValue={props.firstInputValue} secondInputValue={props.secondInputValue}
                setFirstValue={props.setFirstValue} setSecondValue={props.setSecondValue}
            />
        </div>
    )
}

export default ConverterKeyboard;