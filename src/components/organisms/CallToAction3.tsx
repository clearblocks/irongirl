import React, {ForwardedRef, forwardRef} from 'react';
import {GreenWhatsAppIcon} from "../atoms/Icon";
import IronTowelsBasket from "../../assets/img/iron-towels-basket.jpg";
import TwoMachines from "../../assets/img/two-machines.jpg";
import TableBasket from "../../assets/img/table-basket.jpg";
export const CallToAction3 = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"cta2"} ref={ref}>
    <img src={IronTowelsBasket} alt={"strijkijzer met handdoeken en mand"} className={"footer-image"}/>
    <div className={"action whatsapp-action"}>
      <div>
        <h2>Maak een afspraak via WhatsApp</h2>
        <h2>Klik hier</h2>
        <a href={"whatsapp://send?phone=+31633401173"}><GreenWhatsAppIcon /></a>
      </div>
    </div>
  </div>
));
