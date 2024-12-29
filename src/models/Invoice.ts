export interface InvoiceItem {
    item: string,
    amount: number,
    totalPrice: number
}

export interface Invoice {
    created: string
    invoiceNumber: string
    invoiceItems: InvoiceItem[]
    totalPriceExVat: number
    vat: number
    totalPrice: number
}