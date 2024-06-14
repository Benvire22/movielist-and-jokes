import React from 'react';
import {Movie} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[];
  onChange: (value: string, id: string) => void;
  onRemove: (id: string) => void;
}

const MoviesList: React.FC<Props> = ({movies, onChange, onRemove}) => {
  return (
    <div className="row d-flex justify-content-center mb-3">
      <h2>Too watch list</h2>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          name={movie.name}
          id={movie.id}
          onRemove={() => onRemove(movie.id)}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default MoviesList;