import {combineReducers} from 'redux'
import ui from './ui'
import task from './task'
import modal from './modal'
import cart from './cart'
import message from './message'
import { reducer as formReducer } from 'redux-form';
const rootReducers  = combineReducers({
    ui,
    task,
    modal,
    cart,
    message,
    form:formReducer
})
export default rootReducers