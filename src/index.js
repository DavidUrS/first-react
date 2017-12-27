import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Footer from './Footer';
import registerServiceWorker from './server/registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
