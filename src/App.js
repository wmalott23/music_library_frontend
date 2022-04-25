import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';
import UpdateMusic from './Components/UpdateMusic/UpdateMusic';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    await axios.get('http://127.0.0.1:8000/api/music_library/')
    .then(response => setSongs(response.data));
  }

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <MusicTable parentSongs={songs}/>
      </div>
      <div>
        <UpdateMusic getAllSongsProperty={useEffect} />
      </div>
    </div>
  );
}

export default App;
