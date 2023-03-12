import React, {useState, useEffect} from 'react';
import './CreateEntry.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
// import { useNavigate } from "react-router-dom";

const CreateEntry = (props) => {
  // const navigate = useNavigate();

  let [journal, setJournal] = useState("");
  let [imageURL, setImageURL] = useState("");
  let [predictedMood, setPredictedMood] = useState("");

  const handleJournalChange = (event) => {
    setJournal(event.target.value);
    console.log(`current journal description is ${journal}`);
  }

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
    console.log(`current imageURL is ${imageURL}`);
  };

  const createEntry = (event) => {
    event.preventDefault();
  
    const entry = {
      journal: journal,
      images: imageURL,
      date: new Date(),
      user: '640d339a41d1606599987b9c',
    };

    axios
    .post(`http://localhost:3001/api/createEntry`, entry)
    .then(response => {
      console.log(response);
      console.log(response.data.data.mood);
      setPredictedMood(response.data.data.mood);
      // navigate("/");
    })


  }
    
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
  onChange={handleJournalChange} 

/>
</div>


    </Box>
    
    
    <button className="enter-button" onClick={createEntry}>Enter</button>

    
    
    
    <div className="picture-options-container">
    <div className="picture-option">Based off of your diary entry, Froggy predicts that you are feeling: {predictedMood}</div>
    <div className="picture-option">Add a picture to your entry</div>

      
    </div>
    
    
    <TextField 
    id="outlined-basic" 
    label="Image URL" 
    variant="outlined"
    onChange={handleImageURLChange}></TextField>

    <button className="upload-button">Upload</button>
        </React.Fragment>
        
    );
}

export default CreateEntry;