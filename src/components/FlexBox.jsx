import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Container from '../redux/Container.jsx';

const styles = (theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    },
    column: {
        margin: '0 5px',
    },
});

class FlexBox extends Component {
    renderColumns() {
        const { classes, columns } = this.props;

        // TODO add key
        return columns.map(column => (
            <div className={classes.column}>
                {column}
            </div>
        ));
    }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <div className={classes.root}>
                {this.renderColumns()}
            </div>
        );
    }
}

export default Container(withStyles(styles)(FlexBox));