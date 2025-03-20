import React from 'react'

interface ModalParagraphProp{
    paragraph:string
}
export default function ModalParagraph({paragraph}:ModalParagraphProp) {
  return (
    <p className="absolute top-[62%] left-[4%] text-[14px] leading-[150%] font-light w-[90%]">
                  {paragraph}
                </p>
  )
}
