import React, {ForwardedRef, forwardRef} from 'react';
import {PhoneButton} from "../atoms/Button";
import SteamerTowels from "../../assets/img/steamer-towels.jpg"
export const CallToAction2 = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"cta2"} ref={ref}>
    <img src={SteamerTowels} alt={"stomer met handdoeken"} />
    <div className={"action"}>
      <div>
        <h2>Bel om een afspraak te maken</h2>
        <PhoneButton />
      </div>
    </div>
  </div>
));
