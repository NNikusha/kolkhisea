
import React from 'react';

interface RightArrowProps {
  fill?: string;
  BgFill?: string;
}

const RightArrow: React.FC<RightArrowProps> = ({ fill = '#1C1C1E', BgFill = 'white'}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill={BgFill} />
      <path
        d="M17.7069 12.7073L8.70695 21.7073C8.51195 21.9023 8.25598 22.0003 7.99998 22.0003C7.74398 22.0003 7.48801 21.9023 7.29301 21.7073C6.90201 21.3163 6.90201 20.6842 7.29301 20.2932L15.586 12.0003L7.29301 3.70731C6.90201 3.31631 6.90201 2.68425 7.29301 2.29325C7.68401 1.90225 8.31595 1.90225 8.70695 2.29325L17.7069 11.2933C18.0979 11.6842 18.0979 12.3163 17.7069 12.7073Z"
        fill={fill}
      />
    </svg>
  );
};

export default RightArrow;
