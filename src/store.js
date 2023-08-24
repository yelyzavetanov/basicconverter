import {configureStore} from "@reduxjs/toolkit";
import converterReducer from "./reducers/coverterReducer";

const reducer = {
    converter: converterReducer,
}

const store = configureStore({reducer});

export default store;