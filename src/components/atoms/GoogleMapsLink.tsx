import GoogleMapsSrc from "../../assets/img/google-maps.png";
import React from "react";

const link = "https://www.google.nl/maps/place/Paddenstoelenlaan+15,+3451+PZ+Utrecht/"

export const GoogleMapsLink = () => (
  <a href={link} target={"_blank"} rel={"noreferrer"}><img className={"google-maps-icon"} src={GoogleMapsSrc} alt={"Google Maps"}></img></a>
)
