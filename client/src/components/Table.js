import React, {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux" ;
import EditModal from "./EditModal";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {getInstructors,deleteInstructor} from "../JS/actions/actions";
import MyModal from "./MyModal" ;

const useStyles = makeStyles({
  table: {
 minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];


function InstructorTable({getInstructors,deleteInstructor,instructors}) {

    useEffect(() => {
    
        getInstructors();
        console.log(instructors)
      },[getInstructors])
   


  const classes = useStyles();
  console.log(instructors)
  return (
      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>table of instructors</caption>
        <TableHead>
          <TableRow>
            <TableCell>Instructor</TableCell>
            <TableCell align="right">Date </TableCell>
            <TableCell align="right">Time table</TableCell>
            <TableCell align="right">Number of tracks</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {instructors.map((el,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {el.instructor}
              </TableCell>
              <TableCell align="right">{el.date}</TableCell>
              <TableCell align="right">{el.timeTable}</TableCell>
              <TableCell align="right">{el.nbTracks}</TableCell>
              <TableCell align="right">
              <EditModal person={el}/>
                  <HighlightOffIcon onClick={()=>deleteInstructor(el._id)} />
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




const mapStateToProps = (state) => {
return { instructors: state.instructors}
 };



// connect react to redux 
export default connect (mapStateToProps, {getInstructors,deleteInstructor})(InstructorTable)
