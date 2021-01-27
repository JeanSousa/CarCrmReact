import { combineReducers } from 'redux'
import loadingReducer from './loading.reducer'
import notifyReducer  from './notify.reducer'
import alertReducer from './alert.reducer'

//esse aqui é usado no useSelector na view Loading.js
const rootReducer = combineReducers({
    loadingReducer, notifyReducer, alertReducer
})

export default rootReducer;