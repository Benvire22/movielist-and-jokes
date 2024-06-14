import './App.css';
import {useEffect, useState} from "react";
import MovieForm from "./components/MovieForm/MovieForm";
import {Joke, Movie} from "./types";
import MoviesList from "./components/MoviesList/MoviesList";
import JokeBlock from "./components/JokeBlock/JokeBlock";

// const localData = () => {
//     let array: Movie[] = [];
//
//     if (localStorage.getItem('movies')) {
//         array = JSON.parse(localStorage.getItem('movies'));
//     }
//
//     return
// }

const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [joke, setJoke] = useState<string>('');
    const [newJoke, setNewJoke] = useState<boolean>(true);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://api.chucknorris.io/jokes/random');

            if (response.ok) {
                const jokeData: Joke = await  response.json();

                const joke = jokeData.value;
                setJoke(joke);
            }

        };
        void request();
    }, [newJoke]);

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

    const getNewJoke = () => {
        setNewJoke(prevState => !prevState);
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
            <JokeBlock joke={joke} getNewJoke={getNewJoke} />
        </div>
    );
};

export default App;