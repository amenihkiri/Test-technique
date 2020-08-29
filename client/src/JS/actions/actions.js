import axios from "axios";
import {GET_INSTRUCTORS} from "../constants/actions-types"

//get instructors 
export const getInstructors=()=>dispatch=>{
    axios.get('/instructors')
    .then(res=>dispatch({type:GET_INSTRUCTORS,payload:res.data}))
    .catch(err=>console.log(err))
    }

 //add instructor
 export const addInstructor=(newInstructor)=>dispatch=>{
    axios.post("/instructors",newInstructor)
    .then(res=>dispatch(getInstructors()))
    .catch(err=>console.log(err))

 }
 //delete instructor
 export const deleteInstructor=(id)=>dispatch=>{
    axios.delete(`/instructors/${id}`)
.then(res=>dispatch(getInstructors()))
.catch(err=>console.log(err))
}

// edit instructor
export const editInstructor=(id,updatedInstructor)=>dispatch=>{
    axios.put(`/instructors/${id}`,updatedInstructor)
    .then(res=>dispatch(getInstructors()))
.catch(err=>console.log(err))

}
// export const getInstructors = () => async (dispatch) => {
//         dispatch({
//           type: GET_INSTRUCTORS,
//         });
//         try {
//             const instructors = await axios.get('/instructors')
         
//         } catch (error) {
//             console.log(error)  
//         }
//       };


    
