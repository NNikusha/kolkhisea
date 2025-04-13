import React from 'react';

interface BackGroundLine5Props {
  className?: string;
}

const BackGroundLine5: React.FC<BackGroundLine5Props> = ({ className }) => {
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
        d="M0 326.885C83.452 246.637 326.409 221.569 558.354 283.322C790.299 345.075 923.134 179.382 1022.93 90.7268C1251.78 -112.569 1551.66 65.2163 1708.62 302.433C1823.13 475.5 2266.97 344.462 2260.95 283.322"
        stroke="url(#paint0_linear_904_2033)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_904_2033"
          x1="0"
          y1="1.93359"
          x2="128.486"
          y2="753.271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2D0B3" />
          <stop offset="1" stopColor="#8B6140" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackGroundLine5;