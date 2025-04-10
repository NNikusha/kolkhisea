import React from 'react';

interface BackGroundLine8Props {
  className?: string;
}

const BackGroundLine8: React.FC<BackGroundLine8Props> = ({ className }) => {
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
        d="M-15.787 1505.3C20.0881 1384.52 240.839 1206.02 499.368 1106.73C757.896 1007.44 793.833 783.679 840.812 645.312C948.541 328.022 1337.41 280.953 1621.34 375.981C1828.49 445.311 2184.22 48.4526 2144.31 1.61101"
        stroke="#285260"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BackGroundLine8;