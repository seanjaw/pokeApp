import React, { useState, useEffect } from 'react';
import Header from './Header';
import PokeList from './PokeList';
import axios from 'axios';

function App() {

  const [pokeList, setPokeList ] = useState([]);

  useEffect(async () => {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
    .catch(err => console.log(err))
    setPokeList(result.data.results);

  }, []);



  return (
    <div className="App">
      <Header/>
      <PokeList pokeList = {pokeList} />
    </div>
  );
}

export default App;
