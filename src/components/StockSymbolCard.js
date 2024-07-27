// src/components/StockSymbolCard.js
import React from 'react';

const StockSymbolCard = ({ symbol, name, logo }) => {
    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <img src={logo} alt={`${name} logo`} className="w-20 h-20 mb-4" />
            <h2 className="text-2xl font-bold">{symbol}</h2>
            <p className="text-lg">{name}</p>
        </div>
    );
};

export default StockSymbolCard;
