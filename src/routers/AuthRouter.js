import React, { useEffect } from "react";
import {Switch,Route} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

import { RegisterScreen } from "../components/login/RegisterScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/authAction";


export const AuthRouter=()=> {
  
  
  
  return (
    
      <div className="auth__main-content">
        <div className="auth__box-container">
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

      </div>
    
  );
}