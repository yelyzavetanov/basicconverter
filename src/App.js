import './App.css';
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import React, {useState} from "react";
import CButton from "./CButton/CButton";
import PlusButton from "./PlusButton/PlusButton";
import EqualButton from "./EqualButton/EqualButton";
import CalculatorInput from "./CalculatorInput/CallculatorInput";

function App() {
    let [inputValue, setInputValue] = useState("5-2*2/3");
    let [previousValue, setPreviousValue] = useState("");

    return (
        <div className="App">
            <div className="row">
                <CalculatorInput inputValue={inputValue} previousValue={previousValue}/>
            </div>
            <div className="row">
                <CButton setInputValue={setInputValue} setPreviousValue={setPreviousValue}/>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>/</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>*</CalculatorButton>
            </div>
            <div className="row">
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>7</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>8</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>9</CalculatorButton>
                <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>-</CalculatorButton>
            </div>
            <div className="double-row">
                <div>
                    <div className="little-row">
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>4</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>5</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>6</CalculatorButton>
                    </div>
                    <div className="little-row">
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>1</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>2</CalculatorButton>
                        <CalculatorButton setInputValue={setInputValue} inputValue={inputValue}>3</CalculatorButton>
                    </div>
                </div>
                <div><PlusButton setInputValue={setInputValue} inputValue={inputValue}/></div>
            </div>
            <div className="row">
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
    );
}

export default App;
