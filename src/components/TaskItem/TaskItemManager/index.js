import React, { Component } from 'react';
import { withStyles, Card, CardContent, Grid, Typography, CardActions, Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles'
class TaskItemManager extends Component {
    render() {
        const {classes,task,status,onEdit,onDelete} = this.props
        return (
            <Card className={classes.Card} key ={task.id} >
                <CardContent>
                    <Grid container justify = "space-between" alignItems="center">
                        <Grid item md = {8} >
                            <Typography component = "h2" >
                                {task.name}
                            </Typography>
                        </Grid>
                        <p>Số lượng:{task.quantity} </p>
                        <Grid className = {status.badge} item md = {4} >
                            {status.label}
                        </Grid>
                         
                        <p> Giá tiền: {task.price}$ </p>
                    </Grid>
                </CardContent>
                <CardActions  className = {classes.cardAction}>
                           <Fab onClick={onEdit}   color="primary" aria-label="add" size="small" >
                                <EditIcon/>
                            </Fab>
                            <Fab onClick={onDelete}  color="secondary" aria-label="delete" size="small"  >
                                
                                <DeleteIcon/>

                            </Fab>
                           </CardActions>
            </Card>  
        );
    }
}

export default withStyles(styles)(TaskItemManager);