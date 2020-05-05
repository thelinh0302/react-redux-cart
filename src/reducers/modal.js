import * as modalTypes from './../constants/modal'
var initialState = {
    showModal:false,
    component:null,
    showModalCart:false,
    componentCart:null
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case modalTypes.SHOW_MODAL:{
            return{
                ...state,
                showModal:true
            }
        }
        case modalTypes.HIDE_MODAL:{
            return{
                ...state,
                showModal:false,
                title : '',
                component:null
            }
        }
        case modalTypes.SHOW_TITLE:{
            const {title} = action.payload
            return{
                ...state,
                title
            }
        }
        case modalTypes.SHOW_COMPONENT:{
            const {component} = action.payload
            return{
                ...state,
                component
            }
        }
        case modalTypes.SHOW_MODAL_CART:{
            return{
                ...state,
                showModalCart:true
            }
        }
        case modalTypes.HIDE_MODAL_CART:{
            return{
                ...state,
                showModalCart:false
            }
        }
        case modalTypes.SHOW_TITLE_CART:{
            const {titleCart} = action.payload
            return{
                ...state,
                titleCart
            }
        }
        case modalTypes.SHOW_COMPONENT_CART:{
            const {componentCart}  = action.payload
            return{
                ...state,
                componentCart
            }
        }
        default:return state
    }
}
export default reducer