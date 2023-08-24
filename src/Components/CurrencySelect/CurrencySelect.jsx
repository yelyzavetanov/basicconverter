import React, {useEffect, useState} from "react";
import s from "./CurrencySelect.module.css";
import search from "../../img/search.png";

const CurrencySelect = (props) => {
    const [isOptionsWindow, setIsOptionsWindow] = useState(false);
    const [shownOptions, setShownOptions] = useState(props.optionsArray);
    const [optionsFilter, setOptionsFilter] = useState("");

/*    const onSelectChange = (event) => {
        if (props.currencyIndex === 0) {
            props.setSelectedCurrencies([event.target.value, props.selectedCurrencies[1]]);
        } else if (props.currencyIndex === 1) {
            props.setSelectedCurrencies([props.selectedCurrencies[0], event.target.value]);
        }
    }*/

    const onOptionSelect = (option) => {
        console.log(option);
        if (props.currencyIndex === 0) {
            props.setSelectedCurrencies([option, props.selectedCurrencies[1]]);
        } else if (props.currencyIndex === 1) {
            props.setSelectedCurrencies([props.selectedCurrencies[0], option]);
        }
        setIsOptionsWindow(false);
    }

    const searchOptions = () => {
        const newShownOptions = props.optionsArray.filter((o) => {
            if (o.includes(optionsFilter.toUpperCase())) return o;
        });
        setShownOptions(newShownOptions);
    }

    const changeOptionsFilter = (event) => {
        setOptionsFilter(event.target.value);
    }

    useEffect(() => {
        setShownOptions(props.optionsArray);
    }, [props.optionsArray]);

    return (
        <div className={s.currencySelectContainer}>
{/*            <select
                value={props.selectedCurrencies[props.currencyIndex]}
                onChange={(event) => onSelectChange(event)}
                onClick={() => setIsOptionsWindow(true)}
            >
                {props.optionsArray.map(o => <option key={o}>{o}</option>)}
            </select>*/}
            <div onClick={() => setIsOptionsWindow(true)} className={s.selectedCurrency}>
                {props.selectedCurrencies[props.currencyIndex]}
            </div>

            <div className={isOptionsWindow ? s.optionsWindow : s.optionsWindowHidden}>
                <div className={s.searchContainer}>
                    <input
                        placeholder={"Search currency..."}
                        className={s.searchInput}
                        value={optionsFilter}
                        onChange={(event) => changeOptionsFilter(event)}
                    />
                    <button onClick={searchOptions} className={s.searchButton}>
                        <img alt={""} src={search}/>
                    </button>
                </div>
                <div className={s.optionsContainer}>
                    {shownOptions.map(o =>
                        <div onClick={() => onOptionSelect(o)} className={s.currencyOption} key={o}>{o}</div>
                    )}
                </div>
                <button className={s.closeButton} onClick={() => setIsOptionsWindow(false)}>
                    back
                </button>
            </div>
        </div>
    )
}

export default CurrencySelect;