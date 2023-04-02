import React from 'react';

export default function Switch({ handleSwitch }) {
  return (
    <div className="price-switch">
      <span className="bill-type">Monthly Billing</span>
      <div className="switch">
        <input type="checkbox" id="switch" onChange={handleSwitch} />
        <label htmlFor="switch">
          <span className="track"></span>
        </label>
      </div>
      <span className="bill-type">Yearly Billing</span>
      <span className="discount">
        <span className="minace">-</span>
        <span>25% </span>
        <span className="discount-text">discount</span>
      </span>
    </div>
  );
}
