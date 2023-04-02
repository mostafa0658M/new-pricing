import React from 'react';

export default function Slider({ handleChange, fillwidth }) {
  return (
    <input
      type="range"
      min={0}
      max={400}
      defaultValue={200}
      className="slider"
      onChange={handleChange}
      style={{ '--fw': fillwidth + '%' }}
    />
  );
}
