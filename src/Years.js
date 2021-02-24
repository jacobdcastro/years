import React from 'react';

const Years = ({ age }) => {
  const arr = new Array(100).fill('');

  return (
    <div className='grid grid-cols-10 gap-10'>
      {arr.map((i, index) => (
        <div
          className={`h-5 w-5 rounded-full border-2 border-white ${
            index + 1 <= age ? 'bg-white' : 'bg-transparent'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Years;
