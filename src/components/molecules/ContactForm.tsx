import React, {useState} from 'react';
import {FormInput} from "../atoms/FormInput";
import {EmailIcon} from "../atoms/Icon";
import {FormText} from "../atoms/FormText";
import {Button} from "../atoms/Button";
import axios from 'axios';

export const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = () => {
    console.log(`submit: ${[name, email, phone, message]}`)
    axios.post('mail.php', {name, email, phone, message}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then((response) => {
        console.log("mail success", response)
      }).catch((error) => {
        console.error("error", error)
      })
  }

  return (
    <div className={"contact-form"}>
      <div className={"contact-header"}><EmailIcon /><h2>Stuur een bericht</h2></div>
      <FormInput name={'name'} label={'Naam'} value={name} onChange={(value) => {setName(value)}}/>
      <FormInput name={'email'} label={'E-mailadres'} value={email} onChange={(value) => {setEmail(value)}}/>
      <FormInput name={'phone'} label={'Telefoon'} value={phone} onChange={(value) => {setPhone(value)}}/>
      <FormText name={'text'} label={'Bericht'} value={message} onChange={(value) => {setMessage(value)}}/>
      <Button label={"Versturen"} onClick={onSubmit}/>
    </div>
  )
};
