import React from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import StyleGeneration from './components/StyleGeneration';
import VirtualTryOn from './components/VirtualTryOn';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-[1280px]">
        <div className="grid grid-cols-3 gap-6">
          <ImageUpload />
          <StyleGeneration />
          <VirtualTryOn />
        </div>
      </main>
    </div>
  );
}

export default App; 