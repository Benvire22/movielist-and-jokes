import React from 'react';

interface Props {
    joke: string;
    getNewJoke: React.MouseEventHandler;
}

const JokeBlock: React.FC<Props> = ({joke, getNewJoke}) => {
    return (
        <div>
            <button onClick={getNewJoke}>Get new joke</button>
            <h1>Joke: {joke}</h1>
        </div>
    );
};

export default JokeBlock;