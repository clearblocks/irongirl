import React, {useState} from 'react';

import './App.scss';
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";
import {Calculator} from "./components/organisms/Calculator";
import {LoggedIn} from "./components/molecules/LoggedIn";
import classNames from "classnames";
import {Invoices} from "./components/organisms/Invoices";

export function AdminApp() {
    const CALCULATOR = 'calculator'
    const INVOICES = 'invoices'
    const [tab, setTab] = useState<string>('calculator')

    function showInvoices() {
        setTab(INVOICES)
    }

    return (
        <div>
            <Header/>
            <LoggedIn>
                <div className={'admin-tabs'}>
                    <div className={classNames('admin-tab', {'active': tab === CALCULATOR})}
                        onClick={() => setTab(CALCULATOR)}>Calculator</div>
                    <div className={classNames('admin-tab', {'active': tab === INVOICES})}
                        onClick={() => setTab(INVOICES)}>Facturen</div>
                </div>
                {tab === CALCULATOR && <Calculator showInvoices={showInvoices}/>}
                {tab === INVOICES && <Invoices />}
                <Footer/>
            </LoggedIn>
        </div>
    );
}

