import React from "react";
import s from "./CalculatorKeyboard.module.css";
import CButton from "../CButton/CButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import PlusButton from "../PlusButton/PlusButton";
import EqualButton from "../EqualButton/EqualButton";

const CalculatorKeyboard = ({setInputValue, setPreviousValue, inputValue, previousValue}) => {
    return (
        <div>
            <div className={s.row}>
                <CButton setInputValue={setInputValue} setPreviousValue={setPreviousValue}/>
                <DeleteButton setInputValue={setInputValue} inputValue={inputValue}/>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>/</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>*</CalculatorButton>
            </div>
            <div className={s.row}>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>7</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>8</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>9</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>-</CalculatorButton>
            </div>
            <div  className={s.doubleRow}>
                <div>
                    <div className={s.littleRow}>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>4</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>5</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>6</CalculatorButton>
                    </div>
                    <div  className={s.littleRow}>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>1</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>2</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>3</CalculatorButton>
                    </div>
                </div>
                <div><PlusButton setInputValue={setInputValue} inputValue={inputValue}/></div>
            </div>
            <div className={s.row}>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>0</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>00</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>.</CalculatorButton>
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