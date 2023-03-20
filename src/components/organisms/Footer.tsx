import React from 'react';
import {GoogleMapsLink} from "../atoms/GoogleMapsLink";

export const Footer = () => (
  <footer>
    <div className={"footer-container"}><span>&copy;	Copyright 2023 irongirl.nl</span><span>Paddenstoelenlaan 15, 3451 PZ Vleuten</span><GoogleMapsLink /></div>
  </footer>
);
