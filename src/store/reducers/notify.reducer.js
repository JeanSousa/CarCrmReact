
import {actionTypes} from '../actions/notify.action';

const initialState = {
    //primeiro estado é o open para mostrar se o componente está aberto ou fechado
    open: false,
    //o parametro inicial para horizontal é center
    horizontal: 'center',
    vertical: 'top',
    class: 'success',
    //tempo aberto
    time: 3000,
    msg: ''
}

//criada com rxreducer                //PAYLOAD é o estado que vou passar para mesclar com o inicial
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:   //PAYLOAD é o estado que vou passar para mesclar com o estado inicial
        return { ...state, ...payload }

    default:
        return state
    }
}
