import React from 'react'
import {Price} from "./Price";

export type PriceData = {
    name: string,
    price: number
}

export const PriceRow = ({name, price}: PriceData) => (
    <div className={"price-row"}>
        <span className={"item-name"}>{name}</span>
        <Price price={price} />
    </div>
)
