import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import EditModal from "./EditModal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { getInstructors, deleteInstructor } from "../JS/actions/actions";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

function InstructorTable({ getInstructors, deleteInstructor, instructors }) {
  useEffect(() => {
    getInstructors();
    console.log(instructors);
  }, [getInstructors]);

  const classes = useStyles();
  console.log(instructors);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>table of instructors</caption>
        <TableHead style={{backgroundColor:"#F8F8FF"}}>
          <TableRow>
            <TableCell>
              <h4>Instructor</h4>
            </TableCell>
            <TableCell align="center" color="blue">
              {" "}
              <h4>Subscription Date</h4>
            </TableCell>
            <TableCell align="center" color="blue">
              {" "}
              <h4>Time table</h4>
            </TableCell>
            <TableCell align="center" color="blue">
              {" "}
              <h4>Number of tracks</h4>
            </TableCell>
            <TableCell align="center" color="blue">
              {" "}
              <h4>Actions</h4>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instructors.map((el, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {el.instructor}
              </TableCell>
              <TableCell align="center">{el.date}</TableCell>
              <TableCell align="center">{el.timeTable}</TableCell>
              <TableCell align="center">{el.nbTracks}</TableCell>
              <TableCell style={{display:"flex",justifyContent:"space-around"}} align="center">
                <EditModal person={el} />
                <HighlightOffIcon style={{ color: "#170ff0" }}onClick={() => deleteInstructor(el._id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// redux 
const mapStateToProps = (state) => {
  return { instructors: state.instructors };
};

// connect react to redux
export default connect(mapStateToProps, { getInstructors, deleteInstructor })(
  InstructorTable
);
