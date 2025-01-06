import React from 'react';
import { LineChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <LineChart className="h-8 w-8 text-emerald-400" />
          <h1 className="text-2xl font-bold">WakaTime Charts</h1>
        </div>
        <p className="mt-2 text-gray-300">
          Generate beautiful charts from your WakaTime data
        </p>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-300">
            Connect your WakaTime account to generate personalized coding statistics and visualizations.
          </p>
          <button
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg 
                     transition-colors duration-200 font-medium"
          >
            Connect WakaTime
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;