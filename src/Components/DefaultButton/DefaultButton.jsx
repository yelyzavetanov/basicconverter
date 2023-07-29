import React from "react";
import s from "./DefaultButton.module.css";

const DefaultButton = (props) => {
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

    return (
        <div className={s.button} onClick={onButtonClick}>
            {props.children}
        </div>
    )
}

export default DefaultButton;