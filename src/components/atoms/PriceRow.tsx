import React from 'react'

export type PriceData = {
  name: string,
  price: number
}

export const PriceRow = ({name, price}: PriceData) => (
  <div className={"price-row"} >
    <span className={"item-name"}>{name}</span><span className={'item-euro'}>&euro;</span><span className={'item-price'}>{renderPrice(price)}</span>
  </div>
)

export function renderPrice(price: number): string {
  // Assume price is always an integer, no float
  let priceString = String(price)
  if (priceString.length == 1) {
    priceString = "00" + priceString
  }
  if (priceString.length == 2) {
    priceString = "0" + priceString
  }

  priceString = `${priceString.slice(0, priceString.length - 2)}.${priceString.slice(priceString.length - 2)}`
  let split = String(priceString).split(".")
  if (split.length === 1) {
    split[1] = "00"
  } else if (split[1].length === 1) {
    split[1] = split[1] + "0"
  } else {
    split[1] = split[1].substring(0, 2)
  }
  return `${split[0]},${split[1]}`
}
