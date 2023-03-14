import React from 'react';
import classNames from "classnames";

type FormInputProps = {
  name: string,
  label: string,
  value: string,
  onChange: (value: string) => void,
  valid: boolean
}

export const FormInput = ({name, label, value, onChange, valid}: FormInputProps) => (
  <div className={"form-input"}>
    <label htmlFor={name} >{label}</label>
    <input className={classNames('form-input', {'error': !valid})} name={name} id={name} type={"text"} value={value} onChange={(e: { target: HTMLInputElement }) => {onChange(e.target.value)}} />
  </div>
)
