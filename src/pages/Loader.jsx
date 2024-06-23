import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center">
        <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 mb-4 animate-spin"></div>
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
