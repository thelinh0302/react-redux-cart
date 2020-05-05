import * as cartTypes from './../constants/cart'
// import cart from '../reducers/cart'
export const addToCarts = (task,quantity)=>{
    return{
        type:cartTypes.ADD_TO_CARTS,
        task,
        quantity
    }
}
export const updateCart = (task,quantity)=>{
    return{
        type:cartTypes.UPDATE_CART,
        task,
        quantity
    }
}
export const deleteCart = task=>{
    return{
        type:cartTypes.DELETE_CART,
        task
    }
}