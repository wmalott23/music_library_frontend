import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable'
import NavigationBar from './Components/NavigationBar/NavigationBar';
import CreateSong from './Components/CreateSong/CreateSong';
import PutSong from './Components/PutSong/PutSong';
import DeleteSong from './Components/DeleteSong/DeleteSong';

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

  async function putSong(newSong){
    let response = await axios.put(`${baseURL}${newSong.id}/`, newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function deleteSong(newSong){
    let response = await axios.delete(`${baseURL}${newSong.id}/`, null);
    if(response.status === 204){
      await getAllSongs();
    }
  }

  return (
    <div className="all-items bg-success d-flex flex-column align-items-center">
      <div className="d-flex flex-column col-md-12 align-items-center bg-dark">
        <NavigationBar />
        <div className="p-1">
          <PutSong className="button" putNewSong={putSong}/>
          <CreateSong className="button" createNewSong={createSong}/>
          <DeleteSong className="button" deleteNewSong={deleteSong}/>
        </div>
      </div>
      <div className="col-md-12 p-1 d-flex flex-column align-items-center">
        <MusicTable parentSongs={songs}/>
      </div>
    </div>
  );
}

export default App;
