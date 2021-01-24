import { combineReducers } from 'redux'
import loadingReducer from './loading.reducer'

const rootReducer = combineReducers({
    loadingReducer //esse aqui é usado no useSelector na view Loading.js
})

export default rootReducer;