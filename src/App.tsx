import React, {createRef, RefObject} from 'react';
import './App.scss';
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";
import {Hero} from "./components/organisms/Hero";
import {Services} from "./components/organisms/Services";
import {SocialProof} from "./components/organisms/SocialProof";
import {CallToAction} from "./components/organisms/CallToAction";
import {Contact} from "./components/organisms/Contact";
import {AboutUs} from "./components/organisms/AboutUs";
import {Prices} from "./components/organisms/Prices";
import {CallToAction3} from "./components/organisms/CallToAction3";
import {Washing} from "./components/molecules/Washing";
import {Ironing} from "./components/molecules/Ironing";

function App() {
  const refs = {
    washingRef: createRef<HTMLDivElement>(),
    ironingRef: createRef<HTMLDivElement>(),
    pricesRef: createRef<HTMLDivElement>(),
    contactRef: createRef<HTMLDivElement>()
  }

  const serviceOnClick = (ref: RefObject<HTMLElement>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services refs={refs} serviceOnClick={serviceOnClick}/>
      <SocialProof />
      <CallToAction />
      <AboutUs washingRef={refs.washingRef} ironingRef={refs.ironingRef} />
      <Contact />
      <Prices ref={refs.pricesRef}/>
      <CallToAction3 ref={refs.contactRef} />
      <Footer />
    </div>
  );
}

export default App;
