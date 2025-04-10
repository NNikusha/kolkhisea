import React from 'react';

interface BackGroundLine4Props {
  className?: string;
}

const BackGroundLine4: React.FC<BackGroundLine4Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1920"
      height="1506"
      viewBox="0 0 1920 1506"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M-42.1502 0.564837C-6.27516 121.343 214.476 299.849 473.004 399.141C731.533 498.432 767.469 722.189 814.449 860.555C922.178 1177.85 1311.05 1224.91 1594.98 1129.89C1802.12 1060.56 2157.86 1457.42 2117.95 1504.26"
        stroke="#285260"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BackGroundLine4;