import React, { useState } from 'react';
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

    return ( 
        <form className="box p-2 bg-white d-flex flex-column align-items-center" onSubmit={handleSubmit}>Fill out this form to determine which song is bad!
            <div>
                <label>ID: </label>
                <textarea type='text' onChange={(event) => setId(event.target.value)}/>
            </div>
            <button>Delete</button>
        </form>
        

     );
}
 
export default DeleteSong;