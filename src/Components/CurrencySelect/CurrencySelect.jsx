import React, {useEffect, useState} from "react";
import s from "./CurrencySelect.module.css";
import search from "../../img/search.png";
import loading from "../../img/autorenew.gif"

const CurrencySelect = (props) => {
    const [isOptionsWindow, setIsOptionsWindow] = useState(false);
    const [shownOptions, setShownOptions] = useState(props.optionsArray);
    const [optionsFilter, setOptionsFilter] = useState("");

    const onOptionSelect = (option) => {
        if (props.currencyIndex === 0) {
            props.setSelectedCurrencies([option, props.selectedCurrencies[1]]);
        } else if (props.currencyIndex === 1) {
            props.setSelectedCurrencies([props.selectedCurrencies[0], option]);
        }
        setIsOptionsWindow(false);
    }

    const searchOptions = () => {
        const newShownOptions = props.optionsArray.filter((o) =>
            o.code.includes(optionsFilter.toUpperCase())
            || o.title.toUpperCase().includes(optionsFilter.toUpperCase())
        );
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
                    {props.isSymbolsFetching
                        ? <div className={s.loaderContainer}>
                            <img className={s.loader} alt={""} src={loading}/>
                        </div>
                        : shownOptions.map(
                            o =>
                            <div onClick={() => onOptionSelect(o.code)} className={s.currencyOption} key={o.code}>
                                <div className={s.optionCode}>{o.code}</div>
                                <div className={s.optionTitle}>{o.title}</div>
                            </div>
                        )
                    }
                </div>
                <button className={s.closeButton} onClick={() => setIsOptionsWindow(false)}>
                    back
                </button>
            </div>
        </div>
    )
}

export default CurrencySelect;