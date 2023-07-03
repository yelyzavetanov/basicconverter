import React from "react";
import s from "./Navigation.module.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <Link to={"/calculator"}>Calculator</Link>
            <Link to={"/converter"}>Converter</Link>
        </nav>
    )
}

export default Navigation;