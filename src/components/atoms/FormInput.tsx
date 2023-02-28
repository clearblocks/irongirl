import React from 'react';

type FormInputProps = {
  name: string,
  label: string,
  value: string,
  onChange: (value: string) => void
}

export const FormInput = ({name, label, value, onChange}: FormInputProps) => (
  <div className={"form-input"}>
    <label htmlFor={name} >{label}</label>
    <input className={'form-input'} name={name} id={name} type={"text"} value={value} onChange={(e: { target: HTMLInputElement }) => {onChange(e.target.value)}} />
  </div>
)
