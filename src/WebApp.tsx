import React, {createRef, RefObject, useState} from 'react'
import {Hero} from "./components/organisms/Hero";
import {Services} from "./components/organisms/Services";
import {SocialProof} from "./components/organisms/SocialProof";
import {CallToActionPhone} from "./components/organisms/CallToActionPhone";
import {AboutUs} from "./components/organisms/AboutUs";
import {CallToActionWhatsApp} from "./components/organisms/CallToActionWhatsApp";
import {Contact} from "./components/organisms/Contact";
import TwoMachines from "./assets/img/two-machines.jpg";
import {Pricing} from "./components/organisms/Pricing";
import TableBasket from "./assets/img/table-basket.jpg";
import {ImageDiv} from "./components/molecules/ImageDiv";

export function WebApp() {
    const refs = {
        washingRef: createRef<HTMLDivElement>(),
        ironingRef: createRef<HTMLDivElement>(),
        pricesRef: createRef<HTMLDivElement>(),
        contactRef: createRef<HTMLDivElement>()
    }

    const serviceOnClick = (ref: RefObject<HTMLElement>) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return <>
        <Hero/>
        <Services refs={refs} serviceOnClick={serviceOnClick}/>
        <SocialProof/>
        <CallToActionWhatsApp ref={refs.contactRef}/>
        <AboutUs washingRef={refs.washingRef} ironingRef={refs.ironingRef}/>
        <CallToActionPhone/>
        <Contact/>
        <ImageDiv src={TwoMachines} alt={"washing machine and dryer"} />
        <Pricing ref={refs.pricesRef}/>
        <ImageDiv src={TableBasket} alt={"washing table"} />
    </>
}