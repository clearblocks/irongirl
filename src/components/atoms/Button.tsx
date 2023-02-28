import React from 'react';

type ButtonProps = {
  label: string,
  onClick?: () => void
}

export const Button = ({label, onClick = () => {}}: ButtonProps) => (
  <input className={'button'} type={"button"} value={label} onClick={() => onClick()} />
);
