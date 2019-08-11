import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppRouter from './AppRoutes.jsx';
import reducer, { LOCAL_STORAGE_KEY } from './redux/reducer.js';
import storageCreator from './utility/localStorage.js';

const storage = storageCreator(LOCAL_STORAGE_KEY);

const store = createStore(reducer(storage.load()));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default (App);
