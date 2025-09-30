import React from 'react';

const Loader: React.FC = () => (
  <div className="min-h-screen grid place-items-center bg-gradient-to-br from-blue-600 to-violet-600 text-white">
    <div className="text-center">
      <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-5"></div>
      <h2 className="text-2xl font-bold">ESRA AKILLI</h2>
      <p className="opacity-90">Loading Portfolio...</p>
    </div>
  </div>
);

export default Loader; 