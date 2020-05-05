import * as taskTypes from './../constants/task'

export const fetchListTask = (params)=>{
    return{
        type:taskTypes.FETCH_LIST_TASK,
        payload:{
            params
        }
    }
}
export const fetchListTaskSuccess = data=>{
    return{
        type:taskTypes.FETCH_LIST_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const fetchListTaskFail = error =>{
    return{
        type:taskTypes.FETCH_LIST_TASK_FAIL,
        payload:{
            error
        }
    }
}

export const addTask = (name,images,price,quantity,status)=>{
    return{
        type:taskTypes.ADD_TASK,
        payload:{
            name,
            images,
            price,
            quantity,
            status
        }
    }
}
export const addTaskSuccess = data=>{
    return{
        type:taskTypes.ADD_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const addTaskFail = error=>{
    return{
        type:taskTypes.FETCH_LIST_TASK_FAIL,
        payload:{
            error
        }
    }
}

export const setTaskEditing = task=>{
    return{
        type:taskTypes.SET_TASK_EDIT,
        payload:{
            task
        }
    }
}
export const updateTask = (name,images,price,quantity,status)=>{
    return{
        type:taskTypes.UPDATE_TASK,
        payload:{
            name,
            images,
            price,
            quantity,
            status
        }
    }
}
export const updateTaskSuccess = data=>{
    return{
        type:taskTypes.UPDATE_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const updateTaskFail = error =>{
    return{
        type:taskTypes.UPDATE_TASK_FAIL,
        payload:{
            error
        }
    }
}
export const deleteTask = id=>{
    return{
        type:taskTypes.DELETE_TASK,
        payload:{
            id
        }
    }
}
export const deleteTaskSuccess = data=>{
    return{
        type:taskTypes.DELETE_TASK_SUCCESS,
        payload:{
            data
        }
    }
}
export const deleteTaskFail = error=>{
    return{
        type:taskTypes.DELETE_TASK_FAIL,
        payload:{
            error
        }
    }
}