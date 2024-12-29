import React from 'react'
import {format} from 'date-fns'
import {nl} from "date-fns/locale";
import {Price} from "../atoms/Price";
import {Invoice} from "../../models/Invoice";

interface InvoicesListProps {
    invoices: Invoice[]
    setShowInvoice: (invoice: Invoice) => void
}

function formatDate(dateVal: string): string {
    return format(new Date(dateVal), 'EEEEEE dd MMMM', {locale: nl})
}


export function InvoicesList({invoices, setShowInvoice}: InvoicesListProps) {

    const totalExVat = invoices.reduce((acc, invoice) => acc + invoice.totalPriceExVat, 0)
    const totalVat = invoices.reduce((acc, invoice) => acc + invoice.vat, 0)
    const total = invoices.reduce((acc, invoice) => acc + invoice.totalPrice, 0)

    if (invoices.length == 0) {
        return <div className={'invoices-empty'}>Er zijn geen facturen voor deze maand.</div>
    }

    return <div className={'invoices-list'}>
        {invoices.map((invoice, idx) => {
            return <div className={'invoice-item'} key={idx} onClick={() => setShowInvoice(invoice)}>
                <span>{formatDate(invoice.created)}</span>
                <Price price={invoice.totalPrice}/>
            </div>
        })}
        <div className={'invoice-item invoice-total'}>
            <span>Totaal excl. BTW:</span>
            <Price price={totalExVat}/>
        </div>
        <div className={'invoice-item'}>
            <span>BTW:</span>
            <Price price={totalVat}/>
        </div>
        <div className={'invoice-item invoice-total'}>
            <span>Totaal:</span>
            <Price price={total}/>
        </div>
    </div>
}