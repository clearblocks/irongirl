import React, {ForwardedRef, forwardRef} from 'react';
import womanIroning from '../../assets/img/woman-steam-shirt.jpg'
import shirts from '../../assets/img/shirts.jpeg'
import ironingBoard from '../../assets/img/ironing-board-pink.jpg'
import ironOnTable from '../../assets/img/iron-on-table.jpg'

export const AboutUs = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"aboutus"} id={"aboutus"} ref={ref}>
    <div className={"aboutus-info"}>
      <h2>Iron Girl Strijkservice</h2>
      <p>Heb je het te druk en geen tijd om te strijken?</p><p>Wij nemen het graag van je over.</p>
      <p>Is het strijken je te zwaar of heb je te veel strijkgoed?</p><p>Wij verzorgen al jouw strijkgoed, van kleding tot bedden- en linnengoed.</p>
      <p>
        Zo maak voor jou het leven makkelijker, en hou jij meer tijd over voor leuke dingen.
        Je kunt altijd contact opnemen om je strijkgoed langs te brengen bij ons in Vleuten.
      </p>
    </div>
    <img src={ironingBoard} alt={"strijkplank"} className={"img-mobile"}/>
    <div className={"aboutus-workway"}>
      <h2>Onze werkwijze</h2>
      <div>
        <img src={ironingBoard} alt={"strijkplank"} className={"img-desktop"}/>
        <ul>
          <li>Maak een afspraak: laat weten hoeveel strijkgoed je hebt</li>
          <li>Lever je strijkgoed af bij onze locatie</li>
          <li>Wij vertellen je wanneer je het strijkgoed weer kunt ophalen</li>
          <li>Wij zorgen ervoor dat alles perfect netjes gestreken is</li>
          <li>Bij ophalen is alles naar wens netjes gevouwen en opgehangen</li>
          <li>Er is momenteel geen mogelijkheid voor een ophaal- en bezorgservice</li>
        </ul>
      </div>
    </div>
    <div className={"aboutus-images"}>
      <div>
        <img src={womanIroning} alt={"vrouw aan het strijken"}/>
        <img src={shirts} alt={"gestreken overhemden"}/>
      </div>
      <img src={ironOnTable} alt={"strijkijzer op tafel"}/>
    </div>
  </div>
));
