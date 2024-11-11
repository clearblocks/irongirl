import React, {useState} from 'react'

import ironPriceData from "../../assets/json/ironPriceData.json"
import {CalculatorItem} from "../molecules/CalculatorItem";
import {renderPrice} from "../atoms/PriceRow";

export function Calculator() {

    const [itemAmounts, setItemAmounts] = useState<{ [name: string]: number }>({})
    const priceItemsById = Object.fromEntries(ironPriceData.map((categoryItems, i) => {
        return categoryItems.priceDataSet.map((priceItem, j) => {
            const id = `${i}-${j}`
            return [id, priceItem.price]
        })
    }).flat())

    function setAmount(id: string, amount: number) {
        console.log(id, amount)
        const updated = {
            ...itemAmounts,
            [id]: amount,
        }

        setItemAmounts(updated)
    }

    function getTotalPrice() {
        return Object.entries(itemAmounts).reduce((cum, [id, amount]) => {
            return cum + (priceItemsById[id] * amount)
        }, 0)
    }


    return <>
        <div className={"calculator-total"}><span>Totaal:&nbsp;</span><span className={'item-euro'}>&euro;</span><span>{renderPrice(getTotalPrice())}</span>
        </div>
        {ironPriceData.map((priceDataSet, i: number) =>
            <div key={i}>
                <h2>{priceDataSet.category}</h2>
                {priceDataSet.priceDataSet.map((priceItem, j: number) => {
                    const id = `${i}-${j}`
                    return <CalculatorItem key={j} id={id}
                                           name={priceItem.name}
                                           price={priceItem.price}
                                           amount={itemAmounts[id] || 0}
                                           setAmount={setAmount}/>
                })}
            </div>)}
        <div className={"calculator-total"}><span>Totaal:</span><span className={'item-euro'}>&euro;</span><span>{renderPrice(getTotalPrice())}</span>
        </div>
    </>
}