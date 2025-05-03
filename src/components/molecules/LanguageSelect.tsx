import React, {useState} from 'react';
import NlSrc from '../../assets/img/nl.png'
import EnSrc from '../../assets/img/en.png'
import classNames from "classnames";
import {useLanguage} from "../../contexts/LanguageContext";


interface LanguageOption {
  code: string
  src: string
  alt: string
}

const languageOptions: {[code: string]: LanguageOption} = {
  'nl': {
    code: 'nl',
    src: NlSrc,
    alt: 'Nederlands'
  },
  'en': {
    code: 'en',
    src: EnSrc,
    alt: 'English'
  }
}

export const LanguageSelect = () => {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);

  const selectedLang = languageOptions[language]
  const unselectedLang = language === 'nl' ? languageOptions['en'] : languageOptions['nl']

  function click(lang: string) {
    if (!open) {
      setOpen(true)
    } else {
      setLanguage(lang)
      setOpen(false)
    }
  }

  return <div className={classNames("language-select", {'open': open})}>
    <img src={selectedLang.src} alt={selectedLang.alt} onClick={() => click(selectedLang.code)} />
    <img src={unselectedLang.src} alt={unselectedLang.alt} onClick={() => click(unselectedLang.code)} />
  </div>
}