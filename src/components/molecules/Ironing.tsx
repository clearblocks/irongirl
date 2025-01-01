import React, {ForwardedRef, forwardRef} from "react";

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

