import React, { useState } from 'react';
import './UpdateMusic.css'


const UpdateMusic = (props) => {

    function handleSubmit(event) {
        props.getAllSongsProperty();
    }

    return ( 
        <div onSubmit={handleSubmit}>
            <button>Update Songs</button>
        </div>
     );
}
 
export default UpdateMusic;