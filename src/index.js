import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "swiper/css/bundle";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import './index.css'

ReactDOM.render(<React.Fragment><BrowserRouter><App /></BrowserRouter></React.Fragment>, document.getElementById('root'))