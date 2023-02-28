import {Button} from "../atoms/Button";
import React from "react";
import {WhatsAppIcon} from "../atoms/Icon";

export const ContactWhatsApp = () => (
  <div className={"contact-whatsapp"}>
    <div className={"contact-header"}><WhatsAppIcon /><h2>Maak een afspraak via telefoon of WhatsApp</h2></div>
    <Button label={"06-33401173"} onClick={() => {}} />
  </div>
);
