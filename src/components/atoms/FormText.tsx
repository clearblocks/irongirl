import React from "react";

type FormTextProps = {
  name: string,
  label: string,
  value: string,
  onChange: (value: string) => void
}

export const FormText = ({name, label, value, onChange}: FormTextProps) => (
  <div className={"form-text"}>
    <label htmlFor={name} >{label}</label><br />
    <textarea name={name} value={value} onChange={(e: { target: HTMLTextAreaElement }) => {onChange(e.target.value)}} />
  </div>
)
