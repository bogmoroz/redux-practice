import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//Create an objecct for the default data
const defaultState = {
  posts,
  comments
};

const ehnancers = compose(
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, ehnancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
