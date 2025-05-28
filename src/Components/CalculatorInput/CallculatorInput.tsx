import React from "react";
import s from "./CalculatorInput.module.css";
import {useCalculatorInput} from "./useCalculatorInput";


type Props = {
    inputValue: string;
    previousValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const CalculatorInput = (props: Props) => {

    const {onInputChange} = useCalculatorInput(props.inputValue, props.setInputValue);

    return (
        <div className={s.calculatorInput}>
            <div className={s.input}>
                <div className={s.historyInput}>{props.previousValue}</div>
                <input
                    placeholder={"0"}
                    value={props.inputValue}
                    onChange={(event) => onInputChange(event)}
                />
            </div>
        </div>
    )
}

export default CalculatorInput;