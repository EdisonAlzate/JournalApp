import { type } from "../types/type"

export const setError=(err)=>({
type:type.setError ,
payload:err,

})

export const RemoveError=()=>({
    type: type.RemoveError,
    
})