import {useEffect, useState} from "react";


interface Invoice {
    created: string
    invoiceNumber: string
    totalPriceExVat: number
    vat: number
    totalPrice: number
}

export function Invoices() {

    const [invoices, setInvoices] = useState<Invoice[]>([])

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await fetch('php/invoices.php')
            if (response.ok) {
                setInvoices(await response.json())
            }
        }

        fetchInvoices().catch(console.error)

    }, []);

    return <div className={"invoices"}>
        <h1>Facturen</h1>
        {invoices.map(invoice => {
            return <div>
                <span>{invoice.created}</span><span>{invoice.totalPrice}</span>
            </div>
        })}
    </div>
}