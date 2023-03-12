import React, {useState, useEffect} from 'react';
import './CreateEntry.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateEntry = (props) => {
    return (
        <React.Fragment>
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={8}
          placeholder="Type how you are feeling today"
        />
      </div>
    </Box>

    <div>Based off of your diary entry. Froggy predicts that you are feeling: Happy</div>
    <div>Add a picture to your entry</div>
    <div>Or, enter an image URL</div>
    <TextField id="outlined-basic" label="Image URL" variant="outlined"></TextField>
        </React.Fragment>
    );
}

export default CreateEntry;