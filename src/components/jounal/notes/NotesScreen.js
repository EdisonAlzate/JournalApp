import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../../hooks/useForm'
import { NotesAppbar } from './NotesAppbar'

export const NotesScreen = () => {
    const {active:notes} = useSelector(state => state.notes)
    
    const [values, handleInputChange]=useForm(notes)
    
    const {body,title,url}=values
    console.log(values)
    return (
        <div className="notes__main-content">
           <NotesAppbar/>
          <div className="notes__content">
          
                <input
                    type="text"
                    className="notes__input-title"
                    placeholder="Some awesome title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                className="notes__texArea"
                    placeholder="whatt happend today"
                    value={body}
                    onChange={handleInputChange}
                >
                        
                </textarea>
               {
                    (notes.url)&&
                    (

                        <div className="notes__image">
                            <img 
                                
                                src="https://www.hazunaweb.com/imagenes/prueba.jpg" 
                                alt="imagfe"
                            />
                        
                        </div>
                    )

               }     
          </div>
        </div>
    )
}
