import React, {useState} from 'react';
import {FormInput} from "../atoms/FormInput";
import {EmailIcon} from "../atoms/Icon";
import {FormText} from "../atoms/FormText";
import {Button} from "../atoms/Button";
import axios from 'axios';
import {Error, Notice} from "../atoms/Messages";

export const ContactForm = () => {

  const [name, setName] = useState('')
  const [nameValid, setNameValid] = useState(true)
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [phone, setPhone] = useState('')
  const [phoneValid, setPhoneValid] = useState(true)
  const [message, setMessage] = useState('')
  const [messageValid, setMessageValid] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = () => {
    if (validate()) {
      axios.post('mail.php', {
        name,
        email,
        phone,
        message
      }, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then((response) => {
          setSuccess(true);
          setError(false);
        }).catch((error) => {
        setSuccess(false);
        setError(true);
      })
    }
  }

  const validate = () => {
    const results = [{value: name, setValid: setNameValid},
      {value: email, setValid: setEmailValid},
      {value: phone, setValid: setPhoneValid},
      {value: message, setValid: setMessageValid}]
      .map(({value, setValid}) => validateField(value, setValid))

    return !results.includes(false)
  }

  const validateField = (value: string, setValid: (set: boolean) => void) => {
    let valid = true
    if (value.trim() === "") {
      valid = false
    }
    setValid(valid)
    return valid
  }

  const onChange = (value: string, setter: (value: string) => void, setValid: (set: boolean) => void) => {
    setter(value)
    validateField(value, setValid)
  }

  return (
    <div className={"contact-form"}>
      <div className={"contact-header"}><div><EmailIcon /></div><h2>Stuur een bericht</h2></div>
      <FormInput name={'name'} label={'Naam'} value={name} onChange={(value) => {onChange(value, setName, setNameValid)}} valid={nameValid}/>
      <FormInput name={'email'} label={'E-mailadres'} value={email} onChange={(value) => {onChange(value, setEmail, setEmailValid)}} valid={emailValid}/>
      <FormInput name={'phone'} label={'Telefoon'} value={phone} onChange={(value) => {onChange(value, setPhone, setPhoneValid)}} valid={phoneValid}/>
      <FormText name={'text'} label={'Bericht'} value={message} onChange={(value) => {onChange(value, setMessage, setMessageValid)}} valid={messageValid}/>
      {success && <Notice message={"We hebben je bericht ontvangen."} />}
      {error && <Error message={"Er is iets fout gegaan. Probeer het later nog eens."} />}
      <Button label={"Versturen"} onClick={onSubmit}/>
    </div>
  )
};
