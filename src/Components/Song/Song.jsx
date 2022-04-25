import React, { useState } from 'react';
import './Song.css'

const Song = ({title, artist, album, release_date, genre, like, image_url, num_likes}) => {
    return ( 
        <div>
            <div>
                <div>
                <i >{image_url}</i>
                </div>
                <div>
                    <h6>{like}</h6>
                </div>
                <div>
                    <h6>{num_likes}</h6>
                </div>

            </div>
            <div>
                <div>
                    <h6>{title}</h6>
                </div>
                <div>
                    <h6>{artist}</h6>
                </div>
                <div>
                    <h6>{album}</h6>
                </div>
                <div>
                    <h6>{release_date}</h6>
                </div>
                <div>
                    <h6>{genre}</h6>
                </div>
            </div>
        </div>
     );
}
 
export default Song;