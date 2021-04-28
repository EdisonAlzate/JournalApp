import React from 'react'
import { NotesAppbar } from './NotesAppbar'


export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
           <NotesAppbar/>
          <div className="notes__content">
          
                <input
                    type="text"
                    className="notes__input-title"
                    placeholder="Some awesome title"
                />
                <textarea
                className="notes__texArea"
                    placeholder="whatt happend today"
                >
                        
                </textarea>

                <div className="notes__image">
                    <img 
                        
                        src="https://www.hazunaweb.com/imagenes/prueba.jpg" 
                        alt="imagfe"
                    />
                
                </div>
          </div>
        </div>
    )
}
