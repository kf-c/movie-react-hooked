import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=d08036ee";


const App = () => {
  return (
    <div className="App">
			<h1>Welcome to react</h1>
    </div>
  );
}

export default App;
