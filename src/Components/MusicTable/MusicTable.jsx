import React, { useState } from 'react';
import Song from '../Song/Song';
import './MusicTable.css'

const MusicTable = (props) => {

    const [search, setSearch] = useState('')

    let songList = props.parentSongs.filter(function(el) {
        if(el.album.includes(search) || el.artist.includes(search) || el.genre.includes(search) ||  el.release_date.includes(search) || el.title.includes(search) ){
        return true;
        };
    });

    return (  
            <div>
            <form>
                <input type="text" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
            </form>)
            {songList.map((song) => {
                return(
                    <div>
                        <Song   id={song.id}
                                title={song.title}
                                artist={song.artist}
                                album={song.album}
                                release_date={song.release_date}
                                genre={song.genre}
                                like={song.liked}
                                image_url={song.img_url}
                                num_likes={song.num_likes}/>
                    </div>
                    )
                })}
            </div>

    );
}
 
export default MusicTable;