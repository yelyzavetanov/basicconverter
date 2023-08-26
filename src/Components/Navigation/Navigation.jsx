import React from "react";
import s from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <NavLink className={({isActive}) => isActive ? s.activeLink : ""} to={"/calculator"}>
                Calculator
            </NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : ""} to={"/converter"}>
                Converter
            </NavLink>
        </nav>
    )
}

export default Navigation;