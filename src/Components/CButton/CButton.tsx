import React from "react";
import s from "./CButton.module.css";

type Props = {
    setFirstValue: React.Dispatch<React.SetStateAction<string>>;
    setSecondValue: React.Dispatch<React.SetStateAction<string>>;
};

const CButton = ({ setFirstValue, setSecondValue }: Props) => {
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