import React, { useState } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import StyleGeneration from './components/StyleGeneration';
import VirtualTryOn from './components/VirtualTryOn';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (base64Image) => {
    setUploadedImage(base64Image);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-[1280px]">
        <div className="grid grid-cols-3 gap-6">
          <ImageUpload onImageUpload={handleImageUpload} />
          <StyleGeneration uploadedImage={uploadedImage} />
          <VirtualTryOn />
        </div>
      </main>
    </div>
  );
}

export default App; 