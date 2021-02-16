import { actionTypes } from '../actions/auth.action'

const initialState = {
   credentials: {
       email: '',
       password: ''
   },

   success: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { 
            ...state, 
            credentials: { //evoluindo o estado de credentials com payload
                ...state.credentials,
                ...payload
            }
        }

    case actionTypes.SUCCESS:
        return { 
            ...state, 
            success: payload //aqui retornara true or false
        }    

    default:
        return state
    }
}

