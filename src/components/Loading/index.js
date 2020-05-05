import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles'
import{connect} from 'react-redux'
import{compose} from 'redux';
import loadingIcon from './../../assets/images/throbber_12.gif'
class Loading extends Component {
    render() {
        const{classes,showLoading} = this.props
        var xhtml = null
        if(showLoading){
            xhtml=(
                <div className = {classes.loadingPage} >
                        <img src = { loadingIcon } alt= "loadning" className = {classes.icon} />
                </div>
            )
        }
        return xhtml
    }
}
const mapStateToProps = state=>{
    return{
        showLoading:state.ui.showLoading
    }
}
const withConnect = connect(mapStateToProps,null)
export default compose(
    withConnect,
    withStyles(styles)
)(Loading);