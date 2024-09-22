import React, {ForwardedRef, forwardRef} from 'react';
import womanIroning from '../../assets/img/woman-steam-shirt.jpg'
import shirts from '../../assets/img/shirts.jpeg'
import ironingBoard from '../../assets/img/ironing-board-pink.jpg'
import bearWash from '../../assets/img/beer-was.jpg'
import washingBackground from '../../assets/img/washing-background.jpeg'
import washingMachineInside from '../../assets/img/washing-machine-inside.jpg'
import {Washing} from "../molecules/Washing";
import {Ironing} from "../molecules/Ironing";

type AboutUsProps = {
  washingRef: ForwardedRef<HTMLDivElement>,
  ironingRef: ForwardedRef<HTMLDivElement>
}

export const AboutUs = ({washingRef, ironingRef}: AboutUsProps) => (
  <div className={"about-us"} id={"about-us"}>
    <div className={"about-service"}>
      <div className={"about-us-info"}>
        <h2>Iron Girl Was- en Strijkservice</h2>
        <p>Heb je het te druk en geen tijd om te wassen of strijken?</p><p>Wij nemen het graag van je over.</p>
        <p>Is het strijken je te zwaar of heb je te veel strijkgoed?</p><p>Wij verzorgen al jouw strijkgoed, van kleding
        tot bedden- en linnengoed.</p>
        <p>Ook als je het wassen liever aan ons wilt overlaten kun je op ons rekenen. Helemaal makkelijk is het
          natuurlijk om ons het wassen en strijken beide te laten doen.</p>
        <p>
          Zo maak voor jou het leven makkelijker, en hou jij meer tijd over voor leuke dingen.
          Je kunt altijd contact opnemen om je was- en strijkgoed langs te brengen bij ons in Vleuten.
        </p>
        <div className={"about-us-info-images"}>
          <img src={ironingBoard} alt={"strijkplank"} />
          <img src={bearWash} alt={"strijkplank"} />
        </div>
      </div>
      <div className={"about-us-info"}>
        <h2>Onze werkwijze</h2>
        <ul>
          <li>Maak een afspraak: laat weten hoeveel was- of strijkgoed je hebt</li>
          <li>Lever je was- en strijkgoed af bij onze locatie</li>
          <li>Wij vertellen je wanneer je het weer kunt ophalen</li>
          <li>Bij ophalen is alles naar wens netjes gevouwen en opgehangen</li>
          <li>Er is momenteel geen mogelijkheid voor een ophaal- en bezorgservice</li>
        </ul>
        <Washing ref={washingRef} />
        <Ironing ref={ironingRef} />
      </div>
    </div>
    <div className={"about-us-images"}>
      <div>
        <img src={womanIroning} alt={"vrouw aan het strijken"}/>
        <img src={shirts} alt={"gestreken overhemden"}/>
      </div>
      <img src={washingBackground} alt={"wachmachine en droger"}/>
    </div>
  </div>
);
