//lazy serve para carregar componente somente quando estiver na rota do componente
import React, {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
//o export de auth esta default por isso importei sem parenteses
//ele pega automaticamente o index
import Auth from './view/auth'



const Routes = () => (
    <Router>
        {/* suspense serve para colocar um load, fallback é o que mostra enquanto carrega */}
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress/> </div>}>
           <Switch>
               {/* Route são as rotas */}
               <Route path="/vehicles" component={() => (<h1>Veiculos</h1>)}/>
               <Route path="/login" component={Auth}/>
               <Route path="/" component={Auth}/>
           </Switch>
        </Suspense>
    </Router>
)

export default Routes;