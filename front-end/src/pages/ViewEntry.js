import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./ViewEntry.css";

const ViewEntry = (props) => {
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
          defaultValue="This is where the existing content goes"
        />
      </div>
    </Box>

    <div>Based off of your diary entry. Froggy predicts that you are feeling: Happy</div>
    <div>Your pictures: </div>
    
        </React.Fragment>
    );
}

export default ViewEntry;