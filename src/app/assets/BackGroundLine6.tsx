import React from 'react';

interface BackGroundLine6Props {
  className?: string;
}

const BackGroundLine6: React.FC<BackGroundLine6Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1920"
      height="544"
      viewBox="0 0 1920 544"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M-47 455.695C39.2568 343.451 399.259 307.149 639 393.523C878.741 479.898 1021.35 250.436 1124.5 126.433C1361.04 -157.92 1556.81 89.6946 1719.04 421.493C1837.4 663.564 2296.16 480.28 2289.94 394.762"
        stroke="url(#paint0_linear_904_2030)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_904_2030"
          x1="-47"
          y1="2"
          x2="189.902"
          y2="1027.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2D0B3" />
          <stop offset="1" stopColor="#8B6140" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackGroundLine6;