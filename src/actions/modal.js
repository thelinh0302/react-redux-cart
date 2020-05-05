import * as modalTypes from './../constants/modal'
export const showModal=()=>{
    return{
        type:modalTypes.SHOW_MODAL
    }
}
export const hideModal = ()=>{
    return{
        type:modalTypes.HIDE_MODAL
    }
}
export const showTitle = title=>{
    return{
        type:modalTypes.SHOW_TITLE,
        payload:{
            title
        }
    }
}
export const showComponent = component=>{
    return{
        type:modalTypes.SHOW_COMPONENT,
        payload:{
            component
        }
    }
}
export const showModalCart = ()=>{
    return{
        type:modalTypes.SHOW_MODAL_CART
    }
}
export const showModalCartTitle=(titleCart)=>{
    return{
        type:modalTypes.SHOW_TITLE_CART,
        payload:{
            titleCart
        }
    }
}
export const showModalCartComponent=(componentCart)=>{
    return{
        type:modalTypes.SHOW_COMPONENT_CART,
        payload:{
            componentCart
        }
    }
}
export const hideModalCart = ()=>{
    return{
        type:modalTypes.HIDE_MODAL_CART
    }
}