import React from 'react';

import './App.scss';
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";
import {Calculator} from "./components/organisms/Calculator";
import {LoggedIn} from "./components/molecules/LoggedIn";

export function CalculatorApp() {

    return (
        <div>
            <Header/>
            <LoggedIn>
                <div className="calculator">
                    <h1>Calculator</h1>
                    <Calculator/>
                </div>
                <Footer/>
            </LoggedIn>
        </div>
    );
}

