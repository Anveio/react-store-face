import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '@shopify/polaris/styles.css';
import history from './history';

import App from './components/App';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={props => <App />} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
