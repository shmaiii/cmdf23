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

<div class="row">
<div class="column1">
<img src={'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'} 
width= "133" height= "133"/>
</div>

<div class="column2">
<img src={'https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'} 
width= "200" height= "133"/>
</div>
</div>

  
</div>





    
        </React.Fragment>
    );
}

export default ViewEntry;