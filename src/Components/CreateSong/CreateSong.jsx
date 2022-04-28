import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const CreateSong = (props) => {

    const [title, setTitle] = useState(0);
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');



    function handleSubmit(event) {
        event.preventDefault()
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            liked: "False",
            img_url: null,
            num_likes: 0
        };

        props.createNewSong(newSong);
    }

    //Modal Logic

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <Button variant="dark" onClick={handleShow}>
            Create Song
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>CreateSong</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
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
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Create</button>
                </form>
            </Modal.Body>
        </Modal>
        </>

        

     );
}
 
export default CreateSong;