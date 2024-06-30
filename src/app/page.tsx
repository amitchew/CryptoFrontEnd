// src/app/page.tsx

'use client';

import { useEffect, useState } from 'react';
import BlockChain from '@/components/blockchain';



interface CryptoData {
  id: number;
  asset: string;
  last_trade: string;
  change_24h_percent: string;
  change_24h: string;
}

const Page = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://cryptodataservice.onrender.com/crypto_data/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return <BlockChain cryptoData={cryptoData} />;
};

export default Page;
