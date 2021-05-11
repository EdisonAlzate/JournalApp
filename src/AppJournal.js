import React from 'react'
import { RouterJournal } from './routers/RouterJournal'
import{Provider} from "react-redux"
import { store } from './store/store'


export const AppJournal = () => {
    return (
        <>
        <Provider store={store}>
        
            <RouterJournal/>
        </Provider>
        </>
    )
}
