import{applyMiddleware, combineReducers, createStore,compose} from "redux"
import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer"
import { noteReducer } from "../reducers/noteReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({

    authh: authReducer,
    ui:uiReducer,
    notes:noteReducer
 })


export const store= createStore(
    reducer,composeEnhancers(applyMiddleware(thunk)))

