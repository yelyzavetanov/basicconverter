import './App.css';
import React from "react";
import BasicCalculator from "./Components/BasicCalculator/BasicCalculator";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicConverter from "./Components/BasicConverter/BasicConverter";
import { connect, ConnectedProps } from "react-redux";
import { requestSymbols } from "./reducers/converterReducer";
import { RootState } from "./store";


const mapStateToProps = (state: RootState) => ({
    state: state,
});

const mapDispatchToProps = {
    getSymbols: () => ({ type: "converter/setSymbols" }),
    requestSymbols
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function App(props: PropsFromRedux) {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path="/calculator" element={<BasicCalculator/>}/>
                    <Route path="/" element={
                        <BasicConverter
                            testValue={props.state.converter.testValue}
                            getCurrencyOptions={props.requestSymbols}
                            currencyOptions={props.state.converter.currencyOptions}
                            currencyPairs={props.state.converter.currencyPairs}
                        />
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default connector(App);
