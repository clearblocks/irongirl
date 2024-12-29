import React from 'react'
import {CalculatorItem} from "../molecules/CalculatorItem";
import {Price} from "../atoms/Price";
import {Invoice} from "../../models/Invoice";
import {format} from "date-fns";
import {nl} from "date-fns/locale";

export function formatDate(dateVal: string): string {
    return format(new Date(dateVal),  'dd MMMM yyyy', {locale: nl})
}

interface InvoiceProps {
    invoice: Invoice
    setShowInvoice: (invoice: Invoice|null) => void
}

export function InvoiceComponent({invoice, setShowInvoice}: InvoiceProps) {
    return <div className={'invoice'}>
        <div className={'back-link'} onClick={() => setShowInvoice(null)}>Terug</div>
        <div className={'invoice-data'}>
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
}