import React from "react";
import s from "./CButton.module.css";

const CButton = (props) => {
    const onCButtonClick = () => {
        props.setInputValue("");
        props.setPreviousValue("");
    }

    return (
        <div className={s.button} onClick={onCButtonClick}>
            c
        </div>
    )
}

export default CButton;