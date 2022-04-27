import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const CreateSong = (props) => {

    const [title, setTitle] = useState(0);
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [imageUrl, setImageUrl] = useState('');



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
                    <form className="bg-success" onSubmit={handleSubmit}>
                    <div>
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
                    <button>Create</button>
                </form>
            </Modal.Body>
        </Modal>
        </>

        

     );
}
 
export default CreateSong;