import { type } from "../types/type"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'


//crete accion async
export const loginEmailPassword=(email,password)=>{

    return(dispatch)=>{

        setTimeout(() => {
            
            dispatch(login('654654','jaramillo'))
        }, 4000);
    }
}

export const loginWithGoogle=()=>{
    return(dispatch)=>{

        firebase.auth().signInWithPopup( googleAuthProvider )
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName))
        })
    }
}

export const login = (uid,displayName ) => ({
    type:type.login,
    payload:{
        uid,
        displayName
    }
    
  
})
