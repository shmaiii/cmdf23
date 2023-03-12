import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateEntry from '../pages/CreateEntry';
import ViewEntry from '../pages/ViewEntry';
import './Dialogue.css';
import { padding } from '@mui/system';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  
  const status = props.status;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let content;
  if (status === "create"){
    content = <CreateEntry />
  } else {
    content = <ViewEntry />
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle
          fontFamily={'Public Sans, sans-serif'}
          fontWeight= {"600"}
          fontSize= {"40px"}
          color= {"#01575C"}
        >
        Add a diary entry <span id="title-date"> March 12, 2023</span></DialogTitle>
        <DialogContent>
            {content}
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="1440px"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id="dialog-button">
            <div style={{padding: "0px 20px"}}>
              Cancel
            </div>
          </Button>
          <Button onClick={handleClose} id="dialog-button">
          <div style={{padding: "0px 20px"}}>
              Finish
            </div>
            </Button> 
          
        </DialogActions>
      </Dialog>
    </div>
  );
}