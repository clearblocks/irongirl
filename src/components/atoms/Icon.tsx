import React from 'react';
import WhatsAppIconSrc from "../../assets/img/whatsapp-icon-transparant.png";
import IronIconSrc from "../../assets/img/iron-icon.png";
import PriceIconSrc from "../../assets/img/price-icon.png";
import MailIconSrc from "../../assets/img/mail-icon.png";
import UnderConstructionSrc from "../../assets/img/under-construction-icon.png";

export enum IconType {
  Iron,
  Price,
  WhatsApp,
  Email,
  Construction
}

type IconData = {
  src: string,
  alt: string,
  className: string
}

let iconData = (iconType: IconType): IconData => {
  switch (iconType) {
    case IconType.Iron:
      return {
        src: IronIconSrc,
        alt: 'strijk icoon',
        className: 'iron-icon'
      }
    case IconType.Price:
      return {
        src: PriceIconSrc,
        alt: 'prijskaartje icoon',
        className: 'price-icon'
      }
    case IconType.WhatsApp:
      return {
        src: WhatsAppIconSrc,
        alt: 'whastapp icoon',
        className: 'whatsapp-icon'
      }
    case IconType.Email:
      return {
        src: MailIconSrc,
        alt: 'mail icoon',
        className: 'mail-icon'
      }
    case IconType.Construction:
      return {
        src: UnderConstructionSrc,
        alt: 'onderhoud',
        className: 'construction-icon'
      }
  }
}

type IconProps = {
  type: IconType
}

export const Icon = ({type}: IconProps) => {
  let data = iconData(type)
  return  <img src={data.src} alt={data.alt} className={`icon ${data.className}`} />;
}

export const WhatsAppIcon = () => <Icon type={IconType.WhatsApp} />
export const PriceIcon = () => <Icon type={IconType.Price} />
export const IronIcon = () => <Icon type={IconType.Iron} />
export const EmailIcon = () => <Icon type={IconType.Email} />
export const ConstructionIcon = () => <Icon type={IconType.Construction} />
