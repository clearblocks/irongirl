import React from 'react';
import LogoSrc from '../../assets/img/irongirl_logo_white.png'
import {LanguageSelect} from "../molecules/LanguageSelect";

export const Header = () => (
  <header>
      <LanguageSelect />
      <div><img src={LogoSrc} alt={"irongirl logo"}/></div>
  </header>
);
