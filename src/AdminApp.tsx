import React, {useState} from 'react';

import {Calculator} from "./components/organisms/Calculator";
import classNames from "classnames";
import {Invoices} from "./components/organisms/Invoices";
import {NavLink, Route, Routes} from "react-router";

export function AdminApp() {
    return (
        <>
            <div className={'admin-tabs'}>
                <NavLink className={classNames('admin-tab')}
                     to={"/admin"} end>Calculator
                </NavLink>
                <NavLink className={classNames('admin-tab')}
                     to={'/admin/invoices'}>Facturen
                </NavLink>
            </div>
            <Routes>
                <Route index element={<Calculator/>}/>
                <Route path={"/invoices"} element={<Invoices />}/>
            </Routes>

        </>
    );
}

