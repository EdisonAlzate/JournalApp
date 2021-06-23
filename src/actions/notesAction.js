import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { type } from "../types/type"
import Swal from "sweetalert2"
import { loadUpFile } from "../helpers/loadUpFile"

//react-journal

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
    
        dispatch(refreshNote(note.id,noteToFirebase))
        Swal.fire('Saved',note.title,'success')
    }
}

//action async que tomara valores del state local, 
//sin necesidad de ir hasta la base de datos 
export const refreshNote=(id,note)=>({
    type: type.notesUpDate,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
})

//envio de imagenes al cloudinary

export const startUpLoading = (file)=>{
    return async(dispatch,getState)=>{
        const {active:activeNote}=getState().notes

        Swal.fire({
            title:'Uploading...',
            text:'Please wait...',
            allowOutsideClick:false,
            onBeforeOpen:()=>{
                Swal.showLoading()
            }
        })
        
        const urlPost= await loadUpFile(file)
        console.log(urlPost)

        Swal.close()

        activeNote.url=urlPost

        dispatch(startSaveNote(activeNote)) 

        /* console.log(file)
        console.log(activeNote) */
    }
}


export const startDeleteNote=(id)=>{
    return async(dispatch,getState)=>{

        const {uid}= getState().authh

        await db.doc(`${uid}/journal/notes/${id}`).delete()

       

        dispatch(refreshWithoutNotesDeleted(id))


    }


}

export const refreshWithoutNotesDeleted=(id)=>({
    type:type.notesDelete,
            
        payload:id

})