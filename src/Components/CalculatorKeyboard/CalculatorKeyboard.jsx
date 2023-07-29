import React from "react";
import s from "./CalculatorKeyboard.module.css";
import CButton from "../CButton/CButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import DefaultButton from "../DefaultButton/DefaultButton";
import PlusButton from "../PlusButton/PlusButton";
import EqualButton from "../EqualButton/EqualButton";

const CalculatorKeyboard = ({setInputValue, setPreviousValue, inputValue, previousValue}) => {
    const calculatorButtonsKeysBunch1 = ["/", "*", "7", "8", "9", "-",];
    const calculatorButtonsKeysBunch2 = ["4", "5", "6", "1", "2", "3",];
    const calculatorButtonsKeysBunch3 = ["0", "00", ".",];

    return (
        <div className={s.calculatorKeyboard}>
            <div className={s.littleButtonsContainer}>
                <CButton setFirstValue={setInputValue} setSecondValue={setPreviousValue}/>
                <DeleteButton setInputValue={setInputValue} inputValue={inputValue}/>
                {calculatorButtonsKeysBunch1.map(k =>
                    <DefaultButton key={k} setInputValue={setInputValue} inputValue={inputValue}>
                        {k}
                    </DefaultButton>
                )}
                <div className={s.plusButtonContainer}>
                    <div>
                        {calculatorButtonsKeysBunch2.map(k =>
                            <DefaultButton key={k} setInputValue={setInputValue} inputValue={inputValue}>
                                {k}
                            </DefaultButton>
                        )}
                    </div>
                    <div>
                        <PlusButton setInputValue={setInputValue} inputValue={inputValue}/>
                    </div>
                </div>
                {calculatorButtonsKeysBunch3.map(k =>
                    <DefaultButton key={k} setInputValue={setInputValue} inputValue={inputValue}>
                        {k}
                    </DefaultButton>
                )}
                <EqualButton
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    previousValue={previousValue}
                    setPreviousValue={setPreviousValue}
                />
            </div>
        </div>
    )
}

export default CalculatorKeyboard;