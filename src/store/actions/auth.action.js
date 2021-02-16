import { Http } from '../../config/Http'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.action'

export const actionTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS'
}

export const change = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

//funcao responsavel por setar o token vindo da api no local storage
//esse token é o parametro da funcao
//dispatch para dispachar as funções
export const setUserToken = token => dispatch => {
    //essa funcao manda para o localstorage a chave access com o valor de token
    localStorage.setItem('access_token', token);
    //dispatch chama a funcao change para mudar o input
    dispatch( change({
        email:'',
        password:''
    }) )

    //para saber que o login foi efetuado com sucesso
    dispatch(success(true))
}

//funcao de autenticação
export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        msg: 'Autenticando usuário...'
    }))

    //esses parametros que passo esta na api do laravel em passport/requesting all scopes
    return Http.post('oauth/token', {
        grant_type: 'password',
        client_id: 2,
        client_secret: '5rc3HY3kziTYdsKPiYB1ofyfTDj22tyPBFpTkaG3',
        username: credentials.email,
        password: credentials.password
    })//cai na funcao then quando request é bem sucedido
    .then(res => {
        dispatch( changeLoading({open:false}) );

        if(typeof res !== 'undefined'){
            if(res.data.access_token) {
                dispatch( setUserToken(res.data.access_token) );
            }
        }

    })
    .catch(error => {
        dispatch( changeLoading({open:false}) );

        if(typeof error.response !== 'undefined'){
            if(error.response.status === 401 || error.response.status === 400){
                dispatch( changeNotify({
                    open: true,
                    class: 'error',
                    msg: 'E-mail ou Senha incorretos'
                }))
            } else {
                dispatch( changeNotify({
                    open: true,
                    class: 'error',
                    msg: 'Erro ao se conectar ao servidor'
                }))
            }
        }
    })
}