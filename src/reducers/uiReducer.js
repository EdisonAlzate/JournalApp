import { type } from "../types/type"

const initialState={
    loading:false,
    msgError:null
}

export const uiReducer = (state=initialState,action) => {
    switch (action.type) {
        case type.setError:
            return{
                ...state,
                msgError:action.payload
            }
        
            case type.RemoveError:
                return{
                    ...state,
                    msgError:null 
                }
            
            default: return state 
        }
}
