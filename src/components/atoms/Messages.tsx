import React from 'react'

type MessageProps = {
  message: string
}

export const Notice = ({message}: MessageProps) => (
  <div className={"message notice"}>{message}</div>
)

export const Error = ({message}: MessageProps) => (
  <div className={"message error"}>{message}</div>
)
