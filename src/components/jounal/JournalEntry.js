import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
           
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
            }}
         ></div>
        
           <div>
                <h2>Un nuevo dia</h2>    
                <p>sdfgsdfgdfgsdfgsdfgdsfgsdfgsdfgsdfgsdf
                sdfgsdfgsdfgsdfgsdfgsdfgsdfg</p>
           </div> 

           <div className="journal__entryDate">
                <p>monday</p>
                <span>28</span>
           </div>

        </div>
    )
}
