import { useState } from 'react';

const Lamp = ({ on, onClick }) => {
  const onOrOffStyle = on ? 'bg-yellow-200 shadow-onLamp' : 'bg-gray-600';
  return (
    <div className='p-2'>
      <div
        className={`w-8 h-8 rounded-full ${onOrOffStyle}`}
        onClick={onClick}
      ></div>
    </div>
  );
};

export default Lamp;
