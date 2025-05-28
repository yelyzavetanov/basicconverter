import React from "react";


export const useCalculatorInput = (
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
) => {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const calculatorButtonKeys = ["/", "*", "-", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "+"];
        const nonInt = ["/", "*", "-", "+"];

        const nativeEvent = event.nativeEvent as InputEvent;
        const newChar = nativeEvent.data;

        if (calculatorButtonKeys.some(k => k === newChar)) {

            if(nonInt.some(e => e === newChar)) {
                if(nonInt.some(e => e === inputValue.slice(-1))) {
                    setInputValue(inputValue.slice(0, -1) + newChar);
                }
                else {
                    setInputValue(inputValue + newChar);
                }
            } else {
                setInputValue(inputValue + newChar);
            }
        }

    }

    return {onInputChange};
}