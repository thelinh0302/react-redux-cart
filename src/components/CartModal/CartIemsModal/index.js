import React, { Component } from 'react';

class CartItemsModal extends Component {
    render() {
      const {cartItem} = this.props
        return (
            <tr>
            <td>
              <h5>
                <strong> {cartItem.task.name} </strong>
              </h5>
            </td>
            <td> {cartItem.task.price} $</td>
            <td className="center-on-small-only">
              <span className="qty"> {cartItem.quantity} </span>
              <div className="btn-group radio-group" data-toggle="buttons">
                <label
                  onClick={ ()=> this.updateQuantity(cartItem.task,cartItem.quantity-1) } 
                  className="btn btn-sm btn-primary
                  btn-rounded waves-effect waves-light">
                    —
                </label>
                <label 
                  onClick={ ()=> this.updateQuantity(cartItem.task,cartItem.quantity + 1) } 
                  className="btn btn-sm btn-primary
                  btn-rounded waves-effect waves-light">
                    +
                </label>
              </div>
            </td>
            <td> {this.subTotal(cartItem.task.price,cartItem.quantity)} $</td>
            <td>
              <button 
                onClick = { ()=>this.onDelete(cartItem.task) } 
                type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"  data-original-title="Remove item">
                X
              </button>
            </td>
          </tr>
        );
    }
    subTotal=(price,quantity)=>{
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


export default CartItemsModal;