import React from 'react';

export default function ActualPrice({ price, yearly }) {
  return (
    <div className="price">
      <span className="actual-price">
        ${Number(yearly == false ? price : price * 12 * 0.75).toFixed(2)}
      </span>
      <span className="price-date">/{yearly == false ? 'month' : 'year'}</span>
    </div>
  );
}
