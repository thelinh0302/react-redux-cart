import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles'
import ClearIcon from '@material-ui/icons/Clear';
import { Modal } from '@material-ui/core';
import * as modalAction from './../../actions/modal'
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
class TaskModal extends Component {
    render() {
        const {classes,open,title,component,modalActionCreators} = this.props
        const {hideModal} = modalActionCreators
        return (
            <Modal open = {open} onClose= {hideModal}>
                 <div className={classes.paper} >
                    <div className ={classes.header} >
                            <span className ={classes.title} >
                                {title}
                            </span>
                            <ClearIcon onClick={hideModal} className ={classes.clearIcone} />
                    </div>
                    <div className={classes.content} >
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}
const mapStateToProps = state =>{
    return{
        open:state.modal.showModal,
        title:state.modal.title,
        component:state.modal.component
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
)(TaskModal);