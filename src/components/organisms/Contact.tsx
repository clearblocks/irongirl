import React, {ForwardedRef, forwardRef} from 'react';
import {ContactForm} from "../molecules/ContactForm";
import steamerShirt from '../../assets/img/steamer-pink-shirt-cropped.png'

export const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"contact"} ref={ref}>
    <img src={steamerShirt} alt={"stoom shirt"} />
    <ContactForm />
  </div>
));
