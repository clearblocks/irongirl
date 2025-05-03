import React, {ForwardedRef, forwardRef} from "react";
import {useLanguage} from "../../contexts/LanguageContext";

export const Washing = forwardRef((props, washingRef: ForwardedRef<HTMLDivElement>) => {
  const {translate} = useLanguage();
  const listItems = translate<string[]>('laundry.list-items');
  return (
    <div className={"about-us"} id={"about-us"} ref={washingRef}>
      <h3>{translate('general.laundry')}</h3>
      <ul>
        {listItems.map((li, index) => <li key={index}>{li}</li>)}
      </ul>
    </div>
  )
});
