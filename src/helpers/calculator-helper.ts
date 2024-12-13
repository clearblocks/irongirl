import ironPriceData from "../assets/json/ironPriceData.json";

export type AmountMap = {[id: string]: number | undefined}
export type PriceMap = {[id: string]: number}
export type NameMap = {[id: string]: string}

function indexItemPricesById(): PriceMap {
    return Object.fromEntries(ironPriceData.map((categoryItems, i) => {
        return categoryItems.priceDataSet.map((priceItem, j) => {
            const id = `${i}-${j}`
            return [id, priceItem.price]
        })
    }).flat())
}

function indexItemNamesById(): NameMap {
    return Object.fromEntries(ironPriceData.map((categoryItems, i) => {
        return categoryItems.priceDataSet.map((priceItem, j) => {
            const id = `${i}-${j}`
            const name = `${priceItem.name}${categoryItems.categoryType === 'kind' ? ' (kind)' : ''}`
            return [id, name]
        })
    }).flat())
}

export function getTotalPrice(itemAmounts: AmountMap) {
    const pricesById = indexItemPricesById()
    return Object.entries(itemAmounts).reduce((cum, [id, amount]) => {
        return cum + (pricesById[id] * (amount || 0))
    }, 0)
}

function getInvoiceItems(itemAmounts: AmountMap) {
    const namesById = indexItemNamesById()
    const pricesById = indexItemPricesById()
    return Object.entries(itemAmounts).filter(([_, amount]) => amount)
        .map(([id, amount]) => ({
            'item': namesById[id],
            'amount': amount,
            'price': pricesById[id]
    }))
}

export async function saveInvoice(itemAmounts: AmountMap) {
    const invoiceItems = getInvoiceItems(itemAmounts)
    const response = await fetch('php/invoice.php', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoiceItems)
    })

    return response.ok
}