import React, {useState} from "react";
// import s from "./BasicCalculator.module.css";
import CalculatorInput from "../CalculatorInput/CallculatorInput";
import CalculatorKeyboard from "../CalculatorKeyboard/CalculatorKeyboard";

const BasicCalculator = () => {
    let [inputValue, setInputValue] = useState("");
    let [previousValue, setPreviousValue] = useState("");

    return (
        <div>
            <CalculatorInput inputValue={inputValue} previousValue={previousValue} setInputValue={setInputValue}/>
            <CalculatorKeyboard
                setInputValue={setInputValue}
                setPreviousValue={setPreviousValue}
                inputValue={inputValue}
                previousValue={previousValue}
            />
        </div>
    )
}

export default BasicCalculator;