import React from 'react';
import Song from '../Song/Song';
import './MusicTable.css'

const MusicTable = (props) => {
    return (  
        props.parentSongs.map((song) => {
            return(
                <div>
                    <Song   title={props.title}
                            artist={props.artist}
                            album={props.album}
                            release_date={props.release_date}
                            genre={props.genre}
                            like={props.like}
                            image_url={props.img_url}
                            num_likes={props.num_likes}/>
                </div>
            )
        })
    );
}
 
export default MusicTable;