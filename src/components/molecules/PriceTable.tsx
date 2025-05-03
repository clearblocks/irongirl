import React from 'react'
import { PriceData, PriceRow } from '../atoms/PriceRow'
import {useLanguage} from "../../contexts/LanguageContext";

export type PriceTableData = {
  category?: string,
  priceDataSet: PriceData[]
}

export const PriceTable = ({category, priceDataSet}: PriceTableData) => {
  const {translate} = useLanguage();
  return (
    <div className={"price-table"} >
      {category && <h4>{translate(`items.${category}`)}</h4>}
      <div className={"price-table-data"}>
        {priceDataSet.map((priceData, index) => <PriceRow name={priceData.name} price={priceData.price} key={index}/>)}
      </div>
    </div>
  )
}

