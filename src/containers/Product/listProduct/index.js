import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, Box, Typography} from '@material-ui/core';
import styles from './styles'
import {STATUS} from './../../../constants/index'
import TaskListShow from '../../../components/TaskList/TaskListShow';
import { connect } from 'react-redux';
import * as taskAction from './../../../actions/task'
import * as cartAction from './../../../actions/cart'
import {bindActionCreators,compose} from 'redux'
class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:7
        }
    }
    componentDidMount(){
        const{taskActionCreator} = this.props
        const {fetchListTask} = taskActionCreator
        fetchListTask()
    }
    addToCart = (task)=>{
        const{cartActionCreator} = this.props
        const{addToCarts} = cartActionCreator
        addToCarts(task,1)
    }
    renderList=()=>{
        const {taskList} = this.props
        let xhtml = null
            xhtml = (
                <Grid container spacing={2} >
                    { 
                        STATUS.map(status=>{
                            const filterTask = taskList.filter(
                                tasks=>tasks.status===status.value
                            )
                            return<TaskListShow addToCart = {this.addToCart} tasks= {filterTask} status={status} key={status.value}  />
                        })
                    }
            </Grid>
            )
        return xhtml
    }
    render() {
        const {classes} =this.props
        return (
           <div className={classes.taskList}>
               <Box className={classes.boxH1} >
                    <Typography  gutterBottom variant="h4" component="h1">Danh sách sản phẩm</Typography>     
                </Box>
                {this.renderList()}

           </div>
        );
    }
}
const mapStateToProp = state=>{
    return{
        taskList:state.task.taskList
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        taskActionCreator:bindActionCreators(taskAction,dispatch),
        cartActionCreator:bindActionCreators(cartAction,dispatch)
    }
}
const withconnect = connect(mapStateToProp,mapDispatchToProps)

export default compose(
    withconnect,
    withStyles(styles)
)(ListProducts);