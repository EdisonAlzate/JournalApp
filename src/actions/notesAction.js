import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { type } from "../types/type"

export const starNewEntry=()=>{
    return async(dispatch,getState)=>{
        const {uid}=getState().authh
        console.log(uid)
        const newNote={
           title:'',
           body:'',
           date:new Date().getTime()
        }
        //envio de newNote a bd:
        const doc= await db.collection(`${uid}/journal/notes`).add(newNote)
        //va a retonar un id y una nota
        dispatch(activeNote(doc.id,newNote))
    }
   }

export const activeNote=(id,note)=>(
 
 {
   type:type.notesActive ,
   payload:{
           id,
           ...note
           }
   
 }
) 


export const startLoadNotes=(uid)=>{
    return async(dispatch)=>{
      const notesL= await loadNotes(uid)

      dispatch(upNotes(notesL))
    }
}

export const upNotes=(notesL)=>({
    type:type.notesUpState,
        payload:notesL
        
    
})


export const startSaveNote=(note)=>{
    return async (dispatch,getState)=>{

        const {uid}=getState().authh
        if (!note.url) {
           delete note.url
        }

        const noteToFirebase ={...note}
           delete noteToFirebase.id 
        

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirebase)
    }
}
