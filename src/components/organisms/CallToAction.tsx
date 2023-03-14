import React from 'react';
import {PhoneButton} from "../atoms/Button";

export const CallToAction = () => (
  <div className={"cta"}>
    <div className={"action"}>
      <h2>Maak direct een afspraak</h2>
      <PhoneButton />
    </div>
  </div>
);
