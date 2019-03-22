import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history } from './store/configureStore';
import store, { persiststore } from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persiststore} loading={null}>
        <App history={history} />
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
