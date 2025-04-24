import Character from "./Character";
import './Characters.css';

export default function Characters({ characters }) {
  return <div className="characters">
    {characters.map(character => <Character key={character.id} character={character} />)}
  </div>
}