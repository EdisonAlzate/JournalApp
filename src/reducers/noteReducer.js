import { type } from "../types/type";

const initialState={
    notes:[],
    active:null
}


export const noteReducer =(state=initialState,action)=>{


    switch (action.type) {
        case type.notesActive:
        return{
            ...state,
            active:{
                ...action.payload  
            }
        }
            
            
    
        default:
            return state
           
    }
}