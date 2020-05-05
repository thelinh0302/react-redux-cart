import React, { Component } from 'react';
import Message from '../../components/message';
import connect from 'react-redux'
import {compose} from 'redux'
class MessageContainers extends Component {
    render() {
        const {message} = this.props
        return (
            <div>
                <Message message={message}   />
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        message : state.message
    }
}
const withConnect = connect(mapStateToProps,null)
export default compose(withConnect)(MessageContainers);