import React from 'react';
import Song from '../Song/Song';
import './MusicTable.css'

const MusicTable = (props) => {



    return (  
            props.parentSongs.map((song) => {
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