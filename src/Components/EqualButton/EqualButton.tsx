import React, {useEffect} from "react";
import s from "./EqualButton.module.css";
import {useEqualButton} from "./useEqualButton";

type Props = {
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
    setPreviousValue: React.Dispatch<React.SetStateAction<string>>;
}

const EqualButton = (props: Props) => {

    const {onEqualButtonClick} = useEqualButton(props.inputValue, props.setInputValue, props.setPreviousValue);

    return (
        <div className={s.button} onClick={onEqualButtonClick}>
            =
        </div>
    )
}

export default EqualButton;