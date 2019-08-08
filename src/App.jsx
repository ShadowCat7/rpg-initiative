import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppRouter from './AppRoutes.jsx';
import reducer from './redux/reducer.js';

const store = createStore(reducer);

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
