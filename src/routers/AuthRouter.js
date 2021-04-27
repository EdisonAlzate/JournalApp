import React from "react";
import {Switch,Route} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

import { RegisterScreen } from "../components/login/RegisterScreen";


export const AuthRouter=()=> {
  return (
    
      <div>

         <Switch>
          <Route 
             path="/auth/login"
             component={LoginScreen}
           />
          
           <Route 
             path="/auth/register"
             component={RegisterScreen}
           />          
         </Switch>

      </div>
    
  );
}