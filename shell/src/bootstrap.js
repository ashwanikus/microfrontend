import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Load Microfrontends
import('home/HomeApp');
import('product/ProductApp');
