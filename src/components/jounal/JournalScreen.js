import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from './notes/NotesScreen'
import { NothingSelected } from './notes/NothingSelected'

import { Sidebarr } from './Sidebarr'



export const JournalScreen = () => {
    
    const {active} = useSelector(state => state.notes)
    console.log(active)
    
    
    return (
        
        <div className="journal__main-content">
        <Sidebarr/> 
        
        
            <main>
            {
            (active)
            ?(<NotesScreen/>)
            :(<NothingSelected/>)
            }
                
            </main> 
            
        </div>
    )
}
