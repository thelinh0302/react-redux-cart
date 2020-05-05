import React, { Component } from 'react';
import { withStyles, Drawer, List, ListItem } from '@material-ui/core';
import styles from './styles'
import { ROUTES_Admin } from '../../../constants';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
    renderList=()=>{
        const {classes} = this.props;
         let xhtml = null;
            xhtml = (
                <div className = {classes.list}>
                    <List component ="div">
                        { ROUTES_Admin.map(item=>{
                            return(
                                <NavLink to = {item.path} exact={item.exact} className = {classes.menuLink} activeClassName ={classes.menuLinkActive} key = {item.path}>
                                    <ListItem 
                                    className ={classes.listItem} 
                                    key={item.path} 
                                    button
                                     > 
                                    { item.name }  
                                </ListItem>
                                </NavLink>
                            );
                        }) }
                    </List>
                </div>
            );
         return xhtml;
    }
    render() {
        
        const {classes,showSidebar} = this.props
        return (
            <Drawer
            open = {showSidebar}
            classes={{ paper: classes.drawerPaper}}
            variant="persistent"
            onClose={()=>this.toggleDrawer(false)}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

export default withStyles(styles)(Sidebar);