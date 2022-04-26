import React, { useState } from 'react';
import './UpdateMusic.css'


const UpdateMusic = (props) => {

    function handleSubmit(event) {
        props.getAllSongsProperty();
    }

    return ( 
        <div onSubmit={handleSubmit}>
        </div>
     );
}
 
export default UpdateMusic;