import { db } from "../firebase/firebase-config"
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



