import { db } from "../firebase/firebase-config"

export const starNewEntry=()=>{
    return async(dispatch,getState)=>{
        const {uid}=getState().authh
        console.log(uid)
        const newNote={
           title:'',
           body:'',
           date:new Date().getTime()
        }
        const doc= await db.collection(`${uid}/journal/notes`).add(newNote)
       
        console.log(doc)
    }

    
    
}