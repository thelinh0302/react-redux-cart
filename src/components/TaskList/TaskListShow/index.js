import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles'
import TaskItemList from '../../TaskItem/TaskItemList';
class TaskListShow extends Component {
    render() {
        const{tasks,status,addToCart} = this.props
        return (
             <Grid item xs = {3} >
                 {
                     tasks.map(task=>{
                         return<TaskItemList addToCart={()=>addToCart(task)} key ={task.id} status={status} task ={task}/>
                     })
                 }
                </Grid>
        );
    }
}

export default withStyles(styles)(TaskListShow);