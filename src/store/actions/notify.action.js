//cria as actionTypes
export const actionTypes = {
    CHANGE: 'CHANGE_NOTIFY'
}

//funcao criada com rxa
export const changeNotify = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})
