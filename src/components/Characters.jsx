import React, { Component } from 'react';

import Container from '../redux/Container.jsx';
import CharacterCard from '../components/CharacterCard.jsx';

class Characters extends Component {
    render() {
        const { characters, isRecurring, onDelete } = this.props;

        // TODO key can collide easily
        return characters.map((character, i) => (
            <CharacterCard
                key={`${character.name}-${i}`}
                character={character}
                isRecurring={isRecurring}
                onDelete={onDelete}
            />
        ));
    }
}

export default Container(Characters);