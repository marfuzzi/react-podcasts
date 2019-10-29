import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AppUseState from './AppUseState';
import AppUseContext from './AppUseContext';
import AppUseEffect from './AppUseEffect';
import AppCustom from './AppCustom';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppUseContext />, document.getElementById('root')); //useContext
//ReactDOM.render(<AppUseState />, document.getElementById('root')); //useState
// ReactDOM.render(<AppUseEffect />, document.getElementById('root')); //useEffect
// ReactDOM.render(<AppCustom />, document.getElementById('root')); //useEffect
