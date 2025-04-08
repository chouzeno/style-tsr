import React, { useState } from 'react';
import { generatePattern } from '../services/huggingface';

const StyleGeneration = ({ uploadedImage }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState(null);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);
  const [generationParams, setGenerationParams] = useState({
    steps: 30,
    guidance: 7.5
  });

  const handleParamChange = (param, value) => {
    setGenerationParams(prev => ({
      ...prev,
      [param]: value
    }));
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('請輸入圖案描述');
      return;
    }

    setError(null);
    setIsGenerating(true);

    try {
      const imageUrl = await generatePattern(prompt, uploadedImage, generationParams);
      setGeneratedImage(imageUrl);
    } catch (err) {
      setError('生成圖案時發生錯誤，請稍後再試');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'generated-pattern.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">圖像敘述</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Please describe the pattern in English, e.g.: plum blossom pattern, modern oriental ink style (請使用英文描述您想要的布料圖案風格)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsAdvancedMode(!isAdvancedMode)}
          className="text-sm text-purple-600 hover:text-purple-700"
        >
          {isAdvancedMode ? '隱藏進階設定' : '顯示進階設定'}
        </button>
      </div>

      {isAdvancedMode && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              生成步驟數 ({generationParams.steps})
            </label>
            <input
              type="range"
              min="20"
              max="50"
              value={generationParams.steps}
              onChange={(e) => handleParamChange('steps', parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              提示詞引導程度 ({generationParams.guidance})
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={generationParams.guidance}
              onChange={(e) => handleParamChange('guidance', parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          isGenerating
            ? 'bg-purple-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700'
        } text-white`}
      >
        {isGenerating ? '生成中...' : '圖騰樣式生成'}
      </button>

      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        {generatedImage ? (
          <img
            src={generatedImage}
            alt="生成的圖案"
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-gray-500">生成的圖案將顯示在此處</p>
        )}
      </div>

      {generatedImage && (
        <button
          onClick={handleDownload}
          className="w-full border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          下載設計圖
        </button>
      )}
    </div>
  );
};

export default StyleGeneration; 