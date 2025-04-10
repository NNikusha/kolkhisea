import React from 'react';

interface BackGroundLine2Props {
  className?: string;
}

const BackGroundLine2: React.FC<BackGroundLine2Props> = ({ className }) => {
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
        d="M-41 455.695C45.2568 343.451 405.259 307.149 645 393.523C884.741 479.898 1027.35 250.436 1130.5 126.433C1367.04 -157.92 1562.81 89.6946 1725.04 421.493C1843.4 663.564 2302.16 480.28 2295.94 394.762"
        stroke="url(#paint0_linear_340_1541)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_340_1541"
          x1="-41"
          y1="2"
          x2="195.902"
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

export default BackGroundLine2;