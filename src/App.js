import './App.css';
import React from "react";
import BasicCalculator from "./Components/BasicCalculator/BasicCalculator";
import Navigation from "./Components/Navigation/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BasicConverter from "./Components/BasicConverter/BasicConverter";
import {connect} from "react-redux"
import {requestSymbols} from "./reducers/converterReducer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={<BasicCalculator/>}/>
                    <Route path={"/calculator"} element={<BasicCalculator/>}/>
                    <Route path={"/converter"} element={
                        <BasicConverter
                            testValue={props.state.converter.testValue}
                            // getSymbols={props.getSymbols}
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

const mapStateToProps = (state) => ({
    state: state,
})

const mapDispatchToProps = (dispatch) => ({
    getSymbols: () => dispatch({type: "converter/setSymbols"}),
    // getCurrencyOptions: () => dispatch(getCurrencyOptions()),
    requestSymbols: () => dispatch(requestSymbols()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
