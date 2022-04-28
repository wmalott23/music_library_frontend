import axios from 'axios';
import React, { useState } from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import './Song.css'

const Song = ({id, title, artist, album, release_date, genre, liked, image_url, num_likes}) => {

    //background image based on album cover
    var divStyle = {
        backgroundImage: `url(${image_url})`,
        height: `150px`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
    }

    //like button

    const [like, setLike] = useState(`${liked}`)
    const likedURL = `http://127.0.0.1:8000/api/music_library/liked/`;
    const dislikedURL = `http://127.0.0.1:8000/api/music_library/disliked/`;

    let likedSong = {
        liked: "True",
    }
    let unlikedSong = {
        liked: "False",
    }

    async function handleClick (event){
        if(like === `false`) {
            await axios.patch(`${likedURL}${id}/`, likedSong);
            console.log(liked)
        }
        if(like === `true`) {
            await axios.patch(`${dislikedURL}${id}/`, unlikedSong);
            setLike(`false`);
            console.log(liked)
        }
    }


    return ( 
        <tr className="all-rows" style={divStyle}>
            <th className="like-container h4 p-2 d-flex justify-content-center">
                <a href="" className={`${like} bg-success border border-success rounded`} size={50} onClick={handleClick}>
                {num_likes}
                <BsFillBookmarkHeartFill className="like-button"/>
                </a>
            </th>
            <th className="entry h4 h-25">{id}</th>
            <th className="entry h4">{title}</th>
            <th className="entry h4">{artist}</th>
            <th className="entry h4">{album}</th>
            <th className="entry h4">{release_date}</th>
            <th className="entry h4">{genre}</th>
        </tr>
     );
}
 
export default Song;