import React from 'react'
import { PriceData, PriceRow } from '../atoms/PriceRow'

export type PriceTableData = {
  category: string,
  priceDataSet: PriceData[]
}

export const PriceTable = ({category, priceDataSet}: PriceTableData) => (
  <div className={"price-table"} >
    <h3>{category}</h3>
    <div className={"price-table-data"}>
      {priceDataSet.map((priceData, index) => <PriceRow name={priceData.name} price={priceData.price} key={index}/>)}
    </div>
  </div>
)

