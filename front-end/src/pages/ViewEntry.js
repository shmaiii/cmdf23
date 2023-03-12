import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./ViewEntry.css";

const ViewEntry = (props) => {
    return (
        <React.Fragment>
       <Box className="text-field-container">

<div>

  
<TextField
id="outlined-multiline-static"
multiline
rows={8}
defaultValue={props.entry.journal}
className="text-field-container"



/>
</div>


</Box>


<button className="enter-button">Edit</button>




<div className="picture-options-container">
<div className="picture-option">Based off of your diary entry, Froggy predicts that you are feeling:</div>
<div className="picture-option">Your Pictures:</div>

  
</div>


    
        </React.Fragment>
    );
}

export default ViewEntry;