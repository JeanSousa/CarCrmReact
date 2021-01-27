//1 cria as actionTypes
export const actionTypes = {
    CHANGE: 'CHANGE_NOTIFY'
}


export const changeNotify = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})
