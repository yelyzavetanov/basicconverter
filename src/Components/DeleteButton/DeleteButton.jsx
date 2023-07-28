import React, {useEffect} from "react";
import s from "./DeleteButton.module.css";
import deleteIcon from "../../img/delete.png";

const DeleteButton = (props) => {
    const onDeleteButtonClick = () => {
        const valueArray = props.inputValue.split("");
        valueArray.pop();
        props.setInputValue(valueArray.join(""));
    }

    const handleKeyDown = (event) => {
        if (event.key === "Backspace") {
            onDeleteButtonClick();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", (event) => handleKeyDown(event), {once: true});
        return () => {
            document.removeEventListener("keydown", (event) => handleKeyDown(event));
        }
    }, [props.inputValue]);

    return (
        <div
            className={s.button}
            onClick={onDeleteButtonClick}
        >
            <img src={deleteIcon} className={s.deleteIcon} alt={""}/>
        </div>
    )
}

export default DeleteButton;