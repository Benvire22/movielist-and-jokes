import React, {useState} from 'react';

interface Props {
  onSubmit: (movie: string) => void;
}

const MovieForm: React.FC<Props> = ({onSubmit}) => {
  const [movieField, setMovieField] = useState<string>('');

  const addNewMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(movieField);
    setMovieField('');
  };

  const changeMovieField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieField(e.target.value);
  };

  return (
    <form onSubmit={addNewMovie}>
      <div className="input-group d-flex gap-3 justify-content-center mb-3">
        <input
          className="form-control rounded fs-5"
          type="text"
          onChange={changeMovieField}
          value={movieField}
          placeholder="Enter movie"
          required
        />
        <button className="btn btn-primary rounded" type="submit">Add new film</button>
      </div>
    </form>
  );
};

export default MovieForm;