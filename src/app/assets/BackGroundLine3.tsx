import React from 'react';

interface BackGroundLine3Props {
  className?: string;
}

const BackGroundLine3: React.FC<BackGroundLine3Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1920"
      height="391"
      viewBox="0 0 1920 391"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M0 63.7034C83.452 143.951 326.409 169.019 558.354 107.267C790.299 45.5139 923.134 211.207 1022.93 299.862C1251.78 503.158 1551.66 325.372 1708.62 88.1554C1823.13 -84.9114 2266.97 46.1265 2260.95 107.267"
        stroke="url(#paint0_linear_340_1542)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_340_1542"
          x1="0"
          y1="388.655"
          x2="128.486"
          y2="-362.682"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2D0B3" />
          <stop offset="1" stopColor="#8B6140" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackGroundLine3;