import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles'
import ClearIcon from '@material-ui/icons/Clear';
import { Modal } from '@material-ui/core';
import * as modalAction from './../../actions/modal'
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
class TaskModalCart extends Component {
    render() {
        const {classes,open,title,component,modalActionCreators} = this.props
        const {hideModalCart} = modalActionCreators
        return (
            <Modal open = {open} onClose= {hideModalCart}>
                 <div className={classes.paperCart} >
                    <div className ={classes.headerCart} >
                            <span className ={classes.titleCart} >
                                {title}
                            </span>
                            <ClearIcon onClick={hideModalCart} className ={classes.clearIcone} />
                    </div>
                    <div className={classes.contentCart} >
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}
const mapStateToProps = state =>{
    return{
        open:state.modal.showModalCart,
        title:state.modal.titleCart,
        component:state.modal.componentCart
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        modalActionCreators : bindActionCreators(modalAction,dispatch)
    }
}
 const withConnect = connect(mapStateToProps,mapDispatchToProps)
export default compose(
    withConnect,
    withStyles(styles)
)(TaskModalCart);