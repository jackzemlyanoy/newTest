import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Loader from 'react-loader-spinner';

import reducers from './store/reducers';
import middlewares from './store/middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const LazyApp = React.lazy(() => import('./containers/App/App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="Loader">
          <Loader type="Oval" color="#FFDE1D" height="100" width="100" />
        </div>
      }
    >
      <LazyApp />
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
