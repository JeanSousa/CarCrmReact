import { combineReducers } from 'redux'
import loadingReducer from './loading.reducer'
import notifyReducer  from './notify.reducer'

//esse aqui é usado no useSelector na view Loading.js
const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer
})

export default rootReducer;