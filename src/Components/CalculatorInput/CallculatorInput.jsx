import React from "react";
import s from "./CalculatorInput.module.css";

const CalculatorInput = (props) => {
    const onInputChange = (event) => {
        const calculatorButtonKeys = ["/", "*", "-", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+"];
        const nonInt = ["/", "*", "-", "+"];
        const newChar = event.nativeEvent.data;

        if (calculatorButtonKeys.some(k => k === newChar)) {

            if(nonInt.some(e => e === newChar)) {
                if(nonInt.some(e => e === props.inputValue.slice(-1))) {
                    props.setInputValue(props.inputValue.slice(0, -1) + newChar);
                }
                else {
                    props.setInputValue(props.inputValue + newChar);
                }
            } else {
                props.setInputValue(props.inputValue + newChar);
            }
        }
    }

    return (
        <div className={s.calculatorInput}>
            <div className={s.input}>
                <div className={s.historyInput}>{props.previousValue}</div>
                <input value={props.inputValue} onChange={(event) => onInputChange(event)}/>
            </div>
        </div>
    )
}

export default CalculatorInput;