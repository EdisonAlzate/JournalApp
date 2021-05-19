import { type } from "../types/type"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { finishLoading,startLoading } from "./uiActions"


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
    }
}


export const logout=()=>({

    type:type.logout ,
    
}
    
)