import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../../actions/notesAction'
import { useForm } from '../../../hooks/useForm'
import { NotesAppbar } from './NotesAppbar'

export const NotesScreen = () => {
    const {active:notes} = useSelector(state => state.notes)
    
    const [values, handleInputChange,reset]=useForm(notes)
    const dispatch = useDispatch()

    const activeId=useRef(notes.id)
    useEffect(() => {
        if (notes.id !== activeId.current) {
            reset(notes)
            activeId.current=notes.id
        }
    }, [notes,reset])

    useEffect(() => {
        dispatch(activeNote(values.id,{...values}))
        console.log(values)
    }, [values])
    
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
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                className="notes__texArea"
                    placeholder="whatt happend today"
                    value={body}
                    name="body"
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
