import React from 'react'
import { change, login } from '../../store/actions/auth.action'
//vai redirecionar se login for bem sucedido
import { Redirect } from 'react-router-dom'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector} from 'react-redux'


export default function Auth() {
    const dispatch = useDispatch();
    const { credentials, success } = useSelector(state => state.authReducer)
    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
               <div className="row justify-content-center">
                   <div className="col-md-4">
                    <div className="form-group text-center">
                     <img src="/logo.png" alt="CAR CRM" height="48px"/>
                     {/* vai ser um h1 com variant (css) de h6 */}
                     <Typography className="mt-3"
                      variant="h6" component="h1" >
                          Plataforma para Revenda de Veiculos
                     </Typography>
                    </div>
                    <TextField
                      label="Email"
                      type="email"
                      autoComplete="email"
                      margin="normal"
                      value={credentials.email}
                    //ao digitar ele irá atualizar o valor de credentials email com onchange
                    //text é o parametro que a funcao irá receber
                     //a funcao change que esta em action/auth.action.js espera receber
                     //um objeto com o chave e valor ex:
                     //text.target.value é o valor da chave email
                      onChange={ text => dispatch( change({ email: text.target.value }) )}
                    />

                    <TextField
                      label="Senha"
                      type="password"
                      margin="normal"
                      value={credentials.password}
                      onChange={ text => dispatch( change({password: text.target.value }) )}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      className="mt-4 mb-4"
                      onClick={() => (dispatch( login(credentials) ))}
                    >
                        Entrar
                    </Button>

                    {/* se for bem sucedido o login, vou redirecionar */}
                    {(success) &&
                      <Redirect to="/vehicles" />
                    }
                   </div>
               </div>
            </div>
        </div>
    )
}
