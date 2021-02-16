import React from 'react'
//importando a funcao changeAlert que esta em actions para poder passar um payload
//para ser mesclado com o payload atual (no reducer) e mudar o status do componente
import { changeAlert } from '../../store/actions/alert.action';

import { Modal, Typography } from '@material-ui/core';

import {useSelector, useDispatch} from 'react-redux';

import { MdError, MdCheckCircle } from 'react-icons/md';

export default function Alert() {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alertReducer)

    //se tiver aberto vai dar um dispatch e chamar a funcao changeAlert do action para setar
    //open como false e ela ira passar o estado do componente para o reducer 
    //que vai juntar os payloads e setar como false
    if (alert.open) {
        setTimeout(() => dispatch( changeAlert({open:false})), alert.time);
    }
    return (
        // as propriedades da modal pego o nome na documentacao material ui
        <Modal
          open={alert.open}
          onClose={() => (dispatch( changeAlert({open:false}) ))}
          className="d-flex flex-column align-items-center justify-content-center h-100"
        >
            <div className="bg-white rounded-lg d-flex align-items-center p-4">
                {(alert.class) === 'success' && 
                   <MdCheckCircle style={{fontSize: '2.5rem'}} className="mr-3 text-success"/>
                }
                {(alert.class) === 'error' && 
                   <MdError style={{fontSize: '2.5rem'}} className="mr-3 text-danger"/>
                }
               <Typography className="font-weigth-bold" variant="subtitle2">
                   {alert.msg}
               </Typography>
            </div>
        </Modal>
    )
}
