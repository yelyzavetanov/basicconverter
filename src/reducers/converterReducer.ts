import {createAction, createReducer} from "@reduxjs/toolkit";
import api from "../api/api";
import {AppDispatch} from "../store";

type Option = {
    title: string;
    code: string;
}

export const setSymbols = createAction<Option[]>("SET-SYMBOLS");

const initialState = {
    testValue: "test",

    currencyOptions: [
        {code: "EUR", title: "eur"},
        {code: "USD", title: "usd usd usd usd usd usd usd usd usd usd"},
        {code: "UAH", title: "uah"},
    ],
    currencyPairs: {
        "USD/USD": 1,
        "EUR/EUR": 1,
        "UAH/UAH": 1,
        "EUR/USD": 1.10,
        "EUR/UAH": 40.6,
        "USD/EUR": 0.91,
        "USD/UAH": 36.79,
        "UAH/EUR": 0.025,
        "UAH/USD": 0.027,
    }
}

const converterReducer = createReducer(initialState, (builder) => {
    builder.addCase(setSymbols, (state, action) => {
        console.log("reducer action payload: ", action.payload);
        state.currencyOptions = action.payload;
    });
});

export const requestSymbols = () => {
    return async (dispatch: AppDispatch) => {
        const response: any = await api.fetchSymbols();

        const options = Object.keys(response.symbols).map(key => ({
            code: key,
            title: response.symbols[key].description,
        }));

        dispatch(setSymbols(options));
    };
};

export default converterReducer;

