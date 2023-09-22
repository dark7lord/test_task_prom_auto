import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const nodeElement = document.querySelector('#root');
const root = createRoot(nodeElement);

root.render(<App/>)
