const SYMBOLS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-symbols';
const MARKET_CAPS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-market-caps';
const PRICES_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/stock-prices';

/*
{
  name,
  symbol,
  price,
  market-cap,
  52-week-high,
  52-week-low
}
*/


async function trendingStocks(n) {
  const [fetchedSymbolsJSON, fetchedMarketCapJSON] = await Promise.all([
    fetch(SYMBOLS_API_BASE_URL),
    fetch(MARKET_CAPS_API_BASE_URL)
  ]);
  const [fetchedSymbols, fetchedMarketCaps] = await Promise.all([
    fetchedSymbolsJSON.json(),
    fetchedMarketCapJSON.json()
  ]);

  // Sort as per market-cap
  fetchedMarketCaps.sort((a, b) => b['market-cap'] - a['market-cap']);
  // Filtering out top n stocks as per market cap
  const topMarketCaps = fetchedMarketCaps.slice(0, n);
  // Creating an array of top n stocks
  const symbolsArray = topMarketCaps.map(stock => {
    return `"${stock["symbol"]}"`
  });

  const detailStocksRes = await fetch(`${PRICES_API_BASE_URL}?symbols=[${symbolsArray}]`);
  const detailStocks = await detailStocksRes.json();

  const filterFetchedSymbols = [];
  symbolsArray.map(sym => {
    fetchedSymbols.forEach(stocks => {
      if (sym === `"${stocks["symbol"]}"`) filterFetchedSymbols.push(stocks);
    })
  })

  const finalArray = [];

  for(let i = 0; i < n; i++){
    finalArray.push({...topMarketCaps[i], ...detailStocks[i], ...filterFetchedSymbols[i]})
  }
  return finalArray;
  
}

trendingStocks(0);
// Do not edit the line below.
// exports.trendingStocks = trendingStocks;