import React from 'react';
import WhatsAppIconSrc from "../../assets/img/whatsapp-icon.png";
import IronIconSrc from "../../assets/img/iron-icon.png";
import PriceIconSrc from "../../assets/img/price-icon.png";

export enum IconType {
  Iron,
  Price,
  WhatsApp,
  Email
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
        src: WhatsAppIconSrc,
        alt: 'whastapp icoon',
        className: 'whatsapp-icon'
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
