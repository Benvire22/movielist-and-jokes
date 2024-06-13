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
            <div className="">
                <input
                    type="text"
                    onChange={changeMovieField}
                    value={movieField}
                    placeholder="Enter movie"
                    required
                />
            </div>
            <button type='submit'>Add new film</button>
        </form>
    );
};

export default MovieForm;