import Image from 'next/image'
import React from 'react'

interface ChangeLangProp{
    lang:string,
    image:string
}

export default function ChangeLangHeader({lang,image}:ChangeLangProp) {
  return (
   <div className="flex  gap-[15px]">
             <h3>{lang}</h3>
             <Image alt="ArrowDown" src={image} width={10} height={6} />
           </div>
  )
}
