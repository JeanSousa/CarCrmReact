//ACTION É RESPONSAVEL POR EXECUTAR UMA AÇAO E PASSA PARA O REDUCER
//NO REDUCER MUDAMOS O ESTADO DO COMPONENTE E PASSAR PARA STORE

export const actionTypes = {
    //todos os tipos de acao que action vai ter
    CHANGE: 'CHANGE_LOADING'
}

//se digitar rxa cria essa funcao automaticamente
export const changeLoading = (payload) => ({
    //type é o tipo de açao que o reducer vai executar
    type: actionTypes.CHANGE,
    //payload são os dados que vao para o reducer
    payload
})


