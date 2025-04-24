import { useEffect, useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, [])

  return (
    <div className='app'>
      <h1>Rick and Morty</h1>
      {characters 
      ? <Characters characters={characters} /> 
      : <div>loading...</div>}
    </div>
  );
}

export default App;
