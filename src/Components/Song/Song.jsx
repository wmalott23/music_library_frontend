import React, { useState } from 'react';
import './Song.css'

const Song = ({title, artist, album, release_date, genre, liked, image_url, num_likes}) => {



    return ( 
        <div className="song-box border d-flex">
            <div className="like-image d-flex flex-column col-md-3 p-1 align-items-start">
                <div className="image p-1">
                    <img className="image" src={image_url} alt="image unavailable"/>
                </div>
                <div className="likes p-1">
                    <h6>{num_likes}</h6>
                    <button>{liked}</button>
                </div>
            </div>
            <div className="info d-flex align-items-start flex-column">
                <div className="mb-2">
                    <h5>{title}</h5>
                </div>
                <div>
                    <h7>{artist}</h7>
                </div>
                <div>
                    <h7>{album}</h7>
                </div>
                <div>
                    <h7>{release_date}</h7>
                </div>
                <div>
                    <h7>{genre}</h7>
                </div>
            </div>
        </div>
     );
}
 
export default Song;