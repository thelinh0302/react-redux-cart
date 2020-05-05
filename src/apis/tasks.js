import axiosService from './../commons/axiosService'
import {API_ANPOITS} from './../constants/index'
import qs from 'query-string'
const url = 'product'
export const getList=(params={})=>{
    let queryParams = ''
    if(Object.keys(params).length>0){
        queryParams = `?${qs.stringify(params)}`
    }
    return axiosService.get(`${API_ANPOITS}/${url}${queryParams}`)
}
export const addTask = (data)=>{
    return axiosService.post(`${API_ANPOITS}/${url}`,data)
}
export const updateTask = (data,taskID)=>{
    return axiosService.put(`${API_ANPOITS}/${url}/${taskID}`,data)
}
export const deleteTask = (taskID)=>{
    return axiosService.delete(`${API_ANPOITS}/${url}/${taskID}`)
}