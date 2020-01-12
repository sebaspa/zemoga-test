import React from 'react';
import Character from './Character';

const ListCharacters = ({characters}) => (
    <div className="container">
        <div className="row">
            {characters.map(character => (
                <Character
                    key={character.id}
                    character={character}
                />
            ))}
        </div>
    </div>
);

export default ListCharacters;