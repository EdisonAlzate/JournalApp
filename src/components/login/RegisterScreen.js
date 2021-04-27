import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
         <h3 >Register</h3>
         
            <form>
                <input
                    className="auth__input"

                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    
                />
                <input
                    className="auth__input"

                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    
                />
                
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                Register 
                </button>
            </form>
          

            <div className="auth__social-network">
                            
                
                
                <Link 
                to="/auth/login"
                className="link"
                >
                    Already register ?  
                </Link>

            </div>
        </div>
    )
}
