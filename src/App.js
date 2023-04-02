import React from 'react';
import { useState } from 'react';
import {
  ActualPrice,
  Feature,
  Slider,
  Switch,
  ActualViews,
} from './components';
import './style.css';

export default function App() {
  const [price, setPrice] = useState(16);
  const [yearly, setYearly] = useState(false);
  const [views, setViews] = useState('10K');
  const [fillwidth, setFillwidth] = useState(50);
  const features = [
    'Unlimited websites',
    '100% data ownership',
    'Email reports',
  ];
  const handleChange = (e) => {
    const value = Math.floor(e.target.value / 100);
    const priceslist = [8, 12, 16, 24, 36];
    const viewslist = ['10K', '50K', '100K', '500K', '1M'];
    setPrice(priceslist[value]);
    setViews(viewslist[value]);
    setFillwidth(e.target.value / 4);
  };
  const handleSwitch = (e) => {
    setYearly(e.target.checked);
  };
  return (
    <div className="wrapper">
      <div className="topics">
        <p className="main-title">Simple, traffic-based pricing</p>
        <p className="second-title">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div className="price-wrapper">
        <div className="price-controler">
          <ActualViews views={views} />
          <ActualPrice price={price} yearly={yearly} />
          <Slider handleChange={handleChange} fillwidth={fillwidth} />
        </div>
        <Switch handleSwitch={handleSwitch} />
        <hr />
        <div className="features-section">
          <div className="features">
            {features.map((feature) => (
              <Feature feature={feature} />
            ))}
          </div>
          <a href="#" className="start-trail">
            Start my trail
          </a>
        </div>
      </div>
    </div>
  );
}
