import React from 'react'

interface ImageDivProps {
  src: string
  alt: string
}

export function ImageDiv({src, alt}: ImageDivProps) {
  return <div className={"image-div"}>
    <img src={src} alt={alt}/>
  </div>
}