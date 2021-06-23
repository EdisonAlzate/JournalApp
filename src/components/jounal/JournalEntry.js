import React from 'react'
import moment from 'moment'
import { activeNote } from '../../actions/notesAction'
import { useDispatch } from 'react-redux'

export const JournalEntry = ({id,body,date,title,url}) => {
    
    const dispatch = useDispatch()
    
    const dateMoment= moment(date)

    const handleClickEntry=()=>{
        console.log('click in entry')
        dispatch(activeNote(
            id,
            {
                body,date,title,url  
            })) 
    }

    return (
        <div 
          className="journal__entry"
          onClick={handleClickEntry}
        >
        {
            url &&
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
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
