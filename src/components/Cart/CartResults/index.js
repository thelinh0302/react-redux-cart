import React, { Component } from 'react';

class CartResult extends Component {
    render() {
      const {cartResult} = this.props
        return (
            <tr>
            <td colSpan={3} />
            <td>
              <h4>
                <strong>Tổng Tiền</strong>
              </h4>
            </td>
            <td>
              <h4>
                <strong> {this.totalAmount(cartResult)} $</strong>
              </h4>
            </td>
            <td colSpan={3}>
              <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                <i className="fa fa-angle-right right" />
              </button>
            </td>
          </tr>
        );
    }
    totalAmount = (cartResult)=>{
      var total = 0
      if(cartResult.length>0){
        for(var i = 0;i<cartResult.length;i++){
          total += cartResult[i].task.price*cartResult[i].quantity
        }
      }
      return total
    }
}

export default CartResult;