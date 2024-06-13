import './App.css';
import {useState} from "react";
import MovieForm from "./components/MovieForm/MovieForm";
import {Movie} from "./types";
import MoviesList from "./components/MoviesList/MoviesList";

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const addNewMovie = (movie: string) => {
        setMovies(prevState => {
            return [
                ...prevState,
                {
                    id: Math.random().toString(),
                    name: movie,
                }
            ];
        });
    };

    const removeMovie = (id: string) => {
        setMovies(prevState => {
            return  prevState.filter((movie) => movie.id !== id);
        });
    };

    const changeMovie = (value: string, id: string) => {
        setMovies(prevState => {
            return  prevState.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        name: value,
                    };
                }
                return movie;
            });
        });
    };

    return (
        <div className="App">
            <MovieForm onSubmit={addNewMovie} />
            <h2>Too watch lit</h2>
            <MoviesList
                movies={movies}
                onChange={changeMovie}
                onRemove={removeMovie}
            />
        </div>
    );
};

export default App;