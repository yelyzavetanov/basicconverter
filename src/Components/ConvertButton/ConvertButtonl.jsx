import React from "react";
import s from "./ConvertButton.module.css";

const ConvertButton = (props) => {
    const onConvertButtonClick = () => {

        if (props.firstInputValue === "" && props.secondInputValue === "") {
        } else if (props.firstInputValue === "") {
            const newValue = parseInt(props.secondInputValue) / props.currencyPairs[props.currentCurrencyPair];
            props.setFirstValue(newValue.toString());
        } else {
            const newValue = parseInt(props.firstInputValue) * props.currencyPairs[props.currentCurrencyPair];
            props.setSecondValue(newValue.toString());
        }
    }

    return (
        <div onClick={onConvertButtonClick} className={s.convertButtonContainer}>
            <div className={s.convertButton}>
                convert
            </div>
        </div>
    )
}

export default ConvertButton;