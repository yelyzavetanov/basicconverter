import React from "react";
import s from "./ConvertButton.module.css";
import api from "../../api/api";
import {CurrencyPairs} from "../../types/common";


type Props = {
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setIsResultFetching: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCurrencies: string[];
    currencyPairs: CurrencyPairs;
    currentCurrencyPair: string;
    firstInputValue: string;
    secondInputValue: string;
    setFirstValue: React.Dispatch<React.SetStateAction<string>>;
    setSecondValue: React.Dispatch<React.SetStateAction<string>>;
};


const ConvertButton = (props: Props) => {

    const onConvertButtonClick = () => {
        const getConvertResult = async (to: string, from: string, amount: number) => {
            props.setIsResultFetching(true);
            props.setSecondValue("");

            try {
                const res: any = await api.fetchConvertResult(to, from, amount);
                props.setSecondValue(res.data.result.toString());
            } catch (error) {
                props.setError(true);
            } finally {
                props.setIsResultFetching(false);
            }
        };

        if (Number(props.firstInputValue) !== 0) {
            getConvertResult(
                props.selectedCurrencies[1],
                props.selectedCurrencies[0],
                Number(props.firstInputValue)
            ).then(res => res);
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