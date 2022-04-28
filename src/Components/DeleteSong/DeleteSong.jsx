import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeleteSong.css'


const DeleteSong = (props) => {

    const [id, setId] = useState(0);



    function handleSubmit(event) {
        event.preventDefault()
        let newSong = {
            id: id,
        };

        props.deleteNewSong(newSong);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <Button variant="dark" onClick={handleShow}>
            Delete Song
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="ID:" onChange={(event) => setId(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center" onClick={handleClose}>Delete</button>
                </form>
            </Modal.Body>
        </Modal>
        </>

     );
}
 
export default DeleteSong;