import React from 'react';

interface BackGroundLine9Props {
  className?: string;
}

const BackGroundLine9: React.FC<BackGroundLine9Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="1920"
      height="1256"
      viewBox="0 0 1920 1256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M-310.634 1215C-186.391 1235.93 3.36658 1356.5 240.637 1033.18C404.485 809.909 660.302 910.905 805.225 929.604C1137.55 972.482 1320.82 638.4 1390.53 347.218C1492.19 -77.3659 1932.33 -14.1216 1956.83 42.3321"
        stroke="#285260"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BackGroundLine9;