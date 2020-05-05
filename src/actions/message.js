import * as messTypes from './../constants/message'
export const changeMess = message=>{
    return{
        type:messTypes.Change_Mess,
        message
    }
}