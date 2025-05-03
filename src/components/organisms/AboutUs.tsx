import React, {ForwardedRef} from 'react';
import womanIroning from '../../assets/img/woman-steam-shirt.jpg'
import shirts from '../../assets/img/shirts.jpeg'
import ironingBoard from '../../assets/img/ironing-board-pink.jpg'
import bearWash from '../../assets/img/beer-was.jpg'
import washingBackground from '../../assets/img/washing-background.jpeg'
import {Washing} from "../molecules/Washing";
import {Ironing} from "../molecules/Ironing";
import {useLanguage} from "../../contexts/LanguageContext";

type AboutUsProps = {
  washingRef: ForwardedRef<HTMLDivElement>,
  ironingRef: ForwardedRef<HTMLDivElement>
}

export const AboutUs = ({washingRef, ironingRef}: AboutUsProps) => {
  const {translate} = useLanguage();
  const aboutUsParagraphs = translate<string[]>('about-us.paragraphs');
  const ourMethodListItems = translate<string[]>('our-method.list-items');
  return (
    <div className={"about-us"} id={"about-us"}>
      <div className={"about-service"}>
        <div className={"about-us-info"}>
          <h2>{translate('about-us.title')}</h2>
          {aboutUsParagraphs.map((p, index) => <p key={index}>{p}</p>)}
          <div className={"about-us-info-images"}>
            <img src={ironingBoard} alt={"ironing board"}/>
            <img src={bearWash} alt={"ironing board"}/>
          </div>
        </div>
        <div className={"about-us-info"}>
          <h2>{translate('our-method.title')}</h2>
          <ul>
            {ourMethodListItems.map((li, index) => <li key={index}>{li}</li>)}
          </ul>
          <Washing ref={washingRef}/>
          <Ironing ref={ironingRef}/>
        </div>
      </div>
      <div className={"about-us-images"}>
        <div>
          <img src={womanIroning} alt={"womain ironing"}/>
          <img src={shirts} alt={"ironed shirts"}/>
        </div>
        <img src={washingBackground} alt={"washing machine and dryer"}/>
      </div>
    </div>
  );
}
