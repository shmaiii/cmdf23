import React, {useState, useEffect} from 'react';
import './CreateEntry.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const CreateEntry = (props) => {
  // const navigate = useNavigate();

  let [journal, setJournal] = useState("");
  let [imageURL, setImageURL] = useState("");

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
      imageURL: imageURL,
      date: new Date(),
      user: '640d339a41d1606599987b9c',
    };

    axios
    .post(`http://localhost:3001/api/createEntry`, entry)
    .then(response => {
      console.log(response);
      // navigate("/");
    })


  }
    return (
      <React.Fragment>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
          noValidate
          autoComplete="off">
            <div>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={8}
                placeholder="Type how you are feeling today"
                onChange={handleJournalChange}
              />
            </div>
          </Box>

      <div>Based off of your diary entry. Froggy predicts that you are feeling: Happy</div>
      <div>Add a picture to your entry</div>
      <div>Or, enter an image URL</div>
      <TextField id="outlined-basic" label="Image URL" variant="outlined" onChange={handleImageURLChange}></TextField>
      <Button onClick={createEntry}>Finish</Button>
      </React.Fragment>
    );
}

export default CreateEntry;