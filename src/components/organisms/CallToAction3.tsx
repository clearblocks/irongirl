import React from 'react';
import {GreenWhatsAppIcon} from "../atoms/Icon";
import IronTowelsBasket from "../../assets/img/iron-towels-basket.jpg";
export const CallToAction3 = () => (
  <div className={"cta2"}>
    <img src={IronTowelsBasket} alt={"strijkijzer met handdoeken en mand"} className={"footer-image"}/>
    <div className={"action whatsapp-action"}>
      <div>
        <h2>Maak een afspraak via WhatsApp</h2>
        <h2>Klik hier</h2>
        <a href={"whatsapp://send?phone=+31633401173"}><GreenWhatsAppIcon /></a>
      </div>
    </div>
  </div>
);
