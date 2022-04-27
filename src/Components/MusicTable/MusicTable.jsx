import React, { useState } from 'react';
import Song from '../Song/Song';
import './MusicTable.css'

const MusicTable = (props) => {

    const [search, setSearch] = useState(0)

    let songList = props.parentSongs

    function handleSubmit(event) {
        event.preventDefault();
        songList = props.parentSongs.filter(function(el) {
            if(el.album === search || el.artist === search || el.genre === search || el.releaseDate === search || el.title === search ) return true;
        });
    }

    return (  
            (<form onChange={handleSubmit}>
                <input type="text" placeholder="Search" onChange={(event) => setSearch(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>), 
            songList.map((song) => {
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
            })

    );
}
 
export default MusicTable;