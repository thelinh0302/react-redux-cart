import React, { Component } from 'react';
import CartModal from '../../../components/CartModal';
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
import CartItemsModal from '../../../components/CartModal/CartIemsModal';
import * as cartAction from './../../../actions/cart'
class CartModalContainer extends Component {
    render() {
        const {carts} = this.props
        return (
            <CartModal>
                {this.showCart(carts)}
            </CartModal>
        );
    }
    showCart=(carts)=>{
        const{cartActionCreator} = this.props
        var result = null
        if(carts.length>0){
            result=carts.map((cart,index)=>{
                return<CartItemsModal cartActionCreator={cartActionCreator}  key={index} cartItem = {cart} />
            })
        }
        return result
    }
}
const mapStateToProps = state =>{
    return{
        carts:state.cart
    }
}
const mapDispatcToProps = dispatch =>{
    return{
        cartActionCreator:bindActionCreators(cartAction,dispatch)
    }
}
const withConnect = connect(mapStateToProps,mapDispatcToProps)
export default compose(
    withConnect
)(CartModalContainer);