import React from 'react';

interface Props {
  joke: string;
  getNewJoke: React.MouseEventHandler;
}

const JokeBlock: React.FC<Props> = ({joke, getNewJoke}) => {
  return (
    <div className="col-5 border p-3 rounded">
      <button className="btn btn-success fs-4 mb-3" onClick={getNewJoke}>Get new joke</button>
      <h2><span className="text-success">Chuck Norris joke</span>: {joke}</h2>
    </div>
  );
};

export default JokeBlock;