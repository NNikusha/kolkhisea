import React from 'react';

interface Icon2DProps {
  fill?: string; // Optional fill prop
}

const Icon2D: React.FC<Icon2DProps> = ({ fill = "#CB684D" }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M2 2V22H22V2H2ZM3.07334 3.06951H20.9267V20.9305H3.07334V3.06951ZM4.99337 5.57688V19.0171H18.4697V17.9475H6.06671V5.57688H4.99337ZM6.97327 9.01126V17.0326H16.013V9.01126H6.97327ZM8.04661 10.0808H14.9397V15.9631H8.04661V10.0808Z" 
        fill={fill} // Use the fill prop here
      />
    </svg>
  );
};

export default Icon2D;