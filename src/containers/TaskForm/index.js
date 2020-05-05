import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import styles from './styles'
import { Grid, Box, Button, MenuItem } from '@material-ui/core';
import {reduxForm,Field} from 'redux-form'
import renderTextField from './FormHelper/renderTextField'
import renderSelectField from './FormHelper/renderSelected'
import * as modalAction from '../../actions/modal'
import * as taskAction from '../../actions/task'
import {connect} from 'react-redux'
import {compose,bindActionCreators} from 'redux'
class TaskForm extends Component {
    handleSubmitForm = (data)=>{
        const {taskActionCreator,modalActionCreator,taskEditing} =this.props
        const {hideModal} = modalActionCreator
        const{addTask,updateTask} = taskActionCreator
        const{name,images,price,quantity,status}=data
        if(taskEditing && taskEditing.id){
            updateTask(name,images,price,quantity,status)
        }else{
            addTask(name,images,price,quantity,status)
        }
        hideModal()
    }
    render() {
        const {classes,handleSubmit,modalActionCreator,taskEditing} = this.props
        const {hideModal} = modalActionCreator
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)} >
               <Grid container>
                   <Grid item md={12}>
                        <Field
                            id="name"
                            label = "Sản phẩm "
                            className = {classes.textField}
                            component = {renderTextField}
                            margin = "normal"
                            name = "name"
                            value ={taskEditing ? taskEditing.name:''}
                        />
                   </Grid>
                   <Grid item md={12}>
                        <Field
                            id="images"
                            label = "Mô tả"
                            className = {classes.textField}
                            component = {renderTextField}
                            margin = "normal"
                            name = "images"
                            value ={taskEditing ? taskEditing.images:''}

                        />
                   </Grid>
                   <Grid item md={12}>
                        <Field
                            id="price"
                            label = "Giá"
                            className = {classes.textField}
                            component = {renderTextField}
                            margin = "normal"
                            name = "price"
                            value ={taskEditing ? taskEditing.price:''}

                        />
                   </Grid>
                   <Grid item md={12}>
                        <Field
                            id="quantity"
                            label = "Số lượng"
                            className = {classes.textField}
                            component = {renderTextField}
                            margin = "normal"
                            name = "quantity"
                            value ={taskEditing ? taskEditing.quantity:''}

                        />
                   </Grid>
                   <Field 
                    id= "status"
                    label = "Trạng thái "
                    className = {classes.select}
                    name = "status"
                    component = {renderSelectField}
                    value ={taskEditing ? taskEditing.status:''}
                >
                    <MenuItem value={0}>Sắp về</MenuItem>
                    <MenuItem value={1}>Còn hàng</MenuItem>
                    <MenuItem value={2}>Hết hàng</MenuItem>
                    <MenuItem value={3}>Liên hệ</MenuItem>
                </Field>
                   <Grid item md ={12} >
                    <Box display="flex" flexDirection="row-reverse" mt={1} mb={2} >
                        <Box ml={1} >
                        <Button onClick={hideModal} variant="contained"  color ="secondary" >
                                Hủy bỏ 
                        </Button>
                        </Box>
                        <Button 
                        // disabled = {invalid||submitting} 
                        variant="contained" color ="primary" type="submit"  >
                                Lưu lại
                        </Button>
                    </Box>
                    </Grid>
               </Grid> 
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{
        taskEditing:state.task.taskEditing,
        initialValues:state.task.taskEditing
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        modalActionCreator:bindActionCreators(modalAction,dispatch),
        taskActionCreator:bindActionCreators(taskAction,dispatch)
    }
}
const withConnect = connect(mapStateToProps,mapDispatchToProps)
const form_name= 'task_managerment';
const withReduxForm =reduxForm({
    form :form_name,
});
export default compose(
    withConnect,
    withStyles(styles),
    withReduxForm
)(TaskForm);