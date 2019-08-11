import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography/Typography.js';
import AddIcon from '@material-ui/icons/Add';

import Container from '../redux/Container.jsx';
import Characters from '../components/Characters.jsx';
import AddCharacter from '../components/AddCharacter.jsx';
import CharacterCard from '../components/CharacterCard.jsx';

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

class InitiativeTracker extends Component {
    state = {
        isAddingCharacter: false,
    };

    handleAddCharacter = () => {
        this.setState({ isAddingCharacter: true });
    };

    handleSave = (character) => {
        this.props.actions.createNonRecurringCharacter(character);
        this.setState({ isAddingCharacter: false });
    };

    handleDelete = (characterId) => {
        this.props.actions.deleteNonRecurringCharacter(characterId);
    };

    renderCharacterCards() {
        const { classes, recurringCharacters, nonRecurringCharacters } = this.props;

        const newRecurring = recurringCharacters.map(c => ({
            ...c,
            isRecurring: true,
        }));

        return newRecurring
            .concat(nonRecurringCharacters)
            .sort((a, b) => {
                let comparison = b.initiative - a.initiative;

                if (!comparison) {
                    comparison = b.dexterity - a.dexterity;
                }

                return comparison;
            })
            .map((character, i) => (
                <CharacterCard
                    key={`${character.name}-${i}`}
                    character={character}
                    isRecurring={character.isRecurring}
                    onDelete={!character.isRecurring && this.handleDelete}
                />
            ));
    }

    render() {
        const { classes, nonRecurringCharacters } = this.props;
        const { isAddingCharacter } = this.state;

        const showInputs = isAddingCharacter || !nonRecurringCharacters.length;

        return (
            <>
                <Typography variant="h3" className={classes.title}>
                    Initiative Tracker
                </Typography>
                {this.renderCharacterCards()}
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

export default Container(withStyles(styles)(InitiativeTracker));