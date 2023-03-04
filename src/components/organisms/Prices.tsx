import React from 'react';
import {PriceTable} from "../molecules/PriceTable";
import priceData from "../../assets/json/priceData.json"

export const Prices = () => (
  <div className={"prices"}>
    {priceData.map((priceDataSet, index) => <PriceTable category={priceDataSet.category} priceDataSet={priceDataSet.priceDataSet} key={index} />)}
  </div>
);
