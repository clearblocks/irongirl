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

function renderPrice(price: number): string {
  var split = String(price).split(".")
  if (split.length === 1) {
    split[1] = "00"
  } else if (split[1].length === 1) {
    split[1] = split[1] + "0"
  } else {
    split[1] = split[1].substring(0, 2)
  }
  return `${split[0]},${split[1]}`
}
