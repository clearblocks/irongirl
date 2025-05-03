import React, {ForwardedRef, forwardRef} from 'react';
import {PriceTable} from "../molecules/PriceTable";
import ironPriceData from "../../assets/json/ironPriceData.json"
import laundryPriceData from "../../assets/json/laundryPriceData.json"
import { useLanguage } from '../../contexts/LanguageContext';

export const Pricing = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const {translate} = useLanguage();
  return (
    <div className={"prices"} ref={ref}>
      <h2>{translate('general.pricing')}</h2>
      <p>{translate('pricing.payment')}</p>
      <h3>{translate('general.laundry')}</h3>
      {laundryPriceData.map((priceDataSet, index) => <PriceTable priceDataSet={priceDataSet.priceDataSet} key={index} />)}
      <h3>{translate('general.ironing')}</h3>
      {ironPriceData.map((priceDataSet, index) => <PriceTable category={priceDataSet.category} priceDataSet={priceDataSet.priceDataSet} key={index} />)}
    </div>
  )
});
