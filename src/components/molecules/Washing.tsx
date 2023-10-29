import React, {ForwardedRef, forwardRef} from "react";

export const Washing = forwardRef((props, washingRef: ForwardedRef<HTMLDivElement>) => (
  <div className={"about-us"} id={"about-us"} ref={washingRef}>
  <h3>Wassen</h3>
  <ul>
    <li>Wasgoed ontvangen we graag in een zak, eventueel ook in een mand</li>
    <li>Wit en kleur aparte was</li>
    <li>30 graden</li>
    <li>Drogen</li>
    <li>Vouwen</li>
  </ul>
  </div>
));
