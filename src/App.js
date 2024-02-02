import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//a22821dd

const API_URL = 'http://www.omdbapi.com?apikey=a22821dd'

const App = () => {

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Shrek');
  }, []);

  return(
    <div className='app'> 
      <h1>MovieDB</h1>
      <div className='search'> 
        <input
          placeholder='Search for movies'
          value="Movie title..."
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>
      {
        movies.length > 0 ? 
          (
          <div className='container'>
            {movies.map((movie) => (<MovieCard movie={movie}/>))}
          </div>
          ) : 
          (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
