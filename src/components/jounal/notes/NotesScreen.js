import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../../actions/notesAction'
import { useForm } from '../../../hooks/useForm'
import { NotesAppbar } from './NotesAppbar'

export const NotesScreen = () => {
    const {active:note} = useSelector(state => state.notes)
   
    
    const [values, handleInputChange,reset]=useForm(note)
    const dispatch = useDispatch()
    const {body,title,id}=values

    const activeId=useRef(note.id)

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current=note.id
        }
    }, [note,reset])

    useEffect(() => {
        dispatch(activeNote(values.id,{...values}))
        console.log(values)
    }, [values,dispatch])
    
    
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
                   
                    (note.url)
                    &&
                    (

                        <div className="notes__image">
                            <img 
                                
                                src={note.url} 
                                alt="imagen"
                            />
                        
                        </div>
                    )

               }     
          </div>
        </div>
    )
}
