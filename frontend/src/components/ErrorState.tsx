import React from 'react';

type Props = { message?: string };

const ErrorState: React.FC<Props> = ({ message = 'Error loading data' }) => (
  <div className="min-h-screen grid place-items-center bg-slate-50">
    <div className="text-center bg-white shadow-lg rounded-xl p-8 border border-slate-200">
      <h2 className="text-red-600 font-semibold text-lg mb-2">⚠️ Error Loading Portfolio</h2>
      <p className="text-slate-600 mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="btn-primary"
      >
        Retry
      </button>
    </div>
  </div>
);

export default ErrorState; 