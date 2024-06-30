import { useEffect, useState } from 'react';

interface CryptoData {
  id: number;
  asset: string;
  last_trade: string;
  change_24h_percent: string;
  change_24h: string;
}

interface Props {
  cryptoData: CryptoData[];
}

const BlockChain = ({ cryptoData }: Props) => {
  return (
    <div className="min-h-screen">
      {/* Header with gradient */}
      <header className="relative flex items-center justify-between p-4 bg-gradient-to-b from-purple-900 to-black via-black text-white">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-transparent" style={{ height: '200%', zIndex: -1 }}></div>
        
        <div className="flex space-x-4">
        <h1 className="text-3xl font-bold text-center">BLOCKCHAIN</h1>
        </div>
        <div className="flex flex-grow justify-center items-center space-x-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Exchange</a>
            <a href="#" className="text-white hover:text-gray-300">Last Transactions</a>
            <a href="#" className="text-white hover:text-gray-300">Invite Friend</a>
            <a href="#" className="text-white hover:text-gray-300">Notifications</a>
          </nav>
        </div>
        <div className="flex items-center space-x-8">
          <button className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-black">
            LOG IN
          </button>
          <button className="px-4 py-2 text-white bg-purple-600 rounded">SIGN UP</button>

        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-white">Easy send and Request</h1>
        <h1 className="text-4xl font-bold text-white">Crypto.</h1>
        <p className="mt-4 text-center text-gray-300 max-w-lg mx-auto">
          Bring blockchain to the people. Solana supports experiences for power users, new consumers,
          and everyone in between.
        </p>
      </main>

      {/* Asset section */}
      <section className="p-4">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden border border-gray-700 rounded-lg bg-transparent">
            <div className="p-4 bg-transparent">
              <div className="flex justify-between text-white">
                <span className="text-lg font-normal">ASSETS</span>
                <span className="text-lg font-normal">LAST TRADE</span>
                <span className="text-lg font-normal">24H %</span>
                <span className="text-lg font-normal">24H CHANGE</span>
                <span className="text-lg font-normal text-green-300">MORE &gt;</span>
              </div>
            </div>
            <div className="p-4 space-y-4 bg-black">
              {cryptoData.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={`/imgs/${item.asset.toLowerCase()}.svg`} // Update path to match your directory structure
                      alt={item.asset}
                      className="w-6 h-6"
                    />
                    <span>{item.asset}</span>
                  </div>
                  <span>${item.last_trade}</span>
                  <span
                    className={
                      parseFloat(item.change_24h_percent) > 0
                        ? 'text-green-500'
                        : parseFloat(item.change_24h_percent) < 0
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }
                  >
                    {item.change_24h_percent}%
                  </span>
                  <span
                    className={
                      parseFloat(item.change_24h) > 0
                        ? 'text-green-500'
                        : parseFloat(item.change_24h) < 0
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }
                  >
                    ${item.change_24h}
                  </span>
                  <button className="px-4 py-2 text-black bg-green-400 rounded font-bold">Trade</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Swap Tokens section */}
      <section className="p-4">
        <div className="max-w-5xl mx-auto">
          <div className="p-4 bg-black border border-gray-700 rounded-lg">
            <h2 className="mb-4 text-lg font-bold text-white">SWAP TOKENS</h2>
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl font-bold text-white">0.00</span>
                <span className="text-gray-400">$0.00</span>
                <span className="text-gray-400">Balance: 24.903</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-white bg-gray-700 rounded">BTC</button>
                <span className="text-2xl font-bold text-white">↔</span>
                <button className="px-4 py-2 text-white bg-gray-700 rounded">BNB</button>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl font-bold text-white">0.00</span>
                <span className="text-gray-400">$0.00</span>
                <span className="text-gray-400">Balance: 52.700</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="w-1/3 px-4 py-2 text-white bg-purple-600 rounded">SWAP TOKENS</button>
            </div>
            <p className="mt-4 text-center text-gray-400">1 BTC = 32.2009 ETH</p>
            <p className="text-center text-gray-400">Free exchange</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlockChain;
