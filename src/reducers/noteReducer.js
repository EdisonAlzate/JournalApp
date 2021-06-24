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
            
        case type.notesUpState:
            return{

                ...state,
                notes:[...action.payload]
            }

        case type.notesUpDate:
            return{
                ...state,
                notes:state.notes.map(note=>
                        note.id===action.payload.id
                        ?action.payload.note
                        :note
                    )
                } 
            
        case type.notesDelete:
            return{
                ...state,
                active:null,
                notes:state.notes.filter(note=>
                    note.id!==action.payload
                )
            }

        case type.notesLogOutDelete:
            return{

                ...state,
                active:null,
                notes:[]
            }

        case type.newNoteAdd:
            return{
                ...state,
                
                notes:[action.payload,...state.notes]
            }

            
        
        default:
            return state
           
    }
}