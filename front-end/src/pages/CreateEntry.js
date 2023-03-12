import React, {useState, useEffect} from 'react';
import './CreateEntry.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateEntry = (props) => {
    return (
        <React.Fragment>
               

    <Box className="text-field-container">

    <div>

      
<TextField
  id="outlined-multiline-static"
  multiline
  rows={8}
  placeholder="Type out how you are feeling today"
  className="text-field-container"
  
  

/>
</div>


    </Box>
    
    
    <button className="enter-button">Enter</button>

    
    
    
    <div className="picture-options-container">
    <div className="picture-option">Based off of your diary entry, Froggy predicts that you are feeling:</div>
    <div className="picture-option">Add a picture to your entry</div>

      
    </div>
    
    
    <TextField 
    id="outlined-basic" 
    label="Image URL" 
    variant="outlined"></TextField>

    <button className="upload-button">Upload</button>
        </React.Fragment>
        
    );
}

export default CreateEntry;