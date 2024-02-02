import './App.css';
import { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import axios from 'axios';

const API_URL = 'http://www.omdbapi.com?apikey=a22821dd'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    //const response = await fetch(`${API_URL}&s=${title}`);
    //const data = await response.json();
    axios.post(`${API_URL}&s=${title}`).then(res => setMovies(res.data.Search))

    //setMovies(res.data.Search);
  }

  useEffect(() => {
    searchMovies('Kal Ho Naa Ho');
  }, []);

  return(
    <div className='app'> 
      <h1>MovieDB</h1>
      <div className='search'> 
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={event => {
            if(event.key === 'Enter') {
              searchMovies(searchTerm)
            }
          }}
        />
          
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 ? 
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
