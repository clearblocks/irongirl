import React, {useState} from 'react';
import {FormInput} from "../atoms/FormInput";
import {EmailIcon} from "../atoms/Icon";
import {FormText} from "../atoms/FormText";
import {Button} from "../atoms/Button";
import axios from 'axios';
import {Error, Notice} from "../atoms/Messages";
import {GoogleMapsLink} from "../atoms/GoogleMapsLink";
import {useLanguage} from "../../contexts/LanguageContext";

export const ContactForm = () => {
  const {translate} = useLanguage();
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
      <h3>{translate('contact-form.address')}</h3>
      <div className={"address-block"}>
        <div><GoogleMapsLink /></div>
        <div className={"address"}>
          <p>Paddenstoelenlaan 15<br />3451 PZ Vleuten</p>
        </div>

      </div>
      <div className={"contact-header"}><div><EmailIcon /></div><h2>{translate('contact-form.title')}</h2></div>
      <FormInput name={'name'} label={translate('contact-form.name')} value={name} onChange={(value) => {onChange(value, setName, setNameValid)}} valid={nameValid}/>
      <FormInput name={'email'} label={translate('contact-form.email')} value={email} onChange={(value) => {onChange(value, setEmail, setEmailValid)}} valid={emailValid}/>
      <FormInput name={'phone'} label={translate('contact-form.phone')} value={phone} onChange={(value) => {onChange(value, setPhone, setPhoneValid)}} valid={phoneValid}/>
      <FormText name={'text'} label={translate('contact-form.message')} value={message} onChange={(value) => {onChange(value, setMessage, setMessageValid)}} valid={messageValid}/>
      {success && <Notice message={translate('contact-form.success')} />}
      {error && <Error message={translate('contact-form.error')} />}
      <Button label={translate<string>('contact-form.send')} onClick={onSubmit}/>
    </div>
  )
};
