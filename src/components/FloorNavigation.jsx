import React from 'react';
import { withStyles } from '@material-ui/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation/BottomNavigation.js';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction/BottomNavigationAction.js';

import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer/Drawer.js';

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.primary,
    },
});

// TODO figure out how to
class FloorNavigation extends React.Component {
    render() {
        const classes = {};

        return (
            <Drawer open anchor="bottom" variant="permanent">
                <BottomNavigation
                    value={'value'}
                    onChange={(event, newValue) => {
                        console.log(newValue);
                        //setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction value="characters" icon={<PersonAddIcon />} />
                    <BottomNavigationAction value="initiative" icon={<ListIcon />} />
                    <BottomNavigationAction value="setting" icon={<SettingsIcon />} />
                </BottomNavigation>
            </Drawer>
        );
    }
}

export default withStyles(styles)(FloorNavigation);

