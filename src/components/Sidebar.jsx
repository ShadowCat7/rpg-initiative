import React, { Component } from 'react';
import withStyles from 'react-jss';

import Switch from '@material-ui/core/Switch';

const styles = (theme) => ({
    menuButton: {
        marginLeft: '-12px',
        marginRight: '20px',
    },
    text: {
        margin: '0',
    },
    switch: {
        color: theme.palette.grey[900],

        '&$checked': {
            color: theme.palette.grey[100],
        },
    },
    checked: {},
});

class Header extends Component {
    state = {
        sidebarOpen: false,
    };

    toggleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Switch classes={{ switchBase: classes.switch, checked: classes.checked }} />
            </div>
        );
    }
}

export default withStyles(styles)(Header);