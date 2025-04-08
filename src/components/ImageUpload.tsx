import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const ImageUpload: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">圖片上傳（任意圖像）</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="flex flex-col items-center">
            <ArrowUpTrayIcon className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">點擊或拖曳上傳圖片</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">文化背景敘述</h2>
        <p className="text-gray-600 leading-relaxed">
          在亞洲象徵體系中，梅花象徵堅韌純潔與高尚情操，
          於寒冬綻放不凋，代表逆境中的堅強與希望。
        </p>
      </div>
    </div>
  );
};

export default ImageUpload; 