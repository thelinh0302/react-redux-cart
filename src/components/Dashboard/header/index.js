import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const menuId = 'primary-search-account-menu';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            anchorEl:null
        };
    };
    handleProfileMenuOpen = event=>{
        this.setState({
            anchorEl:event.currentTarget
        })
    }
    renderMenu = ()=>{
        console.log('renderMenu')
    }
    handleMenuClose = ()=>{
        this.setState({
            anchorEl:null
        })
    }
    handleToggleSideBar=()=>{
      const {showSidebar,onToggleSidebar} = this.props
      if(onToggleSidebar){
        onToggleSidebar(!showSidebar)
      }
    }
    showCart = ()=>{
      const{showModal} = this.props
      showModal()
    }
    renderMenu =()=>{
        const {anchorEl} = this.state
        const isMenuOpen = Boolean(anchorEl)
        return(
        <Menu
          anchorEl ={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem  onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem  onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
        )
    }
    render() {
        const {classes,name,carts} = this.props
        const cartCount = carts.length
        return<div className={classes.grow}>
        <AppBar className={classes.AppBar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick = {this.handleToggleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton onClick={this.showCart} aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={ this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={this.mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {/* {this.renderMobileMenu()} */}
        {this.renderMenu()}

  </div>;
    }
}

export default withStyles(styles)(Header);