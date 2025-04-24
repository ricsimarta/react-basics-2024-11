import { useState } from "react"
import './Character.css';

export default function Character ({ character }) {
  const [showEpisodes, setShowEpisodes] = useState(false);
  
  return <div className="character">
    <h2>{character.name}</h2>
    <h3>{character.species}</h3>
    <h4>{character.status}</h4>
    <button onClick={() => setShowEpisodes(!showEpisodes)}>show episodes</button>
    {showEpisodes && <ul>{character.episode.map((episode, index) => <li key={`episode-${index}`}>{episode}</li>)}</ul>}
  </div>
}