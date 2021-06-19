import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../../actions/notesAction'

export const NotesAppbar = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)
    
    const handleSaveNote=()=>{
     dispatch(startSaveNote(active))
     }
     return (
        
           
                
            <div className="notes__appbar">
            <span>28 de Agosto 2020</span>
                        
                                                   
                        
                        <div>
                             <button className="btn">
                                  Picture
                             </button>
                        
                       
                             <button 
                               className="btn"
                               onClick={handleSaveNote}
                              >
                                  Save
                             </button>
                        </div>
                    </div>

                    

        
             
        
    )
}
