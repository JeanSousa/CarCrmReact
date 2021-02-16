import { actionTypes } from '../actions/alertr.action';

const initialState = {
    open: false,
    class: 'success',
    msg: '',
    time:3000
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}
