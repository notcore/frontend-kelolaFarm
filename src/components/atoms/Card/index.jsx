import React from 'react';

const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;