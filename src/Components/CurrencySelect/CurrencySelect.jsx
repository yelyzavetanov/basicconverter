import React from "react";
import s from "./CurrencySelect.module.css";

const CurrencySelect = (props) => {
    const onSelectChange = (event) => {
        if (props.currencyIndex === 0) {
            props.setSelectedCurrencies([event.target.value, props.selectedCurrencies[1]]);
        } else if (props.currencyIndex === 1) {
            props.setSelectedCurrencies([props.selectedCurrencies[0], event.target.value]);
        }
    }

    return (
        <div className={s.currencySelectContainer}>
            <select value={props.selectedCurrencies[props.currencyIndex]} onChange={(event) => onSelectChange(event)}>
                {props.optionsArray.map(o => <option key={o}>{o}</option>)}
            </select>
        </div>
    )
}

export default CurrencySelect;