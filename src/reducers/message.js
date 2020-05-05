import * as messTypes from './../constants/message'
var initialState = messTypes.Msg_welcome
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case messTypes.Change_Mess:{
            return action.message
        }
        default:return[...state]
    }
}
export default reducer