import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from './redux/characterSlice';
import narutoBackground from './assets/naruto.avif';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character.character);
  const status = useSelector((state) => state.character.status);
  const error = useSelector((state) => state.character.error);

  const handleSearch = () => {
    if (name.trim()) {
      dispatch(fetchCharacter(name));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen py-10"
      style={{
        backgroundImage: `url(${narutoBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Naruto Character Search</h1>
        <div className="flex mb-6 justify-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter character name"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        <div className="character">
          {status === 'loading' && <p className="text-gray-800">Loading...</p>}
          {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
          {status === 'succeeded' && character && (
            <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md text-left">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{character.name}</h2>
              <img src={character.images[0]} alt={character.name} className="max-w-xs mx-auto mb-4" />
              <p className="text-gray-700"><strong>Debut:</strong> {character.debut.manga}, {character.debut.anime}</p>
              <p className="text-gray-700"><strong>Appears In:</strong> {character.debut.appearsIn}</p>
              <p className="text-gray-700"><strong>Sex:</strong> {character.personal.sex}</p>
              <p className="text-gray-700"><strong>Age:</strong> {character.personal.age['Part I']}</p>
              <p className="text-gray-700"><strong>Affiliation:</strong> {character.personal.affiliation}</p>
              <p className="text-gray-700"><strong>Ninja Rank:</strong> {character.rank.ninjaRank['Part I']}</p>
              <p className="text-gray-700"><strong>Voice Actor:</strong> {character.voiceActors.english}</p>
            </div>
          )}
          {status === 'succeeded' && !character && (
            <p className="text-gray-800">No character found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
