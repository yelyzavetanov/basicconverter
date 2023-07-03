import './App.css';
import React from "react";
import BasicCalculator from "./Components/BasicCalculator/BasicCalculator";
import Navigation from "./Components/Navigation/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BasicConverter from "./Components/BasicConverter/BasicConverter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path={"/calculator"} element={<BasicCalculator/>}/>
                    <Route path={"/converter"} element={<BasicConverter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
