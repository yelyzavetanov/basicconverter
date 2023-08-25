import {configureStore} from "@reduxjs/toolkit";
import converterReducer from "./reducers/converterReducer";

const reducer = {
    converter: converterReducer,
}

const store = configureStore({reducer});

export default store;