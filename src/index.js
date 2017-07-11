import React from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

// only track in production
import ReactGA from 'react-ga'
ReactGA.initialize('UA-90773575-1');

import App from './components/App';

const render = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  return ReactDOM.render(
     <App/>, document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
// if (module.hot) {
  // module.hot.accept('./components/App', render);
// }
