import React from 'react';

const StockCard = ({ symbol, price, change }) => {
    return (
        <div className="stock-card">
            <h2>{symbol}</h2>
            <p>Price: <span className="price">{price}</span></p>
            <p>Change: <span className="change" style={{ color: change >= 0 ? 'green' : 'red' }}>{change}</span></p>
        </div>
    );
};

export default StockCard;
