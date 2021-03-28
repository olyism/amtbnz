import React from 'react';
import './Header.css';
import Amitabha from './Amitabha.jpg';
import logo from './logo.png';
import tagline from './tagline.jpg';

const Header = () => (
  <header className="Header">
    <div className="Header__image" />
    <div className="Header__brand">
      <img alt="淨宗學會" className="Header__logo" src={logo} />
      <img alt="紐西蘭北岸淨宗學會" className="Header__tagline" src={tagline} />
    </div>
  </header>
);

export default Header;
