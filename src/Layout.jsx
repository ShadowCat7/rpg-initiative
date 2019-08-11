import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Header from './components/Header.jsx';
import Card from '@material-ui/core/Card/Card.js';
import Container from './redux/Container.jsx';
//import FloorNavigation from './components/FloorNavigation.jsx';

const styles = (theme) => ({
    container: {
        display: 'flex',
    },
    page: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});

class Layout extends Component {
    render() {
        const { classes, children } = this.props;

        return (
            <div className={classes.container}>
                <Header />
                <Card className={classes.page} square>
                    <div className={classes.toolbar} />
                    {children}
                </Card>
                {/*<FloorNavigation />*/}
            </div>
        );
    }
}

export default Container(withStyles(styles)(Layout));