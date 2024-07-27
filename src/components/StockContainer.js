// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import StockCard from './StockCard';

// // const StockContainer = () => {
// //     const [stocks, setStocks] = useState([]);

// //     const fetchStockData = async (symbol) => {
// //         try { 
// //             // const response = await axios.get(`http://localhost:5000/api/stock/${symbol}`);
// //             const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&outputsize=full&apikey=demo`);
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching stock data:', error);
// //             return null;
// //         }
// //     };

// //     useEffect(() => {
// //         const stockSymbols = ['AAPL', 'GOOGL', 'MSFT'];

// //         const fetchData = async () => {
// //             const stockData = await Promise.all(stockSymbols.map(symbol => fetchStockData(symbol)));
// //             setStocks(stockData.filter(data => data !== null));
// //         };

// //         fetchData();
// //         const intervalId = setInterval(fetchData, 60000); // Update every minute

// //         return () => clearInterval(intervalId);
// //     }, []);

// //     return (
// //         <div className="stock-container">
// //             {stocks.map(stock => (
// //                 <StockCard
// //                     key={stock.Information}
// //                     symbol={stock.Symbol}
// //                     price={stock.open}
// //                     change={stock.high}
// //                 />
// //             ))}
// //         </div>
// //     );
// // };

// // export default StockContainer;

// // // 

// // src/components/StockContainer.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import StockCard from './StockCard';

// const StockContainer = () => {
//     const [stocks, setStocks] = useState([]);

//     const fetchStockData = async (symbol) => {
//         try {
//             const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`);
//             const data = response.data;
//             const latestDate = Object.keys(data["Time Series (Daily)"])[0];
//             const stockData = data["Time Series (Daily)"][latestDate];
//             return {
//                 symbol,
//                 price: stockData["4. close"],
//                 change: (stockData["4. close"] - stockData["1. open"]).toFixed(2)
//             };
//         } catch (error) {
//             console.error('Error fetching stock data:', error);
//             return null;
//         }
//     };

//     useEffect(() => {
//         const stockSymbols = ['IBM', 'AAPL', 'GOOGL'];

//         const fetchData = async () => {
//             const stockData = await Promise.all(stockSymbols.map(symbol => fetchStockData(symbol)));
//             setStocks(stockData.filter(data => data !== null));
//         };

//         fetchData();
//         const intervalId = setInterval(fetchData, 60000); // Update every minute

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div className="stock-container">
//             {stocks.map(stock => (
//                 <StockCard
//                     key={stock.symbol}
//                     symbol={stock.symbol}
//                     price={stock.price}
//                     change={stock.change}
//                 />
//             ))}
//         </div>
//     );
// };

// export default StockContainer;

// src/components/StockContainer.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import StockCard from './StockCard';

// const StockContainer = ({ timeSeries }) => {
//     const [stocks, setStocks] = useState([]);
//     const [symbol, setSymbol] = useState('IBM');

//     const fetchStockData = async (symbol) => {
//         try {
//             const response = await axios.get(`https://www.alphavantage.co/query?function=${timeSeries}&symbol=${symbol}&apikey=demo`);
//             const data = response.data;
//             const latestDate = Object.keys(data["Time Series (Daily)"])[0];
//             const stockData = data["Time Series (Daily)"][latestDate];
//             return {
//                 symbol,
//                 price: stockData["4. close"],
//                 change: (stockData["4. close"] - stockData["1. open"]).toFixed(2)
//             };
//         } catch (error) {
//             console.error('Error fetching stock data:', error);
//             return null;
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             const stockData = await fetchStockData(symbol);
//             setStocks(stockData ? [stockData] : []);
//         };

//         fetchData();
//         const intervalId = setInterval(fetchData, 60000); // Update every minute

//         return () => clearInterval(intervalId);
//     }, [symbol, timeSeries]);

//     return (
//         <div className="text-center my-8">
//             <input
//                 type="text"
//                 value={symbol}
//                 onChange={(e) => setSymbol(e.target.value.toUpperCase())}
//                 placeholder="Enter stock symbol"
//                 className="p-2 rounded bg-gray-700 text-white"
//             />
//             <div className="stock-container mt-4 flex flex-wrap justify-center gap-4">
//                 {stocks.map(stock => (
//                     <StockCard
//                         key={stock.symbol}
//                         symbol={stock.symbol}
//                         price={stock.price}
//                         change={stock.change}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default StockContainer;

// src/components/StockContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

const StockContainer = ({ timeSeries }) => {
    const [stocks, setStocks] = useState([]);
    const [symbol, setSymbol] = useState('IBM');

    const fetchStockData = async (symbol) => {
        try {
            const response = await axios.get(`https://www.alphavantage.co/query?function=${timeSeries}&symbol=${symbol}&apikey=demo`);
            const data = response.data;
            const timeSeriesKey = timeSeries === "TIME_SERIES_DAILY" ? "Time Series (Daily)" :
                                  timeSeries === "TIME_SERIES_WEEKLY" ? "Weekly Time Series" :
                                  "Monthly Time Series";

            const stockData = data[timeSeriesKey];
            const latestDate = Object.keys(stockData)[0];

            const stockInfo = {
                symbol,
                price: stockData[latestDate]["4. close"],
                change: (stockData[latestDate]["4. close"] - stockData[latestDate]["1. open"]).toFixed(2)
            };

            return stockInfo;
        } catch (error) {
            console.error('Error fetching stock data:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const stockData = await fetchStockData(symbol);
            setStocks(stockData ? [stockData] : []);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, [symbol, timeSeries]);

    return (
        <div className="text-center my-8">
            <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="Enter stock symbol"
                className="p-2 rounded bg-gray-700 text-white"
            />
            <div className="stock-container mt-4 flex flex-wrap justify-center gap-4">
                {stocks.map(stock => (
                    <StockCard
                        key={stock.symbol}
                        symbol={stock.symbol}
                        price={stock.price}
                        change={stock.change}
                    />
                ))}
            </div>
        </div>
    );
};

export default StockContainer;


