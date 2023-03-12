import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./ViewEntry.css";
import posFrog from '../image/good-frog.png';
import neuFrog from '../image/neutral-frog.png';
import negFrog from '../image/bad-frog.png';
import axios from 'axios';

const ViewEntry = (props) => {
    let [journal, setJournal] = useState(props.entry.journal);

    const handleChange = (event) => {
        setJournal(event.target.value);
    }
    const editEntry = (event) => {
        event.preventDefault();

        const updatedEntry = {
            journal: journal,
        }

        axios
        .put(`http://localhost:3001/api/updateEntry`, updatedEntry)
        .then(response => {
            console.log(response);
            props.setEntry({
                ...props.entry,
            })

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
defaultValue={journal}
className="text-field-container"
onChange={handleChange}



/>
</div>


</Box>


<button className="enter-button" onClick={editEntry}>Edit</button>




<div className="picture-options-container">
{/* <div className="picture-option">Froggy analyzed that you were feeling: </div> */}
<div className="picture-option">Your Pictures:</div>

{/* <div class="row">
<div class="column1"> */}
<img src={props.entry.images} 
width= "133" height= "133"/>
{/* </div> */}
{/* 
<div class="column2">
<img src={'https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'} 
width= "200" height= "133"/>
</div>
</div> */}

  
</div>


    
        </React.Fragment>
    );
}

export default ViewEntry;