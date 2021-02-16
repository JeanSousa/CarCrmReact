//aqui crio a funcao de ação que usarei para mudar 
//a ação do componente
export const actionTypes = {
    CHANGE: 'CHANGE_ALERTR'
}


export const changeAlertr = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})
