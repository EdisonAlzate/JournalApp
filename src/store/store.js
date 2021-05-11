import{applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({

    authh: authReducer
 })


export const store= createStore(
    reducer,composeEnhancers(applyMiddleware(thunk)))

