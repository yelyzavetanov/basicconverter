import React from "react";
import s from "./ConvertButton.module.css";
import api from "../../api/api";

const ConvertButton = (props) => {
    const onConvertButtonClick = () => {
        const getConvertResult = async (to, from, amount) => {
            console.log(to, from, amount);
            props.setIsResultFetching(true);
            props.setSecondValue("");
            await api.fetchConvertResult(to, from, amount).then((r) => {
                console.log("convert result: ", r.data.result);
                props.setSecondValue(r.data.result.toString());
                props.setIsResultFetching(false);
            }).catch(() => props.setError(true));
        }

        if (Number(props.firstInputValue) !== 0) {
            getConvertResult(
                props.selectedCurrencies[1],
                props.selectedCurrencies[0],
                Number(props.firstInputValue)
            ).then(r => r);
        }

        // if (props.firstInputValue === "" && props.secondInputValue === "") {
        // } else if (props.firstInputValue === "") {
        //     const newValue = parseInt(props.secondInputValue) / props.currencyPairs[props.currentCurrencyPair];
        //     props.setFirstValue(newValue.toString());
        // } else {
        //     const newValue = parseInt(props.firstInputValue) * props.currencyPairs[props.currentCurrencyPair];
        //     props.setSecondValue(newValue.toString());
        // }
    }

    // useEffect(() => {}, props.secondInputValue);

    return (
        <div onClick={onConvertButtonClick} className={s.convertButtonContainer}>
            <div className={s.convertButton}>
                convert
            </div>
        </div>
    )
}

export default ConvertButton;