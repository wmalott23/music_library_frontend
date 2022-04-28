import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './PutSong.css'

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
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1" >
                        <textarea className="form-control form-control" type='text' placeholder="Song ID:" onChange={(event) => setId(event.target.value)}></textarea>
                    </div>            
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Title:" onChange={(event) => setTitle(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Artist:" onChange={(event) => setArtist(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Album:" onChange={(event) => setAlbum(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Release Date (Try YYYY-MM-DD):" onChange={(event) => setReleaseDate(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Genre:" onChange={(event) => setGenre(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Album Image URL:" onChange={(event) => setImageUrl(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center" onClick={handleClose}>Update</button>
                </form>
            </Modal.Body>
        </Modal>
        </>

     );
}
 
export default PutSong;