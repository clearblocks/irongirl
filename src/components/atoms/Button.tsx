import React from 'react';

type ButtonProps = {
  label: string|null,
  onClick?: () => void
}

export const Button = ({label, onClick = () => {}}: ButtonProps) => (
  <input className={'button'} type={"button"} value={label ?? ''} onClick={() => onClick()} />
);

export const PhoneButton = () => (
  <a className={'button phone'} href={"tel:+31633401173"} >06-33401173</a>
);
