import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel.js';
import Container from '../redux/Container.jsx';
import Typography from '@material-ui/core/Typography/Typography.js';
import FormGroup from '@material-ui/core/FormGroup/FormGroup.js';

const styles = (theme) => ({
    root: {
    },
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
            '&:hover': {
                backgroundColor: fade(theme.palette.grey[100], theme.palette.action.hoverOpacity),
            },
            '& + $track': {
                backgroundColor: theme.palette.grey[100],
            },
        },
    },
    checked: {},
    track: {
    },
});

class Settings extends Component {
    onChange = (e, checked) => {
        const name = e.target.name;

        this.props.actions.changeSetting({
            name,
            value: checked,
        });
    };

    onChangeLocalStorage = (e, checked) => {
        this.props.actions.useLocalStorage({
            useLocalStorage: checked,
        });
    };

    render() {
        const {
            classes,
            settings: {
                darkMode,
                useLocalStorage,
            },
        } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h3">
                    Settings
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                name="darkMode"
                                classes={{ switchBase: classes.switch, checked: classes.checked, track: classes.track }}
                                onChange={this.onChange}
                                checked={darkMode}
                            />
                        }
                        label="Dark mode"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                color="primary"
                                name="useLocalStorage"
                                onChange={this.onChangeLocalStorage}
                                checked={useLocalStorage}
                            />
                        }
                        label="Use Local Storage"
                    />
                </FormGroup>
            </div>
        );
    }
}

export default Container(withStyles(styles)(Settings));