import React, { useCallback, useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const processImage = useCallback(async (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        onImageUpload(base64String.split(',')[1]); // 移除 data:image/jpeg;base64, 前綴
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processImage(files[0]);
    }
  }, [processImage]);

  const handleFileSelect = useCallback((e) => {
    const file = e.target.files[0];
    processImage(file);
  }, [processImage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">圖片上傳（任意圖像）</h2>
        <div
          className={`relative border-2 ${
            isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
          } ${
            image ? 'border-solid' : 'border-dashed'
          } rounded-lg p-8 text-center transition-colors`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {image ? (
            <div className="relative group">
              <img
                src={image}
                alt="上傳的圖片"
                className="max-h-[300px] mx-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <label className="cursor-pointer text-white flex items-center gap-2 hover:text-purple-200">
                  <ArrowUpTrayIcon className="h-6 w-6" />
                  <span>更換圖片</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ArrowUpTrayIcon className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">點擊或拖曳上傳圖片</p>
              <label className="cursor-pointer px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                選擇圖片
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">文化背景敘述</h2>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px] resize-none"
          placeholder="請描述圖案的文化意涵與象徵意義&#10;&#10;例如：梅花在東方文化中象徵堅毅，因其在寒冬中綻放"
        />
      </div>
    </div>
  );
};

export default ImageUpload; 