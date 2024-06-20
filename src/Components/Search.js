import React, { useState, useContext } from 'react';
import { PlayerContext } from '../Context/playerContext';
import { songData, albumData, artistData } from '../StaticData/constant';


const Search = () => {
  const { nextTrack } = useContext(PlayerContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({ songs: [] });

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      const searchResults = [...songData].filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(searchResults);
    }
    else {
      setResults([]);
    }
  };

  return (
   
      <div className="flex flex-col ">
        <div className="flex items-center space-x-2 m-4 ">
          <input
            name="search-field"
            type="search"
            id="search-field"
            value={query}
            onChange={handleSearch}
            placeholder="Search for Music and Songs......"
            className="p-2 rounded-lg bg-gray-100 text-gray-900"
            style={{ outline: 'none', width: '150rem' }}
            autoComplete="off"
          />
          <button onClick={handleSearch} className="p-2 bg-green-200 font-medium text-gray-900 rounded-md">
            Search
          </button>
        </div>
        <div className="pl-5 rounded bg-[#121212]">
          {results.length > 0 && (
            <div className="flex flex-col">
              {results.map((item) => (
                <div key={item.id} onClick={() => nextTrack(item.id)} className="flex items-center space-x-2 p-2 cursor-pointer">
                  <img src={item.images} alt='Cover' className="w-10 h-10 rounded-md" />
                  <div className="flex flex-col">
                    <p className="text-gray-200">{item.name}</p>
                    <p className="text-gray-400">{item.artists}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {
            results.length === 0 && query.length > 0 && <p className="text-gray-200 p-2">No results found</p>
          }
        </div>
      </div>
    
  );
};

export default Search;
