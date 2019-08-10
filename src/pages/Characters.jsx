import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography/Typography.js';
import AddIcon from '@material-ui/icons/Add';

import Character from '../components/CharacterInitiative.jsx';

const styles = (theme) => ({
    addButton: {
        // backgroundColor: theme.palette.primary[500],
        // borderRadius: '50%',
        // boxShadow:
        //     '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        // color: 'white',
        // cursor: 'pointer',
        // height: '56px',
        bottom: '20px',
        position: 'absolute',
        right: '20px',
        // width: '56px',
        //
        // '&:focus, &:active': {
        //     outline: 'none',
        // },
        // // Gross wildcard for catching svg paths
        // '& > *': {
        //     '&:focus, &:active': {
        //         outline: 'none',
        //     },
        // }
    },
    icon: {

    }
});

class Characters extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Typography variant="h3">
                    Characters
                </Typography>
                <Character character={{ name: 'Lukas Attridge' }} />
                <Character character={{ name: 'Melanie Attridge' }} />
                <Character character={{ name: 'Philip Wolfe' }} />
                <Fab color="primary" aria-label="add" className={classes.addButton}>
                    <AddIcon />
                </Fab>
            </>
        );
    }
}

export default withStyles(styles)(Characters);