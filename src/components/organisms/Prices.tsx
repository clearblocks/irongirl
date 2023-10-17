import React, {ForwardedRef, forwardRef} from 'react';
import {PriceTable} from "../molecules/PriceTable";
import ironPriceData from "../../assets/json/ironPriceData.json"
import laundryPriceData from "../../assets/json/laundryPriceData.json"

export const Prices = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"prices"} ref={ref}>
    <h2>Prijzen</h2>
    <p>De betaling kan gedaan worden met een tikkie.</p>
    <h3>Wassen</h3>
    {laundryPriceData.map((priceDataSet, index) => <PriceTable priceDataSet={priceDataSet.priceDataSet} key={index} />)}
    <h3>Strijken</h3>
    {ironPriceData.map((priceDataSet, index) => <PriceTable category={priceDataSet.category} priceDataSet={priceDataSet.priceDataSet} key={index} />)}
  </div>
));
