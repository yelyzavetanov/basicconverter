import {createAction, createReducer} from "@reduxjs/toolkit";
import api from "../api/api";

const SET_SYMBOLS = "SET-SYMBOLS";

const initialState = {
    testValue: "test",

    currencyOptions: [
        {code: "EUR", title: "eur"},
        {code: "USD", title: "usd usd usd usd usd usd usd usd usd usd"},
        {code: "UAH", title: "uah"},
    ],
    // currencyOptions: [],
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

// console.log("initial state: ", initialState.currencyOptions);

const converterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_SYMBOLS, (state, action) => {
            console.log("reducer action options: ", action.options);
            state.currencyOptions = action.options;
        })
});

const setSymbols = (options) => createAction(SET_SYMBOLS, options);

export const requestSymbols = () => {
    return async (dispatch) => {
        const getData = async () => {
            await api.fetchSymbols();
            // dispatch(setSymbols(data));
        }
    }
}

// export const getCurrencyOptions = () => {
//     return async (dispatch) => {
//         const result = await api.fetchSymbols().then((r) => {
//             return r;
//         });
//         dispatch(setSymbols(result));
//     }
// }

// function converterReducer(state = initialState, action) {
//     switch (action.type) {
//         case "getSymbols":
//             return "symbols test";
//         default:
//             return initialState;
//     }
// }

export default converterReducer;

