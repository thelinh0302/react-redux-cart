import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './styles'
import TaskItemManager from '../../TaskItem/TaskItemManager';
class TaskListManager extends Component {
    render() {
        const {tasks,status,onEdit,onDelete} = this.props
        return (
            <Grid item xs={3} >
                {
                    tasks.map(task=>{
                        return<TaskItemManager onDelete={()=>onDelete(task)} onEdit = {()=>onEdit(task)} status = {status} task = {task} key = {task.id} />
                    })
                }
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskListManager) ;