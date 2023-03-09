import React, {ForwardedRef, forwardRef} from 'react';
import {ContactForm} from "../molecules/ContactForm";
import {ContactWhatsApp} from "../molecules/ContactWhatsApp";

export const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"contact"} ref={ref}>
    <ContactWhatsApp />
    <ContactForm />
  </div>
));
