import { GET_INSTRUCTORS } from "../constants/actions-types"

const initialState={
    instructors:[]
}

const InstructorReducer=(state=initialState,action)=>{
    switch(action.type) {
        case GET_INSTRUCTORS:
            return {...state,instructors:action.payload}
             default:
                 return state
    }
}
 export default InstructorReducer