import React, {ForwardedRef, forwardRef} from 'react';
import womanIroning from '../../assets/img/woman-steam-shirt.jpg'
import shirts from '../../assets/img/shirts.jpeg'
import ironingBoard from '../../assets/img/ironing-board-pink.jpg'
import ironOnTable from '../../assets/img/iron-on-table.jpg'

export const AboutUs = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"aboutus"} id={"aboutus"} ref={ref}>
    <div className={"aboutus-info"}>
      <h2>Iron Girl Strijkservice</h2>
      <p>
        Heb je het te druk? Is het strijken je te zwaar of heb je simpelweg te veel strijkgoed? Ik neem het werk graag van je over.<br />
        Ik verzorg al jouw strijkgoed. Van kleding tot bedden- en linnengoed. Zo maak voor jou het leven makkelijker, en hou<br /> jij meer tijd over voor leuke dingen.
        Je kunt altijd contact opnemen om je strijkgoed langs te brengen bij mij in Vleuten.
      </p>
    </div>
    <div className={"aboutus-workway"}>
      <h2>Mijn werkwijze</h2>
      <div>
        <img src={ironingBoard} alt={"strijkplank"}/>
        <ul>
          <li>Maak een afspraak: laat weten hoeveel strijkgoed je hebt</li>
          <li>Lever je strijkgoed af bij mijn locatie</li>
          <li>Laat weten welke producten je opgehangen en gevouwen terug wilt hebben</li>
          <li>Ik vertel je wanneer je het strijkgoed weer kunt ophalen</li>
          <li>Ik zorg ervoor dat alles perfect netjes gestreken is</li>
          <li>Bij ophalen is alles naar wens netjes gevouwen en opgehangen</li>
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
