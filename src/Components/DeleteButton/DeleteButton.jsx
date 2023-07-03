import React from "react";
import s from "./DeleteButton.module.css";
import deleteIcon from "../../img/delete.png";

const DeleteButton = (props) => {
    const onCButtonClick = () => {
        const valueArray = props.inputValue.split("");
        valueArray.pop();
        props.setInputValue(valueArray.join(""));
    }

    return (
        <div className={s.button} onClick={onCButtonClick}>
            <img src={deleteIcon} className={s.deleteIcon} alt={""}/>
        </div>
    )
}

export default DeleteButton;