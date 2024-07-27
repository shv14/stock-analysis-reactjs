// // src/pages/Home.js
// // import React from 'react';
// // import StockSymbolCard from '../components/StockSymbolCard';
// // import '../App.css';

// // const Home = () => {
// //     const stockSymbols = [
// //         { symbol: 'AAPL', name: 'Apple Inc.', logo: 'https://via.placeholder.com/150' },
// //         { symbol: 'GOOGL', name: 'Alphabet Inc.', logo: 'https://via.placeholder.com/150' },
// //         { symbol: 'MSFT', name: 'Microsoft Corp.', logo: 'https://via.placeholder.com/150' },
// //     ];

// //     return (
// //         <div className="home-page min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4">
// //             <h1 className="text-center text-4xl font-bold mb-8 text-white">Welcome to Stock Tracker</h1>
// //             <div className="stock-symbols-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                 {stockSymbols.map(stock => (
// //                     <StockSymbolCard key={stock.symbol} symbol={stock.symbol} name={stock.name} logo={stock.logo} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Home;

// // src/pages/Home.js
// import React from 'react';
// import homeImage from '../images/home.jpg';
// import StockSymbolCard from '../components/StockSymbolCard';
// import '../App.css';

// const Home = () => {
//     const stockSymbols = [
//         { symbol: 'AAPL', name: 'Apple Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'GOOGL', name: 'Alphabet Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'MSFT', name: 'Microsoft Corp.', logo: 'https://via.placeholder.com/150' },
//     ];

//     return (
//         <div className="home-page min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: `url(${homeImage})` }}>
//             <h1 className="text-center text-4xl font-bold mb-8 text-white">Welcome to Stock Tracker</h1>
//             <div className="stock-symbols-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {stockSymbols.map(stock => (
//                     <StockSymbolCard key={stock.symbol} symbol={stock.symbol} name={stock.name} logo={stock.logo} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// src/pages/Home.js
// import React from 'react';
// import homeImage from '../images/home.jpg';
// import StockSymbolCard from '../components/StockSymbolCard';
// // import '../App.css';

// const Home = () => {
//     const stockSymbols = [
//         { symbol: 'AAPL', name: 'Apple Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'GOOGL', name: 'Alphabet Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'MSFT', name: 'Microsoft Corp.', logo: 'https://via.placeholder.com/150' },
//     ];

//     return (
//         <div className="home-page min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover',
//         backgroundPosition: 'center' }}>
//             <h1 className="text-center text-4xl font-bold mb-8 text-white">Welcome to Stock Tracker</h1>
//             <div className="stock-symbols-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {stockSymbols.map(stock => (
//                     <StockSymbolCard key={stock.symbol} symbol={stock.symbol} name={stock.name} logo={stock.logo} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// src/pages/Home.js
// import React from 'react';
// import homeImage from '../images/home.jpg'; // Correct path to image
// import StockSymbolCard from '../components/StockSymbolCard';

// const Home = () => {
//     const stockSymbols = [
//         { symbol: 'AAPL', name: 'Apple Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'GOOGL', name: 'Alphabet Inc.', logo: 'https://via.placeholder.com/150' },
//         { symbol: 'MSFT', name: 'Microsoft Corp.', logo: 'https://via.placeholder.com/150' },
//     ];

//     return (
//         <div
//             className="home-page min-h-screen flex flex-col items-center justify-center p-4"
//             style={{
//                 backgroundImage: `url(${homeImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <h1 className="text-center text-4xl font-bold mb-8 text-white">Welcome to Stock Tracker</h1>
//             <div className="stock-symbols-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {stockSymbols.map(stock => (
//                     <StockSymbolCard key={stock.symbol} symbol={stock.symbol} name={stock.name} logo={stock.logo} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;

// import React from 'react';
// import backgroundImage from '../images/home.jpg'; // Import your image here

// const Home = () => {
//     return (
//         <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                 <div className="text-center text-white p-8">
//                     <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to StockApp</h1>
//                     <p className="text-lg md:text-xl mb-6">Track and analyze stock market data easily.</p>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div className="bg-gray-700 p-4 rounded-lg">
//                             <h2 className="text-xl font-semibold">Stock Symbols</h2>
//                             <p className="mt-2">Find and analyze stock symbols.</p>
//                         </div>
//                         <div className="bg-gray-700 p-4 rounded-lg">
//                             <h2 className="text-xl font-semibold">Intraday Analysis</h2>
//                             <p className="mt-2">View stock prices and trends throughout the day.</p>
//                         </div>
//                         <div className="bg-gray-700 p-4 rounded-lg">
//                             <h2 className="text-xl font-semibold">Historical Data</h2>
//                             <p className="mt-2">Explore daily, weekly, and monthly stock data.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import backgroundImage from '../images/home.jpg'; // Import your image here

const Home = () => {
    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-8">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <p style={{color: 'cyan'}}>StockApp</p></h1>
                    <p className="text-lg md:text-xl mb-6">Track and analyze stock market data easily.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-700 bg-opacity-70 backdrop-blur-md p-4 rounded-lg">
                            <h2 className="text-xl font-semibold">Stock Symbols</h2>
                            <p className="mt-2">Find and analyze stock symbols.</p>
                        </div>
                        <div className="bg-gray-700 bg-opacity-70 backdrop-blur-md p-4 rounded-lg">
                            <h2 className="text-xl font-semibold">Intraday Analysis</h2>
                            <p className="mt-2">View stock prices and trends throughout the day.</p>
                        </div>
                        <div className="bg-gray-700 bg-opacity-70 backdrop-blur-md p-4 rounded-lg">
                            <h2 className="text-xl font-semibold">Historical Data</h2>
                            <p className="mt-2">Explore daily, weekly, and monthly stock data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


