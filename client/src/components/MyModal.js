import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addInstructor } from "../JS/actions/actions";
import { connect } from "react-redux";

function MyModal({ addInstructor }) {
  const [open, setOpen] = React.useState(false);

  const [input, setInput] = React.useState({
    instructor: "",
    timeTable: "",
    nbTracks: 1,
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
    addInstructor(input);
  };
  

  return (
    <div>
      <Button
        style={{
          color: "white",
          backgroundColor: "#170ff0",
          textAlign: "center",
          fontSize: ".8125rem",
          padding:"10px",
          marginBottom:"25px"
        }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        + Add New Instructor
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
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
            name=" nbTracks"
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
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connect(null, { addInstructor })(MyModal);
