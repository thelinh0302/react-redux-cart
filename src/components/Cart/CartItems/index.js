import React, { Component } from 'react';
import { deleteCart } from '../../../actions/cart';

class CartItems extends Component {
    render() {
      const{cartItems}  =this.props
        return (
            <tr>
            <th scope="row">
              <img src= {cartItems.task.images}  alt="" />
            </th>
            <td>
              <h5>
                <strong> {cartItems.task.name} </strong>
              </h5>
            </td>
            <td> {cartItems.task.price} $</td>
            <td className="center-on-small-only">
              <span className="qty"> {cartItems.quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label
                  onClick={ ()=> this.updateQuantity(cartItems.task,cartItems.quantity-1) } 
                  className="btn btn-sm btn-primary
                  btn-rounded waves-effect waves-light">
                    —
                </label>
                <label 
                  onClick={ ()=> this.updateQuantity(cartItems.task,cartItems.quantity + 1) } 
                  className="btn btn-sm btn-primary
                  btn-rounded waves-effect waves-light">
                    +
                </label>
              </div>
            </td>
            <td> {this.subTotal(cartItems.task.price,cartItems.quantity)} $</td>
            <td>
              <button 
                onClick = { ()=>this.onDelete(cartItems.task) } 
                type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"  data-original-title="Remove item">
                X
              </button>
            </td>
          </tr>
        );
    }
    subTotal(price,quantity){
      return price*quantity
    }
    updateQuantity = (task,quantity)=>{
      const {cartActionCreator} = this.props
      const {updateCart} = cartActionCreator
      if(quantity>0){
        updateCart(task,quantity)
      }
    }
    onDelete = (task)=>{
      const {cartActionCreator} = this.props
      const {deleteCart} = cartActionCreator
      deleteCart(task)
    }
}

export default CartItems;