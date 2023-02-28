import React from 'react';
import {ContactForm} from "../molecules/ContactForm";
import {ContactWhatsApp} from "../molecules/ContactWhatsApp";

export const Contact = () => (
  <div className={"contact"}>
    <ContactWhatsApp />
    <ContactForm />
  </div>
);
