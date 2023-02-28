import React from 'react';
import './App.scss';
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";
import {Hero} from "./components/organisms/Hero";
import {Services} from "./components/organisms/Services";
import {SocialProof} from "./components/organisms/SocialProof";
import {CallToAction} from "./components/organisms/CallToAction";
import {Contact} from "./components/organisms/Contact";
import {AboutUs} from "./components/organisms/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <SocialProof />
      <CallToAction />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
