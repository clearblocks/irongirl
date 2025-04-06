import React, {ForwardedRef, forwardRef} from 'react';
import {GreenWhatsAppIcon} from "../atoms/Icon";
import IronTowelsBasket from "../../assets/img/iron-towels-basket.jpg";
import {CallToAction} from "./CallToAction";

export const CallToActionWhatsApp = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <CallToAction imgSrc={IronTowelsBasket} imgAlt={"strijkijzer met handdoeken en mand"} ref={ref} className={'whatsapp-cta'}>
      <h2>Maak een afspraak via WhatsApp</h2>
      <a href={"whatsapp://send?phone=+31633401173"}><h2 className="click">Klik hier</h2><GreenWhatsAppIcon /></a>
  </CallToAction>
));
