import React, {useEffect} from "react";
import s from "./EqualButton.module.css";

const EqualButton = (props) => {
    const setElementsArrays = (elementsArray, operatorElementsArray) => {
        const valueArray = props.inputValue.split("");
        const digitsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
        const operatorsArray = ["/", "*", "-", "+"];
        let intElement = "";

        for (let i = 0; i < valueArray.length+1; i++) {
            if (valueArray[i] === "-" && i === 0) {
                intElement += valueArray[i];
            } else if(valueArray[i] === "0" && i === 0) {

            } else if (digitsArray.some(d => d === valueArray[i])) {
                intElement += valueArray[i];
            } else if (operatorsArray.some(o => o === valueArray[i])) {
                elementsArray.push(intElement);
                intElement = "";
                operatorElementsArray.push(valueArray[i]);
            } else {
                elementsArray.push(intElement);
                intElement = "";
            }
        }
    }

    const doThePriorityCalculations = (elementsArray, operatorElementsArray) => {
        for (let i = 0; i < operatorElementsArray.length; i++) {
            if (
                operatorElementsArray.find(e => e === "/" || e === "*")
                &&
                operatorElementsArray.some(e => e === "-" || e === "+")
            ) {
                let priorityOperator = operatorElementsArray.find(e => e === "/" || e === "*");
                const priorityOperatorIndex = operatorElementsArray.indexOf(priorityOperator);
                let a = Number(elementsArray[priorityOperatorIndex]);
                let b = Number(elementsArray[priorityOperatorIndex+1]);
                let result = 0;
                switch (priorityOperator) {
                    case "/":
                        result = a / b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    default:
                        result = 0;
                        break;
                }
                elementsArray.splice(priorityOperatorIndex, 1, result.toString());
                elementsArray.splice(priorityOperatorIndex+1, 1);
                operatorElementsArray.splice(priorityOperatorIndex, 1);
            }
        }
    }

    const doTheCalculations = (elementsArray, operatorElementsArray) => {
        let result = 0;

        for (let i = 0; operatorElementsArray.length !== 0; i++) {
            let a = Number(elementsArray[0]);
            let b = Number(elementsArray[1]);
            switch (operatorElementsArray[0]) {
                case "/":
                    result = a / b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "+":
                    result = a + b;
                    break;
                default:
                    result = 0;
                    break;
            }

            operatorElementsArray.splice(operatorElementsArray[i], 1);
            elementsArray.splice(elementsArray.indexOf(a.toString()), 0, result.toString());
            elementsArray.splice(elementsArray.indexOf(a.toString()), 1);
            elementsArray.splice(elementsArray.indexOf(b.toString()), 1);

        }

        return result;
    }

    const onEqualButtonClick = () => {
        const operatorsArray = ["/", "*", "-", "+"];

        if ((props.inputValue.split("").some(e => operatorsArray.some(o => o === e)))) {
            const newPreviousValue = props.inputValue;
            const elementsArray = [];
            let operatorElementsArray = [];

            setElementsArrays(elementsArray, operatorElementsArray);
            doThePriorityCalculations(elementsArray, operatorElementsArray);

            props.setInputValue(doTheCalculations(elementsArray, operatorElementsArray).toString());
            props.setPreviousValue(newPreviousValue);
        }
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "=") {
            onEqualButtonClick();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", (event) => onKeyDown(event), {once: true});
        return () => {
            document.removeEventListener("keydown", (event) => onKeyDown(event));
        }
    }, [props.inputValue])

    return (
        <div className={s.button} onClick={onEqualButtonClick}>
            =
        </div>
    )
}

export default EqualButton;