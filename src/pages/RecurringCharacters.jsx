import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography/Typography.js';
import AddIcon from '@material-ui/icons/Add';

import Container from '../redux/Container.jsx';
import Characters from '../components/Characters.jsx';
import AddCharacter from '../components/AddCharacter.jsx';

const styles = (theme) => ({
    title: {
        marginBottom: '10px',
    },
    addButton: {
        bottom: '20px',
        position: 'absolute',
        right: '20px',
    },
    input: {
        '& label.Mui-focused': {
            color: theme.palette.secondary[500],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary[500],
        },
    },
});

class RecurringCharacters extends Component {
    state = {
        isAddingCharacter: false,
    };

    handleAddCharacter = () => {
        this.setState({ isAddingCharacter: true });
    };

    handleSave = (character) => {
        this.props.actions.createRecurringCharacter(character);
        this.setState({ isAddingCharacter: false });
    };

    handleDelete = (characterId) => {
        this.props.actions.deleteRecurringCharacter(characterId);
    };

    render() {
        const { classes, recurringCharacters } = this.props;
        const { isAddingCharacter } = this.state;

        const showInputs = isAddingCharacter || !recurringCharacters.length;

        return (
            <>
                <Typography variant="h3" className={classes.title}>
                    Recurring Characters
                </Typography>
                <Characters
                    characters={recurringCharacters}
                    isRecurring={true}
                    onDelete={this.handleDelete}
                />
                {showInputs &&
                    <AddCharacter
                        classes={{ input: classes.input }}
                        color="secondary"
                        onSave={this.handleSave}
                    />
                }
                {!showInputs &&
                    <Fab
                        className={classes.addButton}
                        color="secondary"
                        aria-label="add"
                        onClick={this.handleAddCharacter}
                        disabled={isAddingCharacter}
                    >
                        <AddIcon />
                    </Fab>
                }
            </>
        );
    }
}

export default Container(withStyles(styles)(RecurringCharacters));