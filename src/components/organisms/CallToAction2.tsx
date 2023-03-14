import React from 'react';
import {PhoneButton} from "../atoms/Button";
import {WhatsAppIcon} from "../atoms/Icon";
import SteamerTowels from "../../assets/img/steamer-towels.jpg"
export const CallToAction2 = () => (
  <div className={"cta2"}>
    <img src={SteamerTowels} alt={"stomer met handdoeken"} />
    <div className={"action"}>
      <div>
        <h2>Maak een afspraak via<br /> telefoon of WhatsApp</h2>
        <a href={"whatsapp://send?phone=+31633401173"}><WhatsAppIcon /></a>
      </div>
      <PhoneButton />
    </div>
  </div>
);
