import React from "react";
import s from "./CButton.module.css";

const CButton = ({setFirstValue, setSecondValue}) => {
    const onCButtonClick = () => {
        setFirstValue("");
        setSecondValue("");
    }

    return (
        <div className={s.button} onClick={onCButtonClick}>
            c
        </div>
    )
}

export default CButton;