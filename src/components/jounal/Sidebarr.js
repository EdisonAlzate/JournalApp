import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebarr = () => {
    return (
        <aside className="journal__sidebar-content">
            <div className="journal__sidebar-appbar">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> Edison</span>
                </h3>
                
                <button
                  className="btn"
                >
                Logout
                </button>
            </div>


            <div className="journal__sidebar-newEntry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>New entry</p>
            </div>

            <JournalEntries/>
        </aside>
    )
}
