import React, { useState } from 'react';
import './Song.css'

const Song = ({id, title, artist, album, release_date, genre, liked, image_url, num_likes}) => {



    return ( 
        <tr>
            <th className="">
                <div className="">
                    <img className="image" src={image_url} alt="Cannot find album Art"/>
                </div>
                <div className="d-flex flex-row">
                    <h6>{num_likes}</h6>
                    <button>{liked}</button>
                </div>
            </th>
            <th>{id}</th>
            <th>{title}</th>
            <th>{artist}</th>
            <th>{album}</th>
            <th>{release_date}</th>
            <th>{genre}</th>
        </tr>
     );
}
 
export default Song;