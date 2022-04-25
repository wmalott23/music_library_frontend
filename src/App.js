import React, { useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([{title, artist, album, release_date, genre, liked, num_likes, img_url}])


  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <MusicTable parentSongs={songs}/>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
