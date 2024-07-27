// src/pages/Weekly.js
// import React from 'react';
// import StockContainer from '../components/StockContainer';
// import '../App.css';

// const Weekly = () => {
//     return (
//         <div className="weekly-page p-4 min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
//             <h2 className="text-center text-3xl font-bold mb-4">Weekly Stock Prices</h2>
//             <StockContainer timeSeries="TIME_SERIES_WEEKLY" />
//         </div>
//     );
// };

// export default Weekly;
// src/pages/Weekly.js
// import React from 'react';
// import weeklyImage from '../images/weekly.jpg';
// import '../App.css';

// const Weekly = () => {
//     return (
//         <div className="weekly-page min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: `url(${weeklyImage})` }}>
//             <h1 className="text-center text-4xl font-bold mb-8 text-white">Weekly Stock Prices</h1>
//             {/* Add your content here */}
//         </div>
//     );
// };

// export default Weekly;

import React, { useState, useEffect } from 'react';
import weeklyImage from '../images/weekly.jpg'; // Import your background image here

const Weekly = () => {
    const [symbol, setSymbol] = useState('TSCO.LON'); // Default symbol
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=demo`);
            const result = await response.json();
            if (result['Weekly Time Series']) {
                setData(result['Weekly Time Series']);
            } else {
                setError('Error fetching data.');
            }
        } catch (err) {
            setError('Error fetching data.');
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [symbol]);

    const handleChange = (e) => setSymbol(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Fetch new data on submit
        fetchData();
    };

    // Get the latest 10 entries from the data
    const getLimitedData = (data) => {
        const entries = Object.entries(data).slice(0, 10); // Get the first 10 entries
        return entries;
    };

    const dataEntries = getLimitedData(data);

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${weeklyImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 p-8">
                <h1 className=" flex text-3xl md:text-5xl font-bold m-5">Weekly <p className="mx-1" style={{color: 'cyan'}}>Stock</p> Data</h1>
                <div className="bg-gray-700 bg-opacity-70 backdrop-blur-md p-6 rounded-lg">
                    <form onSubmit={handleSubmit} className="mb-6">
                        <input
                            type="text"
                            value={symbol}
                            onChange={handleChange}
                            placeholder="Enter stock symbol"
                            className="px-4 py-2 rounded-lg w-full mb-4"
                        />
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">Submit</button>
                    </form>
                    {loading && <p className="text-white">Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {dataEntries.length > 0 && (
                        <div>
                            {dataEntries.map(([date, values], index) => {
                                const previousValue = index > 0 ? parseFloat(dataEntries[index - 1][1]['1. open']) : null;
                                const currentValue = parseFloat(values['1. open']);
                                const isHigher = previousValue ? currentValue > previousValue : null;

                                return (
                                    <div key={date} className="mb-4 bg-gray-800 bg-opacity-80 p-4 rounded-lg flex items-center">
                                        <div className="flex-1">
                                            <h2 className="text-lg font-bold">{date}</h2>
                                            <p>Open: {values['1. open']}</p>
                                            <p>High: {values['2. high']}</p>
                                            <p>Low: {values['3. low']}</p>
                                            <p>Close: {values['4. close']}</p>
                                            <p>Volume: {values['5. volume']}</p>
                                        </div>
                                        {isHigher !== null && (
                                            <div className={`w-3 h-3 rounded-full ml-4 ${isHigher ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weekly;

