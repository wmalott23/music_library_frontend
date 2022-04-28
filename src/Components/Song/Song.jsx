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

    const [like, setLike] = useState(0)

    const likedURL = `http://127.0.0.1:8000/api/music_library/liked/`;
    const dislikedURL = `http://127.0.0.1:8000/api/music_library/disliked/`;

    let likedSong = {
        liked: "True",
    }
    let dislikedSong = {
        liked: "False",
    }

    async function handleClick (){ 
        if(like === 0) {
            await axios.patch(`${likedURL}${id}/`, likedSong);
            setLike(1)
        }
        if(like === 1) {
            await axios.patch(`${dislikedURL}${id}/`, dislikedSong);
            setLike(0)
        }
    }


    return ( 
        <tr className="all-rows" style={divStyle}>
            <th className="entry h4">
                {num_likes}
                <BsFillBookmarkHeartFill href="" className="btn" size={50} onClick={handleClick}/>
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