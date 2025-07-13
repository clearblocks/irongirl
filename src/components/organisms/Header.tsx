import React from 'react';
import LogoSrc from '../../assets/img/new-logo-transparent.png'
import {LanguageSelect} from "../molecules/LanguageSelect";

export const Header = () => (
  <header>
      <LanguageSelect />
      <div><img src={LogoSrc} alt={"irongirl logo"}/></div>
  </header>
);
