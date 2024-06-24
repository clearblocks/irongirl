import React, {ForwardedRef, forwardRef} from "react";
import womanIroning from "../../assets/img/woman-steam-shirt.jpg";
import shirts from "../../assets/img/shirts.jpeg";
import washingBackground from "../../assets/img/washing-background.jpeg";
import washingMachineInside from "../../assets/img/washing-machine-inside.jpg";

export const Ironing = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={"about-us"} id={"about-us"} ref={ref}>
    <h3>Strijken</h3>
    <ul>
      <li>Het is handig als je zelf kledinghangers kunt afgeven</li>
      <li>Wij zorgen ervoor dat alles perfect netjes gestreken is</li>
      <li>Binnen 3 tot 5 dagen kun je het strijkgoed weer ophalen</li>
    </ul>
  </div>
));

