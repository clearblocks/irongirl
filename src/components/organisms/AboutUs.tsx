import React from 'react';
import womanIroning from '../../assets/img/ironlady.jpeg'
import shirts from '../../assets/img/shirts.jpeg'

export const AboutUs = () => (
  <div className={"aboutus"} id={"aboutus"}>
    <div>
      <div>
        <h2>Iron Girl Strijkservice</h2>
        <p>Heb je het te druk? Is het strijken je te zwaar of heb je simpelweg te veel strijkgoed? Ik neem het werk graag van je over.</p>
        <p>Ik verzorg al jouw strijkgoed. Van kleding tot bedden- en linnengoed. Zo maak voor jou het leven makkelijker, en hou jij meer tijd over voor leuke dingen.</p>
        <p>Je kunt altijd contact opnemen om je strijkgoed langs te brengen bij mij in Vleuten.</p>
      </div>
      <img src={shirts} alt={"gestreken overhemden"}/>
    </div>
    <div>
      <img src={womanIroning} alt={"vrouw aan het strijken"}/>
      <div>
        <h2>Mijn werkwijze</h2>
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
  </div>
);
