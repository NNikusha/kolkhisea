import React from 'react';

interface BackGroundLine7Props {
  className?: string;
}

const BackGroundLine7: React.FC<BackGroundLine7Props> = ({ className }) => {
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
        d="M-112.611 114.888C-13.6979 192.931 269.579 211.631 538.089 143.821C806.599 76.0111 964.897 238.184 1083.02 324.204C1353.89 521.456 1698.84 335.864 1876.14 94.5974C2005.5 -81.4238 2524.92 37.9598 2519.28 99.2421"
        stroke="#285260"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BackGroundLine7;