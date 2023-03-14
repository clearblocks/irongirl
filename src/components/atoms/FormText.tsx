import React from "react";
import classNames from "classnames";

type FormTextProps = {
  name: string,
  label: string,
  value: string,
  onChange: (value: string) => void
  valid: boolean
}

export const FormText = ({name, label, value, onChange, valid}: FormTextProps) => (
  <div className={"form-text"}>
    <label htmlFor={name} >{label}</label>
    <textarea className={classNames({'error': !valid})} name={name} value={value} onChange={(e: { target: HTMLTextAreaElement }) => {onChange(e.target.value)}} />
  </div>
)
