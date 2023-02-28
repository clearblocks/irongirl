import React from 'react';
import {Service, ServiceProps} from '../molecules/Service';
import {IconType} from "../atoms/Icon";

const services: ServiceProps[] = [{
  iconType: IconType.Iron,
  title: 'Strijken',
  text: 'Ontdek hoe gemakkelijk het is om je strijkwerk door Iron Girl te laten doen.',
  buttonLabel: 'Mijn werkwijze',
  key: 1
}, {
  iconType: IconType.Price,
  title: 'Prijzen',
  text: 'Ik verzorg het strijken van vele soorten producten, van kleding tot linnengoed, tegen een betaalbare prijs.',
  buttonLabel: 'Prijsoverzicht',
  key: 2
}, {
  iconType: IconType.WhatsApp,
  title: 'Contact',
  text: 'Neem contact op, vertel wat ik voor je kan doen en maak een afspraak',
  buttonLabel: 'Contact',
  key: 3
}]

export const Services = () => (
  <div className={"services"}>
    {services.map(service => <Service iconType={service.iconType} title={service.title} text={service.text}
                                      buttonLabel={service.buttonLabel} key={service.key}/>)}
  </div>
);
