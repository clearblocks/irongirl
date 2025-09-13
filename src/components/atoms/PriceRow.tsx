import React from 'react'
import {Price} from "./Price";
import {useLanguage} from "../../contexts/LanguageContext";

export type PriceData = {
  name: string,
  price: number
}

export const PriceRow = ({name, price}: PriceData) => {
  const {translateHTML} = useLanguage();
  return (
    <div className={"price-row"}>
      <span className={"item-name"} dangerouslySetInnerHTML={{__html: translateHTML(`items.${name}`)}} />
      <Price price={price}/>
    </div>
  )
}
