import React from 'react'

interface ModalHeadlineProp {
  firstText?: string; // Make it optional
}

export default function ModalHeadline({firstText = ""}: ModalHeadlineProp) {
  return (
    <h3 className="absolute top-[35%] left-[4%] uppercase leading-[140%] ">
      {firstText}
    </h3>
  )
}