import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

const RootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    RootElement
);

serviceWorker.unregister();
