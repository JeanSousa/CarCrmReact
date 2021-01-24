//O COMANDO RFC CRIA A ESTRUTURA DO COMPONENTE AUTOMATICAMENTE

import React from 'react'
//componentes importados do material ui
import { Typography, Modal, CircularProgress} from '@material-ui/core'

import { changeLoading } from '../../store/actions/loading.action';


//imporysnfo hooks do react redux
import { useSelector, useDispatch } from 'react-redux'
import loadingReducer from '../../store/reducers/loading.reducer';

export default function Loading() {
    //use dispacth dispara actions
    const dispatch = useDispatch();
    //pega estado inicial open e msg
    //state é um objeto com todo estado da aplicação por isso escolho o estado somente do loadingReducer
    //use selector faz pegar os estados de quem estiver no rootReducer
    const loading = useSelector(state => state.loadingReducer);
    return (
        // open é o valor inicial do loadingReducer que é igual a true
       <Modal
         open={loading.open}
        //  quando chamo changeLoading estou chamando uma function do loading reducer
        // que altera o estado de acordo com as propriedades passadas como parametro
        // essa funcao é uma action que esta na pasta actions e é importada no loading.reducer
        // por ser action é disparado como dispatch
         onClose={() => dispatch( changeLoading({open:false}) )}
         //classes do bootstrap
         className="d-flex justify-content-center align-items-center h-100"
       >
        <div className="bg-white d-flex align-items-center rounded-lg p-3 outline-none">
            {/* circular progress importado do material ui */}
            <CircularProgress size={20} className="mr-3"/>
            {/* typograpy é para colocar a mensagem, variant é o tipo da font
            tem na doc do material UI */}
            <Typography variant="subtitle1">{loading.msg}</Typography>
        </div>
       </Modal>
    )
}
