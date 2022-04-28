import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import './Song.css'

const Song = ({id, title, artist, album, release_date, genre, liked, image_url, num_likes}) => {

    var divStyle = {
        backgroundImage: `url(${image_url})`,
        height: `150px`,
        backgroundAttachment: `fixed`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
    }

    return ( 
        <tr className="all-rows" style={divStyle}>
            <th className="">
                <h6 className="entry h2">{num_likes}<AiOutlineHeart/></h6>
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