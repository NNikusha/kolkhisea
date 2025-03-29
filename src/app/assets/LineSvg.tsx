import React from 'react'

const LineSvg = () => {
  return (
    <>
        <svg className='hidden lg:block w-[150px] xl:w-[424px]'  height="5" viewBox="0 0 424 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="424" y2="0.5" stroke="#C2C2C2"/>
        </svg>
        <svg className="block lg:hidden"  width="89" height="1" viewBox="0 0 89 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.5" x1="0.5" y1="0.5" x2="88.5" y2="0.500008" stroke="#C2C2C2"/>
        </svg>
    </>
  )
}

export default LineSvg