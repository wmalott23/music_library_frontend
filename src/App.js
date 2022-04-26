import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBar from './Components/SearchBar/SearchBar';
import UpdateMusic from './Components/UpdateMusic/UpdateMusic';
import CreateSong from './Components/CreateSong/CreateSong';

const baseURL = "http://127.0.0.1:8000/api/music_library/";

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    await axios.get(`${baseURL}`).then(response => setSongs(response.data));
  }

  async function createSong(newSong){
    let response = await axios.post(`${baseURL}`, newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function putSong(newSong){
    let response = await axios.put(`${baseURL}${newSong.id}/`,{
      
    });
    if(response.status === 201){
      await getAllSongs();
    }
  }


  return (
    <div className="all-items bg-success d-flex flex-column align-items-center">
      <div className="d-flex flex-column col-md-12 align-items-center bg-white">
        <NavigationBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="col-md-12">
        <MusicTable parentSongs={songs}/>
      </div>
      <div>
        <UpdateMusic getAllSongsProperty={useEffect}/>
      </div>
      <div>
        <CreateSong createNewSong={createSong}/>
      </div>
    </div>
  );
}

export default App;
