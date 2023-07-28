import React, {useState} from "react";
import s from "./PlusButton.module.css";

const PlusButton = (props) => {
    const [isActive] = useState(false);

    const onButtonClick = () => {
        let lastChar = props.inputValue.slice(-1);

        if(lastChar === "/" || lastChar === "*" || lastChar === "-" || lastChar === "+") {
            props.setInputValue(props.inputValue.slice(0, -1) + "+");
        } else {
            props.setInputValue(props.inputValue + "+");
        }
    }

    return (
        <div className={s.buttonContainer}>
            <div className={isActive ? s.activeButton : s.button} onClick={onButtonClick}>+</div>
        </div>
)
}

export default PlusButton;
