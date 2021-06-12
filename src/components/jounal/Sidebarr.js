import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLogout } from '../../actions/authAction'
import { starNewEntry } from '../../actions/notesAction'

import { JournalEntries } from './JournalEntries'

export const Sidebarr = () => {
   
    const {name} = useSelector(state => state.authh)
    
    const dispatch = useDispatch()
    
    const handleLogout=()=>{

        console.log('click logout')
        dispatch(getLogout())
    }

    const handelNewEntry=()=>{
        dispatch( starNewEntry())
        console.log('click new entry')
    }
    
    
    return (
        <aside className="journal__sidebar-content">
            <div className="journal__sidebar-appbar">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>
                
                <button
                  className="btn"
                  onClick={handleLogout}
                >
                Logout
                </button>
            </div>


            <div 
               className="journal__sidebar-newEntry"
               onClick={handelNewEntry}    
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New entry</p>
            </div>

            <JournalEntries/>
        </aside>
    )
}
