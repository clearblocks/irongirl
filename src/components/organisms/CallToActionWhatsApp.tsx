import React, {ForwardedRef, forwardRef} from 'react';
import {GreenWhatsAppIcon} from "../atoms/Icon";
import IronTowelsBasket from "../../assets/img/iron-towels-basket.jpg";
import {CallToAction} from "./CallToAction";
import { useLanguage } from '../../contexts/LanguageContext';

export const CallToActionWhatsApp = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const {translate} = useLanguage();
  return (
    <CallToAction imgSrc={IronTowelsBasket} imgAlt={"iron with towel and basket"} ref={ref} className={'whatsapp-cta'}>
      <h2>{translate('cta-whatsapp.title')}</h2>
      <a href={"whatsapp://send?phone=+31633401173"}><h2 className="click">{translate('cta-whatsapp.click')}</h2><GreenWhatsAppIcon/></a>
    </CallToAction>
  )
});
