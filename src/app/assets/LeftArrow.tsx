import React from 'react';

interface LeftArrowProps {
  fill?: string;
}

const LeftArrow: React.FC<LeftArrowProps> = ({ fill = '#1C1C1E' }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.29305 11.2927L15.2931 2.29269C15.4881 2.09769 15.744 1.99972 16 1.99972C16.256 1.99972 16.512 2.09769 16.707 2.29269C17.098 2.68369 17.098 3.31575 16.707 3.70675L8.41403 11.9997L16.707 20.2927C17.098 20.6837 17.098 21.3158 16.707 21.7067C16.316 22.0977 15.6841 22.0977 15.2931 21.7067L6.29305 12.7067C5.90205 12.3157 5.90205 11.6837 6.29305 11.2927Z"
        fill={fill}
      />
    </svg>
  );
};

export default LeftArrow;