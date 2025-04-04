import React from 'react'


interface ArrowDownSmallProps {
  fill?: string;
}

const ArrowDownSmall: React.FC<ArrowDownSmallProps> = ({ fill = 'white' }) => {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.00004 6.00004C4.74404 6.00004 4.48801 5.90207 4.29301 5.70707L0.293006 1.70707C-0.0979941 1.31607 -0.0979941 0.684006 0.293006 0.293006C0.684006 -0.0979941 1.31607 -0.0979941 1.70707 0.293006L5.00004 3.58597L8.29301 0.293006C8.68401 -0.0979941 9.31607 -0.0979941 9.70707 0.293006C10.0981 0.684006 10.0981 1.31607 9.70707 1.70707L5.70707 5.70707C5.51207 5.90207 5.25604 6.00004 5.00004 6.00004Z" fill={fill}/>
</svg>
  )
}

export default ArrowDownSmall
