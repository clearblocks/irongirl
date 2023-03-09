import React, {ForwardedRef, forwardRef} from 'react';
import {PriceTable} from "../molecules/PriceTable";
import priceData from "../../assets/json/priceData.json"

export const Prices = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"prices"} ref={ref}>
    {priceData.map((priceDataSet, index) => <PriceTable category={priceDataSet.category} priceDataSet={priceDataSet.priceDataSet} key={index} />)}
  </div>
));
