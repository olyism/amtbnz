import React from 'react';
import { node } from 'prop-types';
import './Container.css';

const Container = ({ children }) => (
  <div className="container">{ children }</div>
);

export default Container;

