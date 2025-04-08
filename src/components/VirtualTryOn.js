import React from 'react';

const VirtualTryOn = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">試衣展示</h2>
      <div className="aspect-[3/4] bg-white rounded-lg flex items-center justify-center overflow-hidden">
        <img 
          src="/model-placeholder.png"
          alt="虛擬試衣模特兒"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default VirtualTryOn; 