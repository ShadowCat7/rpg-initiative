import React, { Component } from 'react';
import { ThemeProvider } from 'react-jss';

import Layout from './Layout.jsx';
import theme from './theme.js';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        );
    }
}

export default App;
