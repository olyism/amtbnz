import React from 'react';
import { node } from 'prop-types';
import './Container.css';

const Container = ({ children }) => (
  <div className="container">{ children }</div>
);

Container.propTypes = {
  children: node,
};

Container.defaultProps = {
  children: '',
};

export default Container;

