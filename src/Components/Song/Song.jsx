import axios from 'axios';
import React, { useState } from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal'
import PutSong from '../PutSong/PutSong'
import './Song.css'

const Song = ({id, title, artist, album, release_date, genre, liked, image_url, num_likes}) => {

    const baseURL = "http://127.0.0.1:8000/api/music_library/";
    
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

    async function handleClick (){
        if(like === `false`) {
            let response = await axios.patch(`${likedURL}${id}/`, likedSong);
            if(response.status === 201){
                window.location.reload(false);
            }

        }
        if(like === `true`) {
            let response = await axios.patch(`${dislikedURL}${id}/`, unlikedSong);
            if(response.status === 201){
                window.location.reload(false);    
        }
        }
    }

    // Delete Button

    async function handleDelete() {
        await axios.delete(`${baseURL}${id}/`, null);
        window.location.reload(false);
    }

    // Add Image URL

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [imageUrl, setImageUrl] = useState('');


    async function handleImage(event) {
        let addImage = {
            img_url: imageUrl,
        };   
        await axios.patch(`${baseURL}image/${id}/`, addImage); 
        window.location.reload(false);
    }

    // Change Song

    async function putSong(Song){
        let response = await axios.put(`${baseURL}${id}/`, Song);
        if(response.status === 201){
            window.location.reload(false);
        }
      }

    // HTML/CSS

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
            <th>
                <PutSong className="button" putSong={putSong}/>
                <button className="btn bg-success align-self-center text-white m-1" onClick={handleDelete}>Delete</button> 
                <>
                <button className="btn bg-success align-self-center text-white m-1" onClick={handleShow}>Add Image</button> 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleImage}>
                            <div className="d-flex flex-column align-content-end p-1">
                                <textarea className="form-control form-control" type='text' placeholder="Image URL" onChange={(event) => setImageUrl(event.target.value)}></textarea>
                            </div>
                            <button className="btn bg-success align-self-center text-white m-1" onClick={handleClose}>Add Image</button> 
                        </form>
                    </Modal.Body>
                </Modal>
                </>
            </th>
        </tr>
     );
}
 
export default Song;