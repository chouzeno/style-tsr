import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#0e1628] text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 max-w-[1280px]">
        <div className="text-xl font-bold">STYLE TSR</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/style-generation" className="hover:text-gray-300">樣式生成</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">關於本計畫</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 