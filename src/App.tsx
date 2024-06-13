import './App.css';
import {useState} from "react";
import MovieForm from "./components/MovieForm/MovieForm";

interface Movie {
    id: string;
    name: string;
}

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
    }

    return (
        <div className="App">
            <MovieForm onSubmit={addNewMovie} />
            <h2>Too watch lit</h2>
            {movies.map((movie) => (
                <div className="row" key={movie.id}>
                    <input
                        type="text"
                        value={movie.name}
                        onChange={(e) => changeMovie(e.target.value, movie.id)}
                    />
                    <button onClick={() => removeMovie(movie.id)}>remove</button>
                </div>
            ))}

        </div>
    );
};

export default App;