import React, { Component } from 'react';
import withStyles from 'react-jss';

import AppRouter from './AppRoutes.jsx';
import Header from './components/Header.jsx';

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
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Header />
                <div className={classes.page}>
                    <div className={classes.toolbar} />
                    <AppRouter />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);