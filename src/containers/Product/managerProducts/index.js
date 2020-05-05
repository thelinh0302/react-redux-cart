import React, { Component } from 'react';
import { Box, Typography, withStyles, Grid, Button } from '@material-ui/core';
import styles from '../listProduct/styles';
import { STATUS } from './../../../constants/index'
import TaskListManager from '../../../components/TaskList/TaskListManager';
import * as taskAction from './../../../actions/task'
import * as modalAction from './../../../actions/modal'
import AddIcon from '@material-ui/icons/Add';
import LoopIcon from '@material-ui/icons/Loop';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import TaskForm from '../../TaskForm/index';
class ManagerProducts extends Component {
    componentDidMount() {
        const { taskActionCreator } = this.props
        const { fetchListTask } = taskActionCreator
        fetchListTask()
    }
    addNew = () => {
        const { modalActionCreator, taskActionCreator } = this.props
        const { showModal, showTitle, showComponent } = modalActionCreator
        const { setTaskEditing } = taskActionCreator
        setTaskEditing(null)
        showModal()
        showTitle('Thêm mới công việc')
        showComponent(<TaskForm />)
    }
    loadData = () => {
        const { taskActionCreator } = this.props
        const { fetchListTask } = taskActionCreator
        fetchListTask()
    }
    handleEdit = task => {
        const { taskActionCreator, modalActionCreator } = this.props
        const { showModal, showTitle, showComponent } = modalActionCreator
        const { setTaskEditing } = taskActionCreator
        showModal()
        showTitle('Sửa công việc')
        showComponent(<TaskForm />)
        setTaskEditing(task)
    }
    handLDelete = (task) => {
        const { modalActionCreator, classes } = this.props
        const { showModal, showTitle, showComponent, hideModal } = modalActionCreator
        showModal()
        showTitle('Xóa công việc')
        showComponent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn chắc chắn muốn xóa{' '}
                    <span className={classes.modalConfirmTextBold}>{task.title}</span>?
              </div>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                        <Button variant="contained" onClick={hideModal}>
                            Hủy Bỏ
                  </Button>
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleDeleteTask(task)}
                        >
                            Đồng Ý
                  </Button>
                    </Box>
                </Box>
            </div>,
        );
    }
    handleDeleteTask = task => {
        const { taskActionCreator, modalActionCreator } = this.props
        const { hideModal } = modalActionCreator
        const { id } = task
        const { deleteTask } = taskActionCreator
        deleteTask(id)
        hideModal()
    }
    renderListManager = () => {
        const { taskList } = this.props
        let xhtml = null
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map(status => {
                        const filterTask = taskList.filter(
                            tasks => tasks.status === status.value
                        )
                        return <TaskListManager onDelete={this.handLDelete} onEdit={this.handleEdit} key={status.value} status={status} tasks={filterTask} />
                    })
                }
            </Grid>
        )
        return xhtml
    }
    render() {

        const { classes, taskList } = this.props
        var count = taskList.length
        console.log(count)
        return (
            <div className={classes.taskList} >
                <Box className={classes.boxH1}>
                    <Typography gutterBottom variant="h4" component="h1">Quản lí sản phẩm</Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.Button}
                    onClick={this.loadData}
                    style={{ margin: 20 }}

                >
                    <LoopIcon /> Load data
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.Button}
                    onClick={this.addNew}
                >
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderListManager()}
            </div>

        );
    }
}
const mapStateToProp = state => {
    return {
        taskList: state.task.taskList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        taskActionCreator: bindActionCreators(taskAction, dispatch),
        modalActionCreator: bindActionCreators(modalAction, dispatch)

    }
}
const withconnect = connect(mapStateToProp, mapDispatchToProps)
export default compose(
    withconnect,
    withStyles(styles)
)(ManagerProducts);