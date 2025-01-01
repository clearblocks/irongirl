import React, {createRef, RefObject} from 'react'
import {Hero} from "./components/organisms/Hero";
import {Services} from "./components/organisms/Services";
import {SocialProof} from "./components/organisms/SocialProof";
import {CallToAction} from "./components/organisms/CallToAction";
import {AboutUs} from "./components/organisms/AboutUs";
import {CallToAction3} from "./components/organisms/CallToAction3";
import {Contact} from "./components/organisms/Contact";
import TwoMachines from "./assets/img/two-machines.jpg";
import {Prices} from "./components/organisms/Prices";
import TableBasket from "./assets/img/table-basket.jpg";

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
        <CallToAction/>
        <AboutUs washingRef={refs.washingRef} ironingRef={refs.ironingRef}/>
        <CallToAction3 ref={refs.contactRef}/>
        <Contact/>
        <div className={"cta2"}>
            <img src={TwoMachines} alt={"wasmachine en drover"} className={"footer-image"}/>
        </div>
        <Prices ref={refs.pricesRef}/>
        <div className={"cta2"}>
            <img src={TableBasket} alt={"wastafel"} className={"footer-image"}/>
        </div>
    </>
}