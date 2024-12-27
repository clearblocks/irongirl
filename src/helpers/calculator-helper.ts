import ironPriceData from "../assets/json/ironPriceData.json";
import laundryPriceData from "../assets/json/laundryPriceData.json";

export type AmountMap = {[id: string]: number | undefined}
export type PriceMap = {[id: string]: number}
export type NameMap = {[id: string]: string}


const laundryPriceUpTo6Kg = laundryPriceData[0].priceDataSet
    .find(item => item.slug === '<=6')?.price || 0

const laundryExtraKgPrice = laundryPriceData[0].priceDataSet
    .find(item => item.slug === '>6')?.price || 0

export function calcLaundryPrice(amount: number | undefined, price: number) {
    amount = amount || 0
    if (amount == 0) {
        return 0
    }
    else if (amount <= 6) {
        return laundryPriceUpTo6Kg
    } else {
        const extraKg = amount - 6
        return laundryPriceUpTo6Kg + (extraKg * laundryExtraKgPrice)
    }
}


function indexItemPricesById(): PriceMap {
    return Object.fromEntries(ironPriceData.map((categoryItems, i) => {
        return categoryItems.priceDataSet.map((priceItem, j) => {
            const id = `${i}-${j}`
            return [id, priceItem.price]
        })
    }).flat())
}

function indexItemNamesById(): NameMap {
    return {
        ...Object.fromEntries(ironPriceData.map((categoryItems, i) => {
            return categoryItems.priceDataSet.map((priceItem, j) => {
                const id = `${i}-${j}`
                const name = `${priceItem.name}${categoryItems.categoryType === 'kind' ? ' (kind)' : ''}`
                return [id, name]
            })
        }).flat()),
        'laundry': 'Wasgoed (Kg)'
    }
}

export function getTotalPrice(itemAmounts: AmountMap) {
    const pricesById = indexItemPricesById()
    return Object.entries(itemAmounts).reduce((cum, [id, amount]) => {
        if (id === 'laundry') {
            return cum + calcLaundryPrice(amount, 0)
        }
        return cum + (pricesById[id] * (amount || 0))
    }, 0)
}

export function getInvoiceItems(itemAmounts: AmountMap) {
    const namesById = indexItemNamesById()
    const pricesById = indexItemPricesById()
    return Object.entries(itemAmounts).filter(([_, amount]) => amount)
        .map(([id, amount]) => ({
            'id': id,
            'item': namesById[id],
            'amount': amount,
            'price': (id === 'laundry') ? calcLaundryPrice(amount, 0) : pricesById[id]
    }))
}

