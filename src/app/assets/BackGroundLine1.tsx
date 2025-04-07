import React from 'react';

interface BackGroundLine1Props {
  className?: string;
}

const BackGroundLine1: React.FC<BackGroundLine1Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1920"
      height="409"
      viewBox="0 0 1920 409"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M-109.612 114.888C-10.6992 192.931 272.578 211.631 541.088 143.821C809.598 76.0106 967.896 238.184 1086.02 324.203C1356.89 521.456 1701.83 335.863 1879.14 94.5969C2008.5 -81.4243 2527.91 37.9593 2522.28 99.2416"
        stroke="#285260"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BackGroundLine1;