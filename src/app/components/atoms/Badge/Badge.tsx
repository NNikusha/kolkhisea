import React from 'react';

const Badge = ({ text }:any) => (
  <div className="px-4 py-2 rounded-full font-medium text-sm w-fit text-[#285260] bg-[#285260]/5">
    {text}
  </div>
);

export default Badge;