import {AmountMap, getInvoiceItems} from "./calculator-helper";
import {Invoice} from "../models/Invoice";

const host = window.location.hostname === 'localhost' ? 'http://localhost:8080' : ''

export const loginUri = `${host}/php/login.php`
export const getInvoicesUri = (yearMonth: string) => `${host}/php/invoices.php?month=${yearMonth}`
export const postInvoiceUri = `${host}/php/invoice.php`
export const getInvoiceUri = (invoiceNumber: string) => `${host}/php/invoice.php?invoiceNumber=${invoiceNumber}`

export async function isLoggedIn(): Promise<boolean> {
    const response = await fetch(loginUri, {
        credentials: 'include'
    })

    if (response.ok) {
        const json = await response.json()
        return json['logged_in']
    }

    return false
}

export async function login(password: string): Promise<boolean> {
    const response = await fetch(loginUri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'password': password
        }),
        credentials: 'include'
    })

    if (response.ok) {
        const json = await response.json()
        return json['logged_in']
    }
    return false
}

export async function saveInvoice(customerName: string, itemAmounts: AmountMap) {
    const invoiceItems = getInvoiceItems(itemAmounts)
    const response = await fetch(postInvoiceUri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerName: customerName,
            invoiceItems: invoiceItems
        }),
        credentials: 'include'
    })

    if (response.ok) {
        return await response.json()
    } else {
        throw Error("Error saving invoice")
    }
}

export async function getInvoices(yearMonth: string): Promise<Invoice[]> {
    const response = await fetch(getInvoicesUri(yearMonth), {
        credentials: 'include'
    })
    if (response.ok) {
        return await response.json()
    } else {
        throw Error(`Error getting invoices for month ${yearMonth}`)
    }
}

export async function getInvoice(invoiceNumber: string): Promise<Invoice> {
    const response = await fetch(getInvoiceUri(invoiceNumber), {
        credentials: 'include'
    })
    if (response.ok) {
        return await response.json()
    } else {
        throw Error(`Error getting invoice ${invoiceNumber}`)
    }
}