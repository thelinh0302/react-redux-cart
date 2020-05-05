import * as uiTypes from './../constants/ui'
export const showSideBar = ()=>{
    return{
        type:uiTypes.SHOW_SIDEBAR
    }
}
export const hideSideBar = ()=>{
    return{
        type:uiTypes.HIDE_SIDEBAR
    }
}

export const showLoading = ()=>{
    return{
        type:uiTypes.SHOW_LOADING
    }
}
export const hideLoading = ()=>{
    return{
        type:uiTypes.HIDE_LOADING
    }
}