import React, {useEffect, useState} from "react";
import {format, add} from "date-fns"
import {Invoice, InvoicesList} from "../molecules/InvoicesList";
import {getInvoices} from "../../helpers/requests";



export function Invoices() {

    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [yearMonth, setYearMonth] = useState<string>(format(new Date(), "yyyy-MM"));
    const [error, setError] = useState<string|null>(null);

    function monthName(monthYear: string) {
        return new Intl.DateTimeFormat(navigator.language, { month: "long" }).format(new Date(`${monthYear}-01`));
    }

    function prevMonth() {
        const date = add(new Date(`${yearMonth}-01`), {months: -1})
        setYearMonth(format(date, "yyyy-MM"))
    }

    function nextMonth() {
        const date = add(new Date(`${yearMonth}-01`), {months: 1})
        setYearMonth(format(date, "yyyy-MM"))
    }

    useEffect(() => {
        const fetchInvoices = async () => {
            setInvoices(await getInvoices(yearMonth))
        }

        setError(null)
        fetchInvoices().catch(() => {
            setError("Er is een fout opgetreden bij het ophalen van de facturen. Neem contact op met uw banaan.")
        })

    }, [yearMonth]);

    return <div className={"invoices"}>
        <h1>Facturen</h1>
        <div className={'month-navigation'}>
            <button onClick={prevMonth}>&lt;</button>
            <h2>{monthName(yearMonth)} {yearMonth.split('-')[0]}</h2>
            <button onClick={nextMonth}>&gt;</button>

        </div>
        {error ? <div className={'message error'}>{error}</div> :
        <InvoicesList invoices={invoices}/>}
    </div>
}