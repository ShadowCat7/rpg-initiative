import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel.js';
import Container from '../redux/Container.jsx';
import Typography from '@material-ui/core/Typography/Typography.js';
import FormGroup from '@material-ui/core/FormGroup/FormGroup.js';
import Button from '@material-ui/core/Button/Button.js';

const styles = (theme) => ({
    root: {
    },
    settingsSection: {
        margin: '20px 0',
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
    resetButton: {
        backgroundColor: theme.palette.red[500],
        color: theme.palette.getContrastText(theme.palette.red[500]),

        '&:hover': {
            backgroundColor: theme.palette.red[700],
        },
    }
});

class Settings extends Component {
    handleResetApplication = () => {
        this.props.actions.resetApplication();
    };

    onChange = (e, checked) => {
        const name = e.target.name;

        this.props.actions.changeSetting({
            name,
            value: checked,
        });
    };

    render() {
        const {
            classes,
            settings: {
                darkMode,
            },
        } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h3">
                    Settings
                </Typography>
                <div className={classes.settingsSection}>
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
                </div>
                <div className={classes.settingsSection}>
                    <Button
                        classes={{ root: classes.resetButton }}
                        onClick={this.handleResetApplication}
                    >
                        Reset Application
                    </Button>
                </div>
            </div>
        );
    }
}

export default Container(withStyles(styles)(Settings));