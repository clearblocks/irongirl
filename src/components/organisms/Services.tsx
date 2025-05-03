import React, {RefObject} from 'react';
import {Service} from '../molecules/Service';
import {IconType} from "../atoms/Icon";
import {Button} from "../atoms/Button";
import {useLanguage} from "../../contexts/LanguageContext";

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

function createServices(translate: (lang: string) => string, {washingRef, ironingRef, pricesRef, contactRef}: ServiceRefs) {
  return [{
    iconType: IconType.Laundry,
    title: translate('general.laundry'),
    text: translate('services.laundry'),
    buttonLabel: translate('general.laundry'),
    ref: washingRef
  }, {
    iconType: IconType.Iron,
    title: translate('general.ironing'),
    text:  translate('services.ironing'),
    buttonLabel:  translate('general.ironing'),
    ref: ironingRef
  }, {
    iconType: IconType.WhatsApp,
    title: translate('general.contact'),
    text: translate('services.contact'),
    buttonLabel: translate('general.contact'),
    ref: contactRef
  }, {
    iconType: IconType.Price,
    title: translate('general.pricing'),
    text: translate('services.pricing'),
    buttonLabel: translate('services.pricing-button'),
    ref: pricesRef
  }]
}

export const Services = ({refs, serviceOnClick}: ServicesProps) => {
  const {translate} = useLanguage();
  return (
    <>
      <div className={"services"}>
        {createServices(translate, refs).map((service, key) => <Service iconType={service.iconType} title={service.title}
                                                             text={service.text}
                                                             buttonLabel={service.buttonLabel}
                                                             onClick={() => serviceOnClick(service.ref)} key={key}/>)}
      </div>
      <div className={"service-buttons"}>
        {createServices(translate, refs).map((service, key) =>
          <Button label={service.buttonLabel} onClick={() => serviceOnClick(service.ref)} key={key}/>)}
      </div>
    </>)
};
