import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography, CardActions, Fab, withStyles } from '@material-ui/core';
import styles from './styles'
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
class TaskItemList extends Component {
    render() {
        const{classes,task,status,addToCart} = this.props
        return (
            <Card className={classes.root}>
                     <CardActionArea>
                         <CardMedia
                         component="img"
                         alt="Contemplative Reptile"
                         height="340"
                         image={task.images}
                         title={task.name}
                         />
                         <CardContent className={classes.CardContent}  >
                         <Grid container justify="space-between" alignItems="center">
                             <Grid  item md={8}>
                             <Typography variant="h6" component="h3">{task.name}</Typography>
                             </Grid>
                             <Grid className={status.badge} item md={4}>
                             {status.label}
                             </Grid>
                         </Grid>
                         </CardContent>
                     </CardActionArea>
                     <CardActions className={classes.CardActions}>
                         <Fab onClick={addToCart} color="primary" aria-label="cart" size="small">
                             <ShoppingCartSharpIcon/>
                         </Fab>
                     </CardActions>
                 </Card>
        );
    }
}

export default withStyles(styles)(TaskItemList);