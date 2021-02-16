import { combineReducers } from 'redux'
import loadingReducer from './loading.reducer'
import notifyReducer  from './notify.reducer'
import alertReducer from './alert.reducer'
import alertrReducer from './alertr.reducer'
import authReducer from './auth.reducer'

//esse aqui é usado no useSelector na view Loading.js, atravez do combine reducers tenho
//acesso a todos os componentes desse array usando useSelector
const rootReducer = combineReducers({
    loadingReducer, notifyReducer, alertReducer, alertrReducer, authReducer
})

export default rootReducer;