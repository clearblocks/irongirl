import React from 'react';
import IronTowelsBasket from "../../assets/img/iron-towels-basket.jpg";

export const Footer = () => (
  <footer>
    <img src={IronTowelsBasket} alt={"strijkijzer met handdoeken en mand"} className={"footer-image"}/>
    <div className={"footer-container"}>&copy;	Copyright 2023 irongirl.nl</div>
  </footer>
);
