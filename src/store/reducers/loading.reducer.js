//NO REDUCER MUDAMOS O ESTADO DO COMPONENTE 
//OBS TODA VEZ QUE CRIAMOS UM  REDUCER O ADICIONAMOS NA rootReducer

//importando a const actionTypes desse path com os seus respectivos action types EX CHANGE
import { actionTypes } from '../actions/loading.action'

//se digitar rxr ele cria o que tem abaixo

//constante estado inicial do componente
const initialState = {
  open: false,
  msg: 'Carregando...'  //mensagem default
}

//quando dou export default posso usar qualquer nome ao importar
export default (state = initialState, { type, payload }) => {
    switch (type) {
         //estou usando a action type change por constantes 
         //importada do arquivo actions loading.action
    case actionTypes.CHANGE:
        //return pega o estado atual e mescla com payload
        return { ...state, ...payload }

    default:
        return state
    }
}

