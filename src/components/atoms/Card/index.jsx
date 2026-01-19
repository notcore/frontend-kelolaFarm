import React from 'react';

const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden text-helvetica-bold ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;