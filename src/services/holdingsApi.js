// Mock data that mimics what a real API would return
const mockHoldings = [
  {
    id: 1,
    coin: "Bitcoin",
    symbol: "BTC",
    coinIcon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    currentPrice: 93264.02,
    totalHolding: 0.3216,
    avgBuyPrice: 84326.26,
    stcg: { gain: 2872.43, loss: 0 },
    ltcg: { gain: 0, loss: 5765.46 },
  },
  {
    id: 2,
    coin: "Ethereum",
    symbol: "ETH",
    coinIcon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    currentPrice: 1832.33,
    totalHolding: 4.1,
    avgBuyPrice: 2100.00,
    stcg: { gain: 0, loss: 1099.77 },
    ltcg: { gain: 0, loss: 4215.66 },
  },
  {
    id: 3,
    coin: "Cardano",
    symbol: "ADA",
    coinIcon: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    currentPrice: 0.731,
    totalHolding: 10223.95,
    avgBuyPrice: 0.45,
    stcg: { gain: 2868.71, loss: 0 },
    ltcg: { gain: 0, loss: 0 },
  },
  {
    id: 4,
    coin: "Dogecoin",
    symbol: "DOGE",
    coinIcon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    currentPrice: 0.1672,
    totalHolding: 55000,
    avgBuyPrice: 0.24,
    stcg: { gain: 0, loss: 4004.0 },
    ltcg: { gain: 0, loss: 0 },
  },
  {
    id: 5,
    coin: "Solana",
    symbol: "SOL",
    coinIcon: "https://cryptologos.cc/logos/solana-sol-logo.png",
    currentPrice: 148.15,
    totalHolding: 6.5,
    avgBuyPrice: 130.0,
    stcg: { gain: 117.97, loss: 0 },
    ltcg: { gain: 1680.9, loss: 0 },
  },
  {
    id: 6,
    coin: "Ripple",
    symbol: "XRP",
    coinIcon: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    currentPrice: 2.15,
    totalHolding: 3200,
    avgBuyPrice: 1.8,
    stcg: { gain: 0, loss: 0 },
    ltcg: { gain: 1120.0, loss: 0 },
  },
  {
    id: 7,
    coin: "Polkadot",
    symbol: "DOT",
    coinIcon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    currentPrice: 4.33,
    totalHolding: 1200,
    avgBuyPrice: 6.5,
    stcg: { gain: 0, loss: 2604.0 },
    ltcg: { gain: 0, loss: 0 },
  },
];

// Pre-harvesting values (the current portfolio totals before any selections)
const mockPreHarvesting = {
  stcg: {
    gain: 5859.11,
    loss: 5103.77,
  },
  ltcg: {
    gain: 2800.9,
    loss: 9981.12,
  },
};

// Simulate an API call with a delay
export const fetchHoldings = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment to test error state:
      // reject(new Error("Failed to fetch holdings"));
      resolve(mockHoldings);
    }, 1200);
  });
};

export const fetchPreHarvestingData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPreHarvesting);
    }, 800);
  });
};
