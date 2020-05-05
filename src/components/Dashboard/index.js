import React, { Component } from 'react';
import Header from './header'
import Sidebar from './sidebar'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
import * as uiAction from './../../actions/ui'
import * as modalAction from './../../actions/modal'
import cn from 'classnames';
import CartModalContainer from '../../containers/Product/cartModal';
class Dashboard extends Component {
    onToggleSidebar = value=>{
        const {uiActionCreate} = this.props
        const {showSideBar,hideSideBar}= uiActionCreate
        if(value===true){
            showSideBar()
        }else{
            hideSideBar()
        }
    }
    showModal =()=>{
        const {modalActionCreator} = this.props
        const {showModalCart,showModalCartTitle,showModalCartComponent} = modalActionCreator
        showModalCart()
        showModalCartTitle('Giỏ hàng của bạn')
        showModalCartComponent(<CartModalContainer/>)
    }
    render() {
        const {classes,children,showSidebar,name,carts} = this.props
        return (
            <div className = {classes.Dashboard} >
                <Header carts={carts} showModal={this.showModal} name={name} showSidebar={showSidebar} onToggleSidebar={this.onToggleSidebar} />
                <div className = {classes.wrapper}>
                    <Sidebar showSidebar={showSidebar}/>
                    <div className= {cn(classes.wrapperContent,{
                        [classes.shiftLeft]: showSidebar===false
                    })}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        showSidebar:state.ui.showSidebar,
        carts:state.cart
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        uiActionCreate : bindActionCreators(uiAction,dispatch),
        modalActionCreator:bindActionCreators(modalAction,dispatch)
    }
}
const withConnect = connect(mapStateToProps,mapDispatchToProps)
export default compose(
    withConnect,
    withStyles(styles)
)(Dashboard);