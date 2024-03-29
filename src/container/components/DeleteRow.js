import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function DeleteUserActionItem({ deleteUser, ...props }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <GridActionsCellItem {...props} onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this property?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setOpen(false);
              deleteUser();
            }}
            color="warning"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
