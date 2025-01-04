import React, {useEffect, useState} from 'react'
import {CalculatorItem} from "../molecules/CalculatorItem";
import {Price} from "../atoms/Price";
import {Invoice} from "../../models/Invoice";
import {format} from "date-fns";
import {nl} from "date-fns/locale";
import {getInvoice} from "../../helpers/requests";
import {useParams} from "react-router";
import {LoggedIn} from "../molecules/LoggedIn";

export function formatDate(dateVal: string): string {
    return format(new Date(dateVal),  'd MMMM yyyy', {locale: nl})
}

export function InvoiceComponent() {
    const [invoice, setInvoice] = useState<Invoice|null>(null)
    const [error, setError] = useState<string|null>(null)

    let { invoiceNumber } = useParams() as { invoiceNumber: string };

    useEffect(() => {
        const fetchInvoice = async () => {
            setInvoice(await getInvoice(invoiceNumber))
        }

        setError(null)
        fetchInvoice().catch(() => {
            setError("Er is een fout opgetreden bij het ophalen van de factuur. Neem contact op met uw banaan.")
        })
    }, []);

    if (invoice === null) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div className={"save-error"}>{error}</div>
    }

    return (
    <LoggedIn>
        <div className={'invoice'}>
            <div className={'invoice-data'}>
                <div className={'invoice-data-item invoice-customer'}><span>{invoice.customerName}</span><span></span></div>
                <div className={'invoice-data-item'}><span>Factuurnummer</span><span>{invoice.invoiceNumber}</span></div>
                <div className={'invoice-data-item'}><span>Datum</span><span>{formatDate(invoice.created)}</span></div>
            </div>
            <div className={'invoice-items'}>
                {invoice.invoiceItems.map((item, idx) =>
                    <CalculatorItem id={`${idx}`} name={item.item} price={0} amount={item.amount}
                                    setAmount={() => {
                                    }} readOnly={true}
                                    calculatePrice={() => item.totalPrice}/>)}
                <div className={"calculator-total-bottom"}>
                    <span>Totaal:</span>
                    <Price price={invoice.totalPrice}/>
                </div>
            </div>
        </div>
    </LoggedIn>)
}