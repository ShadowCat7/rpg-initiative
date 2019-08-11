import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import List from '@material-ui/core/List/List.js';
import Divider from '@material-ui/core/Divider/Divider.js';

import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';

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
                    <NavItem to="/rpg-initiative" text="Recurring Characters" Icon={PersonAddIcon} onClick={this.props.onClose} />
                    <NavItem to="/rpg-initiative/initiative" text="Initiative Tracker" Icon={ListIcon} onClick={this.props.onClose} />
                </List>
                <Divider />
                <List>
                    <NavItem to="/rpg-initiative/settings" text="Settings" Icon={SettingsIcon} onClick={this.props.onClose} />
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);