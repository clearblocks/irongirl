import React from 'react';
import {PhoneButton} from "../atoms/Button";
import IronSteamDark from "../../assets/img/iron-steam-dark-wide.jpg"
import {CallToAction} from "./CallToAction";
import { useLanguage } from '../../contexts/LanguageContext';

export const CallToActionPhone = () => {
  const {translate} = useLanguage();
  return (
    <CallToAction imgSrc={IronSteamDark} imgAlt={"ironing with steam"}>
      <h2>{translate('cta-phone.title')}</h2>
      <PhoneButton/>
    </CallToAction>)
};
