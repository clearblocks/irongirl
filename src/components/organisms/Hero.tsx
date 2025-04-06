import React from 'react';
import PinkCloud from "../../assets/img/pink-cloud-wide.jpeg"

export const Hero = () => (
  <div className={"hero"}>
      <img src={PinkCloud} />
    <div>
      <span className={"span-large"}>Was- en Strijkservice Vleuten - De Meern</span><br /><br />
      <span>Persoonlijke service</span><br />
      <span>Snel, voordelig en zorgvuldig gewassen en gestreken</span><br /><br />
      <span>Telefoon of WhatsApp:</span><br />
      <span>06-33401173</span>
    </div>
  </div>
);
