import React, {useState} from "react";
import s from "./CalculatorButton.module.css";

const CalculatorButton = (props) => {
    const [isActive] = useState(false);

    const onButtonClick = () => {
        const nonInt = ["/", "*", "-", "+"];

        if(nonInt.some(e => e === props.children)) {
            if(nonInt.some(e => e === props.inputValue.slice(-1))) {
                props.setInputValue(props.inputValue.slice(0, -1) + props.children);
            }
            else {
                props.setInputValue(props.inputValue + props.children);
            }
        } else {
            props.setInputValue(props.inputValue + props.children);
        }
    }

    // useEffect(() => {
    //     setIsActive(false);
    //     document.addEventListener("keydown", (event) => handleKeyDown(event), {once: true});
    //     return () => {
    //         document.removeEventListener("keydown", (event) => handleKeyDown(event));
    //     }
    // }, [props.inputValue, rerender]);

    return (
        <div className={isActive ? s.activeButton : s.button} onClick={onButtonClick}>
            {props.children}
        </div>
    )
}

export default CalculatorButton;