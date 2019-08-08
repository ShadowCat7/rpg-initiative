import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import List from '@material-ui/core/List/List.js';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider/Divider.js';

import NavItem from './NavItem.jsx';

const styles = (theme) => ({
    root: {
        minWidth: '300px',
    },
});

class Sidebar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <NavItem to="/" text="Home Page" Icon={InboxIcon} onClick={this.props.onClose} />
                    <NavItem to="/characters" text="Characters" Icon={DraftsIcon} onClick={this.props.onClose} />
                </List>
                <Divider />
                <List>
                    <NavItem to="/settings" text="Settings" Icon={SettingsIcon} onClick={this.props.onClose} />
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);