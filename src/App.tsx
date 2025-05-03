import React from 'react';
import './App.scss';
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";
import {Route, Routes} from "react-router";
import {WebApp} from "./WebApp";
import {AdminApp} from "./AdminApp";
import {InvoiceComponent} from "./components/organisms/InvoiceComponent";
import {LanguageProvider} from './contexts/LanguageContext';

export function App() {

  return (
    <LanguageProvider>
      <Routes>
        <Route path={"/admin/invoice/:invoiceNumber"} element={<InvoiceComponent/>}/>
        <Route path={"/*"} element={
          <div className="App">
            <Header/>
            <Routes>
              <Route index element={<WebApp/>}/>
              <Route path="/admin/*" element={<AdminApp/>}/>
            </Routes>
            <Footer/>
          </div>}/>
      </Routes>
    </LanguageProvider>

  );
}