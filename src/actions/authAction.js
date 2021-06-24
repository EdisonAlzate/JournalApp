import { type } from "../types/type"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { finishLoading,startLoading } from "./uiActions"
import Swal from 'sweetalert2'
import { logOutDeleteNote } from "./notesAction"

//crete accion async
export const loginEmailPassword=(email,password)=>{
    return (dispatch) => {

        dispatch( startLoading() );
        
        
        firebase.auth().signInWithEmailAndPassword( email, password )
        
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));

                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Error',e.message,'error')
                
            })

        
        
    }
}

export const startLoginWithRegisterEmailPasword =(email,password,name)=>{
    return (dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async({user})=>{

            await user.updateProfile({displayName:name}) 
            dispatch(login(user.uid, user.displayName))
            console.log(user.displayName) 
        }).catch((e)=>{
            Swal.fire('Error',e.message,'error')
        })

        
    
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

export const getLogout=()=>{

    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch(logOutDeleteNote())
    }
}


export const logout=()=>({

    type:type.logout ,
    
}
    
)