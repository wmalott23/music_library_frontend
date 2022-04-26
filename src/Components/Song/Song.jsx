import React, { useState } from 'react';
import './Song.css'

const Song = ({id, title, artist, album, release_date, genre, liked, image_url, num_likes}) => {



    return ( 
        <div className="d-flex flex-row">
            <div className="">
                <div className="">
                    <img className=""/>
                </div>
                <div className="">
                    <h6>{num_likes}1</h6>
                    <button>{liked}</button>
                </div>
            </div>
                <div>
                    <h5>{id}</h5>
                </div>
                <div>
                    <h5>{title}</h5>
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
     );
}
 
export default Song;