import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'



export const RegisterScreen = () => {
    
   const [ values, handleInputChange ]= useForm({
        name:'edison',
        email:'edisonalzate11@gmail.com',
        password:123456,
        password2:123456

    })

   const  {name,email,password,password2}=values
    
   const handleRegistersubmit=(e)=>{
       e.preventDefault()
       console.log(name,email,password,password2)
   }

   const handleRegisterClick=()=>{
       
       if (isFormValid()) {
           
        console.log('form ok')
        
      }
   }
   

  const isFormValid=()=>{

       if (name.trim().length===0){
 
           console.log('name is required')
            return false
       }else if (!validator.isEmail(email)) {
           console.log('email invalid')
           return false
       }else if (password!==password2 || password.length<5) {
           console.log('the password should be at least 6 words and match each other ')
           return false
       }

       


       return true
    
   }

    
   

   


    return (
        <div>
         <h3 >Register</h3>

         <form 
            onSubmit={handleRegistersubmit}
            
         
         >
         
             
               
                 <p>warning</p>
             
         
                <input
                    className="auth__input"

                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    
                />
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
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block"
                    onClick={handleRegisterClick}
                    
                    
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
