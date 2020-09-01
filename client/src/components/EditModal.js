import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { editInstructor } from "../JS/actions/actions";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";

function EditModal({ editInstructor, person }) {
  const [open, setOpen] = React.useState(false);
  console.log(person);
  const [input, setInput] = React.useState({
    instructor: person.instructor,
    timeTable: person.timeTable,
    nbTracks: person.nbTracks,
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value,
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloses = () => {
    setOpen(false);
    {
      console.log(person._id);
    }
    editInstructor(person._id, input);
  };

  return (
    <div>
      <EditIcon style={{ color: "#DAA520" }} onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            value={input.instructor}
            autoFocus
            name="instructor"
            margin="dense"
            id="name"
            onChange={handleChange}
            label="Instructor name"
            type="text"
            fullWidth
          />
          <TextField
            value={input.timeTable}
            name="timeTable"
            autoFocus
            margin="dense"
            id="name"
            onChange={handleChange}
            label="time table"
            type="text"
            fullWidth
          />
          <TextField
            value={input.nbTracks}
            name="nbTracks"
            autoFocus
            margin="dense"
            id="name"
            onChange={handleChange}
            label="number of tracks"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
          <Button onClick={handleCloses} color="primary">
            save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connect(null, { editInstructor })(EditModal);
