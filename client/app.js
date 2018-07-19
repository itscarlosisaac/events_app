import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './app.router'

// Importing Styles
import 'normalize.css';
import './styles/app.css'

const root = document.getElementById('app');
ReactDOM.render(<AppRouter />, root );