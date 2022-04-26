import React, { useState } from 'react';



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
        <form className="bg-primary" onSubmit={handleSubmit}>Delete
            <div>
                <label>ID: </label>
                <textarea type='text' onChange={(event) => setId(event.target.value)}/>
            </div>
            <button>Delete</button>
        </form>
        

     );
}
 
export default DeleteSong;