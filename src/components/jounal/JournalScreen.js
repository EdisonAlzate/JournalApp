import React from 'react'
import { NotesScreen } from './notes/NotesScreen'
import { NothingSelected } from './notes/NothingSelected'

import { Sidebarr } from './Sidebarr'



export const JournalScreen = () => {
    return (
        
        <div className="journal__main-content">
        <Sidebarr/> 
        
        
            <main>
            {/* <NothingSelected/> */}
                <NotesScreen/>
            </main> 
            
        </div>
    )
}
