import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Song from '../Song/Song';
import './MusicTable.css';

const MusicTable = (props) => {

    const [search, setSearch] = useState('')

    let songList = props.parentSongs.filter(function(el) {
        if(el.album.includes(search) || el.artist.includes(search) || el.genre.includes(search) ||  el.release_date.includes(search) || el.title.includes(search) ){
        return true;
        };
    });

    return (  
            <Table className="table">
                    <tr>
                    <input className="search" type="text" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th className="col-md-1"></th>
                    </tr>
                        {songList.map((song) => {
                            return(
                                    <Song   id={song.id}
                                            title={song.title}
                                            artist={song.artist}
                                            album={song.album}
                                            release_date={song.release_date}
                                            genre={song.genre}
                                            liked={song.liked}
                                            image_url={song.img_url}
                                            num_likes={song.num_likes}/>
                                )
                            })}
            </Table>

    );
}
 
export default MusicTable;