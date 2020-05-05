import * as taskTypes from './../constants/task'
import { toastSuccess } from '../commons/Alert'
var initialState = {
    taskList:[],
    taskEditing:null
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case taskTypes.FETCH_LIST_TASK:{
            return{
                ...state,
                taskList:[]
            }
        }
        case taskTypes.FETCH_LIST_TASK_SUCCESS:{
            const {data} = action.payload
            return{
                ...state,
                taskList:data
            }
        }
        case taskTypes.FETCH_LIST_TASK_FAIL:{
            const {error} = action.payload
            console.log(error)
            return{
                ...state,
                taskList:[]
            }
        }
        case taskTypes.ADD_TASK:{
            return{
                ...state
            }
        }
        case taskTypes.ADD_TASK_SUCCESS:{
            const {data} = action.payload
            toastSuccess("Thêm sản phẩm thành công")
            return{
                ...state,
                taskList:[data].concat(state.taskList)
            }
        }
        case taskTypes.ADD_TASK_FAIL:{
            return{
                ...state
            }
        }
        case taskTypes.SET_TASK_EDIT:{
            const {task} = action.payload
            return{
                ...state,
                taskEditing:task
            }
        }
        case taskTypes.UPDATE_TASK:{
            return{
                ...state,
            }
        }
        case taskTypes.UPDATE_TASK_SUCCESS:{
            const {data} = action.payload
            const {taskList} =state
            toastSuccess("Sửa sản phẩm thành công")
            const index = taskList.findIndex(task=>task.id===data.id)
            if(index!==-1){
                const newTask=[
                    ...taskList.slice(0,index),
                    data,
                    ...taskList.slice(index+1)
                ]
                return{
                    ...state,
                    taskList:newTask
                }
            }return{
                ...state
            }
        }
        // case taskTypes.FETCH_LIST_TASK_FAIL:
        //     const {error} = action.payload
        //     return{
        //         ...state,
        //         error
        //     }
        case taskTypes.DELETE_TASK:{
            return{
                ...state
            }
        }
        case taskTypes.DELETE_TASK_SUCCESS:{
            const {data:id} = action.payload
            toastSuccess("Xóa sản phẩm thành công")
            return{
                ...state,
                taskList:state.taskList.filter(task=>task.id!==id)
            }
        }
        case taskTypes.DELETE_TASK_FAIL:{
            return{
                ...state
            }
        }
        default:return state
    }
}
export default reducer
