import React from 'react';
import PinkCloud from "../../assets/img/pink-cloud-wide.jpeg"
import {useLanguage} from "../../contexts/LanguageContext";

export const Hero = () => {

  const { translate } = useLanguage();
  const lines = translate<string[]>('hero.lines');
  return (
    <div className={"hero"}>
      <img src={PinkCloud} alt={"Pink Cloud"}/>
      <div>
        <span className={"span-large"}>{translate('hero.title')}</span><br/><br/>
        <span>{lines[0]}</span><br/>
        <span>{lines[1]}</span><br/><br/>
      </div>
    </div>
  )
}
