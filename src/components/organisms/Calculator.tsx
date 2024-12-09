import React, {useState} from 'react'

import ironPriceData from "../../assets/json/ironPriceData.json"
import {CalculatorItem} from "../molecules/CalculatorItem";
import {renderPrice} from "../atoms/PriceRow";

export function Calculator() {

    const [itemAmounts, setItemAmounts] = useState<{ [name: string]: number | undefined }>({})
    const [viewSelected, setViewSelected] = useState<boolean>(false)

    const priceItemsById = Object.fromEntries(ironPriceData.map((categoryItems, i) => {
        return categoryItems.priceDataSet.map((priceItem, j) => {
            const id = `${i}-${j}`
            return [id, priceItem.price]
        })
    }).flat())

    function setAmount(id: string, amount: number | undefined) {
        const updated = {
            ...itemAmounts,
            [id]: amount,
        }

        setItemAmounts(updated)
    }

    function getTotalPrice() {
        return Object.entries(itemAmounts).reduce((cum, [id, amount]) => {
            return cum + (priceItemsById[id] * (amount || 0))
        }, 0)
    }

    function showCategory(category: string): boolean {

        if (!viewSelected) {
            return true
        }
        const categoryIndex = ironPriceData.findIndex(catItems => catItems.category == category)
        return ironPriceData[categoryIndex]['priceDataSet'].some((priceData, itemIndex) => {
            const id = `${categoryIndex}-${itemIndex}`
            const itemAmount = itemAmounts[id] || 0
            return itemAmount > 0
        })
    }

    return <>
        <div className={"calculator-total"}>
            <span>Totaal:&nbsp;</span><span className={'item-euro'}>&euro;</span><span>{renderPrice(getTotalPrice())}</span>
        </div>
        <div className={'toggle-selected'} onClick={() => setViewSelected(!viewSelected)}>{viewSelected ? 'Toon alles' : 'Toon gekozen'}</div>
        {ironPriceData.map((priceDataSet, i: number) =>
            <div key={i}>
                {showCategory(priceDataSet.category) ? <h2>{priceDataSet.category}</h2> : null}
                {priceDataSet.priceDataSet.map((priceItem, j: number) => {
                    const id = `${i}-${j}`
                    const itemAmount = itemAmounts[id]
                    const viewItem = !viewSelected || itemAmount
                    return viewItem ? <CalculatorItem key={j} id={id}
                                           name={priceItem.name}
                                           price={priceItem.price}
                                           amount={itemAmounts[id]}
                                           setAmount={setAmount}/> : null
                })}
            </div>)}
        <div className={"calculator-total"}><span>Totaal:</span><span className={'item-euro'}>&euro;</span><span>{renderPrice(getTotalPrice())}</span>
        </div>
    </>
}