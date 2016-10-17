import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const appHTML = renderToString(<App />);

console.log(appHTML);
