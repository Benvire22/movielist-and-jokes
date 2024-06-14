import React from 'react';
import {Movie} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[];
  onChange: (value: string, id: string) => void;
  onRemove: (id: string) => void;
}

const MoviesList: React.FC<Props> = ({movies, onChange, onRemove}) => {

  const movieList = (
    <>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          name={movie.name}
          id={movie.id}
          onRemove={() => onRemove(movie.id)}
          onChange={onChange}
        />
      ))}
    </>
  );

  return (
    <div className="row d-flex justify-content-center mb-3">
      <h2 className="mb-4 text-primary">Too watch list:</h2>
      {movies.length > 0 ? movieList : <h4 className="text-secondary">Empty! Add new film here</h4>}
    </div>
  );
};

export default MoviesList;