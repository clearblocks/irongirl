import React from 'react';
import LogoSrc from '../../assets/img/logo-pink-transparent.png'
import {LanguageSelect} from "../molecules/LanguageSelect";

export const Header = () => (
  <header>
      <LanguageSelect />
      <div><img src={LogoSrc} alt={"irongirl logo"}/></div>
  </header>
);
