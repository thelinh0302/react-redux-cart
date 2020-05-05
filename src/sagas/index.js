import {take,fork,put,call,delay,takeLatest,select} from 'redux-saga/effects'
import * as taskTypes from './../constants/task'
import { getList,addTask,updateTask ,deleteTask} from '../apis/tasks'
import {STATUS_CODE, STATUS} from './../constants/index'
import { fetchListTaskSuccess, fetchListTaskFail, addTaskSuccess, addTaskFail, updateTaskSuccess, updateTaskFail, deleteTaskSuccess, deleteTaskFail } from '../actions/task'
import {showLoading,hideLoading} from '../actions/ui'
function* watchFetchListTaskAcion(){
     while(true){
        const action = yield take(taskTypes.FETCH_LIST_TASK)
        yield put(showLoading())
        const {params} = action.payload
        const resp = yield call(getList,params);
        const {status,data}=resp
        if(status===STATUS_CODE.SUCCESS){
            yield put(fetchListTaskSuccess(data))
        }else{
            yield put(fetchListTaskFail(data))
        }
        yield delay(1000)
        yield put(hideLoading())
     }
 }
 function* addTaskSaga({payload}){
    const {name,images,price,quantity,status} = payload
    yield put(showLoading())
    const resp = yield call(addTask,{
        name,
        images,
        price,
        quantity,
        status
    })
    const{status:statuscode,data}=resp
    if(statuscode===STATUS_CODE.CREATED){
        yield put(addTaskSuccess(data))
    }else{
        yield put(addTaskFail(data))
    }
    yield delay(1000)
    yield put(hideLoading())
 }
 function* updateTaskSaga({payload}){
    const{name,images,price,quantity,status} = payload
    const taskEditing = yield select(state=>state.task.taskEditing)
    yield put(showLoading())
    const resp = yield call(updateTask,{name,images,price,quantity,status},taskEditing.id)
    const {status:statuscode,data}=resp
    if(statuscode===STATUS_CODE.SUCCESS){
        yield put(updateTaskSuccess(data))
    }else{
        yield put(updateTaskFail(data))
    }
    yield delay(1000)
    yield put(hideLoading())
 }
 function* deleteTaskSaga({payload}){
     const{id} = payload
     yield put(showLoading())
     const resp = yield call(deleteTask,id)
     const{status:statuscode,data}=resp
     if(statuscode===STATUS_CODE.SUCCESS){
        yield put(deleteTaskSuccess(id))
     }else{
         yield put(deleteTaskFail(data))
     }
     yield delay(1000)
     yield put(hideLoading())
 }
function* rootSaga(){
    yield fork(watchFetchListTaskAcion)
    yield takeLatest(taskTypes.ADD_TASK,addTaskSaga)
    yield takeLatest(taskTypes.UPDATE_TASK,updateTaskSaga)
    yield takeLatest(taskTypes.DELETE_TASK,deleteTaskSaga)
}
export default rootSaga