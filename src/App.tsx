import './App.css';
import {useEffect, useState} from "react";
import MovieForm from "./components/MovieForm/MovieForm";
import {Joke, Movie} from "./types";
import MoviesList from "./components/MoviesList/MoviesList";
import JokeBlock from "./components/JokeBlock/JokeBlock";

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

    useEffect(() => {
        let moviesList: Movie[] = [];
        try {
            moviesList = JSON.parse(localStorage.getItem('movies') || '[]');
            console.log(moviesList);
            setMovies(moviesList);
        } catch (e) {
            setMovies(moviesList);
        }
    }, []);

    const addNewMovie = (movie: string) => {
        setMovies(prevState => {
            const copyMovies = [
                ...prevState,
                {
                    id: Math.random().toString(),
                    name: movie,
                }
            ];
            localStorage.setItem('movies', JSON.stringify(copyMovies));
            return copyMovies;
        });
    };

    const removeMovie = (id: string) => {
        setMovies(prevState => {
            const copyMovies =  prevState.filter((movie) => movie.id !== id);
            localStorage.setItem('movies', JSON.stringify(copyMovies));
            return copyMovies;
        });
    };

    const changeMovie = (value: string, id: string) => {
        setMovies(prevState => {
            const copyMovies =  prevState.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        name: value,
                    };
                }
                return movie;
            });
            localStorage.setItem('movies', JSON.stringify(copyMovies));
            return copyMovies;
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