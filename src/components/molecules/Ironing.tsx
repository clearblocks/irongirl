import React, {ForwardedRef, forwardRef} from "react";
import {useLanguage} from "../../contexts/LanguageContext";

export const Ironing = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const {translate} = useLanguage();
  const listItems = translate<string[]>('ironing.list-items');
  return (
    <div className={"about-us"} id={"about-us"} ref={ref}>
      <h3>{translate('general.ironing')}</h3>
      <ul>
        {listItems.map((li, index) => <li key={index}>{li}</li>)}
      </ul>
    </div>)
})

