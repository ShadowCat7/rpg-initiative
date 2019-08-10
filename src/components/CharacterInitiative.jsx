import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Chip from '@material-ui/core/Chip/Chip.js';
import PersonIcon from '@material-ui/icons/Person';

const styles = (theme) => ({
    root: {
        margin: '10px 0',
    }
});

class Character extends Component {
    render() {
        const {
            classes,
            character: {
                name,
            },
        } = this.props;

        return (
            <div className={classes.root}>
                <Chip
                    icon={<PersonIcon />}
                    label={name}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Character);
