import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginEmailPassword, loginWithGoogle } from '../../actions/authAction'

import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    
    const {loading} = useSelector(state => state.ui)
    
    const dispatch = useDispatch() 
    
    const [values, handleInputChange] =useForm({
        email:"edison@gmail.com",
        password:"password"
    })

    const {email,password}=values
   
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(email,password)
        dispatch(loginEmailPassword(email,password)) 
        
    }

    const handleLoginGoogle=()=>{
        console.log('loginGoogle')
        dispatch(loginWithGoogle())
    }    
    
    return (
        <div>
         <h3 >Login</h3>
         
            <form onSubmit={handleLogin}>
                <input
                    className="auth__input"

                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    
                />
                
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    

                />

                <button
                    className="btn btn-primary btn-block"
                    disabled={loading}
                    type="submit"

                >
                Login 
                </button>
            </form>
          

            <div className="auth__social-network">
                <p >Login with social networks</p>
            
                <div 
                   className="google-btn"
                   onClick={handleLoginGoogle}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

                
                <Link 
                to="/auth/register"
                className="link"
                >
                    Create new account    
                </Link>

            </div>
        </div>
    )
}
