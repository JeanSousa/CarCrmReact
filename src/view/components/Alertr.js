import React from 'react'
//dispatch serve para poder usar a funcao do alert action
//use selector serve para ter acesso ao estado dos componentes da aplicação
import { useDispatch, useSelector} from 'react-redux';
import { Modal, Typography } from '@material-ui/core';

import { MdCheckCircle, MdErrorOutline } from 'react-icons/md';

//funcao que uso para mudar status do componente
import { changeAlertr } from '../../store/actions/alertr.action';


export default function Alertr() {
    const dispatch = useDispatch();
    const alertr = useSelector(state => state.alertrReducer);

    if(alertr.open) {
        setTimeout(() => dispatch(changeAlertr({open:false})), alertr.time);
    }
    return (
        <Modal
          open={alertr.open}
          onClose={() => dispatch( changeAlertr({open: false})) }
          className="d-flex flex-column align-items-center justify-content-center h-100"
        >
        <div className="bg-white rounded-lg d-flex align-items-center p-4">
            {(alertr.class === 'error') && 
             <MdErrorOutline style={{fontSize: '2.5rem'}} className="mr-3 text-danger" />}
            {(alertr.class === 'success') &&
             <MdCheckCircle style={{fontSize: '2.5rem'}} className="mr-3 text-success"></MdCheckCircle>}
            <Typography >
                {alertr.msg}
            </Typography>
        </div>
        </Modal>
    )
}
