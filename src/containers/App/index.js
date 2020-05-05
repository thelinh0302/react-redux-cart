import React, { Component } from 'react';
import {Provider} from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import configStore from './../../redux/configStore'
import theme from './../../commons/theme'
import {ROUTES_Admin} from './../../constants/index'
import{BrowserRouter,Switch} from 'react-router-dom'
import AdminLayout from '../../commons/layout/AdminLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import TaskModal from './../../components/Modal'
import TaskModalCart from './../../components/ShowModalCart'
import Loading from '../../components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configStore()
class App extends Component {
  renderAdminlayout=()=>{
    let xhtml  = null
      xhtml = ROUTES_Admin.map(route=>{
        return<AdminLayout key={route.path} path ={route.path} component={route.component} name = {route.name} exact = {route.exact} />
      })
    return xhtml
  }
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <ThemeProvider theme = {theme} >
             <CssBaseline />
             <ToastContainer/>
             <Loading/>
              <Switch>
                {this.renderAdminlayout()}
              </Switch>
              <TaskModal />
              <TaskModalCart/>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
