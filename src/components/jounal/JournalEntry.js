import React from 'react'
import moment from 'moment'


export const JournalEntry = ({id,body,date,title,url}) => {
    
    const dateMoment= moment(date)
    return (
        <div className="journal__entry">
        {
            url &&
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
                }}
             >
             </div>
        }   
        
           <div>
                <h2>{title}</h2>    
                <p>{body}</p>
           </div> 

           <div className="journal__entryDate">
                <p>{dateMoment.format('dddd')}</p>
                <span>{dateMoment.format('Do')}</span>
           </div>

        </div>
    )
}
