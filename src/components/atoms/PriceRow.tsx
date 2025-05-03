import React from 'react'
import {Price} from "./Price";
import {useLanguage} from "../../contexts/LanguageContext";

export type PriceData = {
  name: string,
  price: number
}

export const PriceRow = ({name, price}: PriceData) => {
  const {translate} = useLanguage();
  return (
    <div className={"price-row"}>
      <span className={"item-name"}>{translate(`items.${name}`)}</span>
      <Price price={price}/>
    </div>
  )
}
