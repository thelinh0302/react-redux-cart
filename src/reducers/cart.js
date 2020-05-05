import * as cartTypes from './../constants/cart'
import {toastSuccess} from './../commons/Alert/index'
var data = JSON.parse(localStorage.getItem('Cart'));
var initialState = data ? data:[]
const cart=(state=initialState,action)=>{
    var {task,quantity} = action
    var index = -1
    switch(action.type){
        case cartTypes.ADD_TO_CARTS:{
            index =findProductCart(state,task)
            if(index !==-1){
                state[index].quantity += quantity
            }else{
                state.push({
                    task,
                    quantity
                });
            }
            toastSuccess("Sản phẩm được thêm vào giỏ")
            localStorage.setItem('Cart',JSON.stringify(state))
            return[...state]        
        }
        case cartTypes.UPDATE_CART:{
            index = findProductCart(state,task)
            if(index !== -1){
                state[index].quantity=quantity
            }
            localStorage.setItem('Cart',JSON.stringify(state))
            return [...state]
        }
        case cartTypes.DELETE_CART:{
            index = findProductCart(state,task)
            if(index !== -1){
                state.splice(index,1)
            }
            toastSuccess("Sản phẩm đã được xóa")
            localStorage.setItem('Cart',JSON.stringify(state))
            return[...state]
        }
        default:return[...state]
    }
}
var findProductCart= (cart,task)=>{
    var index = -1
    if(cart.length>0){
        for(var i = 0 ;i<cart.length;i++){
            if(cart[i].task.id===task.id){
                index = i;
                break
            }
        }
    }
    return index
}
export default cart