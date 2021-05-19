import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect
} from "react-router-dom";
import { login } from "../actions/authAction";
import { JournalScreen } from "../components/jounal/JournalScreen";
import {firebase} from "../firebase/firebase-config"

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const RouterJournal=()=> {
  
  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
    

    if (user?.uid) {
      dispatch(login(user.uid,user.displayName))
      setIsLogged(true)
    
    }else{
      setIsLogged(false)
    }

    setChecking(false)
        })
    
  }, [dispatch,setIsLogged,setChecking])

  if (checking) {
    return(

        <p>Please Wait </p>
    )
}

  return (
    <Router>
    <div >
        <div  >           
          <Switch>
          
            <PublicRoute 
              path="/auth"
              component={AuthRouter}
              isAuthenticated={isLogged}
            />
            
            <PrivateRoute 
              exact
              path="/"
              component={JournalScreen}
              isAuthenticated={isLogged}
              />
              
            <Redirect to={"/auth/login"}/>
            
          </Switch>
        </div>
    </div>
    </Router>
  );
}