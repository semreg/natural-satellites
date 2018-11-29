
// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Components and styles
import 'font-awesome/css/font-awesome.min.css'
import './scss/index.scss';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
