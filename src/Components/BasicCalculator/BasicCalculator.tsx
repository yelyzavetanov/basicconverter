import React, {useState} from "react";
import CalculatorInput from "../CalculatorInput/CallculatorInput";
import CalculatorKeyboard from "../CalculatorKeyboard/CalculatorKeyboard";

const BasicCalculator = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [previousValue, setPreviousValue] = useState<string>("");

    return (
        <div>
            <CalculatorInput inputValue={inputValue} previousValue={previousValue} setInputValue={setInputValue}/>
            <CalculatorKeyboard
                setInputValue={setInputValue}
                setPreviousValue={setPreviousValue}
                inputValue={inputValue}
            />
        </div>
    )
}

export default BasicCalculator;