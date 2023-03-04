import React from 'react';
import {Button} from "../atoms/Button";
import {Icon, IconType} from "../atoms/Icon";

export type ServiceProps = {
  iconType: IconType,
  title: string,
  text: string,
  buttonLabel: string,
  key: number
}

export const Service = ({iconType, title, text, buttonLabel}: ServiceProps) => (
  <div className={"service"}>
    <div>
      <Icon type={iconType} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>

    <Button label={buttonLabel} />
  </div>
);
