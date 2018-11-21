
// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Bootstrap and dependencies
import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

// Components and styles
import './scss/index.scss';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
