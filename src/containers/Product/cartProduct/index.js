import React, { Component } from 'react';
import Cart from '../../../components/Cart';
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
import * as cartAction from './../../../actions/cart'
import CartItems from './../../../components/Cart/CartItems'
import CartResult from '../../../components/Cart/CartResults';
import * as messTypes from './../../../constants/message'
class CartProduct extends Component {
    render() {
        const{carts} = this.props
        return (
            <Cart>
                {this.showCartItem(carts)}
                {this.showCartTotal(carts)}
            </Cart>
        );
    }
    showCartItem = (carts) =>{
        const {cartActionCreator} = this.props
        var result = <tr><td>{messTypes.Msg_cart_empty}</td></tr>
        if(carts.length>0){
            result = carts.map((cart,index)=>{
                return<CartItems cartActionCreator={cartActionCreator} key={index} cartItems = {cart} />
            })
        }
        return result
    }
    showCartTotal = (carts)=>{
        var result = null
        if(carts.length>0){

            result=<CartResult cartResult={carts}/>
         }
         return result
    }
}
const mapStateToProps = state=>{
    return{
        carts : state.cart
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        cartActionCreator:bindActionCreators(cartAction,dispatch)
    }
}
const withConnect =connect(mapStateToProps,mapDispatchToProps)
export default compose(withConnect)(CartProduct);