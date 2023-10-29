import React, {RefObject} from 'react';
import {Service} from '../molecules/Service';
import {IconType} from "../atoms/Icon";
import {Button} from "../atoms/Button";

type ServicesProps = {
  refs: ServiceRefs,
  serviceOnClick: (ref: RefObject<HTMLElement>) => void
}

type ServiceRefs = {
  washingRef: RefObject<HTMLElement>,
  ironingRef: RefObject<HTMLElement>,
  pricesRef: RefObject<HTMLElement>,
  contactRef: RefObject<HTMLElement>
}

function createServices({washingRef, ironingRef, pricesRef, contactRef}: ServiceRefs) {
  return [{
    iconType: IconType.Laundry,
    title: 'Wassen',
    text: 'Laat je was zorgeloos aan ons over voor een frisse en schone garderobe.',
    buttonLabel: 'Wassen',
    ref: washingRef
  }, {
    iconType: IconType.Iron,
    title: 'Strijken',
    text: 'Ontdek hoe gemakkelijk het is om je strijkwerk door Iron Girl te laten doen.',
    buttonLabel: 'Strijken',
    ref: ironingRef
  }, {
    iconType: IconType.WhatsApp,
    title: 'Contact',
    text: 'Neem contact op, vertel wat wij voor je kunnen doen en maak een afspraak',
    buttonLabel: 'Contact',
    ref: contactRef
  }, {
    iconType: IconType.Price,
    title: 'Prijzen',
    text: 'Wij verzorgen het strijken van vele soorten producten, van kleding tot linnengoed, tegen een betaalbare prijs.',
    buttonLabel: 'Prijsoverzicht',
    ref: pricesRef
  }]
}

export const Services = ({refs, serviceOnClick}: ServicesProps) => (
  <>
    <div className={"services"}>
      {createServices(refs).map((service, key) => <Service iconType={service.iconType} title={service.title} text={service.text}
                                        buttonLabel={service.buttonLabel} onClick={() => serviceOnClick(service.ref)} key={key}/>)}
    </div>
    <div className={"service-buttons"}>
      {createServices(refs).map((service, key) =>
        <Button label={service.buttonLabel} onClick={() => serviceOnClick(service.ref)} key={key} />)}
    </div>
  </>
);
