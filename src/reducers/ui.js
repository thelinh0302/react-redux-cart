import * as uiTypes from './../constants/ui'
var initialState = {
    showSidebar:false,
    showLoading:false
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case uiTypes.SHOW_SIDEBAR:{
            return{
                ...state,
                showSidebar:true 
            }
        }
        case uiTypes.HIDE_SIDEBAR:{
            return{
                ...state,
                showSidebar:false
            }
        }
        case uiTypes.SHOW_LOADING:{
            return{
                ...state,
                showLoading:true
            }
        }
        case uiTypes.HIDE_LOADING:{
            return{
                ...state,
                showLoading:false
            }
        }
        default:return state
    }
}
export default reducer