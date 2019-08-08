import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';

class AppRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" component={Home} />
                </Router>
            </div>
        );
    }
}

export default AppRouter;