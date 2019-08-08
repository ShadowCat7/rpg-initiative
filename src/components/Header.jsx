import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton/IconButton.js';
import Toolbar from '@material-ui/core/Toolbar/Toolbar.js';
import Typography from '@material-ui/core/Typography/Typography.js';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar.jsx';

const styles = (theme) => ({
    header: {
        backgroundColor: theme.palette
    },
    menuButton: {
        marginLeft: '-12px',
        marginRight: '20px',
    },
    text: {
        margin: '0',
    },
    drawer: {
        minWidth: '300px',
    },
});

class Header extends Component {
    state = {
        isSidebarOpen: false,
    };

    toggleSidebar = () => {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    };

    render() {
        const { classes } = this.props;
        const { isSidebarOpen } = this.state;

        return (
            <AppBar position="fixed">
                <Drawer anchor="left" open={isSidebarOpen} onClose={this.toggleSidebar} >
                    <Sidebar onClose={this.toggleSidebar} />
                </Drawer>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.text}>
                        RPG Helper
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);