import React from 'react';
import LogoSrc from '../../assets/img/irongirl_logo_white.png'
import {LanguageSelect} from "../molecules/LanguageSelect";

export const Header = () => (
  <header><div><h1>Iron Girl</h1></div><div><img src={LogoSrc} alt={"irongirl logo"}/></div>
    <LanguageSelect /></header>
);
