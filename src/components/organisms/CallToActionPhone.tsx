import React from 'react';
import {PhoneButton} from "../atoms/Button";
import IronSteamDark from "../../assets/img/iron-steam-dark-wide.jpg"
import {CallToAction} from "./CallToAction";

export const CallToActionPhone = () => (
  <CallToAction imgSrc={IronSteamDark} imgAlt={""}>
    <h2>Maak direct een afspraak</h2>
    <PhoneButton/>
  </CallToAction>
);
