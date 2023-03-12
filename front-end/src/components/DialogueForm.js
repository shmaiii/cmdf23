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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a diary entry <span> March 12, 2023</span></DialogTitle>
        <DialogContent>
            {content}
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Finish</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}