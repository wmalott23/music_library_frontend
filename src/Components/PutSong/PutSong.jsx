import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const PutSong = (props) => {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [imageUrl, setImageUrl] = useState('');



    function handleSubmit(event) {
        event.preventDefault()
        let newSong = {
            id: id,
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            liked: "False",
            img_url: imageUrl,
            num_likes: 0,
        };

        props.putNewSong(newSong);
    }

    //Modal Logic

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return ( 
        <>
        <Button variant="dark" onClick={handleShow}>
            Update Song
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body bg-success p-1" onSubmit={handleSubmit}>
                    <div className="align-content-center" >
                        <label>ID: </label>
                        <textarea type='text' onChange={(event) => setId(event.target.value)}/>
                    </div>            <div>
                        <label>Title: </label>
                        <textarea type='text' onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div>
                        <label>Artist: </label>
                        <textarea type='text' onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label>Album: </label>
                        <textarea type='text' onChange={(event) => setAlbum(event.target.value)}/>
                    </div>
                    <div>
                        <label>Release Date: </label>
                        <textarea type='text' onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>
                    <div>
                        <label>Genre: </label>
                        <textarea type='text' onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <label>image URL: </label>
                        <textarea type='text' onChange={(event) => setImageUrl(event.target.value)}/>
                    </div>
                    <button variant="primary" onClick={handleClose}>Create</button>
                </form>
            </Modal.Body>
        </Modal>
        </>

     );
}
 
export default PutSong;