import React, {RefObject} from 'react';
import {Service} from '../molecules/Service';
import {IconType} from "../atoms/Icon";

type ServicesProps = {
  refs: ServiceRefs,
  serviceOnClick: (ref: RefObject<HTMLElement>) => void
}

type ServiceRefs = {
  aboutUsRef: RefObject<HTMLElement>,
  pricesRef: RefObject<HTMLElement>,
  contactRef: RefObject<HTMLElement>
}

function createServices({aboutUsRef, pricesRef, contactRef}: ServiceRefs) {
  return [{
    iconType: IconType.Iron,
    title: 'Strijken',
    text: 'Ontdek hoe gemakkelijk het is om je strijkwerk door Iron Girl te laten doen.',
    buttonLabel: 'Mijn werkwijze',
    ref: aboutUsRef
  }, {
    iconType: IconType.Price,
    title: 'Prijzen',
    text: 'Ik verzorg het strijken van vele soorten producten, van kleding tot linnengoed, tegen een betaalbare prijs.',
    buttonLabel: 'Prijsoverzicht',
    ref: pricesRef
  }, {
    iconType: IconType.WhatsApp,
    title: 'Contact',
    text: 'Neem contact op, vertel wat ik voor je kan doen en maak een afspraak',
    buttonLabel: 'Contact',
    ref: contactRef
  }]
}

export const Services = ({refs, serviceOnClick}: ServicesProps) => (
  <div className={"services"}>
    {createServices(refs).map(service => <Service iconType={service.iconType} title={service.title} text={service.text}
                                      buttonLabel={service.buttonLabel} onClick={() => serviceOnClick(service.ref)} />)}
  </div>
);
