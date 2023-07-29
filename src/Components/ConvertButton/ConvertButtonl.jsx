import React from "react";
import s from "./ConvertButton.module.css";

const ConvertButton = (props) => {
    const onConvertButtonClick = () => {
        console.log(props.currencyPairs[props.currentCurrencyPair]);
        console.log("convert");
        const newValue = parseInt(props.firstInputValue) * props.currencyPairs[props.currentCurrencyPair]
        props.setSecondValue(newValue.toString());
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