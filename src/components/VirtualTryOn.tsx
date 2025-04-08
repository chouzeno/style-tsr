import React from 'react';

const VirtualTryOn: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">試衣展示</h2>
      <div className="aspect-[9/16] bg-gray-100 rounded-lg flex items-center justify-center">
        {/* 這裡可以放置 3D 模型圖片 */}
        <div className="w-full h-full bg-contain bg-center bg-no-repeat" style={{
          backgroundImage: `url('/model-placeholder.png')`
        }}>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn; 