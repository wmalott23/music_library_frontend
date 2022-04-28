import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CreateSong from './Components/CreateSong/CreateSong';

const baseURL = "http://127.0.0.1:8000/api/music_library/";

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get(`${baseURL}`);
    setSongs(response.data);
  }

  async function createSong(newSong){
    let response = await axios.post(`${baseURL}`, newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }


  return (
    <div className="all-items bg-success d-flex flex-column align-items-center">
      <div className="d-flex flex-column col-md-12 align-items-center bg-dark">
        <NavigationBar />
        <div className="p-1">
          <CreateSong className="button" createNewSong={createSong}/>
        </div>
      </div>
      <div className="col-md-12 p-1 d-flex flex-column align-items-center">
        <MusicTable parentSongs={songs}/>
      </div>
    </div>
  );
}

export default App;
