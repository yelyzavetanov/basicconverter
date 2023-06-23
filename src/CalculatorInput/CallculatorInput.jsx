import React from "react";
import s from "./CalculatorInput.module.css";

const CalculatorInput = (props) => {
    return (
        <div className={s.calculatorInput}>
            <div className={s.input}>
                <div className={s.historyInput}>{props.previousValue}</div>
                {props.inputValue}
            </div>
        </div>
    )
}

export default CalculatorInput;