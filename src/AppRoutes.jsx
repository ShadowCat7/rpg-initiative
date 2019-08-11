import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme.js';
import Layout from './Layout.jsx';
import InitiativeTracker from './pages/InitiativeTracker.jsx';
import Settings from './pages/Settings.jsx';
import NotFound from './pages/NotFound.jsx';
import Container from './redux/Container.jsx';
import RecurringCharacters from './pages/RecurringCharacters.jsx';

class AppRouter extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.settings !== this.props.settings) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <ThemeProvider theme={theme(this.props.settings)}>
                <Router>
                    <Layout>
                        <Switch>
                            <Route path="/" component={RecurringCharacters} exact />
                            <Route path="/rpg-initiative" component={RecurringCharacters} exact />
                            <Route path="/rpg-initiative/initiative" component={InitiativeTracker} />
                            <Route path="/rpg-initiative/settings" component={Settings} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </Router>
            </ThemeProvider>
        );
    }
}

export default Container(AppRouter);